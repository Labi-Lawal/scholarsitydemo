<template>
    <section class="bulletin_board_blogs">
        <div class="heading">
            <font-awesome-icon 
                :icon="['fas', 'arrow-left']" 
                class="icon"
                v-if="!isBlogOpen"
                @click="$emit('close')"
            />
            <div class="title">Board {{ bulletinBoardDets }}</div>
        </div>
        <div class="blogs_list">
            <VerticalList contentType="blog-card" v-if="!isBlogOpen" @openBlogAction="openBlogDetails" />
            <BulletinBoardBlogDetails :blogDets="selectedBlog" v-if="isBlogOpen" @close="close" />
        </div>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import VerticalList from "@/components/List/VerticalList.vue";
import BulletinBoardBlogDetails from "@/components/BulletinBoardBlogDetails.vue";

export default defineComponent({
    name: 'bulletin-board-blogs',
    components: { VerticalList, BulletinBoardBlogDetails },
    props: ['bulletinBoardDets'],
    data() {
        var selectedBlog;

        return {
            selectedBlog,
            isBlogOpen: false
        }
    },
    methods: {
        openBlogDetails(index) {
            this.selectedBlog = index;
            this.isBlogOpen = true;
        },
        close() {
            this.isBlogOpen = false;
        }
    }
});
</script>

<style scoped>
.bulletin_board_blogs {
    
}
.heading {
    display: flex;
    align-items: center;
}
.heading .icon {
    width: 10%;
    cursor: pointer;
}
.heading .title {
    padding: 2% 0;
    width: 55%;
    font-weight: 700;
    font-size: 180%;
    margin-left: auto;
}
</style>