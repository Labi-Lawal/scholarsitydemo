<template>
    <div 
        class="bulletin_board_blog_card" 
        v-for="(item, index) in list" 
        :key=index
        @click="$emit('button-action', index)"
    >
        <div class="blog_title">Test {{ index }}</div>
        <div class="post_date_time">20-Oct-2021 20:06:55</div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    name: 'test-card',
    props: ['list'],
    methods: { }
});
</script>

<style scoped>
.bulletin_board_blog_card {
    border: 1px solid var(--paper-grey-100);
    color: var(--paper-grey-600);
    margin-top: 2%;
    font-weight: 600;
    width: 100%;
    height: 120px;
    cursor: pointer;
    box-shadow: 0px 1px 8px 3px var(--paper-grey-100);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.blog_title, .post_date_time{
    width: 100%;
    margin-left: 5%;
}
.blog_title {
    font-size: 150%;
}
</style>