<template>
  <div class="anchorBlock">
    <div class="indexContainer">
      <p class="anchorTitle">
        <b>{{ blockTitle }}</b>
      </p>
      <p class="anchorData">
        {{ blockData }}
      </p>
      <button type="button">
        {{ blockButtonLabel }}
      </button>
      <!-- ADD CONTRIBUTE SECTION WHERE USERS CAN UPLOAD OBJECT FILES FROM RUNELITE -->
      <button class="conditionalButton" type="button" v-if="this.blockTitle == 'Old School Runescape Bestiary'">
        Contribute
      </button>
      <!-- ADD CONTRIBUTE SECTION WHERE USERS CAN SUBMIT THEIR INTEREST TO BE A CONTRIBUTOR -->
      <button class="conditionalButton" type="button" v-if="this.blockTitle == 'Project Information'">
        Contribute
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnchorBlock',
  props: {
    blockTitle: String,
    blockData: String,
    blockButtonLabel: String
  }
}
</script>
