<template>
  <div class="Highscores flex jc-c ac-c ff-c-w">
      <h1>
        <b>
          {{ pageHeader }}
        </b>
      </h1>
      <h6>
        {{ dataSource }}
      </h6>
      <div class="Highscores__playerSearch flex jc-c ac-c">
        <div class="Highscores__searchField flex">
          <input class="Highscores__inputPlayer flex" id="playerInput" :placeholder="this.searchPlaceholder" />
        </div>
        <div class="Highscores__searchButtons flex">
          <button class="Highscores__buttonSearch flex" type="button" @click="this.getPlayerData">
            Search
          </button>
          <button class="Highscores__buttonClear flex" type="button" @click="this.clearSearch">
            Clear
          </button>
        </div>
      </div>
      <div class="Highscores__accountTypes flex jc-se ac-c ff-r-w">
        <div class="flex jc-fs">
          <button type="button" @click="updateSearchParameters">Ironmen</button>
        </div>
        <div class="flex jc-c">
          <button type="button" @click="updateSearchParameters">Hardcore Ironmen</button>
        </div>
        <div class="flex jc-fe">
          <button type="button" @click="updateSearchParameters">Ultimate Ironmen</button>
        </div>
      </div>

      <div class="Highscores__groupAccounts flex jc-se ac-c ff-r-w">
        <div class="flex jc-fs">
          <button type="button" @click="updateSearchParameters">Group Ironmen</button>
        </div>
        <div class="flex jc-fe">
          <button type="button" @click="updateSearchParameters">Hardcore Group Ironmen</button>
        </div>
      </div>
        
      <div class="Highscores__groupSizes flex jc-c ac-c ff-r-nw" 
        v-if="accountType == '_ironman/group-ironman' || this.accountType == '_hardcore_ironman/group-ironman'">
        <div>
          <button type="button" @click="updateGroupSizes">2s</button>
        </div>
        <div>
          <button type="button" @click="updateGroupSizes">3s</button>
        </div>
        <div>
          <button type="button" @click="updateGroupSizes">4s</button>
        </div>
        <div>
          <button type="button" @click="updateGroupSizes">5s</button>
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

      <div v-else class="Highscores__default flex jc-c ac-c">
        <p>
          <b>Overall Highscores</b> | Top 50 Players
        </p>
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
        searchPlaceholder: 'Search Mains',
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
      this.searchPlaceholder = 'Search Mains';
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
    },
    updateGroupSizes(event) {
      let groupSize;
      const currentURL = this.accountType;
      if (event) {
        groupSize = event.target.innerHTML;
        groupSize = groupSize.slice(0, -1);
      }

      const groupIronURLs = '/?groupSize=' + groupSize
      const url = this.accountType + groupIronURLs
      this.accountType = url

      console.log(this.accountType);
    }
  },
}
</script>

<style type="text/css">
.Highscores {
  width: 100%;
  background-color: var(--color-whiteSmoke);
}
.Highscores h1 {
  font-family: 'Kanit', sans-serif;
  color: var(--color-grey);
  text-align: center;
}
.Highscores h6 {
  font-family: 'Kanit', sans-serif;
  font-weight: 200;
  color: var(--color-lightGrey);
  text-align: center;
  margin-top: 0;
}
.Highscores__searchField {
    margin-right: var(--margin-md);
}
.Highscores__inputPlayer {
  padding: var(--padding-sm);
  font-size: 1em;
  font-family: 'Kanit', sans-serif;
  font-weight: 200;
  min-width: 250px;
}
.Highscores__inputPlayer::placeholder {
  color: var(--color-grey);
}
.Highscores__buttonSearch {
  margin-right: var(--margin-md);
}
.Highscores__accountTypes {
  padding-top: var(--padding-md);
}
.Highscores__accountTypes > div {
  width: 33% !important;
}
.Highscores__accountTypes > div > button {
  background-color: var(--color-grey);
  color: var(--color-whiteSmoke);
  margin: var(--margin-sm) 0 var(--margin-sm) 0;
  width: 98%;
  font-size: 0.8em;
}
.Highscores__groupAccounts > div {
  width: 50% !important;
}
.Highscores__groupAccounts > div > button {
  background-color: var(--color-grey);
  color: var(--color-whiteSmoke);
  margin: var(--margin-sm) 0 var(--margin-sm) 0;
  width: 99%;
  font-size: 0.8em;
}
.Highscores__groupSizes div {
  margin: var(--margin-sm);
}
.Highscores__groupSizes button:focus {
  background-color: var(--color-grey);
  color: var(--color-whiteSmoke);
}
.Highscores__default {
  margin-top: var(--margin-md);
}
.Highscores__default > p {
  margin-bottom: var(--margin-md);
}
</style>
