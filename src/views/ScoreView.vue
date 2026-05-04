<template>
  <section class="panel">
    <h2>动态排行榜 · Dynamic Leaderboard</h2>
    <p v-if="leaders.length === 0">还没有成绩，先去完成一局游戏吧。· No records yet, finish a game first.</p>

    <table v-else class="score-table">
      <thead>
        <tr>
          <th>排名 Rank</th>
          <th>用户 User</th>
          <th>总分 Total</th>
          <th>场次 Games</th>
          <th>均分 Avg</th>
          <th>最高 Best</th>
          <th>最快(秒) Fastest(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in leaders" :key="item.userId">
          <td>#{{ idx + 1 }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.totalScore }}</td>
          <td>{{ item.games }}</td>
          <td>{{ item.avgScore }}</td>
          <td>{{ item.bestScore }}</td>
          <td>{{ item.bestDuration }}</td>
        </tr>
      </tbody>
    </table>

    <h3 class="section-title-small">最近成绩 · Recent Records</h3>
    <table v-if="recentRecords.length > 0" class="score-table">
      <thead>
        <tr>
          <th>用户 User</th>
          <th>游戏 Game</th>
          <th>分数 Score</th>
          <th>用时(秒) Duration(s)</th>
          <th>时间 Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in recentRecords" :key="item.id">
          <td>{{ item.userName }}</td>
          <td>{{ item.game }}</td>
          <td>{{ item.score }}</td>
          <td>{{ item.duration }}</td>
          <td>{{ formatTime(item.createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getLeaderboard, getScores, onScoresChanged } from '../utils/scores'

const version = ref(0)

const leaders = computed(() => {
  version.value
  return getLeaderboard()
})

const recentRecords = computed(() => {
  version.value
  return getScores().slice(0, 20)
})

let offScores: (() => void) | null = null

onMounted(() => {
  offScores = onScoresChanged(() => {
    version.value += 1
  })
})

onUnmounted(() => {
  offScores?.()
})

function formatTime(iso: string): string {
  return new Date(iso).toLocaleString('zh-CN')
}
</script>
