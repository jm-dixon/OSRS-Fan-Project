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
