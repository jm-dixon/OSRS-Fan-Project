<template>
    <div class="headerNavbar">
        <nuxt-link class="headerNav" to='/'>
          Home
        </nuxt-link>
        <nuxt-link class="headerNav" to='#'>
          Highscores
        </nuxt-link>
        <nuxt-link class="headerNav" to='#'>
          Bestiary
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>
