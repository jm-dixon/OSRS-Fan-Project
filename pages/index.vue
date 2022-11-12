<template>
  <div class="indexPage">
    <index-slideshow />

    <div class="Index__fullWidth flex jc-c ac-c">
      <div class="Index__playerCountContainer">
        <div class="Index__playerCount flex">
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
  data() {
    return {
      playerCount: null,
    }
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

<style>
.Index__fullWidth {
  width: 100%;
  background-color: var(--color-whiteSmoke);
}
.Index__playerCountContainer {
  width: 60%;
  background-color: var(--color-whiteSmoke);
}
.Index__playerCount {
  text-align: center;
  font-size: 1.5em;
  margin: 0;
  padding-top: var(--padding-md);
  width: 100%;
}
.Index__playerCount div {
  border: 2px solid  var(--color-grey);
  margin: 0 auto 1em auto;
  width: 45%;
  padding-top: var(--padding-sm);
  padding-bottom: var(--padding-sm);
}
.Index__playerCount p {
 width: 100%;
 margin: 0;
}
.Index__playerCount p b {
  padding: var(--padding-sm);
  margin-top: var(--margin-sm);
  margin-bottom: var(--margin-sm);
  color: var(--color-grey);
}
</style>