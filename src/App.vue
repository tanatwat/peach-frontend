<template>
  <div id="app" :class="$i18n.locale">
    <nav class="nav-bar" :class="{'on-page' : $root.page == 'page'}">
      <div class="nav-wrapper container">
        <div class="logo-wrapper">
          <router-link to="/">
            <img src="./assets/images/peach-logo-primary.svg" class="logo-image" />
          </router-link>
        </div>

        <div class="nav-links">
          <router-link
            to="/request-quote"
            class="nav-btn"
            v-show="$root.page !== 'pricing'"
          >{{ $t('pricing.get_quote') }}</router-link>
          <router-link to="/" class="nav-btn round" v-show="$root.page !== 'home'">
            <i class="fas fa-home"></i>
          </router-link>
        </div>
      </div>
    </nav>
    <transition name="fade">
      <div class="load-overlay" v-show="$root.loading" style="animation-duration: 0.2s">
        <div class="roller-wrapper">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </transition>

    <!-- ROUTER VIEW -->
    <transition
      name="route"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>

    <div class="contact-wrapper" v-show="$root.page !== 'pricing'">
      <transition name="fade">
        <div class="contact-box content" v-show="contactsModal">
          <i class="fas fa-envelope basic-font"></i>
          <p>{{ contact.email }}</p>
          <i class="fas fa-phone basic-font"></i>
          <p>
            {{ $t('contact.phone') }}
            <br />
            {{ $t('contact.available.title') }}
            <br />
            {{ $t('contact.available.date') }}
            <br />
            {{ $t('contact.available.time') }}
          </p>
          <a class="button add-friend" href="https://line.me/R/ti/p/%40grz7564z" target="_blank">
            <span class="icon">
              <i class="fab fa-line"></i>
            </span>
            <span>{{ lineButton }}</span>
          </a>
        </div>
      </transition>

      <button
        class="contact-btn"
        :class="{'active' : contactsModal}"
        @click="contactsModal = !contactsModal"
      >
        <font>{{ $t('contact.button') }}</font>
        <i class="fas fa-comment"></i>
      </button>
    </div>
    <footer class="has-background-black" v-show="$root.page !== 'pricing'">
      <div class="container">
        <div class="footer-wrapper">
          <div class="footer-left">
            <img src="./assets/images/peach-logo-full.svg" class="footer-logo" />
          </div>
          <div class="footer-right">
            <button class="fas fa-envelope footer-link" style="padding-top:3px"></button>
            <button class="fas fa-phone footer-link" style="padding-top:2px"></button>
            <button
              class="fab fa-line footer-link"
              href="https://line.me/R/ti/p/%40grz7564z"
              target="_blank"
            ></button>
          </div>
          <div class="footer-locale">
            <button class="locale-btn" :class="$i18n.locale" @click.prevent="changeLocale()"></button>
          </div>
        </div>
        <div class="legal">
          <div>
            <p>&copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;{{ webUrl }}</p>
          </div>
        </div>
      </div>
    </footer>
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
      allowContacts: true,
      lineButton: "@peachmedia",
      contact: {
        email: "tanatwat.w@gmail.com",
        phone: "092-273-0725"
      }
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
    },
    changeLocale() {
      this.$root.loading = true;
      if (this.$i18n.locale == "en") {
        localStorage.locale = "th";
        this.$i18n.locale = localStorage.locale;
      } else if (this.$i18n.locale == "th") {
        localStorage.locale = "en";
        this.$i18n.locale = localStorage.locale;
      }
      setTimeout(() => (this.$root.loading = false), 1000);
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
@import "./sass/_export"
$primary: #ff3860
$info: #5c71dd
@import "bulma"
$animationDuration: .3s // specify animation duration. Default value: 1s
@import "vue2-animate/src/sass/vue2-animate.scss"

.route-enter-active, .route-leave-active
  transition-duration: 0.3s
  transition-property: height, opacity
  transition-timing-function: ease
  overflow: hidden

.route-enter, .route-leave-active
  opacity: 0
</style>