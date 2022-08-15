<template>
  <div class="highscoresPage">
    <div class="pageContainer">
      <p class="subPageTitle">
        <b>
          {{ pageHeader }}
        </b>
      </p>
      <p class="statisticsSubTitle">
        {{ dataSource }}
      </p>
      <div class="searchContainer">
        <div class="highscoresSearch">
          <input id="playerInput" :placeholder="this.searchPlaceholder" />
        </div>
        <div class="highscoreButtons">
          <button class="searchButton" type="button" @click="this.getPlayerData">
            Search
          </button>
          <button class="conditionalButton" type="button" @click="this.clearSearch">
            Clear
          </button>
        </div>
      </div>
      <div class="alternateSearches">
        <div>
          <button type="button" @click="updateSearchParameters">Ironmen</button>
        </div>
        <div>
          <button type="button" @click="updateSearchParameters">Hardcore Ironmen</button>
        </div>
        <div>
          <button type="button" @click="updateSearchParameters">Ultimate Ironmen</button>
        </div>
        <div class="groupButtons">
          <button class="groupButton" type="button" @click="updateSearchParameters">Group Ironmen</button>
        </div>
        <div class="groupButtons hardcoreGroup">
          <button class="hardcoreButton" type="button" @click="updateSearchParameters">Hardcore Group Ironmen</button>
        </div>

        <div class="groupSizeButtons" v-if="accountType == '_ironman/group-ironman' || this.accountType == '_hardcore_ironman/group-ironman'">
          <div>
            <div class="teamSizeContainers">
              <button>2s</button>
            </div>
            <div class="teamSizeContainers">
              <button>3s</button>
            </div>
            <div class="teamSizeContainers">
              <button>4s</button>
            </div>
            <div class="teamSizeContainers">
              <button>5s</button>
            </div>
          </div>
        </div>
      </div>

      <search-result v-if="this.playerToSearch != null"
        :playerToSearch="this.playerToSearch"
        :accountType="this.accountType"
      />
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
        pageHeader: 'Highscores & Leaderboards',
        dataSource: '* data pulled using the OSRS API *',
        searchPlaceholder: 'Search Mains...',
        playerToSearch: null,
        accountType: null
      }
  },
  methods: {
    getPlayerData() {
      this.playerToSearch =
        document.getElementById("playerInput").value;
    },
    clearSearch() {
      document.getElementById("playerInput").value = '';
      this.playerToSearch = null;
      this.searchPlaceholder = 'Search Main Accounts...';
      this.accountType = null;
    },
    updateSearchParameters(event) {
      let value;
      if (event) {
        value = event.target.innerHTML;
      }
      if (value == 'Ironmen') {
        this.searchPlaceholder = 'Search Ironmen...';
        this.accountType = '_ironman';
      } else if (value == 'Hardcore Ironmen') {
        this.searchPlaceholder = 'Search Hardcore Ironmen...';
        this.accountType = '_hardcore_ironman';
      } else if (value.includes('mate')) {
        this.searchPlaceholder = 'Search Ultimate Ironmen...';
        this.accountType = '_ultimate';
      } else if (value.includes('Hardcore Group')) {
        this.searchPlaceholder = 'Search Hardcore Group Ironmen...';
        this.accountType = '_hardcore_ironman/group-ironman';
      } else {
        this.searchPlaceholder = 'Search Group Ironmen...';
        this.accountType = '_ironman/group-ironman';
      }
    }
  },
}
</script>
