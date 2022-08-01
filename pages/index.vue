<template>
  <div class="indexPage">
    <index-slideshow />

    <div class="fullWidthContainer">
      <div class="indexContainer">
        <div class="playerCount">
          <div>
            <p>
              Players Online: <b>{{ playerCount }}</b>
            </p>
          </div>
        </div>
      </div>
    </div>

    <index-anchor />

    <index-anchor />
    <!--
      <highscores-block
        blockTitle="Leaderboards"
        blockData="
          --- ---
        "
        buttonLabel="Visit"
        buttonLink="/highscores"
      />
      <bestiary-block
        blockTitle="Bestiary"
        blockData="
          --- ---
        "
        buttonLabel="Visit"
      />
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

import HighscoresBlock from '../components/HighscoresBlock.vue'
import BestiaryBlock from '../components/BestiaryBlock.vue'
import IndexSlideshow from '../components/IndexSlideshow.vue'
import IndexAnchor from '../components/IndexAnchor.vue'

export default {
  components: { HighscoresBlock, BestiaryBlock, IndexSlideshow, IndexAnchor },
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
