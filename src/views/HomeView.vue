<template>
  <section class="home-shell">
    <div class="hero card">
      <p class="hero-kicker">汉语教程综合复习游戏</p>
      <h2>Chinese Course Review Games</h2>
      <p class="hero-desc">
        通过有趣的游戏巩固汉语知识，提升汉字、拼音和对话能力。<br />
        Reinforce Chinese knowledge through fun games, improving character, pinyin and conversation skills.
      </p>
      <RouterLink to="/games" class="primary-btn">开始学习 · Start Learning</RouterLink>
    </div>

    <div class="section-title">
      <p>游戏特点</p>
      <h3>Game Features</h3>
    </div>

    <div class="feature-grid">
      <article class="card feature-card">
        <div class="feature-icon"><i class="fa-solid fa-book-open-reader" aria-hidden="true"></i></div>
        <h4>教材同步</h4>
        <p class="feature-en">Aligned with Textbook</p>
        <p>
          完全基于《汉语教程》内容，针对性复习重点知识。<br />
          Based on "Chinese Course" content with focused review goals.
        </p>
      </article>

      <article class="card feature-card">
        <div class="feature-icon"><i class="fa-solid fa-gamepad" aria-hidden="true"></i></div>
        <h4>多种游戏</h4>
        <p class="feature-en">Multiple Games</p>
        <p>
          汉字连连看、拼音填空等多种游戏模式，寓教于乐。<br />
          Includes character matching, pinyin fill-in and more interactive modes.
        </p>
      </article>

      <article class="card feature-card">
        <div class="feature-icon"><i class="fa-solid fa-chart-line" aria-hidden="true"></i></div>
        <h4>成绩追踪</h4>
        <p class="feature-en">Progress Tracking</p>
        <p>
          自动记录学习成绩和进度，帮助你了解学习效果。<br />
          Auto-save scores and progress to evaluate learning outcomes.
        </p>
      </article>
    </div>

    <div class="section-title section-gap">
      <p>游戏类型预览</p>
      <h3>Game Types Preview</h3>
    </div>

    <div class="type-grid">
      <article class="card type-card">
        <h4>汉字连连看</h4>
        <p class="feature-en">Character Matching</p>
        <p>
          连接汉字与对应英文释义，巩固汉字认知。<br />
          Match Chinese characters with English meanings.
        </p>
        <RouterLink to="/games" class="ghost-btn">马上开始 · Start Now</RouterLink>
      </article>

      <article class="card type-card">
        <h4>拼音题填空</h4>
        <p class="feature-en">Pinyin Fill-in</p>
        <p>
          为缺失拼音的词语选择正确选项，强化拼音掌握。<br />
          Choose the right pinyin to complete each phrase.
        </p>
        <RouterLink to="/games" class="ghost-btn">马上开始 · Start Now</RouterLink>
      </article>

      <article class="card type-card">
        <h4>对话选择</h4>
        <p class="feature-en">Dialogue Choice</p>
        <p>
          根据情景选择最自然的回答，提升口语反应。<br />
          Pick the most natural response in real conversation scenes.
        </p>
        <RouterLink to="/games" class="ghost-btn">马上开始 · Start Now</RouterLink>
      </article>

      <article class="card type-card">
        <h4>语法选择</h4>
        <p class="feature-en">Grammar Quiz</p>
        <p>
          通过选择正确语法选项，巩固句式与语法点。<br />
          Strengthen sentence patterns by selecting correct grammar.
        </p>
        <RouterLink to="/games" class="ghost-btn">马上开始 · Start Now</RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-shell {
  display: grid;
  gap: 20px;
  color: var(--text-strong);
}

.card {
  background: linear-gradient(180deg, color-mix(in srgb, var(--bg-elevated) 94%, #ffffff 6%) 0%, color-mix(in srgb, var(--bg-elevated) 84%, #dbeafe 16%) 100%);
  border: 1px solid var(--line-soft);
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
}

.hero {
  padding: 34px 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: riseIn 0.7s ease-out both;
}

.hero::before {
  content: '';
  position: absolute;
  inset: -40% auto auto -18%;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, rgba(59, 130, 246, 0) 70%);
  pointer-events: none;
}

.hero-kicker {
  margin: 0;
  color: var(--text-muted);
  letter-spacing: 0.02em;
  font-size: 14px;
}

.hero h2 {
  margin: 10px 0 12px;
  font-size: clamp(20px, 3vw, 30px);
  color: var(--text-strong);
}

.hero-desc {
  margin: 0 auto;
  max-width: 760px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.primary-btn {
  display: inline-block;
  margin-top: 18px;
  padding: 11px 18px;
  border-radius: 10px;
  background: linear-gradient(135deg, #60a5fa 0%, var(--brand) 100%);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(59, 130, 246, 0.35);
}

.section-title {
  text-align: center;
  border-bottom: 2px solid var(--border-accent);
  padding-bottom: 8px;
  animation: fadeIn 0.7s ease-out both;
}

.section-title p {
  margin: 0;
  color: var(--text-muted);
  font-size: 14px;
}

.section-title h3 {
  margin: 5px 0 0;
  font-size: 17px;
  color: var(--text-accent);
}

.section-gap {
  margin-top: 6px;
}

.feature-grid,
.type-grid {
  display: grid;
  gap: 14px;
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.type-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.feature-card,
.type-card {
  padding: 22px 20px;
  animation: riseIn 0.8s ease-out both;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}

.feature-card:hover,
.type-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-accent);
  box-shadow: 0 14px 28px rgba(29, 78, 216, 0.12);
}

.feature-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: var(--brand-soft);
  color: var(--text-accent);
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-icon i {
  font-size: 17px;
}

.feature-card h4,
.type-card h4 {
  margin: 3px 0;
  font-size: 20px;
}

.feature-en {
  margin: 0 0 10px;
  color: var(--text-accent);
  font-weight: 600;
}

.feature-card p:not(.feature-en),
.type-card p:not(.feature-en) {
  color: var(--text-muted);
  line-height: 1.66;
}

.ghost-btn {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: var(--text-accent);
  background: var(--surface-accent);
  border-radius: 10px;
  padding: 8px 14px;
  font-weight: 600;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.ghost-btn:hover {
  background: var(--surface-accent-hover);
  color: var(--text-accent-strong);
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .type-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    text-align: left;
  }

  .hero-desc {
    max-width: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero,
  .section-title,
  .feature-card,
  .type-card {
    animation: none;
  }

  .feature-card,
  .type-card,
  .primary-btn,
  .ghost-btn {
    transition: none;
  }
}
</style>
