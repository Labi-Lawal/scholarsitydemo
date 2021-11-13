<template>
  <div class="home-page-banner">
    <div class="slider">
      <div class="slides">
        
          <div class="slide" v-for="(slide, index) in carouselDetails" :key="index" v-show="index == visibleCard">
            <router-link :to="slide.target_url">
              <!-- <img src="../../assets/hero_img.png"> -->

              <div class="overlay"></div>

              <video
                :src=source
                autoplay
                muted
              ></video>
            
            </router-link>
          </div>
        
        <div class="slide-buttons button-left" @click="prev()" v-show="visibleCard > 0"> 
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </div>

        <div class="slide-buttons button-right" @click="next()" v-show="visibleCard < carouselDetails.length-1">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "video-image-slider",
  props: ["carouselDetails"],
  data() {
    
    console.log(this.$refs.scroll);

    return { }
  },
  setup(props) {
    console.log(props.carouselDetails);

    const prev = () => {
      if (visibleCard.value > 0) {
        visibleCard.value--
      }
    }

    const next = () => {
      if (visibleCard.value < props.carouselDetails.length - 1) {
        visibleCard.value++
      }
    }

    const visibleCard = ref(0);

    return {
      next,
      visibleCard,
      prev,
      source: "https://res.cloudinary.com/labilawal/video/upload/v1636723470/video-1_nsjqvg.mp4"
    }
  }
});
</script>

<style scoped>
.home-page-banner {
  width: 100%;
  height: 90vh;
  background-color: #EDEDED;
}
.slider {
  height: 100%;
  width: 100%;
}
.slides {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.overlay {
  background: rgba(0, 0, 0, 0.473);
  width: 100%;
  height: 100%;
  position: absolute;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain; /******************/
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
div.slide-buttons {
  position: absolute;
  z-index: 100;
  top: 40%;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200%;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(37, 41, 49, 0.2);
  cursor: pointer;
}
div.button-left {
  left: 1%;
}
div.slide-buttons:hover {
  background-color: rgba(37, 41, 49);
  color: white;
}
div.button-right {
  right: 1%;
}

.home-page-banner *::selection {
  background: none;
}
</style>
