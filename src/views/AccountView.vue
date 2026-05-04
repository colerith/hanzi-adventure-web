<template>
  <section class="panel account-panel">
    <h2>账号中心 · Account Center</h2>
    <p class="muted">静态网页版通过 GitHub 用户名登录（公开信息模式）。</p>

    <div v-if="user" class="account-card">
      <img v-if="user.avatarUrl" :src="user.avatarUrl" alt="avatar" class="avatar" />
      <div>
        <p class="account-name">{{ user.displayName }} ({{ user.username }})</p>
        <p class="muted">角色 Role: {{ user.role === 'admin' ? '管理员 Admin' : '普通用户 User' }}</p>
        <p class="muted" v-if="user.bio">{{ user.bio }}</p>
      </div>
    </div>

    <div v-else class="login-card">
      <label for="gh-username">GitHub Username</label>
      <input id="gh-username" v-model="username" placeholder="例如 octocat" />
      <button class="start-game-btn" @click="handleLogin" :disabled="loading">
        {{ loading ? '登录中... Signing in...' : 'GitHub 登录 Sign In' }}
      </button>
      <p class="error" v-if="errorMsg">{{ errorMsg }}</p>
    </div>

    <button v-if="user" class="ghost-danger" @click="handleLogout">退出登录 · Sign Out</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getCurrentUser, loginWithGithubUsername, logout, type UserProfile } from '../utils/auth'

const username = ref('')
const loading = ref(false)
const errorMsg = ref('')
const user = ref<UserProfile | null>(getCurrentUser())

async function handleLogin(): Promise<void> {
  errorMsg.value = ''
  loading.value = true
  try {
    user.value = await loginWithGithubUsername(username.value)
  } catch (error) {
    errorMsg.value = error instanceof Error ? error.message : '登录失败'
  } finally {
    loading.value = false
  }
}

function handleLogout(): void {
  logout()
  user.value = null
}
</script>
