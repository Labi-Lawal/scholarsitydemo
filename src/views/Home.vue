<template>
  <section class="categories">
      <Header class="header" />

      <section class="categories_body">
        
        <VideoImageSlider :carouselDetails="details" />
        
        <!-- TO DISPLAY IF USER ISNT SIGNED IN -->

        <section class="carousel_list" v-if="!$store.getters.isSignedIn">
          <div class="container_padding_5">
            <SectionTitle title="Boards"/>
            <HorizontalCarouselList :courses="courses" />
          </div>
        </section>

        <section class="carousel_list" v-if="!$store.getters.isSignedIn">
          <div class="container_padding_5">
            <SectionTitle title="Grades" />
            <HorizontalCarouselList :courses="courses" />
          </div>
        </section>

        <!-- TO DISPLAY IF USER IS SIGNED IN --> 

        <section class="carousel_list" v-if="$store.getters.isSignedIn">
          <div class="container_padding_5">
            <SectionTitle title="Popular Tests"/>
            <HorizontalCarouselList :courses="courses" />
          </div>
        </section>


        <!-- TO DISPLAY IF USER IS BOTH SIGNED AND NOT SIGNED IN  -->

        <section class="carousel_list">
          <div class="container_padding_5">
            <SectionTitle title="Courses" />
            <HorizontalCarouselList :courses="courses" />
          </div>
        </section>

         <section class="carousel_list">
          <div class="container_padding_5">
            <SectionTitle title="Contests" v-if="!$store.getters.isSignedIn"/>
            <SectionTitle title="Contests For You" v-if="$store.getters.isSignedIn"/>
            <HorizontalCarouselList :courses="courses" />
          </div>
        </section>

        <!-- TO DISPLAY IF USER IS SIGNED IN --> 

        <section class="carousel_list" v-if="$store.getters.isSignedIn">
          <div class="container_padding_5">
            <SectionTitle title="Your Recent Tests"/>
            <HorizontalCarouselList :courses="courses" />
          </div>
        </section>

      </section>
      
      <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header/Header.vue';
import VideoImageSlider from '@/components/Slider/VideoImageSlider.vue';
import SectionTitle from '@/components/Title/SectionTitle.vue';
import HorizontalCarouselList from "@/components/List/HorizontalCarouselList.vue";
import Footer from '@/components/Footer/SiteFooter.vue';

export default defineComponent({
    components: { Header, VideoImageSlider, HorizontalCarouselList, SectionTitle, Footer },
    data() {
      var details = [
        {
          target_url: 'google.com',
          ad_image: '../../assets/hero_img.png',
          mainText: 'Lorem ip sum dolor sit amet con sect etur adipi',
          subText: 'amet consectetur adipi scing elit',
          ref: 'vid'
          
        },
        {
          target_url: 'google.com',
          ad_image: '../../assets/hero_img.png',
          mainText: 'Lorem ipsum dolor sit amet consectetur adipi',
          subText: 'amet consectetur adipi scing elit',
          ref: 'video'
        }
      ],

      courses:any = []

      return {
        details,
        courses
      }
    },
    methods: {
      async fetchCourses() {
        await this.$store.dispatch('fetchcourses')
              .then((response)=> {
                this.courses = response; 
              })
              .catch((error)=> {
                  console.log(error.response);
              });
      }
    },
    async beforeMount() {
      await this.fetchCourses();
    }
});
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  z-index: 5;
  box-shadow: none;
}
header {
  background: none !important;
  color: white !important;
}
header .logo_wrapper {
  color: white;
}

header:deep(nav > div) {
  color: var(--paper-grey-300) !important;
}
header:deep(nav > div:hover) {
  color: white !important;
  font-weight: 500 !important;
}

header.fixed:deep(nav > div) {
  color: var(--paper-grey-500) !important;
}
header.fixed:deep(nav > div:hover) {
  color: var(--blue-100) !important;
  font-weight: 500 !important;
}

header:deep .search_bar {
  background: white !important;
  display: none;
}
header:deep .notification .icon_wrapper .icon,
header:deep .cart_indicator .icon {
  color: white !important;
}

header.fixed:deep .search_bar {
  background: var(--paper-grey-100) !important;
  display: unset;
}
header.fixed:deep .notification .icon_wrapper .icon,
header.fixed:deep .cart_indicator .icon  {
  color: var(--paper-grey-400) !important;
}
header.fixed:deep .bottom nav > div {
  color: var(--paper-grey-700);
}
header:deep nav .router-link-exact-active{
  color: white;
  border-color: white;
}



.carousel_list {
  padding: 3% 0;
}
</style>