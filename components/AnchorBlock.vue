<template>
  <div class="AnchorBlock">
      <h1>
        <b>
          {{ blockTitle }}
        </b>
      </h1>
      <p>
        {{ blockData }}
      </p>
      <nuxt-link v-if="!this.buttonLink.includes('https')" :to="`${ buttonLink }`" target="_blank">
        <button class="AnchorBlock__button" type="button">
          {{ blockButtonLabel }}
        </button>
      </nuxt-link>
      <a v-if="this.buttonLink.includes('https')" :href="`${ buttonLink }`" target="_blank">
        <button class="AnchorBlock__button" type="button">
          {{ blockButtonLabel }}
        </button>
      </a>
      <!-- ADD CONTRIBUTE SECTION WHERE USERS CAN UPLOAD OBJECT FILES FROM RUNELITE -->
      <button class="AnchorBlock__conditional" type="button" v-if="this.blockTitle == 'Old School Runescape Bestiary'">
        Contribute
      </button>
      <!-- ADD CONTRIBUTE SECTION WHERE USERS CAN SUBMIT THEIR INTEREST TO BE A CONTRIBUTOR -->
      <button class="AnchorBlock__conditional" type="button" v-if="this.blockTitle == 'Project Information'">
        Contribute
      </button>
  </div>
</template>

<script>
export default {
  name: 'AnchorBlock',
  props: {
    blockTitle: String,
    blockData: String,
    buttonLink: String,
    blockButtonLabel: String
  }
}
</script>

<style type="text/css">
.AnchorBlock h1 {
  font-family: 'Kanit', sans-serif;
  font-weight: 100;
  color: var(--color-grey);
}
.AnchorBlock p {
  font-size: 1.5em;
}
.AnchorBlock__button {
  margin-right: 0.8em;
}
.AnchorBlock__button:hover {
  background-color: var(--color-neruoscriptBlue);
  color: var(--color-whiteSmoke);
  transition: .8s ease;
}
.AnchorBlock__button:not(:hover) {
  transition: .5s ease;
}
.AnchorBlock__conditional {
  background-color: var(--color-grey);
  color: var(--color-whiteSmoke);
}
.AnchorBlock__conditional:hover {
  background-color: var(--color-neruoscriptBlue);
  transition: .8s ease;
}
.AnchorBlock__conditional:not(:hover) {
  transition: .5s ease;
}
</style>
