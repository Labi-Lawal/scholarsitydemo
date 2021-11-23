<template>
    <div class="progress_indicator">
        <div class="progress_bar_frame">
            <div class="progress_bar_main" :style="{width: percentage + '%'}"></div>
        </div>
        <div class="progress_percentage">{{ percentage }}%</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'progress-indicator',
    props: ['percentage']
});
</script>

<style scoped>
    .progress_indicator {
        display: flex;
        align-items: center;
        height: 10px;
    }
    .progress_bar_frame {
        border-radius: 10px;
        width: 70%;
        height: 80%;
        background: var(--paper-grey-200);
        overflow: hidden;
    }
    .progress_bar_main {
        background: rgb(37, 177, 77);
        height: 100%;
        transition: 0.5s;
    }
    .progress_percentage {
        width: 30%;
        text-align: center;
        font-weight: 700;
        color: var(--paper-grey-500);
    }
</style>