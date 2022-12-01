<template>
  <div class="StatisticsBlock">
      <h1>
        <b>
          {{ blockTitle }}
        </b>
      </h1>
      <div class="StatisticsBlock__container flex jc-c">
        <div class="StatisticsBlock__block">
          <h3>
            <b>
              {{ playerCountTitle }}
            </b>
          </h3>
          <p>
            <b>
              {{ playerCount }}
            </b>
          </p>
          <h6>
            {{ playerSub }}
          </h6>
        </div>
        <div class="StatisticsBlock__block">
          <h3>
            <b>
              {{ totalAccountsTitle }}
            </b>
          </h3>
          <p>
            <b>
              {{ totalAccounts }}
            </b>
          </p>
          <h6>
            {{ totalSub }}
          </h6>
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

<style type="text/css">
.StatisticsBlock h1 {
  font-family: 'Kanit', sans-serif;
  color: var(--color-grey);
  text-align: center;
}
.StatisticsBlock__block {
  border: 2px solid var(--color-grey);
  padding: var(--padding-md);
  margin: 0.5em 0.2em 0.5em 0.2em;
}
.StatisticsBlock__block h3 {
  font-family: 'Kanit', sans-serif;
  color: var(--color-grey);
  text-align: center;
}
.StatisticsBlock__block p {
  font-size: 2em;
  text-align: center;
  margin: 0;
}
.StatisticsBlock__block h6 {
  font-size: 0.5em;
  width: 100%;
  text-align: center;
  color: var(--color-lightGrey);
}
</style>
