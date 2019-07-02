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
    <section id="work" class="section is-medium">
      <div class="container has-text-centered-mobile" data-aos="fade-right">
        <h2 class="section-title">{{ $t('work.title') }}</h2>
        <div class="columns is-multiline">
          <div class="column is-6 has-text-centered">
            <img src="../assets/images/Smile-Delight-Demo.png" class="showcase-img">
          </div>
          <div class="column is-6 is-align-vertical">
            <div class="content">
              <h2 class="has-text-primary">Smile Delight Clinic</h2>
              <p>
                A website for dental clinic
                <br>with a minimalist design
              </p>
            </div>
            <a
              href="https://smiledelightclinic.com"
              target="_blank"
              class="button is-primary is-medium"
            >Visit site</a>
          </div>
          <div class="column">
            <a class="demo-link" href="https://caffe-coffee.webflow.io">
              <img src="../assets/images/Caffe.jpg" alt>
            </a>
          </div>
          <div class="column">
            <a class="demo-link" href="https://jergun.webflow.io">
              <img src="../assets/images/JerGun.jpg" alt>
            </a>
          </div>
          <div class="column">
            <a class="demo-link" href="https://urban-block.webflow.io">
              <img src="../assets/images/Urbanblock.jpg" alt>
            </a>
          </div>
        </div>
      </div>
    </section>
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
import Pricing from "./_partials/Pricing.vue";
import { VueTyper } from "vue-typer";
export default {
  components: { WorkProcess, Pricing, VueTyper },
  data() {
    return {};
  },
  created() {
    this.$root.page = "home";
  }
};
</script>

<style lang="sass">
.demo-link
  img
    transition: all .3s ease
  &:hover
    background: #f2f2f2

.skills-wrapper
  margin-top: 2rem
  display: grid
  grid-template-columns: repeat(6, 80px)
  grid-template-rows: 2fr
  grid-column-gap: 1.75rem
  grid-row-gap: 1.75rem
  justify-items: start
  align-items: center
  .skill
    display: flex
    flex-direction: column
    justify-content: space-between
    text-align: center
  .skill-logo-wrapper
    display: flex
    width: 60px
    height: 60px
    margin: 0 auto
  .skill-title
    margin-top: 10px

@media(max-width: 768px)
  .skills-wrapper
    justify-content: center
    grid-template-columns: repeat(3, 80px)

@media(max-width: 425px)
  .skills-wrapper
    justify-items: center
    grid-column-gap: 1rem
    grid-row-gap: 1rem

.responsive-img
  width: 80%
  align-self: center
.responsive-icon-wrapper > i:nth-child(2)
  margin: 0 5rem
</style>