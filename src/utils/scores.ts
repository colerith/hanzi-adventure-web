import { getCurrentUser, getOrCreateGuestId } from './auth'

export type ScoreRecord = {
  id: string
  game: string
  score: number
  duration: number
  createdAt: string
  userId: string
  userName: string
  userAvatar: string
}

export type LeaderboardRow = {
  userId: string
  userName: string
  userAvatar: string
  games: number
  totalScore: number
  avgScore: number
  bestScore: number
  bestDuration: number
  lastPlayedAt: string
}

const KEY = 'hanzi_adventure_scores_v2'
const SCORE_CHANGED_EVENT = 'scores-changed'

function emitScoresChanged(): void {
  window.dispatchEvent(new Event(SCORE_CHANGED_EVENT))
}

export function getScores(): ScoreRecord[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as Array<Partial<ScoreRecord>>
    if (!Array.isArray(parsed)) return []

    // Backward-compatibility with older local records before account fields were added.
    return parsed.map((item) => ({
      id: String(item.id || crypto.randomUUID()),
      game: String(item.game || 'Unknown'),
      score: Number(item.score || 0),
      duration: Number(item.duration || 0),
      createdAt: String(item.createdAt || new Date().toISOString()),
      userId: String(item.userId || `guest-${getOrCreateGuestId()}`),
      userName: String(item.userName || 'Guest User'),
      userAvatar: String(item.userAvatar || ''),
    }))
  } catch {
    return []
  }
}

export function getScoresByUser(userId: string): ScoreRecord[] {
  return getScores().filter((item) => item.userId === userId)
}

export function addScore(record: Omit<ScoreRecord, 'id' | 'createdAt' | 'userId' | 'userName' | 'userAvatar'>): void {
  const scores = getScores()
  const user = getCurrentUser()
  const userId = user?.id || `guest-${getOrCreateGuestId()}`
  const userName = user?.displayName || 'Guest User'
  const userAvatar = user?.avatarUrl || ''

  scores.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    userId,
    userName,
    userAvatar,
    ...record,
  })
  localStorage.setItem(KEY, JSON.stringify(scores.slice(0, 100)))
  emitScoresChanged()
}

export function clearScores(): void {
  localStorage.removeItem(KEY)
  emitScoresChanged()
}

export function getLeaderboard(): LeaderboardRow[] {
  const grouped = new Map<string, LeaderboardRow>()

  for (const item of getScores()) {
    const existing = grouped.get(item.userId)
    if (!existing) {
      grouped.set(item.userId, {
        userId: item.userId,
        userName: item.userName,
        userAvatar: item.userAvatar,
        games: 1,
        totalScore: item.score,
        avgScore: item.score,
        bestScore: item.score,
        bestDuration: item.duration,
        lastPlayedAt: item.createdAt,
      })
      continue
    }

    existing.games += 1
    existing.totalScore += item.score
    existing.avgScore = Number((existing.totalScore / existing.games).toFixed(1))
    existing.bestScore = Math.max(existing.bestScore, item.score)
    existing.bestDuration = Math.min(existing.bestDuration, item.duration)
    if (new Date(item.createdAt).getTime() > new Date(existing.lastPlayedAt).getTime()) {
      existing.lastPlayedAt = item.createdAt
    }
  }

  return [...grouped.values()].sort((a, b) => {
    if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore
    if (b.bestScore !== a.bestScore) return b.bestScore - a.bestScore
    if (a.bestDuration !== b.bestDuration) return a.bestDuration - b.bestDuration
    return new Date(b.lastPlayedAt).getTime() - new Date(a.lastPlayedAt).getTime()
  })
}

export function onScoresChanged(callback: () => void): () => void {
  const storageHandler = (event: StorageEvent) => {
    if (event.key === KEY) callback()
  }
  const scoreHandler = () => callback()

  window.addEventListener('storage', storageHandler)
  window.addEventListener(SCORE_CHANGED_EVENT, scoreHandler)

  return () => {
    window.removeEventListener('storage', storageHandler)
    window.removeEventListener(SCORE_CHANGED_EVENT, scoreHandler)
  }
}
