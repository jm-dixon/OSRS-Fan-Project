<template>
  <div>
    <div class="Header__notIndex" v-if="this.$route.name != 'index'">
      <nuxt-link to='/'>
          Home
        </nuxt-link>
        <nuxt-link to='/highscores'>
          Highscores
        </nuxt-link>
        <nuxt-link to='/bestiary'>
          Bestiary
        </nuxt-link>
    </div>
    <div class="Header" v-if="this.$route.name === 'index'">
        <nuxt-link to='/'>
          Home
        </nuxt-link>
        <nuxt-link to='/highscores'>
          Highscores
        </nuxt-link>
        <nuxt-link to='/bestiary'>
          Bestiary
        </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style>
.Header {
  text-align: right;
  display: flex;
  width:100%;
  justify-content: flex-end;
  position: absolute;
}
.Header a {
  text-decoration: none;
  font-size: 1em;
  color: var(--color-whiteSmoke);
  padding: 1.5em 1.5em 1.5em 1.5em;
  float: right;
}
.Header a:hover {
  color: var(--color-neruoscriptBlue);
  transition: 0.8s ease;
}
.Header a:not(:hover) {
  transition: 0.5s ease;
}
.Header__notIndex {
  text-align: right;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background-color: var(--color-grey);
}
.Header__notIndex a {
  text-decoration: none;
  font-size: 1em;
  color: var(--color-whiteSmoke);
  padding: 1.5em 1.5em 1.5em 1.5em;
  float: right;
}
.Header__notIndex a:hover {
  color: var(--color-neruoscriptBlue);
  transition: 0.8s ease;
}
.Header__notIndex a:not(:hover) {
  transition: 0.5s ease;
}
</style>
