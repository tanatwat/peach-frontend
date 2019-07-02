<template>
  <section id="process" class="section is-medium has-background-white-ter">
    <div class="container w-container" data-aos="fade-right">
      <h2 class="section-title centered">{{ $t('process.title') }}</h2>
      <div class="workflow-grid">
        <div class="workflow-wrapper">
          <div class="workflow-head">
            <span class="workflow-number">1</span>
            <p class="workflow-title">{{ $t('process.steps.1.title') }}</p>
          </div>
          <div class="workflow-text">
            <p>{{ $t('process.steps.1.desc') }}</p>
          </div>
        </div>

        <div class="workflow-wrapper">
          <div class="workflow-head">
            <span class="workflow-number">2</span>
            <p class="workflow-title">{{ $t('process.steps.2.title') }}</p>
          </div>
          <div class="workflow-text content">
            <p>{{ $t('process.steps.2.desc') }}</p>
            <p class="has-text-info">{{ $t('process.steps.2.info') }}</p>
          </div>
        </div>

        <div class="workflow-wrapper">
          <div class="workflow-head">
            <span class="workflow-number">3</span>
            <p class="workflow-title">{{ $t('process.steps.3.title') }}</p>
          </div>
          <div class="workflow-text">
            <p>{{ $t('process.steps.3.desc') }}</p>
          </div>
        </div>
        <div class="workflow-wrapper">
          <div class="workflow-head">
            <span class="workflow-number">4</span>
            <p class="workflow-title">{{ $t('process.steps.4.title') }}</p>
          </div>
          <div class="workflow-text content">
            <p>{{ $t('process.steps.4.desc') }}</p>
            <p class="has-text-info">{{ $t('process.steps.4.info') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>