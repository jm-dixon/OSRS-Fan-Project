<template>
  <div class="footerNavbar">
    <p class="footerCopyright">
      Nuxt Project @ {{ currentYear }}
    </p>
    <div class="footerLinksWikis">
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
    <div class="footerLinksJagex">
      <ul>
        <a target="blank" href="https://www.jagex.com/en-GB/">
          <li>
            Jagex Website
          </li>
        </a>
        <a target="blank" href="https://twitter.com/jagex">
          <li>
            Jagex Twitter
          </li>
        </a>
        <a target="blank" href="https://twitter.com/oldschoolrs">
          <li>
            Old School Runescape Twitter
          </li>
        </a>
        <a target="blank" href="https://www.reddit.com/r/2007scape/">
          <li>
            Old School Runescape Reddit
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

<style type="text/css">
.footerNavbar {
  text-align: left;
  background-color: var(--color-grey);
  width: 100%;
  display: flex;
}
.footerCopyright {
  color: whitesmoke;
  padding: 1em;
  display: flex;
}
.footerLinksWikis {
  padding: 0.5em 0.5em 0.5em 0.5em;
  display: flex;
}
.footerLinksWikis li {
  color: whitesmoke;
  text-decoration: none;
  padding: 0.2em 0.2em 0.2em 0.2em;
  list-style: none;
}
.footerLinksJagex {
  padding: 0.5em 0.5em 0.5em 0.5em;
  display: flex;
}
.footerLinksJagex li {
  color: whitesmoke;
  text-decoration: none;
  padding: 0.2em 0.2em 0.2em 0.2em;
  list-style: none;
}
.footerNavbar li:hover {
  transition: 0.8s ease;
  color: var(--color-neruoscriptBlue);
}
.footerNavbar li:not(:hover) {
  transition: 0.5s ease;
}
</style>
