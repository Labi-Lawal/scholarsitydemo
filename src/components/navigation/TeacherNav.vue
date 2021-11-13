<template>
    <nav class="teacher_nav">
        <div class="">
            <router-link to="/teacher/create">Create</router-link>
        </div>
        <div class="">
            <router-link to="/teacher/analyse">Analyse</router-link>
        </div>
        <div class="">
            <router-link to="/teacher/reports">Reports</router-link>
        </div>
        <div class="">
            <router-link to="/teacher/wallet">Wallet</router-link>
        </div>
        <div class="">
            <router-link to="/teacher/student-list">Student List</router-link>
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
    nav * {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    nav > div {
        width: calc(100%/7);
        cursor: pointer;
        color: rgba(0,0,0,0.66);
        font-weight: 500;
        font-size: 95%;
    }
    nav > div:hover {
        background-color: rgba(75, 75, 75, 0.04);
    }
    nav > div *{
        width: 100%;
        height: 100%;
    }
    nav .router-link-exact-active {
        border-bottom: 5px solid var(--blue-100);
    }
</style>