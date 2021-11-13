<template>
  <div class="carousel_wrapper">
    <div class="scroll_btn left" @click="scroll(-250)">
      <FontAwesomeIcon :icon="['fas', 'angle-left']" />
    </div>
    <div class="horizontal_carousel_list" ref="scroll">
      <CourseCard  
          v-for="(course, index) in courses"
          :key="index"
          :title="course.title"
          :tutor="course.tutor"
          :ratings="course.averageRatings"
          :ratingsCount="course.ratingsCount"
          :avgRatings="course.avg_ratings"
          :price="course.price"
      />
    </div>
    <div class="scroll_btn right" @click="scroll(+250)">
      <FontAwesomeIcon :icon="['fas', 'angle-right']" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CourseCard from "@/components/Card/CourseCard.vue";
// import ProductCard from "@/components/Card/ProductCard.vue";

export default defineComponent({
    name: 'horizontal-carousel-list',
    components: { CourseCard, },
    props: ['contentType', 'courses'],
    data(){
      return {
        scrollPosition: 0
      }
    },
    methods: {
      scroll(offset) {
        var scrollContainer = this.$refs.scroll;
        scrollContainer.scrollLeft += offset;
      },
    },

});
</script>

<style scoped>
.carousel_wrapper {
  height: 450px;
  position: relative;
}
.carousel_wrapper:hover .scroll_btn {
  opacity: 1;
  transition: 0.5s;
}
.horizontal_carousel_list {
  padding: 0 1%;
  height: 100%;
  justify-items: center;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
}
.horizontal_carousel_list::-webkit-scrollbar {
    background: none;
}
.scroll_btn {
  opacity: 0;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--paper-grey-700);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 110%;
  cursor: pointer;
}
.right.scroll_btn {
  right: -2%; 
  top: 45%;
}
.left.scroll_btn {
  left: -2%; 
  top: 45%;
}


</style>