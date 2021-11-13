<template>
    <div class="bulletin_board_blog_details">
        <font-awesome-icon 
            :icon="['fas', 'arrow-left']" 
            class="icon"
            @click="$emit('close')"
        />
        <div class="bulletin_board_blog_details_body"> 
            <div class="blog_title">Blog {{ blogDets }}</div>
            <div class="post_date_time">20-Oct-2021 20:06:55</div>
            <div class="details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    name: 'bulletin-board-blog-details',
    props: ['blogDets'],
    methods: {
   
    }
});
</script>

<style scoped>
.bulletin_board_blog_details {
    width: 90%;
    margin: 0 auto;
    display: flex;
}
.blog_title, .post_date_time{
    width: 100%;
}
.blog_title {
    font-size: 170%;
}
.post_date_time{
    color: grey;
}
.details {
    margin-top: 5%;
    color: var(--paper-grey-700);
    line-height: 150%;
}
.icon {
    width: 10%;
    cursor: pointer;
}
</style>