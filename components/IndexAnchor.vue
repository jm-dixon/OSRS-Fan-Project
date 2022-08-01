<template>
  <div class="indexAnchor">
    <!--
    <highscores-block />

    <bestiary-block />
    -->
  </div>
</template>

<script>
import BestiaryBlock from './BestiaryBlock.vue'
import HighscoresBlock from './HighscoresBlock.vue'
export default {
  components: { HighscoresBlock, BestiaryBlock },
  name: 'IndexAnchor',
}
</script>
