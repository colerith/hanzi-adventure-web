export type UserRole = 'user' | 'admin'

export type UserProfile = {
  id: string
  username: string
  displayName: string
  avatarUrl: string
  bio: string
  role: UserRole
  joinedAt: string
}

const AUTH_KEY = 'hanzi_adventure_user_v1'
const GUEST_ID_KEY = 'hanzi_adventure_guest_id_v1'
const AUTH_CHANGED_EVENT = 'auth-changed'

// TODO: Replace with real admin GitHub usernames for production.
const ADMIN_USERNAMES = ['colerith']

export function getCurrentUser(): UserProfile | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as UserProfile
    if (!parsed || !parsed.id || !parsed.username) return null
    return parsed
  } catch {
    return null
  }
}

export function getOrCreateGuestId(): string {
  const existing = localStorage.getItem(GUEST_ID_KEY)
  if (existing) return existing
  const id = crypto.randomUUID()
  localStorage.setItem(GUEST_ID_KEY, id)
  return id
}

export async function loginWithGithubUsername(username: string): Promise<UserProfile> {
  const trimmed = username.trim()
  if (!trimmed) {
    throw new Error('请输入 GitHub 用户名')
  }

  const res = await fetch(`https://api.github.com/users/${encodeURIComponent(trimmed)}`)
  if (!res.ok) {
    throw new Error('GitHub 用户不存在或网络错误')
  }

  const data = (await res.json()) as {
    id: number
    login: string
    name?: string | null
    avatar_url?: string
    bio?: string | null
  }

  const role: UserRole = ADMIN_USERNAMES.includes(data.login.toLowerCase()) ? 'admin' : 'user'

  const user: UserProfile = {
    id: `gh-${data.id}`,
    username: data.login,
    displayName: data.name?.trim() || data.login,
    avatarUrl: data.avatar_url || '',
    bio: data.bio?.trim() || '',
    role,
    joinedAt: new Date().toISOString(),
  }

  localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT))
  return user
}

export function logout(): void {
  localStorage.removeItem(AUTH_KEY)
  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT))
}

export function isAdmin(user: UserProfile | null): boolean {
  return !!user && user.role === 'admin'
}

export function onAuthChanged(callback: () => void): () => void {
  const storageHandler = (event: StorageEvent) => {
    if (event.key === AUTH_KEY) callback()
  }
  const authHandler = () => callback()

  window.addEventListener('storage', storageHandler)
  window.addEventListener(AUTH_CHANGED_EVENT, authHandler)

  return () => {
    window.removeEventListener('storage', storageHandler)
    window.removeEventListener(AUTH_CHANGED_EVENT, authHandler)
  }
}
