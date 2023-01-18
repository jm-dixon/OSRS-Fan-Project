<template>
  <div class="SearchResult flex jc=c ac-c ff-c-nw">
    <p class="SearchResult__heading">
      <b>{{ playerToSearch }}</b> | Highscores
    </p>

    <table>
      <tr>
        <th>Total XP</th>
        <th>Level</th>
        <th>Rank</th>
      </tr>
    </table>

    <table>
      <tr>
        <th>Rank</th>
        <th>Score</th>
      </tr>
    </table>

    <table>
      <tr>
        <th>Rank</th>
        <th>Killcount</th>
      </tr>
    </table>

    <div class="SearchResult__metrics flex jc-fe ff-r-nw">
        <div>
          <b>
            <h4>Total XP</h4>
          </b>
        </div>
        <div>
          <b>
            <h4>Level</h4>
          </b>
        </div>
        <div>
          <b>
            <h4>Rank</h4>
          </b>
        </div>
    </div>

    <div class="SearchResult__results flex jc-fe ff-r-nw"
    v-for="skill in skillsArray" :key="skill.skillName">
      <div>
        <p>
          <b>{{ skill.skillName }}: </b>
        </p>
      </div>
      <div>
        <p>
          {{ parseInt(skill.skillMetrics[0]).toLocaleString() }}
        </p>
      </div>
      <div>
        <p>
          {{ skill.skillMetrics[1] }}
        </p>
      </div>
      <div>
        <p>
          {{ parseInt(skill.skillMetrics[2]).toLocaleString() }}
        </p>
      </div>
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
// imports
import axios from 'axios'

import skills from '../assets/json/skills.json'
import activities from '../assets/json/activities.json'
import bosses from '../assets/json/bosses.json'

export default {
  name: 'SearchResult',
  props: {
    playerToSearch: String,
    accountType: String
  },
  data() {
    return {
      skills: skills,
      activities: activities,
      bosses: bosses,

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
        const { data } = await axios.get(`/proxy/getHighscores?player=${this.playerToSearch}&account=${this.accountType}`)
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

<style>
.SearchResult__heading {
  text-align: center;
  font-size: 1.5em;
}
.SearchResult__metrics {
  font-size: 1.2em;
  text-align: right;
}
.SearchResult__metrics > div {
  width: 25%;
}
.SearchResult__results > div {
  width: 25%;
}
.SearchResult__results > div > p {
  text-align: right;
}
</style>
