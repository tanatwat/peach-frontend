<template>
  <div id="services" class="section has-background-black has-text-white is-medium">
    <div class="container has-text-centered-mobile">
      <h2 class="section-title">{{ $t('pricing.title') }}</h2>
      <div class="content is-size-4-desktop is-size-5-tablet">
        <p>
          {{ $t('pricing.1') }}
          <br class="is-hidden-tablet">"<span class="has-text-primary">{{ $t('pricing.2') }}</span>"
        </p>
        <router-link class="button is-primary is-medium" to="/pricing">{{ $t('pricing.link') }}</router-link>
        <div class="pricing-grid has-text-centered">
          <div class="pricing-box">
            <h6 class="title">{{ $t('pricing.package.1.title') }}</h6>
            <div class="price">
              <span>{{ $t('pricing.from') }}</span>
              <strong>6,900&nbsp;{{ $t('pricing.currency') }}</strong>
            </div>
            <div class="description">
              <p>{{ $t('pricing.package.1.desc') }}</p>
            </div>
            <div class="quote-btn">
               <router-link to="/request-quote" class="button is-primary is-medium">{{ $t('pricing.get_quote') }}</router-link>
            </div>
          </div>
          <div class="pricing-box">
            <h6 class="title">{{ $t('pricing.package.2.title') }}</h6>
            <div class="price">
              <span>{{ $t('pricing.from') }}</span>
              <strong>12,000&nbsp;{{ $t('pricing.currency') }}</strong>
            </div>
            <div class="description">
              <p>{{ $t('pricing.package.2.desc') }}</p>
            </div>
            <div class="quote-btn">
               <router-link to="/request-quote" class="button is-primary is-medium">{{ $t('pricing.get_quote') }}</router-link>
            </div>
          </div>

          <div class="pricing-box">
            <h6 class="title">{{ $t('pricing.package.3.title') }}</h6>
            <div class="price">
              <span>{{ $t('pricing.from') }}</span>
              <strong>25,000&nbsp;{{ $t('pricing.currency') }}</strong>
            </div>
            <div class="description">
              <p>{{ $t('pricing.package.3.desc') }}</p>
            </div>
            <div class="quote-btn">
               <router-link to="/request-quote" class="button is-primary is-medium">{{ $t('pricing.get_quote') }}</router-link>
            </div>
          </div>
        </div>

         <h5 class="has-text-white">{{ $t('pricing.benefits.title') }}</h5>
         <p class="benefit-list">{{ $t('pricing.benefits.1') }}</p>
         <p class="benefit-list">{{ $t('pricing.benefits.2') }}</p>
         <p class="benefit-list">{{ $t('pricing.benefits.3') }}</p>
         <p class="benefit-list">{{ $t('pricing.benefits.4') }}</p>
         <p class="benefit-list">{{ $t('pricing.benefits.5') }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>