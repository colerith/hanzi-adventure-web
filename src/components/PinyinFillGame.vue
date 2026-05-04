<template>
  <div class="game-box game-stage">
    <div class="game-head">
      <h3>拼音题填空 · Pinyin Fill-in</h3>
      <p class="game-progress">第 {{ index + 1 }} / {{ total }} 题 · Question {{ index + 1 }} / {{ total }}</p>
      <p class="game-timer">计时 Timer: {{ timerText }}</p>
    </div>

    <p class="question question-large">{{ current.question }}</p>

    <div class="options options-large">
      <button
        v-for="(opt, optIndex) in displayOptions"
        :key="`${index}-${optIndex}-${opt}`"
        class="option-btn"
        @click="pick(opt)"
        :disabled="locked"
      >
        {{ opt }}
      </button>
    </div>

    <p class="feedback-line">{{ feedback }}</p>
    <p class="score-line">得分 Score: {{ score }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { pinyinQuestions } from '../data/questions'
import { addScore } from '../utils/scores'

function shuffleArray<T>(arr: T[]): T[] {
  const cloned = [...arr]
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = cloned[i]
    cloned[i] = cloned[j]!
    cloned[j] = temp!
  }
  return cloned
}

const list = shuffleArray(pinyinQuestions).slice(0, 10)
const total = list.length
const index = ref(0)
const score = ref(0)
const feedback = ref('请选择正确拼音 · Choose the correct pinyin')
const locked = ref(false)
const displayOptions = ref<string[]>([])
const elapsedSeconds = ref(0)
let timerId: ReturnType<typeof setInterval> | null = null

const current = computed(() => list[index.value]!)
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

watch(current, (question) => {
  displayOptions.value = shuffleArray(question.options)
}, { immediate: true })

onMounted(startTimer)
onUnmounted(stopTimer)

function pick(option: string): void {
  if (locked.value) return
  locked.value = true

  if (option === current.value.answer) {
    score.value += 10
    feedback.value = '回答正确 · Correct answer'
  } else {
    feedback.value = `回答错误，正确答案是 ${current.value.answer} · Incorrect, correct answer: ${current.value.answer}`
  }

  setTimeout(() => {
    if (index.value < total - 1) {
      index.value += 1
      feedback.value = '请选择正确拼音 · Choose the correct pinyin'
      locked.value = false
      return
    }

    stopTimer()
    feedback.value = `游戏结束，最终得分 ${score.value} · Game over, final score: ${score.value}`
    addScore({
      game: '拼音题填空 Pinyin Fill-in',
      score: score.value,
      duration: elapsedSeconds.value,
    })
    locked.value = true
  }, 800)
}
</script>
