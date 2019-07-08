<template>
  <div class="page-content">
    <section class="section">
      <div class="container">
        <h1 class="section-title">{{ $t('pricing.title2') }}</h1>
        <p class="is-size-4-desktop is-size-5-tablet">{{ $t('pricing.info') }}</p>
        <div class="pricing-grid has-text-centered content is-size-4-desktop is-size-5-tablet">
          <div class="pricing-box has-border">
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
          <div class="pricing-box has-border">
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

          <div class="pricing-box has-border">
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
        <div class="content is-size-4-desktop is-size-5-tablet columns" style="margin-top: 3rem">
          <div class="column">
            <h5>{{ $t('pricing.benefits.title') }}</h5>
            <p class="benefit-list">{{ $t('pricing.benefits.1') }}</p>
            <p class="benefit-list">{{ $t('pricing.benefits.2') }}</p>
            <p class="benefit-list">{{ $t('pricing.benefits.3') }}</p>
            <p class="benefit-list">{{ $t('pricing.benefits.4') }}</p>
            <p class="benefit-list">{{ $t('pricing.benefits.5') }}</p>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>

    <section class="section has-background-black-ter has-text-white">
      <div class="container">
        <h1 class="section-title">{{ $t('hosting.title') }}</h1>

        <div class="hosting-wrapper">
          <div class="content is-size-4-desktop is-size-5-tablet">
            <h3 class="has-text-centered-mobile has-text-primary">{{ $t('hosting.1.title') }}</h3>
          </div>
          <p
            class="content is-size-4-desktop is-size-5-tablet"
          >{{ $t('hosting.1.desc') }}</p>
          <p
            class="content is-size-3-desktop is-size-4-touch has-text-primary"
          >3,900 {{ $t('hosting.yearly') }}</p>
        </div>
        <basic></basic>
        <ecom></ecom>
      </div>
    </section>
  </div>
</template>

<script>
import Basic from "./_basic.vue";
import Ecom from "./_ecom.vue";
export default {
  components: {
    Basic,
    Ecom
  },
  created() {
    this.$root.page = "page";
    this.$parent.menu = false;
  }
};
</script>