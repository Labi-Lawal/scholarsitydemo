<template>
    <section class="select-test">
        <div class="filters">
            <div 
                class="credits-purchased"
                :class="{ 
                    selected: (selected == 'grade') ? true : false
                }"
                @click="selectFilter('grade')"
            >Grade</div>
            <div 
                class="credits-utilized"
                :class="{ 
                    selected: (selected == 'course') ? true : false 
                }"
                @click="selectFilter('course')"
            >Course</div>
            <div 
                class="credits-utilized"
                :class="{ 
                    selected: (selected == 'test-title') ? true : false
                }"
                @click="selectFilter('test-title')"
            >Test Title</div>
                <div 
                class="credits-utilized"
                :class="{ 
                    selected: (selected == 'student-name') ? true : false
                }"
                @click="selectFilter('student-name')"
            >Student Name</div>
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
            selected: 'grade'
        }
    },
    methods: {
        selectFilter(filter) {
            this.selected = filter;
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