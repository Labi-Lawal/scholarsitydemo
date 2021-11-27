<template>
    <div class="progress-indicator">
        <div class="bar">
            <div 
                class="progress_indicator_wrapper"
                :style="{
                    width: detProgress() + '%'
                }"
            >
            </div>
            <div 
                v-for="(section, index) in sections"
                class="number" 
                :class="{ 
                    fill: (index < currentSectionIndex ) ? true : false,
                    partial_fill: (index === currentSectionIndex ) ? true : false 
                }"
                :key="index" > 
                    <div 
                        class="text"
                        v-if="index > currentSectionIndex || index === currentSectionIndex"
                    >
                       {{ index + 1 }}
                    </div>
                    <FontAwesomeIcon 
                        :icon="['fas', 'check']"
                        v-if="index < currentSectionIndex"
                    />
                    <div 
                        class="label"
                    >
                        {{sections[index].title }}
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "progress-indicator",
    components: { },
    props: ['sections', 'currentSectionIndex'],
    data() {
        return {
            currentIndex: 1,
            progress: 0
        }
    },
    methods: {
        detProgress () {
            if(this.currentSectionIndex < this.sections.length) {
                this.progress = (100 * this.currentSectionIndex) / (this.sections.length-1);
            }
            if(this.currentSectionIndex === this.sections.length) {
                this.progress = (100 * this.currentSectionIndex) / (this.sections.length);
            }
            
            return this.progress;
        }
    }
});
</script>

<style scoped>
    .progress-indicator {
        height: 100%;
        width: 100%;
    }
    .prevBtn {
        cursor:  pointer;
    }
    .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--paper-grey-300);
        border-left: none;
        border-right: none;
        height: 2px;
        width: 100%;
        padding: 0 0 0 0;
        position: relative;

    }
    .number {
        position: relative;
    }
    .number .label {
        margin-top: 5%;
        position: absolute;
        top: 110%;
        width: 700%;
        text-align: center;
        color: var(--paper-grey-300);
    }
    .progress_indicator_wrapper {
        background: var(--blue-100);
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        /* z-index: -1; */
    }
    .number {
        background: white;
        color: var(--paper-grey-500);
        border: 2px solid var(--paper-grey-300);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fill {
        border-color: var(--blue-100);
        background: var(--blue-100);
        color: white;
    }
    .partial_fill {
        border-color: var(--blue-100);
        color: var(--blue-100);
    }
    .partial_fill .label, .fill .label {
        color: var(--blue-100);
    }
</style>
