<template>
    <section class="side_bar">
        <nav>
            <div 
                class="side_bar_nav_item"
                v-for="(item, index) in navList"
                :key=index
            >   
                <router-link :to="item.link">
                    {{ item.title }}
                </router-link>
            </div>
        </nav>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'side-bar',
    components: {  },
    props: ['navList']
});
</script>

<style scoped>
.side_bar {
    width: 100%;
    height: 100%;
    background: var(--paper-light-blue-200);
    border-radius: 3px;
    padding: 5% 0%;
}
nav {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.side_bar_nav_item {
    width: 100%;
    text-transform: capitalize;
    font-weight: 600;
    color: blue;
}
.side_bar_nav_item * {
    display: flex;
    align-items: center;
    padding-left: 15%;
    width: calc(100% - 18%);
}
.side_bar_nav_item:hover {
    text-decoration: underline;
}
.side_bar_nav_item *.router-link-exact-active{
    border-right: 10px solid white;
}
</style>