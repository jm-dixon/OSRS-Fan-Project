<template>
  <div class="indexContent">
    <div class="border">
      <div class="indexBlockImage">
        <img class="blockIcon" src="~/assets/highscores-icon.jpg" />
      </div>

      <div class="indexBlockDescription">
        <p class="blockContent">
          <b>{{ blockTitle }}</b>
        </p>
        <p class="blockContent">
          {{ blockData }}
        </p>
      </div>

      <div class="indexBlockLink">
        <nuxt-link to="/highscores">
          <button class="blockButton" type="button">
            {{ buttonLabel }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighscoresBlock',
  props: {
    blockTitle: String,
    blockData: String,
    buttonLabel: String,
  }
}
</script>
