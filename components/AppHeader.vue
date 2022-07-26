<template>
    <div class="headerNavbar">
        <nuxt-link class="headerNav" to='/'>
          Home
        </nuxt-link>
        <nuxt-link class="headerNav" to='/highscores'>
          Highscores
        </nuxt-link>
        <nuxt-link class="headerNav" to='/beastiary'>
          Beastiary
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
  .headerNavbar {
    text-align: right;
    background-color: cornflowerblue;
    float: left;
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .headerNavbar a {
    text-decoration: none;
    font-size: 0.8em;
    color: black;
    padding: 2em 1.5em 2em 1.5em;
    float: right;
  }
</style>

