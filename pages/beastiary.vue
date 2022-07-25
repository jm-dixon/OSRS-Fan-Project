<template>
  <div>
    <div class="pageContainer">
      <p class="beastiaryCounters">Number of Beastiary <br />Entries Found: <br />{{ entriesFound }}</p>
      <p class="beastiaryCounters">Number of Beastiary <br />Entries Missing: <br />{{ missingEntries }}</p>

      <div class="beastiaryOutput">
          <p class="entriesInformation" v-if="this.entriesFound">
              Hello World!
          </p>
          <p class="entriesInformation" v-else-if="this.missingEntries">
              Hello World
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    components: {  },
    name: 'RunescapeBeastiary',
    props: {
        /* No Props */
    },
    data() {
        return {
          entriesFound: null,
          missingEntries: null
        }
    },
    computed: {
        /* No Computed */
    },
    methods: {
      async loopThroughBeastiary() {
        let increment = 0;
        try {
          while(true) {
            const { data } = await axios.get(`/proxy/testBeastiaryEntry?beastid=${increment}`)

            if (Object.keys(data).length) {
              console.log(`Beastiary entry found at increment: ${increment} : for :  ${data.name}`);
              this.entriesFound++
            } else if (!Object.keys(data).length) {
              console.log(`Beastiary entry missing at increment: ${increment}`);
              this.missingEntries++
            }
            increment++;
          }
        } catch(error) {
          console.log(error);
        }
      },

      /* async findTotalBeastiaryEntries() {
        try {
          for(let i = 0; i < 16000; i++) {
            const { data } = await axios.get(`/proxy/testBeastiaryEntry?beastid=${i}`)

            if (data != null) {
              console.log(`Beastiary entry found at position ${i}`);
            } else if (data === null) {
              console.log(`No entry found in Beastiary at position ${i}`);
            }
          }
        } catch(error) {
          console.log(error);
        }
      } */
    },
    mounted() {
        // this.findTotalBeastiaryEntries();
        this.loopThroughBeastiary();
    },
}
</script>

<style scoped>
  .pageContainer {
    width: 35%;
    margin: 0 auto;
  }
  .beastiaryCounters {
    float: left;
    width: 50%;
    text-align: center;
    padding: 1em 0 1em 0;
    font-size: 1em;
  }
  .beastiaryOutput {
    float: left;
    width: 100%;
    border: 1px solid black;
    padding: 1em 1em 1em 1em;
  }
  .entriesInformation {
    width: 50%;
    float: left;
  }
</style>
