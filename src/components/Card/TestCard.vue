<template>
    <div 
        class="test_card" 
        @click="$emit('button-action', index)"
    >
        <div class="top">
            <div class="course_title">{{ course }}</div>
            <div class="menu_option">
                <FontAwesomeIcon :icon="['fas', 'ellipsis-h']" />
            </div>
        </div>
        <div class="test_title">{{ title }}</div>
        <div class="bottom">
            <div class="progress_indicator_wrapper">
                <ProgressIindicator 
                    :percentage=progress
                />
            </div>
            <div class="">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ProgressIindicator from "@/components/ProgressIndicator.vue";

export default defineComponent ({
    name: 'test-card',
    props: ['title', 'course', 'progress'],
    components: { ProgressIindicator },
    methods: { }
});
</script>

<style scoped>
    .test_card {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 10px 1px;
        padding: 4%;
        border-radius: 10px;
        height: 200px;
        position: relative;
    }
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 15%;
    }
    .course_title {
        margin: auto 0;
        width: 85%;
        font-size: 100%;
        font-weight: 600;
        color: var(--paper-grey-500);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-clamp: 1;
    }
    .menu_option {
        display: flex;  
        align-items: center;
        width: 15%;
        height: 100%;
        color: var(--paper-grey-400);
        cursor: pointer;
        border: 1px solid var(--paper-grey-200);
        border-radius: 5px;
        justify-content: center;
    }
    .test_title {
        margin-top: 5%;
        color: var(--paper-grey-500); 
        font-weight: 600;
        font-size: 160%;
    }

    .bottom {
        position: absolute;
        bottom: 0;
        height: 20%;
        width: 100%;
    }
    .progress_indicator_wrapper {
        width: 80%;
    }
</style>