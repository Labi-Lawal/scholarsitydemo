<template>
    <div class="progress_indicator">
        <div 
            class="progress_percentage_wrapper"
        >
            <div class="progress_percentage">{{ percentage }}%</div>
            <div class="label"> Completed </div>
        </div>
        <div 
            class="progress_bar_frame"
            v-if=showBar
        >
            <div class="progress_bar_main" :style="{width: percentage + '%'}"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'progress-indicator',
    props: ['showBar', 'showPercentage', 'percentage']
});
</script>

<style scoped>
    .progress_indicator {
        height: 100%;
    }
    .progress_percentage_wrapper {
        width: 30%;
        height: 50%;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        color: rgb(37, 177, 77);
    }
    .progress_percentage {
        text-align: center;
        font-weight: 600;
        font-size: 130%;
    }
    .progress_percentage_wrapper div.label {
        font-size: 80%;
        margin-left: 5%;
    }
    .progress_bar_frame {
        border-radius: 10px;
        width: 70%;
        height: 20%;
        background: var(--paper-grey-200);
        overflow: hidden;
    }
    .progress_bar_main {
        background: rgb(37, 177, 77);
        height: 100%;
        transition: 0.5s;
    }
</style>