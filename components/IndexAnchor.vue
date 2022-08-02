<template>
  <div class="indexAnchor">
    <!-- ADD ANCHOR LINKS TO THESE BLOCKS -->
    <div v-if="this.anchorPurpose == 'highscores'">
      <anchor-block
        blockTitle="Highscores & Leaderbaords"
        blockData="
        View in game statistics for any player or
        compare your own account against your
        friends
        "
        blockButtonLabel="Vist Page"
      />
    </div>
    <!-- ADD ANCHOR LINKS TO THESE BLOCKS -->
    <div v-else-if="this.anchorPurpose == 'bestiary'">
      <anchor-block
        blockTitle="Old School Runescape Bestiary"
        blockData="
          An open source project to build a
          complete Old School Runescape Bestiary
        "
        blockButtonLabel="Visit Page"
      />
    </div>
    <!-- ADD ANCHOR LINKS TO THESE BLOCKS -->
    <div v-else-if="this.anchorPurpose == 'project'">
      <anchor-block
        blockTitle="Project Information"
        blockData="
        Contribute to the project or view its source
        code and future development plans
        "
        blockButtonLabel="Github Repository"
      />
    </div>
  </div>
</template>

<script>
// imports
import AnchorBlock from './AnchorBlock.vue'

export default {
  components: { AnchorBlock },
  name: 'IndexAnchor',
  props: {
    anchorPurpose: String
  }
}
</script>
