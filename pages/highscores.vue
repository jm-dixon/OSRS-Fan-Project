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

      <div class="alternateSearches">
        <button type="button">Ironmen</button>
        <button type="button">Hardcore Ironmen</button>
        <button type="button">Ultimate Ironmen</button>
      </div>

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
