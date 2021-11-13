<template>
    <section class="select-test">
        <div class="filters">
            <div 
                class="credits-purchased"
                :class="{ 
                    selected: (selected.includes('course')) ? true : false
                }"
                @click="selectFilter('course')"
            >Course</div>
            <div 
                class="credits-utilized"
                :class="{ 
                    selected: (selected.includes('topic')) ? true : false 
                }"
                @click="selectFilter('topic')"
            >Topic</div>
            <div 
                class="credits-utilized"
                :class="{ 
                    selected: (selected.includes('quiz-title')) ? true : false
                }"
                @click="selectFilter('quiz-title')"
            >Quiz Title</div>
            <div 
                class="credits-utilized"
                :class="{ 
                    selected: (selected.includes('test-type')) ? true : false
                }"
                @click="selectFilter('test-type')"
            >Test Type</div>
            <div 
                class="credits-utilized"
                :class="{ 
                    selected: (selected.includes('date-range')) ? true : false
                }"
                @click="selectFilter('date-range')"
            >Date Range</div>
        </div>
        <div class="">

        </div>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'select-test',
    components: { },
    data() {
        return {
            selected: ['grade']
        }
    },
    methods: {
        selectFilter(filter) {
            if(this.selected.includes(filter)) {
                this.selected.splice(this.selected.indexOf(filter), 1);
            } 
            else {
                this.selected.push(filter)
            }
        },
    }
});
</script>

<style scoped>
.filters {
    display: flex;
    height: 50px;
}
.filters div {
    border: 1px solid var(--paper-grey-300);
    color: var(--paper-grey-700);
    height: 100%;
    width: calc(100% / 2 / 4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1%;
    border-radius: 5px;
    font-weight: 500;
    font-size: 90%;
    cursor: pointer;
}
.filters div.selected {
    border-color: var(--paper-light-blue-800);
    color: var(--paper-light-blue-800);
    background: var(--paper-light-blue-100);
}
.filters div::selection {
    background: none;
}
</style>