<template>
  <section class="panel admin-panel">
    <h2>管理员模式 · Admin Mode</h2>

    <p v-if="!user" class="muted">请先登录账号。· Please sign in first.</p>
    <p v-else-if="!admin" class="error">当前账号不是管理员。· Current account is not admin.</p>

    <template v-else>
      <div class="admin-actions">
        <button class="ghost-danger" @click="resetScores">重置成绩记录 · Reset Scores</button>
      </div>

      <h3>同步数据到仓库 · Sync Snapshot to Repo</h3>
      <p class="muted">
        说明：静态网页无法安全保存密钥。这里使用一次性 GitHub Token 手动同步 JSON 快照到仓库文件。
      </p>

      <div class="admin-form">
        <input v-model="owner" placeholder="Repo owner" />
        <input v-model="repo" placeholder="Repo name" />
        <input v-model="branch" placeholder="Branch (default: main)" />
        <input v-model="path" placeholder="Path e.g. data/leaderboard.json" />
        <input v-model="token" type="password" placeholder="GitHub Token (repo scope)" />
      </div>

      <button class="start-game-btn" @click="syncToGitHub" :disabled="syncing">
        {{ syncing ? '同步中... Syncing...' : '同步排行榜快照 · Sync Leaderboard Snapshot' }}
      </button>
      <p class="muted" v-if="syncMsg">{{ syncMsg }}</p>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { clearScores, getLeaderboard, getScores } from '../utils/scores'
import { getCurrentUser, isAdmin } from '../utils/auth'

const user = ref(getCurrentUser())
const admin = computed(() => isAdmin(user.value))

const owner = ref('')
const repo = ref('')
const branch = ref('main')
const path = ref('data/leaderboard.json')
const token = ref('')
const syncing = ref(false)
const syncMsg = ref('')

function resetScores(): void {
  const ok = window.confirm('确定要清空所有成绩吗？This will remove all score records.')
  if (!ok) return
  clearScores()
  syncMsg.value = '已重置成绩记录 · Scores were reset.'
}

async function syncToGitHub(): Promise<void> {
  syncMsg.value = ''

  if (!owner.value || !repo.value || !path.value || !token.value) {
    syncMsg.value = '请完整填写仓库信息和 Token。'
    return
  }

  syncing.value = true
  try {
    const api = `https://api.github.com/repos/${owner.value}/${repo.value}/contents/${path.value}`

    let sha = ''
    const current = await fetch(`${api}?ref=${encodeURIComponent(branch.value)}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/vnd.github+json',
      },
    })

    if (current.ok) {
      const currentData = (await current.json()) as { sha?: string }
      sha = currentData.sha || ''
    }

    const payloadObj = {
      generatedAt: new Date().toISOString(),
      leaderboard: getLeaderboard(),
      records: getScores(),
    }

    const content = btoa(unescape(encodeURIComponent(JSON.stringify(payloadObj, null, 2))))

    const body = {
      message: `chore: sync leaderboard snapshot ${new Date().toISOString()}`,
      content,
      branch: branch.value || 'main',
      ...(sha ? { sha } : {}),
    }

    const res = await fetch(api, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const detail = await res.text()
      throw new Error(detail || `HTTP ${res.status}`)
    }

    syncMsg.value = '同步成功，排行榜快照已提交到仓库。· Sync successful.'
    token.value = ''
  } catch (error) {
    syncMsg.value = error instanceof Error ? `同步失败: ${error.message}` : '同步失败'
  } finally {
    syncing.value = false
  }
}
</script>
