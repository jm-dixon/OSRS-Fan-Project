<template>
  <div class="IndexAnchor">
    <!-- ADD ANCHOR LINKS TO THESE BLOCKS -->
      <anchor-block v-if="this.anchorPurpose == 'highscores'"
        blockTitle="Highscores & Leaderboards"
        blockData="
        View in game statistics for any player or
        compare your own account against your
        friends
        "
        blockButtonLabel="Vist Page"
      />
    <!-- ADD ANCHOR LINKS TO THESE BLOCKS -->
      <anchor-block v-else-if="this.anchorPurpose == 'bestiary'"
        blockTitle="Old School Runescape Bestiary"
        blockData="
          An open source project to build a
          complete Old School Runescape Bestiary
        "
        blockButtonLabel="Visit Page"
      />
    <!-- ADD ANCHOR LINKS TO THESE BLOCKS -->
    <!-- TEST PUSH -->
      <anchor-block v-else-if="this.anchorPurpose == 'project'"
        blockTitle="Project Information"
        blockData="
        Contribute to the project or view its source
        code and future development plans
        "
        blockButtonLabel="Github Repository"
      />
      <statistics-block v-else-if="this.anchorPurpose = 'statistics'"
        blockTitle="Game Statistics"
      />
  </div>
</template>

<script>
// imports
import AnchorBlock from './AnchorBlock.vue'
import StatisticsBlock from './StatisticsBlock.vue'

export default {
  components: { AnchorBlock, StatisticsBlock },
  name: 'IndexAnchor',
  props: {
    anchorPurpose: String
  }
}
</script>

<style type="text/css">
.IndexAnchor {
  min-width: 35%;
  max-width: 35%;
  padding: 1.5em 0 1.5em 0;
}
</style>