<template>
  <div class="page-content" v-if="authorized" style="padding-top:2rem">
    <div class="w-container container">
      <div class="is-flex">
        <router-link class="service-button w-button" to="/admin/qoute" style="margin-right:1rem">Qoute</router-link>
        <router-link class="service-button w-button" to="/admin/qoute-create">Qoute Generator</router-link>
      </div>
   <div class="admin-box">
     ADMIN CONSOLE
    <router-view></router-view>
   </div>
    </div>
  </div>
  <div class="content has-text-centered" v-else>
    <h2>UNAUTHORIZED ACTION</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authorized: false
    };
  },
  methods: {
    enterPage() {
      if (prompt("password") == "159352") {
        this.authorized = true;
      }
    }
  },
  created() {
    this.$root.page = "page";
    this.$parent.menu = false;
    this.enterPage();
  }
};
</script>

<style lang="sass">
   .admin-box
      padding: .75rem
      border: 1px solid #ddd
      margin: 1rem 0
      border-radius: 8px
</style>