<template>
    <div class="teacher_home_page">
        <Header class="header" />

        <section class="">
            <VideoImageSlider :carouselDetails="details" />
            
            <div class="why_choose_section">
                <div class="title">
                  Why Choose Scholarsity
                </div>
                <div class="all_boxes grid col_4">
                  
                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>
                  
                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>

                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>

                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>

                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>

                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>

                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>

                  <div class="box">
                    <div class="label">Lorem Ipsum</div>
                    <div class="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed viverra mauris eu dui venenatis, ac mollis neque placerat. 
                      Duis sed sodales nibh. 
                      Phasellus posuere augue id ipsum tincidunt, vitae vestibulum nulla facilisis.
                    </div>
                  </div>

                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header/Header.vue';
import VideoImageSlider from '@/components/Slider/VideoImageSlider.vue';
import Footer from '@/components/Footer/SiteFooter.vue';
  
export default defineComponent({
    components: { Header, VideoImageSlider, Footer },
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
        ];

        return { 
          details
        }
    }
})
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

.why_choose_section {
    padding: 5% 0;
}
.why_choose_section .title {
    text-align: center;
    font-size: 150%;
    font-weight: 500;
    padding: 3% 0;
    color: var(--paper-grey-700);
}

.all_boxes {
  width: 90%;
  margin: 0 auto;
}
.box .label {
  font-weight: 500;
  font-size: 110%;
  padding: 1% 2%;
  color: var(--paper-grey-800);
}
.box .body {
  font-weight: 90%;
  color: var(--paper-grey-600);
}

.grid {
  display: grid;
  justify-content: space-between;
  --gap: 60px;
}
.col_4 {
  row-gap: var(--gap);
  grid-template-columns: calc(100% / 5) calc(100% / 5) calc(100% / 5) calc(100% / 5);
}
</style>