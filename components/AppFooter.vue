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
