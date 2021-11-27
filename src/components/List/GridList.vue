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

        <TestCard
          v-for="(test, index) in tests"
          :key="index"
          :index=index
          :title="test.title"
          :course="test.course"
          :duration="test.duration"
          :progress="test.progress"
          :isMenuVisible="test.showMenu"
          @showOptionAction=showOption
          @hideOptionAction=hideOption
        />

        <!-- <ProductCard :list=15 @buttonAction="redeem" v-if="contentType === 'products'"/>
        <BulletinBoardCard :list=12 v-if="contentType === 'bulletin-board'" @buttonAction="emitButtonAction"/>
        <ContestCard :list=listLength v-if="contentType === 'contests'" /> -->
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CourseCard from "@/components/Card/CourseCard.vue";
import TestCard from "@/components/Card/TestCard.vue";

export default defineComponent({
    name: 'grid-list',
    components: { CourseCard, TestCard },
    props: ['columnAmnt', 'courses', 'tests'],
    data() {
        return { }
    },
    methods: {
        redeem(index) {
            this.$emit('redeem-action', index);
        },
        emitButtonAction(index) {
            this.$emit('openBoardAction', index)
        },
        showOption(index) {
            this.$emit('show-menu-option', index);
        },
        hideOption(index) {
            this.$emit('hide-menu-option', index);
        }
    }
});
</script>

<style scoped>
.grid_list {
    padding: 1% 0;
    display: grid;
    align-items: center;
    row-gap: 20px;
    column-gap: 20px;
    width: 100%;
}
.four_columns {
    --grid-frame-width: calc(100% - calc(20px * 3));
    grid-template-columns: calc(var(--grid-frame-width)/4) calc(var(--grid-frame-width)/4) calc(var(--grid-frame-width)/4) calc(100%/4);
}
.three_columns {
    --grid-frame-width: calc(100% - calc(20px * 2));
    grid-template-columns: calc(var(--grid-frame-width)/3) calc(var(--grid-frame-width)/3) calc(var(--grid-frame-width)/3);
}
.two_columns {
    --grid-frame-width: calc(100% - calc(20px * 1));
    grid-template-columns: calc(var(--grid-frame-width)/2) calc(var(--grid-frame-width)/2) calc(var(--grid-frame-width)/2);
}
</style>