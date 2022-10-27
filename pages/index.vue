<template>
  <div class="indexPage">
    <index-slideshow />

    <div class="fullWidthContainer">
      <div class="Index__playerCount-container">
        <div class="playerCount">
          <div>
            <p>
              Players Online:
              <b>
                {{ playerCount }}
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>

    <index-anchor anchorPurpose="highscores" />

    <index-anchor anchorPurpose="bestiary" />

    <index-anchor anchorPurpose="project" />

    <index-anchor anchorPurpose="statistics" />
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
// imports
import axios from 'axios'

import IndexSlideshow from '../components/IndexSlideshow.vue'
import IndexAnchor from '../components/IndexAnchor.vue'

export default {
  components: { IndexSlideshow, IndexAnchor },
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