<template>
  <div class="home-page-banner">
    <div class="slider">
      <div class="slides">
        
          <div class="slide" v-for="(slide, index) in carouselDetails" :key="index" v-show="index == visibleCard">
            <router-link :to="slide.target_url">
              <!-- <img src="../../assets/hero_img.png"> -->

              <div class="overlay">
                <div class="main_text">
                  {{ slide.mainText }}
                </div>
                <div class="sub_text">
                  {{ slide.subText }}
                </div>

                <div class="hero_btn_wrapper">
                  <ButtonPlainText
                    buttonText="Explore Courses"
                  />
                </div>
              </div>

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
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";
import SearchBar from "@/components/Form/SearchBar.vue";

export default defineComponent({
  name: "video-image-slider",
  components: { ButtonPlainText, SearchBar },
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
  background: rgba(0, 0, 0, 0.673);
  width: 100%;
  height: 100%;
  position: absolute;
} 
.main_text {
  margin-top: 18%;
  margin-left: 5%;
  font-weight: 700;
  font-size: 400%;
  width: 50%;
  color: white;
}
.sub_text {
  margin-left: 5%;
  font-weight: 400;
  font-size: 150%;
  width: 55%;
  color: white;
}
div.hero_btn_wrapper {
  margin-left: 5%;
  margin-top: 3%;
  width: 12%;
  height: 50px;
}
div.hero_btn_wrapper button {
  border-radius: 25px;
  background: none;
  border: 2px solid var(--blue-100);
  background: var(--blue-100);
  color: white;
  font-weight: 600;
  font-size: 110%;
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
  z-index: 1;
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
