<template>
  <div class="footerNavbar">
    <p class="footerCopyright">
      Nuxt Project @ {{ currentYear }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    /* No Props */
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    /* No Methods */
  }
}
</script>

<style scoped>
  .footerNavbar {
    text-align: left;
    background-color: cornflowerblue;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    float: left;
  }
  .footerCopyright {
    color: black;
    padding: 1em;
    float: left;
  }
</style>
