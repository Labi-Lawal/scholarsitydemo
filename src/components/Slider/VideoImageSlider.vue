<template>
  <div class="home-page-banner">
    <div class="slider">
      <div class="slides">
        
          <div class="slide" v-for="(slide, index) in carouselDetails" :key="index" v-show="index == visibleCard">
            
            <div class="overlay">
              <div class="content">
                <div class="main_text">
                  {{ slide.mainText }}
                </div>
                
                <div class="sub_text">
                  {{ slide.subText }}
                </div>
                
                <SearchBar class="search_bar" />

                <ButtonIcon
                  :iconName="iconname[index]"
                  class="play_icon"
                  @click="togglePlay(index)"
                />
              </div>
            </div>

            <video
              :src=source
              :ref="'video' + index"
              :class="{
                zero: (index == 0) ?true :false,
                one: (index == 1) ?true :false
              }"
              autoplay
              muted
            ></video>
          
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
import ButtonIcon from "@/components/buttons/ButtonIcon.vue";
import SearchBar from "@/components/Form/SearchBar.vue";

export default defineComponent({
  name: "video-image-slider",
  components: { SearchBar, ButtonIcon },
  props: ["carouselDetails"],
  data() {
    var videoRef:any = null;

    return {
      videoRef,
      iconname: ['pause', 'pause']
    }
  },
  methods: {
    togglePlay(index:number) {
      if(index <= this.carouselDetails.length) {
        if(index == 0) this.videoRef = this.$refs.video0;
        if(index == 1) this.videoRef = this.$refs.video1;

        if(this.videoRef.paused){
           this.videoRef.play();
           this.iconname[index] = 'pause';
        }
        else { 
          this.videoRef.pause();
          this.iconname[index] = 'play';
        }
      }
    }
  },
  setup(props) {

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
      source: "https://res.cloudinary.com/labilawal/video/upload/v1636723470/video-1_nsjqvg.mp4",
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
  z-index: 1;
} 
.overlay .content {
  box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-top: 10%;
  margin-left: 5%;
  width: 45%;
  padding: 3%;
  position: relative;
}
.overlay .content::before {
  filter: blur(10px);
}
.main_text {
  font-weight: 700;
  font-size: 450%;
  color: white;
}
.sub_text {
  font-weight: 400;
  font-size: 180%;
  color: white;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain; /******************/
}
video {
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
div.slide-buttons {
  position: absolute;
  z-index: 2;
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

.search_bar {
  width: 65%;
  margin-top: 1%;
  height: 60px !important;
  border-radius: 15px !important;
  background: white !important;
  flex-direction: row-reverse;
}
.search_bar::v-deep input {
  width: 78%;
}
.search_bar::v-deep button {
  color: var(--blue-100);
  border-radius: 20%;
  width: 30px;
  height: 30px;
  margin: auto 0;
}
.search_bar.expand::v-deep button {
  color: white;
  background: var(--blue-100);
  border: 1px solid var(--blue-100);
  border-radius: 20%;
  width: 50px;
  height: 50px;
  margin: auto 0;
}

.search_bar.expand {
  width: 65%;
}
.search_bar.expand::v-deep input {
  width: 78%;
}
.search_bar.expand::v-deep button {
  width: 50px;
}

.home-page-banner *::selection {
  background: none;
}

.play_icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid white;
  background: white;
  position: absolute;
  right: -3%;
  bottom: 8.5%;
  cursor: pointer;
  font-size: 200%;
  color: var(--blue-100);
}
</style>
