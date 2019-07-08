<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-wrapper container">
        <div class="hero-text-wrapper">
          <h2>{{ $t('hero.title') }}</h2>
          <vue-typer
            :text="['Frontend Developer', 'Web Designer']"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="50"
            :type-delay="70"
            :pre-erase-delay="1500"
            :erase-delay="100"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="smooth"
          ></vue-typer>
          <h2>{{ $t('hero.subtitle') }}</h2>
          <a href="#work" class="button is-primary is-large" style="margin-top:2rem">{{ $t('hero.action') }}</a>
        </div>
        <a class="scroll-btn" href="#about"></a>
      </div>
    </section>
    <section class="section is-medium has-background-white-ter" id="about">
      <div class="container has-text-centered-mobile">
        <h2 class="section-title">{{ $t('intro.title1') }}</h2>
        <div class="content is-size-4-desktop is-size-5-tablet ">
          <p>
            {{ $t('intro.1') }}
            <br>{{ $t('intro.2') }}
            <br>{{ $t('intro.3') }}
          </p>
        </div>
        <h2 class="section-title">{{ $t('intro.title2') }}</h2>
        <div class="content is-size-4-desktop is-size-5-tablet ">
          <p>
            {{ $t('intro.4') }}
            <br>{{ $t('intro.5') }}
          </p>
          <h5>{{ $t('intro.title3') }}</h5>
        </div>
        <div class="skills-wrapper">
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/webflow-mark-vector-blue-1.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Webflow</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/vue-js-1.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Vue Js</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/laravel.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Laravel</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/nodejs-icon.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Node Js</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/javascript.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">JavaScript</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/adobe-xd.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Adobe Xd</div>
          </div>
        </div>
      </div>
    </section>
  <work>
  </work>
    <pricing>
    </pricing>
    <section class="section is-medium">
      <div class="container has-text-centered-mobile">
        <div class="columns">
          <div class="column is-align-vertical">
            <img class="responsive-img" src="../assets/images/responsive.svg" alt>
          </div>
          <div class="column is-half">
            <h2 class="section-title">{{ $t('responsive.title') }}</h2>
            <div class="content is-size-4-desktop is-size-5-tablet">
              <p>{{ $t('responsive.desc') }}</p>
            </div>
            <div class="is-size-2 has-text-primary responsive-icon-wrapper">
              <i class="fas fa-desktop"></i>
              <i class="fas fa-tablet-alt"></i>
              <i class="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <work-process></work-process>
  </div>
</template>

<script>
import WorkProcess from "./_partials/Process.vue";
import Work from "./_partials/Work.vue";
import Pricing from "./_partials/Pricing.vue";
import { VueTyper } from "vue-typer";
export default {
  components: { WorkProcess, Pricing, Work, VueTyper },
  data() {
    return {};
  },
  created() {
    this.$root.page = "home";
  }
};
</script>