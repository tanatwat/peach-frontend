<template>
  <transition name="fade">
    <div class="modal" :class="{'is-active' : $root.showModal}" v-show="$root.showModal">
      <div class="modal-background"></div>
      <div class="modal-wrapper container">
         <div class="modal-head">
            <button class="button is-primary fas fa-times" @click="close()"></button>
         </div>
         <div class="modal-body">
            <slot name="body"></slot>
         </div>
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  },
  watch: {
    "$root.showModal": {
      handler() {
      const page = document.documentElement
        if (this.$root.showModal) {
          page.classList.add("stop-scroll");
        } else {
          page.classList.remove("stop-scroll");
        }
      }
    }
  }
};
</script>

<style lang="sass">
.modal-wrapper
   z-index: 9999
.modal-body
   width: 100%
   max-height: 80vh
   padding: 2.75rem 1.75rem
   background: #fff
   overflow-y: auto
.modal-head
   width: 100%
   padding: 1.25rem
   background: #222
   text-align: right
.stop-scroll
   overflow: hidden
</style>
