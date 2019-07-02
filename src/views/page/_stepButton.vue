<template>
  <div :class="wrapper" style="margin-top: 1.75rem">
    <div>
      <button class="quote-button" @click="changeStep('back')" v-show="back">
        <i class="fas fa-caret-left"></i>
        &nbsp;{{ backText ? backText : $t('quote.back') }}
      </button>
    </div>
    <div>
      <button class="quote-button" @click="changeStep('next')" v-show="next">
        {{ nextText ? nextText : $t('quote.next') }}&nbsp;
        <i class="fas fa-caret-right"></i>
      </button>
      <button class="quote-button" @click="$emit('click-submit')" v-show="submitButton">
        ส่งแบบฟอร์ม&nbsp;
        <i class="fas fa-check"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    back: {
      default: true
    },
    backText: {
       default: null
    },
    next: {
      default: true
    },
    nextText: {
      default: null
    },
    wrapper: {
      default: 'level is-mobile'
    },
    submitButton: {
      default: false
    }
  },
  methods: {
    changeStep(type) {
      if(type == 'next') {
        if (this.$parent.step < this.$parent.totalSteps) {
          this.$parent.step++
        }
      } else {
        this.$parent.step--
      }
    }
  }
};
</script>