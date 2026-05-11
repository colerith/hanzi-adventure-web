<template>
  <div class="game-box game-stage">
    <div class="game-head">
      <h3>对话选择 · Dialogue Choice</h3>
      <p class="game-progress">第 {{ index + 1 }} / {{ total }} 题 · Question {{ index + 1 }} / {{ total }}</p>
      <p class="game-timer">计时 Timer: {{ timerText }}</p>
    </div>
    <p class="question question-large question-bilingual">
      <span class="question-hanzi">{{ current.question }}</span>
      <span class="question-pinyin">{{ currentQuestionPinyin }}</span>
    </p>

    <div class="options options-large">
      <button
        v-for="(opt, optIndex) in displayOptions"
        :key="`${index}-${optIndex}-${opt}`"
        class="option-btn bilingual-option-btn"
        :class="optionStateClass(opt)"
        @click="pick(opt)"
        :disabled="locked"
      >
        <span class="option-hanzi">{{ opt }}</span>
        <span class="option-pinyin">{{ toTonePinyin(opt) }}</span>
      </button>
    </div>

    <div class="feedback-panel" :class="`feedback-${feedbackType}`">
      <p class="feedback-line">{{ feedback }}</p>
      <p v-if="showAnswerDetails" class="answer-line">
        你的答案 Your answer: <strong>{{ selectedOption }}</strong>
      </p>
      <p v-if="showAnswerDetails" class="answer-line">
        正确答案 Correct answer: <strong>{{ current.answer }}</strong>
      </p>
    </div>
    <p class="score-line">得分 Score: {{ score }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { dialogueQuestions } from '../data/questions'
import { addScore } from '../utils/scores'
import { toTonePinyin } from '../utils/pinyin'

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

const list = shuffleArray(dialogueQuestions).slice(0, 10)
const total = list.length
const index = ref(0)
const score = ref(0)
const feedback = ref('请选择最自然的回答 · Choose the most natural reply')
const feedbackType = ref<'neutral' | 'correct' | 'wrong' | 'done'>('neutral')
const locked = ref(false)
const selectedOption = ref('')
const displayOptions = ref<string[]>([])
const elapsedSeconds = ref(0)
const FEEDBACK_DELAY_MS = 2000
let timerId: ReturnType<typeof setInterval> | null = null

const current = computed(() => list[index.value]!)
const timerText = computed(() => formatTimer(elapsedSeconds.value))
const showAnswerDetails = computed(() => feedbackType.value === 'correct' || feedbackType.value === 'wrong')
const currentQuestionPinyin = computed(() => toTonePinyin(current.value.question))

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

function optionStateClass(option: string): string {
  if (!locked.value || !showAnswerDetails.value) return ''
  if (option === current.value.answer) return 'is-correct'
  if (option === selectedOption.value) return 'is-wrong'
  return ''
}

function pick(option: string): void {
  if (locked.value) return
  locked.value = true
  selectedOption.value = option

  if (option === current.value.answer) {
    score.value += 10
    feedbackType.value = 'correct'
    feedback.value = '回答正确！ · Correct!'
  } else {
    feedbackType.value = 'wrong'
    feedback.value = '回答错误 · Incorrect'
  }

  setTimeout(() => {
    if (index.value < total - 1) {
      index.value += 1
      feedback.value = '请选择最自然的回答 · Choose the most natural reply'
      feedbackType.value = 'neutral'
      selectedOption.value = ''
      locked.value = false
      return
    }

    stopTimer()
    feedbackType.value = 'done'
    feedback.value = `游戏结束，最终得分 ${score.value} · Game over, final score: ${score.value}`
    addScore({
      game: '对话选择 Dialogue Choice',
      score: score.value,
      duration: elapsedSeconds.value,
    })
    locked.value = true
  }, FEEDBACK_DELAY_MS)
}
</script>
