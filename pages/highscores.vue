<template>
  <div class="Highscores__page flex">
    <div class="Highscores__pageContainer">
      <p class="Highscores__subPageTitle">
        <b>
          {{ pageHeader }}
        </b>
      </p>
      <p class="Highscores__statisticsSubTitle">
        {{ dataSource }}
      </p>
      <div class="Highscores__searchContainer flex">
        <div class="Highscores__highscoresSearch flex">
          <input class="flex" id="playerInput" :placeholder="this.searchPlaceholder" />
        </div>
        <div class="Highscores__highscoreButtons">
          <button class="flex" type="button" @click="this.getPlayerData">
            Search
          </button>
          <button class="flex" type="button" @click="this.clearSearch">
            Clear
          </button>
        </div>
      </div>
      <div class="Highscores__alternateSearches flex">
        <div class="flex">
          <button class="flex" type="button" @click="updateSearchParameters">Ironmen</button>
        </div>
        <div class="flex">
          <button class="flex" type="button" @click="updateSearchParameters">Hardcore Ironmen</button>
        </div>
        <div class="flex">
          <button class="flex" type="button" @click="updateSearchParameters">Ultimate Ironmen</button>
        </div>
        <div class="Highscores__groupButtons">
          <button class="groupButton" type="button" @click="updateSearchParameters">Group Ironmen</button>
        </div>
        <div class="Highscores__groupButtons hardcoreGroup">
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

      <!--

      <group-highscores v-if="this.accountType == '_ironman/group-ironman' || this.accountType = '_hardcore_ironman/group-ironman'"
        :playerToSearch="this.playerToSearch"
        :accountType="this.accountType"
        :groupSize="this.groupSize"
      />

      <default-highscores v-if="this.playerToSearch == null"

      />

      -->

      <div v-else class="defaultResult">
        <p>
          <b>Overall Highscores</b> | Top 50 Players
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

<style type="text/css">
.Highscores__page {
  width: 100%;
  background-color: var(--color-whiteSmoke);
}
.Highscores__pageContainer {
  width: 45%;
  margin: 0 auto;
}
.Highscores__subPageTitle {
  font-size: 1.5em;
  width: 100%;
  text-align: center;
}
.Highscores__statisticsSubTitle {
  font-size: 0.5em;
  width: 100%;
  text-align: center;
}
.Highscores__searchContainer {
  padding: 0.5em 0.5em 0.5em 0.5em;
  width: 100%;
  margin: 1em 0 1em 0;
  border: 2px solid whitesmoke;
}
.Highscores__highscoresSearch {
  width: 55%;
}
.highscoresSearch input {
  width: 100%;
  padding: 1em 0 1em 1em;
  border: 2px solid #272727;
}
.Highscores__highscoreButtons {
  width: 41%;
  float: right;
}
.Highscores__highscoreButtons button {
  width: 48%;
  border: 2px solid #272727;
  padding: 1em 0 1em 0;
  margin: 0;
  margin: 0 0.25em 0 0;
}
.Highscores_highscoreButtons:last-child {
  color: var(--color-whiteSmoke);
  background-color: var(--color-grey);
}
.Highscores__alternateSearches {
  padding: 0.5em 0.5em 0.5em 0.5em;
  border: 2px solid var(--color-whiteSmoke);
  width: 100%;
}
.Highscores__alternateSearches div {
  width: 32%;
  margin: 0.5em 0.25em 0.5em 0.25em;
}
.Highscores__alternateSearches button {
  width: 100%;
  background-color: var(--color-grey);
  color: var(--color-whiteSmoke);
}
.Highscores__groupButtons {
  width: 48% !important;
}
.Highscores__groupButtons button {
  width: 100% !important;
}
</style>
