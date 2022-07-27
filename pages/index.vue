<template>
  <div>
    <p class="playerCount">
      Players Online: {{ playerCount }}
    </p>

    <div class="indexContainer">
      <highscores-block
        blockTitle="Leaderboards"
        blockData="
          --- ---
        "
        buttonLabel="Visit"
        buttonLink="/highscores"
      />
      <beastiary-block
        blockTitle="Beastiary"
        blockData="
          --- ---
        "
        buttonLabel="Visit"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import HighscoresBlock from '../components/HighscoresBlock.vue'
import BeastiaryBlock from '../components/BeastiaryBlock.vue'

export default {
  components: { HighscoresBlock, BeastiaryBlock },
  name: 'IndexPage',
  props: {
    /* No Props */
  },
  data() {
    return {
      playerCount: null,
    }
  },
  computed: {
    /* No Computed */
  },
  methods: {
    async getCurrentPlayerCount() {
      try {
        const { data } = await axios.get(`/proxy/playerCount`)
        this.playerCount = data.toLocaleString();
        let timeout = setTimeout(() => {
          this.getCurrentPlayerCount();
          clearTimeout(timeout); }, 3000)
      } catch(error) {
        console.log(error);
    }
  }
  },
  mounted() {
    this.getCurrentPlayerCount();
  },
}
</script>
