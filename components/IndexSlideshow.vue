<template>
  <div class="slideshow">
    <img :src="this.currentSlide" />
    <div class="slideshowContent" v-if="this.modulusCalculation == 0">

    </div>
    <div class="slideshowContent" v-else-if="this.modulusCalculation == 1">

    </div>
    <div class="slideshowContent" v-else-if="this.modulusCalculation == 2">

    </div>
  </div>
</template>

<script>
// imports

export default {
  name: 'IndexSlideshow',
  data() {
    return {
      // image, pointer and timer for use within the image slideshow
      images: [ sliderOne, sliderTwo, sliderThree ],
      currentSlider: 0,
      rotationTime: null
    }
  },
  methods: {
    startSlideshowRotation() {
      // starts timer at every 5 seconds, runs function to change image showed every interval match
      this.timer = setInterval(() => {
        this.loadNextImage()
      }, 7000);
    },
    loadNextImage() {
      this.currentSlider++
    }
  },
  mounted() {
    // starts slideshow immediately upon component mount
    this.startSlideshowRotation()
  },
  computed: {
    modulusCalculation() {
      // modulus calculation for image slideshow
      return this.currentSlider % this.images.length;
    },
    currentSlide() {
      // returns index for current slideshow image
      return this.images[this.modulusCalculation];
    }
  }
}
</script>
