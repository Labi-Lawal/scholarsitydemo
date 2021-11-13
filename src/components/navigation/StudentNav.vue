<template>
    <nav>
        <div class="">
            <router-link to="/student/categories">Categories</router-link>
        </div>
        <div class="">
            <router-link to="/student/analytics">Analytics</router-link>
        </div>
        <div class="">
            <router-link to="/student/compete-up">Compete-up</router-link>
        </div>
        <div class="">
            <router-link to="/student/contests">Contests</router-link>
        </div>
        <div class="">
            <router-link to="/student/wallet">Wallet</router-link>
        </div>
        <div class="">
            <router-link to="/student/store">Store</router-link>
        </div>
        <div class="">
            <router-link to="/student/bulletin-board">Bulletin Board</router-link>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'teacher-nav'
});
</script>

<style scoped>
    nav {
        display: flex;
        height: 100%;
    }
    nav * {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    nav > div {
        width: calc(100%/7);
        cursor: pointer;
        color: var(--paper-grey-500);
        font-weight: 500;
        font-size: 95%;
    }
    nav > div:hover {
        background-color: rgba(100, 100, 100, 0.02);
    }
    nav > div *{
        width: 100%;
        height: 100%;
    }
    nav .router-link-exact-active {
        border-bottom: 2px solid var(--blue-100);
        color: var(--blue-100);
    }
</style>