<template>
    <section 
        :class="{
            grid_list: true,
            four_columns: (columnAmnt == 4) ?true :false,
            three_columns: (columnAmnt == 3) ?true :false,
            two_columns: (columnAmnt == 2) ?true :false
        }"
    >
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

        <!-- <ProductCard :list=15 @buttonAction="redeem" v-if="contentType === 'products'"/>
        <BulletinBoardCard :list=12 v-if="contentType === 'bulletin-board'" @buttonAction="emitButtonAction"/>
        <ContestCard :list=listLength v-if="contentType === 'contests'" /> -->
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CourseCard from "@/components/Card/CourseCard.vue";

export default defineComponent({
    name: 'grid-list',
    components: { CourseCard },
    props: ['columnAmnt', 'courses'],
    data() {
        return { }
    },
    methods: {
        redeem(index) {
            this.$emit('redeem-action', index);
        },
        emitButtonAction(index) {
            this.$emit('openBoardAction', index)
        }
    }
});
</script>

<style scoped>
.grid_list {
    padding: 1% 0;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;
    width: 100%;
}
.four_columns {
    grid-template-columns: auto auto auto auto;
}
.three_columns {
    grid-template-columns: auto auto auto;
}
.two_columns {
    grid-template-columns: auto auto;
}
</style>