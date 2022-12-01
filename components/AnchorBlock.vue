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
      <button type="button">
        {{ blockButtonLabel }}
      </button>
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
    blockButtonLabel: String
  }
}
</script>

<style type="text/css">
.AnchorBlock h1 {
  font-family: 'Kanit', sans-serif;
  font-weight: 100;
  color: #272727;
}
.AnchorBlock p {
  font-size: 1.5em;
}
.AnchorBlock button {
  margin-right: 0.8em;
}
.AnchorBlock__conditional {
  background-color: var(--color-grey);
  color: var(--color-whiteSmoke);
}
</style>
