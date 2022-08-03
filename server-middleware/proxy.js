import express from 'express'
import axios from 'axios'

const app = express()

const getCurrentPlayerCount = async() => {
  try {
    const { data } = await axios.get(`http://www.runescape.com/player_count.js?varname=iPlayerCount&callback=jQuery000000000000000_0000000000&_=${Date.now()}`)

    return data.match(/\(([^)]+)\)/)[1];
  } catch(error) {
    console.error(error);
  }
}

const getPlayerHighscores = async(player) => {
  try {
    const { data } = await axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${player}`)

    return data
  } catch(error) {
    console.log(error);
  }
}

const getBeastiaryEntry = async(beastid) => {
  try {
    const { data } = await axios.get(`https://secure.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=${beastid}`)

    return data
  } catch(error) {
    console.log(error);
  }
}

const getTotalAccounts = async() => {
  try {
    const { data } = await axios.get(`https://secure.runescape.com/m=account-creation-reports/rsusertotal.ws`)

    return data
  } catch(error) {
    console.log(error);
  }
}

app.get('/playerCount', async(req, res) => {
  const playerCount = await getCurrentPlayerCount()
  res.send(playerCount)
})

app.get('/getHighscores', async(req, res) => {
  const playerHighscores = await getPlayerHighscores(req.query.player)
  res.send(playerHighscores)
})

app.get('/testBeastiaryEntry', async(req, res) => {
  const beastiaryEntry = await getBeastiaryEntry(req.query.beastid)
  res.send(beastiaryEntry)
})

app.get('/totalAccounts', async(req, res) => {
  const totalAccounts = await getTotalAccounts()
  res.send(totalAccounts)
})

export default app
