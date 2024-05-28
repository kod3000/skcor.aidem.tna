<template>
  <div class="carousel-container h-full">
    <transition-group name="carousel" tag="div" class="carousel" style="height: 25vh">
      <div
          v-for="(item, index) in displayItems"
          :key="item.id"
          :class="['carousel-item', { 'carousel-item-zoomed': index === focusedIndex }, { 'shadow-lg media-centered ': index === focusedIndex }]"
          :style="{ marginRight: index !== displayItems.length - 1 ? '30px' : '0' }, 'height: 25vh'"
      >
        <img :src="item.src" :alt="item.alt" style="padding: 2px; border-radius: 5px;" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, src: 'webrtc.png', alt: 'Image 1' },
        { id: 2, src: 'webplayerfull.png', alt: 'Image 2' },
        { id: 3, src: 'spaceport.png', alt: 'Image 3' },
        { id: 4, src: 'circle.png', alt: 'Image 4' },
        { id: 5, src: 'sample.png', alt: 'Image 5' },
      ],
      displayLimit: 5,
      displayItems: [],
      focusedIndex: 2,
      intervalId: null,
    };
  },
  created() {
    this.initializeDisplayItems();
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    initializeDisplayItems() {
      this.displayItems = this.items.slice(0, this.displayLimit);
    },
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.cycleImages();
      }, 3000);
    },
    cycleImages() {
      setTimeout(() => {
        this.displayItems.shift();
      }, 2000);

      setTimeout(() => {
        this.displayItems.push(this.items.shift());
        this.items.push(this.displayItems[this.displayItems.length - 1]);
      }, 2500);
    },
  },
};
</script>
<style scoped>
.carousel-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item {
  transition: transform 2s ease;
}

.carousel-item-zoomed {
  transform: scale(1.4);
}

.carousel-enter-active
{
  transition: opacity 2s;
}
.carousel-leave-active {
  transition: opacity 2s;
}

.carousel-enter,
.carousel-leave-to /* .carousel-leave-active in <2.1.8 */
{
  opacity: 0;
}

.media-centered {
  border-bottom: 1px solid red;
}


</style>
