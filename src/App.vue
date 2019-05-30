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
          <a href="#services" class="navigation-link w-nav-link">บริการ</a>
          <a href="#process" class="navigation-link w-nav-link">ขั้นตอนการทำงาน</a>
          <a href="#clients" class="navigation-link w-nav-link">ตัวอย่างงาน</a>
          <router-link
            to="/pricing"
            class="basic navigation-link w-nav-link action-btn"
          >ขอใบเสนอราคา</router-link>
          <!-- <a href="#contact" class="navigation-link w-nav-link">ติดต่อ</a> -->
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
            v-show="$root.page == 'page' || $root.page == 'pricing'"
          >กลับหน้าแรก</router-link>
          <a
            class="navigation-action-button w-button fas fa-caret-left"
            @click.prevent="$router.back()"
            v-show="$root.page == 'page' || $root.page == 'pricing'"
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
        <a href="#services" class="navigation-link w-nav-link">บริการ</a>
        <a href="#process" class="navigation-link w-nav-link">ขั้นตอนการทำงาน</a>
        <a href="#clients" class="navigation-link w-nav-link">ตัวอย่างงาน</a>
          <router-link
            to="/pricing"
            class="navigation-link w-nav-link"
          >ขอใบเสนอราคา</router-link>
        <!-- <a href="#contact" class="navigation-link w-nav-link">ติดต่อ</a> -->
      </nav>
    </div>

    <!-- ROUTER VIEW -->
    <transition
      name="route"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view/>
    </transition>

    <footer class="section footer" v-show="$root.page !== 'pricing'">
      <div class="container">
        <div class="footer-wrap">
          <img src="./assets/images/Logo.png" class="footer-logo">
          <p>
            <i class="fas fa-envelope"></i>&nbsp;tanatwat@peachmedia.cc
          </p>
          <p>
            <i class="fas fa-phone"></i>&nbsp;093-939-8297
          </p>
          <p class="centered">
            วันจันทร์ - ศุกร์
            <br>9.30 - 17.00
          </p>
          <a
            class="add-friend"
            href="https://line.me/R/ti/p/%40grz7564z"
            target="_blank"
            style="align-self:center"
          >
            <i class="fab fa-line"></i>&nbsp;เพิ่มเพื่อน
          </a>
        </div>
        <div class="legal">
          <div>
            <p>&copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;{{ webUrl }}</p>
          </div>
        </div>
      </div>
    </footer>

    <div class="contact-wrapper" v-show="$root.page !== 'pricing'">
      <transition name="fade">
        <div class="contacts" v-show="contactsModal">
          <i class="fas fa-envelope basic-font"></i>
          <p>tanatwat@peachmedia.cc</p>
          <i class="fas fa-phone basic-font"></i>
          <p>
            093-939-8297
            <br>วันจันทร์ - ศุกร์
            <br>9.30 - 17.00
          </p>
          <a
            class="add-friend"
            href="https://line.me/R/ti/p/%40grz7564z"
            target="_blank"
            style="align-self:center"
          >
            <i class="fab fa-line"></i>&nbsp;เพิ่มเพื่อน
          </a>
        </div>
      </transition>

      <button
        class="contact-button"
        :class="{'active' : contactsModal}"
        @click="contactsModal = !contactsModal"
      >
        <font>ช่องทางติดต่อ&nbsp;</font>
        <i class="fas fa-comment"></i>
      </button>
    </div>
  </div>
</template>
<script>
import smoothReflow from "vue-smooth-reflow";
export default {
  mixins: [smoothReflow],
  data() {
    return {
      menu: false,
      webUrl: "peachmedia.cc",
      prevHeight: 0,
      contactsModal: false,
      allowContacts: true
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
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
@import "./sass/dropzone"

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

.action-btn
  padding: 12px 20px
  border-radius: 50px
  align-self: center
  background: #6679d5
  color: #fff
  font-size: 1.2rem
  &:hover
    background: darken(#6679d5, 5%)
    color: #fff

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

.footer-wrap
  display: flex
  flex-direction: column
  justify-content: center
  > *
    color: #b7c3ff
    margin: 0
    padding: 8px 0
    font-size: 1.2rem

.contact-wrapper
  position: fixed
  bottom: 50px
  right: 50px
  z-index: 2
  > div
    display: flex
    flex-direction: column
    justify-content: center
    background: #fff
    border: 1px solid #ddd
    border-radius: 8px
    padding: .75rem
    margin-bottom: 15px
    text-align: center
    box-shadow: 0 1px 3px #ddd
    min-width: 350px
  > button
    padding: 12px 25px
    font-size: 1.2rem
    border-radius: 50px
    color: #fff
    background: darken($success, 5%)
    transition: all .3s ease
    float: right
    border: 2px solid darken($success, 5%)
    &:hover
      background: darken($success, 10%)
    &.active
      background: #fff
      color: darken($success, 5%)
      border-color: darken($success, 5%)
  i.fas
    font-size: 1.2rem
  i.fab
    font-size: 1.7rem
.add-friend
  position: relative
  text-align: right
  background: #00bb00
  color: #fff
  border-radius: 8px
  padding: 8px 12px 8px 0
  text-decoration: none
  font-size: 1rem
  width: 120px
  transition: all .2s ease
  > i
    position: absolute
    left: 10px
    font-size: 1.8rem
  &:hover
    color: #fff
    background: darken(#00bb00, 5%)

@media (max-width: 768px)
  .contact-wrapper
    bottom: 30px
    right: 30px
    > button
      padding: 8px 15px
      font-size: 1rem
@media (max-width: 425px)
  .contact-wrapper
    bottom: 20px
    right: 20px
    > button 
      width: 50px
      height: 50px
      font
        display: none
      i.fas
        font-size: 1.8rem
        margin-left: -6px
        margin-top: 2px
    > div
      width: 100%
      min-width: 280px

.route-enter-active, .route-leave-active
  transition-duration: 0.3s
  transition-property: height, opacity
  transition-timing-function: ease
  overflow: hidden

.route-enter, .route-leave-active
  opacity: 0
</style>