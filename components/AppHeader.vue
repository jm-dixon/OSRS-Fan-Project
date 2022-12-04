<template>
    <div class="Header">
        <nuxt-link to='/'>
          Home
        </nuxt-link>
        <nuxt-link to='#'>
          Highscores
        </nuxt-link>
        <nuxt-link to='#'>
          Bestiary
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
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
  color: whitesmoke;
  padding: 1.5em 1.5em 1.5em 1.5em;
  float: right;
}
</style>
