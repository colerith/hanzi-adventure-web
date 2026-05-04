<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand-block">
        <p class="brand-cn">汉语学习小游戏</p>
        <p class="brand-en">Chinese Learning Games</p>
      </div>

      <div class="topbar-right">
        <nav class="topnav" aria-label="Main navigation">
          <RouterLink to="/" class="nav-link">首页 <span>Home</span></RouterLink>
          <RouterLink to="/games" class="nav-link">游戏 <span>Games</span></RouterLink>
          <RouterLink to="/scores" class="nav-link">排行 <span>Leaderboard</span></RouterLink>
          <RouterLink to="/account" class="nav-link">账号 <span>Account</span></RouterLink>
          <RouterLink to="/user-center" class="nav-link">我的 <span>My Center</span></RouterLink>
          <RouterLink to="/admin" class="nav-link">管理 <span>Admin</span></RouterLink>
        </nav>
      </div>
    </header>

    <div class="theme-fab" aria-label="Theme controls">
      <button
        class="theme-icon-btn"
        type="button"
        :title="currentTheme === 'dark' ? '切换到白天' : '切换到夜间'"
        :aria-label="currentTheme === 'dark' ? '切换到白天' : '切换到夜间'"
        @click="toggleTheme"
      >
        <i :class="currentTheme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"></i>
      </button>

      <button
        class="theme-icon-btn"
        type="button"
        :title="themeMode === 'auto' ? '当前自动模式，点击切换为手动' : '当前手动模式，点击切换为自动'"
        :aria-label="themeMode === 'auto' ? '当前自动模式，点击切换为手动' : '当前手动模式，点击切换为自动'"
        @click="toggleMode"
      >
        <i :class="themeMode === 'auto' ? 'fa-solid fa-wand-magic-sparkles' : 'fa-solid fa-hand-pointer'"></i>
      </button>
    </div>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

type ThemeMode = 'auto' | 'manual'
type ThemeName = 'light' | 'dark'

const THEME_STATE_KEY = 'hanyu-adventure-theme-state'

const themeMode = ref<ThemeMode>('auto')
const manualTheme = ref<ThemeName>('light')
const currentTheme = ref<ThemeName>('light')
const systemPrefersDark = ref(false)

let mediaQuery: MediaQueryList | null = null

function getAutoTheme(): ThemeName {
  return systemPrefersDark.value ? 'dark' : 'light'
}

function applyTheme(theme: ThemeName): void {
  currentTheme.value = theme
  document.documentElement.setAttribute('data-theme', theme)
}

function syncTheme(): void {
  applyTheme(themeMode.value === 'auto' ? getAutoTheme() : manualTheme.value)
}

function saveThemeState(): void {
  localStorage.setItem(
    THEME_STATE_KEY,
    JSON.stringify({
      mode: themeMode.value,
      manualTheme: manualTheme.value,
    }),
  )
}

function loadThemeState(): void {
  const raw = localStorage.getItem(THEME_STATE_KEY)
  if (!raw) return

  try {
    const parsed = JSON.parse(raw) as Partial<{ mode: ThemeMode; manualTheme: ThemeName }>
    if (parsed.mode === 'auto' || parsed.mode === 'manual') {
      themeMode.value = parsed.mode
    }
    if (parsed.manualTheme === 'light' || parsed.manualTheme === 'dark') {
      manualTheme.value = parsed.manualTheme
    }
  } catch {
    localStorage.removeItem(THEME_STATE_KEY)
  }
}

function changeMode(): void {
  saveThemeState()
  syncTheme()
}

function toggleMode(): void {
  if (themeMode.value === 'auto') {
    themeMode.value = 'manual'
    manualTheme.value = currentTheme.value
  } else {
    themeMode.value = 'auto'
  }

  changeMode()
}

function toggleTheme(): void {
  if (themeMode.value === 'auto') {
    themeMode.value = 'manual'
    manualTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  } else {
    manualTheme.value = manualTheme.value === 'dark' ? 'light' : 'dark'
  }

  saveThemeState()
  syncTheme()
}

function onSystemThemeChanged(event: MediaQueryListEvent): void {
  systemPrefersDark.value = event.matches
  if (themeMode.value === 'auto') {
    syncTheme()
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  systemPrefersDark.value = mediaQuery.matches
  loadThemeState()
  syncTheme()

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', onSystemThemeChanged)
  } else {
    mediaQuery.addListener(onSystemThemeChanged)
  }
})

onUnmounted(() => {
  if (!mediaQuery) return
  if (typeof mediaQuery.removeEventListener === 'function') {
    mediaQuery.removeEventListener('change', onSystemThemeChanged)
  } else {
    mediaQuery.removeListener(onSystemThemeChanged)
  }
})
</script>
