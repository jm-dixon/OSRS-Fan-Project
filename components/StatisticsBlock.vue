<template>
  <div class="anchorBlock">
    <div class="indexContainer">
      <p class="statisticsTitle">
        <b>
          {{ blockTitle }}</b>
      </p>
      <div class="statisticsBlock">
        <p class="statisticsTitle">
          <b>
            {{ playerCountTitle }}</b>
        </p>
        <p class="statisticsData">
          <b>
            {{ playerCount }}
          </b>
        </p>
        <p class="statisticsSubTitle">
          {{ playerSub }}
        </p>
      </div>
      <div class="statisticsBlock">
        <p class="statisticsTitle">
          <b>
            {{ totalAccountsTitle }}
          </b>
        </p>
        <p class="statisticsData">
          <b>
            {{ totalAccounts }}
          </b>
        </p>
        <p class="statisticsSubTitle">
          {{ totalSub }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// imports
import axios from 'axios'

export default {
  name: 'StatisticsBlock',
  props: {
    blockTitle: String,
  },
  data() {
    return {
      playerCountTitle: 'Players Online',
      playerSub: '* counts both Old School Runescape & Runescape 3 players *',
      totalAccountsTitle: 'Total Accounts',
      totalSub: '* total number of accounts that can access any form of Runescape *',
      playerCount: null,
      totalAccounts: null
    }
  },
  methods: {
    /* MAKE THIS FIRE AT THE EXACT SAME TIME AS THE OTHER ONE ON INDEX PAGE */
    /* OR REMOVE THE ONE AT TOP OF INDEX */
    async getCurrentPlayerCount() {
      try {
        const { data } = await axios.get(`/proxy/playerCount`)
        this.playerCount = data.toLocaleString();
        let timeout = setTimeout(() => {
          this.getCurrentPlayerCount();
          clearTimeout(timeout); }, 3250)
      } catch(error) {
        console.log(error);
      }
    },
    async getTotalAccounts() {
      try {
        const { data } = await axios.get(`/proxy/totalAccounts`)
        this.totalAccounts = data.accounts.toLocaleString();
        let timeout = setTimeout(() => {
          this.getTotalAccounts();
          clearTimeout(timeout); }, 3250)
        } catch(error) {
          console.log(error);
        }
      }
    },
  mounted() {
    this.getCurrentPlayerCount();
    this.getTotalAccounts();
  }
}
</script>
