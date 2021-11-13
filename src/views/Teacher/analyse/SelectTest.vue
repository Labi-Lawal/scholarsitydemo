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
                    selected: (selected == 'topic') ? true : false
                }"
                @click="selectFilter('topic')"
            >Topic</div>
            <div 
                class="credits-purchased"
                :class="{ 
                    selected: (selected == 'date-range') ? true : false
                }"
                @click="selectFilter('date-range')"
            >Date Range</div>
        </div>
        <div class="test_list_wrapper">
            <VerticalList contentType="tests" />
        </div>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import VerticalList from "@/components/List/VerticalList.vue";

export default defineComponent({
    name: 'select-test',
    components: { VerticalList },
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
.test_list_wrapper {
    width: 70%;
}
</style>