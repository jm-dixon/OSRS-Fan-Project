<template>
  <div class="searchResult">
    <p class="highscoresTitle">
      <b>{{ playerToSearch }}</b> | Highscores
    </p>

    <div class="highscoreTitles">
      <b>
        <h4>Total XP</h4><h4>Level</h4><h4>Rank</h4>
      </b>
    </div>

    <div class="highscoreTitles"
    v-for="skill in skillsArray" :key="skill.skillName">
      <p>
        {{ parseInt(skill.skillMetrics[2]).toLocaleString() }}
      </p>
      <p>
        {{ skill.skillMetrics[1] }}
      </p>
      <p>
        {{ parseInt(skill.skillMetrics[0]).toLocaleString() }}
      </p>
      <p>
        <b>{{ skill.skillName }}: </b>
      </p>
    </div>

    <br />

    <div class="highscoreTitles">
      <b>
        <h4>Score</h4><h4>Rank</h4>
      </b>
    </div>

    <div class="highscoreTitles"
    v-for="activity in activitiesArray" :key="activity.activityName">
      <p>
        {{ parseInt(activity.activityMetrics[1]).toLocaleString() }}
      </p>
      <p>
        {{ parseInt(activity.activityMetrics[0]).toLocaleString() }}
      </p>
      <p>
        <b>{{ activity.activityName }}: </b>
      </p>
    </div>

    <br />

    <div class="highscoreTitles">
      <b>
        <h4>Killcount</h4><h4>Rank</h4>
      </b>
    </div>

    <div class="highscoreTitles"
    v-for="boss in bossesArray" :key="boss.bossName">
      <p>
        {{ parseInt(boss.bossMetrics[1]).toLocaleString() }}
      </p>
      <p>
        {{ parseInt(boss.bossMetrics[0]).toLocaleString() }}
      </p>
      <p>
        <b>{{ boss.bossName }}: </b>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchResult',
  props: {
    playerToSearch: String,
  },
  data() {
    return {
      highscoreData: null,
      skillsArray: [],
      activitiesArray: [],
      bossesArray: [],
      testObject: null,
      skillList: [
        'Overall', 'Attack', 'Defence', 'Strength', 'Hitpoints', 'Ranged',
        'Prayer', 'Magic', 'Cooking', 'Woodcutting', 'Fletching', 'Fishing',
        'Firemaking', 'Crafting', 'Smithing', 'Mining', 'Herblore', 'Agility',
        'Thieving', 'Slayer', 'Farming', 'Runecrafting', 'Hunter', 'Construction'
      ],
      activitiesList: [
        'League Points', 'Bounty Hunter - Hunter', 'Bounty Hunter - Rogue',
        'Clue Scolls (all)', 'Clue Scolls (beginner)', 'Clue Scrolls (easy)',
        'Clue Scolls (medium)', 'Clue Scrolls (hard)', 'Cliue Scrolls (elite)',
        'Clue Scrolls (master)', 'Last Man Standing', 'PVP Arena', 'Soul Wars Zeal',
        'Guardians of the Rift'
      ],
      bossesList: [
        'Abyssal Sire', 'Alchemical Hydra', 'Barrows Brothers', 'Bryophyta',
        'Callisto', 'Cerberus', 'Chambers of Xeric', 'Chambers of Xeric (Challenge Mode)',
        'Chaos Elemental', 'Chaos Fanatic', 'Commander Zilyana', 'Corporeal Beast',
        'Crazy Archaeologist', 'Dagganoth Prime', 'Dagganoth Rex', 'Dagganoth Supreme',
        'Deranged Archaeologist', 'General Graador', 'Giant Mole', 'Grotesque Guardians',
        'Hespori', 'Kalphite Queen', 'King Black Dragon', 'Kraken', "Kree'Arra",
        "K'ril Tsutsaroth", 'Mimic', 'Nex', 'Nightmare', "Phosani's Nightmare",
        'Obor', 'Sarachnis', 'Scorpia', 'Skotizo', 'Tempoross', 'The Gauntlet',
        'The Corrupted Gauntlet', 'Theatre of Blood', 'Theatre of Blood (Hard Mode)',
        'Thermomnuclear Smoke Devil', 'TzKal-Zuk', 'TzTok-Jad', 'Venenatis', "Vet'ion",
        'Vorkath', 'Wintertodt', 'Zalcano', 'Zulrah'
      ]
    }
  },
  methods: {
    async getPlayerHighscores() {
      try {
        const { data } = await axios.get(`/proxy/getHighscores?player=${this.playerToSearch}`)
        this.formatOutput(data);
      } catch(error) {
        console.log(error);
      }
    },
    formatOutput(data) {
      let array =  data.split("\n");

      // NEW METHOD //
      const skillValues = array.slice(0, 24);
      const skillData = {};
      skillValues.forEach((value, index) => {
        // console.log(`Returning a value of ${value} for skill ${this.skillList[index]}`);
        skillData[this.skillList[index]] = value;
      });

      this.testObject = skillData;
      console.log(this.testObject);

      const activityValues = array.slice(24, 37);
      const activityData = {};
      activityValues.forEach((value, index) => {
        // console.log(`Returning a value of ${value} for skill ${this.activitiesList[index]}`);
        activityData[this.activitiesList[index]] = value;
      });

      const pvmValues = array.slice(38, 86);
      const pvmData = {};
      pvmValues.forEach((value, index) => {
        // console.log(`Returning a value of ${value} for skill ${this.bossesList[index]}`);
        pvmData[this.bossesList[index]] = value;
      });

      // END OF NEW METHOD //

      this.highscoreData = array;

      for(let i = 0; i < this.skillList.length; i++) {
        const obj = {
          skillName: this.skillList[i],
          skillMetrics: this.highscoreData[i].split(",")
        }
        this.skillsArray.push(obj);
      }

      for(let i = 0; i < this.activitiesList.length; i++) {
        const obj = {
          activityName: this.activitiesList[i],
          activityMetrics: this.highscoreData[i + this.skillList.length].split(",")
        }
        this.activitiesArray.push(obj);
      }

      for(let i = 0; i < this.bossesList.length; i++) {
        const obj = {
          bossName: this.bossesList[i],
          bossMetrics: this.highscoreData[i + this.skillList.length + this.activitiesList.length].split(",")
        }
        this.bossesArray.push(obj);
      }
    }
  },
  created() {
    this.getPlayerHighscores();
  }
}
</script>

<style scoped>
  .searchResult {
    width: 100%;
    box-shadow: 0 0 2px 2px lightgrey;
    border-radius: 5px;
    height: 450px;
    float: left;
    text-align: left;
    overflow: auto;
  }
  .searchResult p {
    padding: 0 0 0 1em;
    text-align: center;
  }
  .highscoresTitle {
    text-align: center;
    padding: 0 0 0 0 !important;
    text-decoration: underline;
    line-height: 30px;
  }
  .playerMetrics {
    line-height: 30px;
    margin: 0.5em auto;
    width: 95%;
  }
  .highscoreTitles {
    float: right;
    width: 100%;
    padding: 0 2em 0 0;
  }
  .highscoreTitles p {
    float: right;
    text-align: center;
    max-width: 55%;
    min-width: 15%;
    padding: 0 0.5em 0 0.5em;
  }
  .highscoreTitles h4 {
    float: right;
    text-align: center;
    width: 15%;
    padding: 0 0.5em 0 0.5em;
    text-decoration: underline;
  }
  .ifSkillIsMax {
    font-weight: bold;
  }
</style>
