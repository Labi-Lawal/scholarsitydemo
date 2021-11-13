<template>
    <section class="vertical_list">
        <BulletinBoardBlogsCard
            :list=10 
            v-if="contentType === 'blog-card'" 
            @buttonAction="openBlog"
        />
        <TestCard
            :list=10 
            v-if="contentType === 'tests'"
        />
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import BulletinBoardBlogsCard from "@/components/Card/BulletinBoardBlogCard.vue"
import TestCard from "@/components/Card/TestCard.vue"

export default defineComponent({
    name: 'vertical-list',
    components: { BulletinBoardBlogsCard, TestCard },
    props: ['contentType'],
    methods: {
        openBlog(index) {
            this.$emit('open-blog-action', index);
        }
    }

});
</script>

<style scoped>
.vertical_list {
    padding: 1% 0;
    width: 100%;
    margin: 0 auto;
}


</style>