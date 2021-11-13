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
import Header from '@/components/Header.vue';
import VideoImageSlider from '@/components/Slider/VideoImageSlider.vue';
import SectionTitle from '@/components/Title/SectionTitle.vue';
import HorizontalCarouselList from "@/components/List/HorizontalCarouselList.vue";
import Footer from '@/components/Footer/Footer.vue';

export default defineComponent({
    components: { Header, VideoImageSlider, HorizontalCarouselList, SectionTitle, Footer },
    data() {
      var details = [
        {
          target_url: 'google.com',
          ad_image: '../../assets/hero_img.png' 
          
        },
        {
          target_url: 'google.com',
          ad_image: '../../assets/hero_img.png' 
          
        }
      ],

      courses = [
        {
          title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
          tutor: 'Jose Portilla',
          ratingsCount: 52,
          avg_ratings: 4.8,
          price: 84.99
        },
        {
          title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
          tutor: 'Jose Portilla',
          ratingsCount: 52,
          avg_ratings: 4.8,
          price: 84.99
        },
        {
          title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
          tutor: 'Jose Portilla',
          ratingsCount: 52,
          avg_ratings: 4.8,
          price: 84.99
        },
        {
          title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
          tutor: 'Jose Portilla',
          ratingsCount: 52,
          avg_ratings: 4.8,
          price: 84.99
        },
        {
          title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
          tutor: 'Jose Portilla',
          ratingsCount: 52,
          avg_ratings: 4.8,
          price: 84.99
        },{
          title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
          tutor: 'Jose Portilla',
          ratingsCount: 52,
          avg_ratings: 4.8,
          price: 84.99
        }
      ]
      return {
        details,
        courses
      }
    }
});
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  z-index: 1;
  box-shadow: none;
}
header {
  background: none !important;
  color: white !important;
}
header .logo_wrapper {
  color: white;
}
header::v-deep .search_bar {
  background: white !important;
}
header::v-deep .notification .icon_wrapper .icon {
  color: white !important;
}
header::v-deep .bottom nav > div {
  color: white;
}

header::v-deep .search_bar {
  background: white !important;
}
header::v-deep .notification .icon_wrapper .icon {
  color: white !important;
}

header.fixed {
  position: fixed;
  top: 0;
  background: white !important;
  color: var(--paper-grey-800) !important;
  box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
}
header.fixed::v-deep .search_bar {
  background: var(--paper-grey-100) !important;
}
header.fixed::v-deep .notification .icon_wrapper .icon {
  color: var(--paper-grey-400) !important;
}
header.fixed::v-deep .bottom nav > div {
  color: var(--paper-grey-700);
}

.categories_body {
  
}
.carousel_list {
  padding: 3% 0;
}
</style>