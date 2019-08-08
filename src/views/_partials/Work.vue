<template>
  <section id="work" class="section is-medium">
    <div class="container has-text-centered-mobile" data-aos="fade-right">
      <h2 class="section-title">{{ $t('work.title1') }}</h2>
      <div class="content is-size-4-desktop is-size-5-tablet">
        <p>{{ $t('work.subtitle1') }}</p>
      </div>
      <!-- WEBFLOW WORK -->
      <div class="columns">
        <div class="column demo-wrapper">
          <a class="demo-link" href="https://smiledelightclinic.com" target="_blank">
            <img class="demo-desktop" src="../../assets/demo/webflow/sm-desktop.jpg"/>
            <img class="demo-mobile" src="../../assets/demo/webflow/sm-mobile.jpg"/>
          </a>
        </div>
        <div class="column demo-wrapper">
          <a class="demo-link" href="https://caffe-coffee.webflow.io">
            <img class="demo-desktop" src="../../assets/demo/webflow/caffe-desktop.jpg" alt />
            <img class="demo-mobile" src="../../assets/demo/webflow/caffe-mobile.jpg" alt />
          </a>
        </div>
        <div class="column demo-wrapper">
          <a class="demo-link" href="https://jergun.webflow.io">
            <img class="demo-desktop" src="../../assets/demo/webflow/jergun-desktop.jpg" alt />
            <img class="demo-mobile" src="../../assets/demo/webflow/jergun-mobile.jpg" alt />
          </a>
        </div>
        <div class="column demo-wrapper">
          <a class="demo-link" href="https://urban-block.webflow.io">
            <img class="demo-desktop" src="../../assets/demo/webflow/ub-desktop.jpg" alt />
            <img class="demo-mobile" src="../../assets/demo/webflow/ub-mobile.jpg" alt />
          </a>
        </div>
      </div>
      <!-- WEBFLOW WORK -->
      <h2 class="section-title">{{ $t('work.title2') }}</h2>
      <div class="content is-size-4-desktop is-size-5-tablet">
        <p>{{ $t('work.subtitle2') }}</p>
      </div>
      <div class="columns">
        <div class="column demo-wrapper">
          <a class="demo-link" @click.prevent="showModal(1)">
            <img class="demo-desktop" src="../../assets/demo/design/grace-desktop.jpg" alt />
          </a>
        </div>
        <div class="column demo-wrapper">
          <a class="demo-link" @click.prevent="showModal(2)">
            <img class="demo-desktop" src="../../assets/demo/design/grace-desktop-black.jpg" alt />
          </a>
        </div>
        <div class="column demo-wrapper">
          <a class="demo-link" @click.prevent="showModal(3)">
            <img class="demo-desktop" src="../../assets/demo/design/dudley-thumbnail.jpg" alt />
          </a>
        </div>
        <div class="column demo-wrapper">
          <a class="demo-link" @click.prevent="showModal(4)">
            <img class="demo-desktop" src="../../assets/demo/design/samsung-thumbnail.jpg" alt />
          </a>
        </div>
        <div class="column demo-wrapper">
          <a class="demo-link" @click.prevent="showModal(5)">
            <img class="demo-desktop" src="../../assets/demo/design/nandala-thumbnail.jpg" alt />
          </a>
        </div>
      </div>

    </div>

    <modal v-on:close="hideModal()">
      <div slot="body" v-show="currentModal == 1">
        <div class="content is-size-4-desktop is-size-5-tablet has-text-centered">
          <h3 class="has-text-primary">GRACE Luxury cream</h3>
          <img class="demo-desktop" src="../../assets/demo/design/grace-full.jpg" alt />
        </div>
      </div>
      <div slot="body" v-show="currentModal == 2">
        <div class="content is-size-4-desktop is-size-5-tablet has-text-centered">
          <h3 class="has-text-primary">GRACE Luxury cream - Alternate version</h3>
          <img class="demo-desktop" src="../../assets/demo/design/grace-full-black.jpg" alt />
        </div>
      </div>
      <div slot="body" v-show="currentModal == 3">
        <div class="content is-size-4-desktop is-size-5-tablet has-text-centered">
          <h3 class="has-text-primary">Dudley & Co - Editorial Section</h3>
          <img class="demo-desktop" src="../../assets/demo/design/dudley-full.png" alt />
        </div>
      </div>
      <div slot="body" v-show="currentModal == 4">
        <div class="content is-size-4-desktop is-size-5-tablet has-text-centered">
          <h3 class="has-text-primary">Samsung Parts Home Page</h3>
          <img class="demo-desktop" src="../../assets/demo/design/samsung-full.jpg" alt />
        </div>
      </div>
      <div slot="body" v-show="currentModal == 5">
        <div class="content is-size-4-desktop is-size-5-tablet has-text-centered">
          <h3 class="has-text-primary">NANDALA Landing Page</h3>
          <img class="demo-desktop" src="../../assets/demo/design/nandala-full.jpg" alt />
        </div>
      </div>
    </modal>
    
  </section>
</template>

<script>
import Modal from "../_partials/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      currentModal: null
    }
    
  },
  methods: {
    showModal(id) {
      this.$root.showModal = true
      this.currentModal = id
    },
    hideModal() {
      this.$root.showModal = false
    },

  }
}
</script>