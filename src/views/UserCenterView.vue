<template>
  <section class="panel user-panel">
    <h2>用户中心 · User Center</h2>

    <p v-if="!user" class="muted">
      你还没有登录，请先到账号页登录。· Please sign in from Account page first.
    </p>

    <template v-else>
      <div class="account-card">
        <img v-if="user.avatarUrl" :src="user.avatarUrl" alt="avatar" class="avatar" />
        <div>
          <p class="account-name">{{ user.displayName }}</p>
          <p class="muted">@{{ user.username }} · {{ user.role }}</p>
          <p class="muted">加入时间 Joined: {{ formatTime(user.joinedAt) }}</p>
        </div>
      </div>

      <h3>我的历史记录 · My Records</h3>
      <p class="muted" v-if="records.length === 0">暂无记录，先开始一局游戏吧。· No records yet.</p>

      <table v-else class="score-table">
        <thead>
          <tr>
            <th>游戏 Game</th>
            <th>分数 Score</th>
            <th>用时(秒) Duration(s)</th>
            <th>时间 Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in records" :key="item.id">
            <td>{{ item.game }}</td>
            <td>{{ item.score }}</td>
            <td>{{ item.duration }}</td>
            <td>{{ formatTime(item.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getCurrentUser, onAuthChanged, type UserProfile } from '../utils/auth'
import { getScoresByUser, onScoresChanged } from '../utils/scores'

const version = ref(0)
const user = ref<UserProfile | null>(getCurrentUser())

const records = computed(() => {
  version.value
  if (!user.value) return []
  return getScoresByUser(user.value.id)
})

function formatTime(iso: string): string {
  return new Date(iso).toLocaleString('zh-CN')
}

let offAuth: (() => void) | null = null
let offScores: (() => void) | null = null

onMounted(() => {
  offAuth = onAuthChanged(() => {
    user.value = getCurrentUser()
    version.value += 1
  })

  offScores = onScoresChanged(() => {
    version.value += 1
  })
})

onUnmounted(() => {
  offAuth?.()
  offScores?.()
})
</script>
