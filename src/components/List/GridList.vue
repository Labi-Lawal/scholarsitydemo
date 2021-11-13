<template>
    <section class="grid_list">
        <CourseCard :list=10 v-if="contentType === 'courses'"/>
        <ProductCard :list=15 @buttonAction="redeem" v-if="contentType === 'products'"/>
        <BulletinBoardCard :list=12 v-if="contentType === 'bulletin-board'" @buttonAction="emitButtonAction"/>
        <ContestCard :list=listLength v-if="contentType === 'contests'" />
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import CourseCard from "@/components/Card/CourseCard.vue";
import BulletinBoardCard from "@/components/Card/BulletinBoardCard.vue";
import ProductCard from "@/components/Card/ProductCard.vue";
import ContestCard from "@/components/Card/ContestCard.vue";

export default defineComponent({
    name: 'grid-list',
    components: { CourseCard, BulletinBoardCard, ProductCard, ContestCard },
    props: ['contentType', 'listLength'],
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
    grid-template-columns: auto auto auto auto;
    row-gap: 20px;
    column-gap: 20px;
    width: 100%;
}

</style>