<template>
  <div class="game-box game-stage">
    <div class="game-head">
      <h3>汉字连连看 · Character Matching</h3>
      <p class="game-progress">已完成 {{ matchedCount }} / {{ target }} 对 · Matched {{ matchedCount }} / {{ target }}</p>
      <p class="game-timer">计时 Timer: {{ timerText }}</p>
    </div>

    <div class="cards">
      <button
        v-for="card in cards"
        :key="card.id"
        class="card"
        :class="{
          selected: selected.includes(card.id),
          matched: matched.has(card.id),
        }"
        @click="pick(card.id)"
        :disabled="matched.has(card.id)"
      >
        {{ card.text }}
      </button>
    </div>

    <p class="feedback-line">{{ feedback }}</p>
    <p class="score-line">得分 Score: {{ score }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { matchPairs } from '../data/questions'
import { addScore } from '../utils/scores'

type Card = {
  id: string
  text: string
  pairId: string
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

const source = shuffle(matchPairs).slice(0, 10)
const target = source.length
const cards = ref<Card[]>(
  shuffle(
    source.flatMap((item) => [
      { id: `c-${item.char}`, text: item.char, pairId: `m-${item.char}` },
      { id: `m-${item.char}`, text: item.meaning, pairId: `c-${item.char}` },
    ]),
  ),
)

const selected = ref<string[]>([])
const matched = ref(new Set<string>())
const matchedCount = ref(0)
const score = ref(0)
const feedback = ref('先选中文，再选对应英文 · Pick Chinese first, then the English meaning')
const elapsedSeconds = ref(0)
let timerId: ReturnType<typeof setInterval> | null = null

const timerText = computed(() => formatTimer(elapsedSeconds.value))

function formatTimer(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = (seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function startTimer(): void {
  if (timerId) return
  timerId = setInterval(() => {
    elapsedSeconds.value += 1
  }, 1000)
}

function stopTimer(): void {
  if (!timerId) return
  clearInterval(timerId)
  timerId = null
}

onMounted(startTimer)
onUnmounted(stopTimer)

function pick(id: string): void {
  if (matched.value.has(id)) return
  if (selected.value.includes(id)) return

  selected.value.push(id)
  if (selected.value.length < 2) return

  const [a, b] = selected.value
  const ca = cards.value.find((c) => c.id === a)
  const cb = cards.value.find((c) => c.id === b)
  if (!ca || !cb) {
    selected.value = []
    return
  }

  if (ca.pairId === cb.id && cb.pairId === ca.id) {
    matched.value.add(ca.id)
    matched.value.add(cb.id)
    matchedCount.value += 1
    score.value += 10
    feedback.value = '配对成功 · Match successful'
  } else {
    feedback.value = '配对失败，请再试一次 · Not a match, try again'
  }

  selected.value = []

  if (matchedCount.value === target) {
    stopTimer()
    feedback.value = `恭喜完成，最终得分 ${score.value} · Completed! Final score: ${score.value}`
    addScore({
      game: '汉字连连看 Character Matching',
      score: score.value,
      duration: elapsedSeconds.value,
    })
  }
}
</script>
