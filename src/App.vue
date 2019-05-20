<template>
  <div id="app">
    <div class="navigation w-nav" :class="{'on-page' : $root.page == 'page'}">
      <div class="navigation-wrapper container">
        <div class="logo-wrapper">
          <router-link to="/">
            <img src="./assets/images/Logo.png" width="175" alt class="logo-image">
          </router-link>
        </div>
        <nav role="navigation" class="navigation-links w-nav-menu" v-show="$root.page == 'home'">
          <a href="#" class="navigation-menu-link w-nav-link">บริการ</a>
          <a href="#services" class="navigation-link w-nav-link">บริการ</a>
          <a href="#process" class="navigation-link w-nav-link">ขั้นตอนการทำงาน</a>
          <a href="#clients" class="navigation-link w-nav-link">ตัวอย่างงาน</a>
          <a href="#contact" class="navigation-link w-nav-link">ติดต่อ</a>
        </nav>
        <div class="menu-wrapper">
          <button
            class="navigation-menu-button fas fa-bars"
            :class="{'active' : menu}"
            @click="menu = !menu"
            v-show="$root.page == 'home'"
          ></button>
          <router-link
            to="/"
            class="navigation-action-button w-button"
            v-show="$root.page == 'page'"
          >กลับหน้าแรก</router-link>
          <a
            class="navigation-action-button w-button fas fa-caret-left"
            @click.prevent="$router.back()"
            v-show="$root.page == 'page'"
            style="margin-left: .5rem"
          ></a>
        </div>
      </div>
      <nav
        ref="menu"
        role="navigation"
        class="navigation-links-mobile w-nav-menu"
        v-show="menu && $root.page == 'home'"
      >
        <a href="#" class="navigation-menu-link w-nav-link">บริการ</a>
        <a href="#services" class="navigation-link w-nav-link">บริการ</a>
        <a href="#process" class="navigation-link w-nav-link">ขั้นตอนการทำงาน</a>
        <a href="#clients" class="navigation-link w-nav-link">ตัวอย่างงาน</a>
        <a href="#contact" class="navigation-link w-nav-link">ติดต่อ</a>
      </nav>
    </div>

    <router-view/>

    <footer class="section footer">
      <div class="container">
        <div class="footer-wrap">
          <img src="./assets/images/Logo.png" alt class="footer-logo">
        </div>
        <div class="legal">
          <div>This is some text inside of a div block.</div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { log } from "util";
import smoothReflow from "vue-smooth-reflow";
export default {
  mixins: [smoothReflow],
  data() {
    return {
      menu: false
    };
  },
  mounted() {
    this.$smoothReflow({
      el: this.$refs.menu
    });
  }
};
</script>
<style lang="sass">
@import "./sass/form"
@import "./sass/core"
@import "./sass/loading"

@import "./css/normalize"
@import "./css/webflow"
@import "./css/peachmedia.webflow"

$info: #5c71dd
@import "bulma/sass/utilities/_all.sass"
@import "bulma/sass/grid/_all.sass"
@import "bulma/sass/base/helpers.sass"
@import "bulma/sass/components/level.sass"
@import "bulma/sass/elements/content.sass"

$animationDuration: .3s // specify animation duration. Default value: 1s
@import "vue2-animate/src/sass/vue2-animate.scss"

.menu-wrapper
  display: flex
  justify-content: flex-end
  flex-grow: 1

.navigation-wrapper
  padding: .5rem
  display: flex
  justify-content: space-between !important

.navigation-links
  order: 2


</style>
