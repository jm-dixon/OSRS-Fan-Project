<template>
  <div class="content">

    <img class="blockIcon" src="~/assets/beastiary-icon.jpg" />

    <p class="blockContent">
      <b>{{ blockTitle }}</b>
    </p>

    <!-- block image -->

    <p class="blockContent">
      {{ blockData }}
    </p>

    <nuxt-link to="/beastiary">
      <button class="blockButton" type="button">
        {{ buttonLabel }}
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BeastiaryBlock',
  props: {
    blockTitle: String,
    blockData: String,
    buttonLabel: String
  }
}
</script>

<style scoped>
  .content {
    max-width: 35%;
    float: left;
    margin: 0.5em 0.8em 1em 0.8em;
    border: 1px solid lightgray;
    box-shadow: 0 0 1px 1px lightgrey;
    padding: 1em;
    text-align: center;
  }
  .blockIcon {
    float: left;
    width: 100%;
    padding: 0 0 0.5em 0;
  }
  .blockContent {
    font-size: 1em;
  }
  .blockContent b {
    font-size: 1.5em;
  }
  .blockButton {
    padding: 1em 1.5em 1em 1.5em;
    width: 100%;
  }
</style>

