<template>
  <div class="page-content">
    <div class="container w-container">
      <h1 class="section-title">บริการ</h1>
      <div data-duration-in="300" data-duration-out="100" class="w-tabs">
        <div class="service-tabs-wrapper w-tab-menu">
          <a
            class="service-tab basic w-inline-block w-tab-link"
            :class="{'w--current' : tab == 1}"
            @click.prevent="tab = 1"
          >
            <div>Basic</div>
          </a>
          <a
            class="service-tab ecom w-inline-block w-tab-link"
            :class="{'w--current' : tab == 2}"
            @click.prevent="tab = 2"
          >
            <div>Ecommerce</div>
          </a>
        </div>
        <div class="w-tab-content">
          <transition name="fade">
            <basic v-show="tab == 1"></basic>
          </transition>

          <transition name="fade">
            <ecom v-show="tab == 2"></ecom>
          </transition>
        </div>
      </div>
    </div>
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
  data() {
    return {
      tab: null
    };
  },

  methods: {
    setTab() {
      if (this.$route.params.service == "basic") {
        this.tab = 1;
      } else {
        this.tab = 2;
      }
    }
  },
  created() {
    this.setTab();
    this.$root.page = "page";
    this.$parent.menu = false;
  }
};
</script>

<style lang="sass">
.pricing-table
  > .column
    border-bottom: 1px solid #ddd

.pricing-header
  border-bottom: 2px solid #ddd

.pricing-title
  background: #f3f5ff

.pricing-help
  cursor: pointer

.pricing-description
  padding-top: .5rem
  padding-left: .5rem
  color: #777

@media (max-width: 768px)
  .pricing-tiles
    > .tile:not(:last-child)
      border-right: 1px solid #555
      border-bottom: none
</style>