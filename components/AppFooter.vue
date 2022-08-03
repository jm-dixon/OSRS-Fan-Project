<template>
  <div class="footerNavbar">
    <p class="footerCopyright">
      Nuxt Project @ {{ currentYear }}
    </p>
    <div class="footerLinks">
      <ul>
        <a target="blank" href="https://oldschool.runescape.com/">
          <li>
            Old School Runescape Website
          </li>
        </a>
        <a target="blank" href="https://play.runescape.com/">
          <li>
            Runescape 3 Website
          </li>
        </a>
        <a target="blank" href="https://oldschool.runescape.wiki/">
          <li>
            Old School Runescape Wiki
          </li>
        </a>
        <a target="blank" href="https://runescape.wiki/">
          <li>
            Runescape 3 Wiki
          </li>
        </a>
      </ul>
    </div>
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
