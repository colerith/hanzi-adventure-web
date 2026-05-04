<template>
  <section class="panel games-panel">
    <h2>游戏中心 · Game Center</h2>
    <p class="games-subtitle">选择一个课堂练习游戏开始吧 · Pick a classroom game to begin.</p>

    <div class="game-tabs-grid">
      <button :class="['game-tab-card', { active: selectedGame === 'match' }]" @click="selectGame('match')">
        <strong>汉字连连看</strong>
        <span>Character Matching</span>
      </button>
      <button :class="['game-tab-card', { active: selectedGame === 'pinyin' }]" @click="selectGame('pinyin')">
        <strong>拼音题填空</strong>
        <span>Pinyin Fill-in</span>
      </button>
      <button :class="['game-tab-card', { active: selectedGame === 'dialogue' }]" @click="selectGame('dialogue')">
        <strong>对话选择</strong>
        <span>Dialogue Choice</span>
      </button>
      <button :class="['game-tab-card', { active: selectedGame === 'grammar' }]" @click="selectGame('grammar')">
        <strong>语法选择</strong>
        <span>Grammar Quiz</span>
      </button>
    </div>

    <div class="game-launcher">
      <p class="launcher-title">已选游戏 · Selected Game: {{ gameTitle[selectedGame] }}</p>
      <p class="launcher-desc">{{ gameDesc[selectedGame] }}</p>
      <button class="start-game-btn" @click="startGame">开始游戏 · Start Game</button>
    </div>

    <CharacterMatchGame v-if="started && selectedGame === 'match'" :key="`match-${runKey}`" />
    <PinyinFillGame v-else-if="started && selectedGame === 'pinyin'" :key="`pinyin-${runKey}`" />
    <DialogueChoiceGame v-else-if="started && selectedGame === 'dialogue'" :key="`dialogue-${runKey}`" />
    <GrammarQuizGame v-else-if="started" :key="`grammar-${runKey}`" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GrammarQuizGame from '../components/GrammarQuizGame.vue'
import DialogueChoiceGame from '../components/DialogueChoiceGame.vue'
import CharacterMatchGame from '../components/CharacterMatchGame.vue'
import PinyinFillGame from '../components/PinyinFillGame.vue'

type GameKey = 'grammar' | 'dialogue' | 'match' | 'pinyin'

const selectedGame = ref<GameKey>('match')
const started = ref(false)
const runKey = ref(0)

const gameTitle: Record<GameKey, string> = {
  match: '汉字连连看 · Character Matching',
  pinyin: '拼音题填空 · Pinyin Fill-in',
  dialogue: '对话选择 · Dialogue Choice',
  grammar: '语法选择 · Grammar Quiz',
}

const gameDesc: Record<GameKey, string> = {
  match: '连接汉字与英文释义，强化词汇记忆。· Match Chinese words with English meanings.',
  pinyin: '为词语选择正确拼音，提升发音基础。· Choose the correct pinyin for each word.',
  dialogue: '在情景中选择自然回答，训练口语反应。· Pick natural replies in conversation scenes.',
  grammar: '选择正确语法项，巩固句式结构。· Select correct grammar options to strengthen patterns.',
}

function selectGame(game: GameKey): void {
  selectedGame.value = game
  started.value = false
}

function startGame(): void {
  runKey.value += 1
  started.value = true
}
</script>
