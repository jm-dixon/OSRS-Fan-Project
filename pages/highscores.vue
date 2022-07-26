<template>
  <div>
    <div class="pageContainer">
      <input id="playerInput" class="playerSearch" placeholder="Search Player..." />

      <button class="searchButton" type="button" @click="this.getPlayerData">
        {{ searchButtonText }}
      </button>

      <button class="clearButton" type="button" @click="this.clearSearch">
        {{ clearButtonText }}
      </button>

      <search-result v-if="this.playerToSearch != null" :playerToSearch="this.playerToSearch" />
      <div v-else class="defaultResult">
        <p>
          No Player Name Entered
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResult from '../components/SearchResult.vue'

export default {
  components: { SearchResult },
  name: 'PlayerHighscores',
  props: {
      /* No Props */
  },
  data() {
      return {
        searchButtonText: 'Search',
        clearButtonText: 'Clear',
        playerToSearch: null
      }
  },
  computed: {
      /* No Computed */
  },
  methods: {
    getPlayerData() {
      this.playerToSearch =
        document.getElementById("playerInput").value;
    },
    clearSearch() {
      document.getElementById("playerInput").value = '';
      this.playerToSearch = null;
    }
  },
  mounted() {
      /* No Mounted */
  },
}
</script>

<style scoped>
  .pageContainer {
    width:35%;
    margin: 0 auto;
  }
  .playerSearch {
    padding: 1em 1em 1em 1em;
    margin: 2em 0 1.5em 0;
    width: 58%;
    float: left;
  }
  .searchButton {
    padding: 1em 1.5em 1em 1.5em;
    margin: 2em 0 1.5em 0.6em;
    float: left;
  }
  .clearButton {
    padding: 1em 1.5em 1em 1.5em;
    margin: 2em 0 1.5em 0;
    float: right;
  }
  .defaultResult {
    width: 100%;
    box-shadow: 0 0 2px 2px lightgrey;
    border-radius: 5px;
    height: 450px;
    float: left;
    text-align: center;
  }
</style>
