<template>
  <div>
    <div class="pageContainer">
      <p class="beastiaryCounters">
        Number of Bestiary
        <br />
        Entries Found:
        <b>{{ entriesFound }}</b>
      </p>
      <p class="beastiaryCounters">
        Number of Bestiary
        <br />
        Entries Missing:
        <b>{{ missingEntries }}</b>
      </p>
      <div class="beastiaryOutput">
          <p class="entriesInformation" v-for="entry in entriesList" :key="entry.beastiaryIndex">
              Bestiary Index : {{ entry.beastiaryIndex }} | Index For :  {{ entry.entryName }}
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
          missingEntries: null,
          entriesList: []
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
              const entry = {
                beastiaryIndex: increment,
                entryName: data.name
              }
              this.entriesList.push(entry);
              this.entriesFound++;
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
    },
    mounted() {
        this.loopThroughBeastiary();
    },
}
</script>
