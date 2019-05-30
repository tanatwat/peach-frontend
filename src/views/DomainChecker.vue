<template>
  <div class="page-content">
    <div class="container w-container">
      <h1 class="section-title">เช็คโดเมน</h1>
      <label class="has-text-centered" style="margin-top:1rem">Domain</label>
      <input class="input" type="email" placeholder="email@example.com" v-model="domain">
      <div>
        <p>{{ results }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domain: null,
      results: []
    };
  },
  methods: {
    check() {
      this.$http().then(response => {
        this.results = response;
      });
    }
  },
  created() {
    this.$root.page = "page";
    this.$parent.menu = false;
  }
};
</script>