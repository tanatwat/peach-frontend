<template>
  <div :class="wrapper">
    <div>
      <button class="pricing-button" @click="changeStep('back')" v-show="back">
        <i class="fas fa-caret-left"></i>
        &nbsp;{{ backText }}
      </button>
    </div>
    <div>
      <button class="pricing-button" @click="changeStep('next')" v-show="next">
        {{ nextText }}&nbsp;
        <i class="fas fa-caret-right"></i>
      </button>
      <button class="pricing-button" @click="$emit('click-submit')" v-show="submitButton">
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
       default: 'ย้อนกลับ'
    },
    next: {
      default: true
    },
    nextText: {
      default: 'ต่อไป'
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