<template>
    <section class="reports">
        <Header />
        <section class="reports_body">
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
                            selected: (selected == 'Tests') ? true : false
                        }"
                        @click="selectFilter('Tests')"
                    >Tests</div>
                    <div 
                        class="credits-utilized"
                        :class="{ 
                            selected: (selected == 'student-name') ? true : false
                        }"
                        @click="selectFilter('student-name')"
                    >Student Name</div>
                    <div 
                        class="credits-purchased"
                        :class="{ 
                            selected: (selected == 'date-range') ? true : false
                        }"
                        @click="selectFilter('date-range')"
                    >Date Range</div>
                </div>
            <div class="reports_options">
                <div class="reports_new_test">
                    Teacher's Question Bank
                </div>
                <div class="edit_unpublished_test">
                    Tests
                </div>
                <div class="reports_new_question">
                    Test-wise Analysis
                </div>
                <div class="reports_new_question">
                    Student-wise Analysis
                </div>
            </div>
        </section>
        <Footer />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from '@/components/Footer/Footer.vue';

export default {
    components: { Header, Footer },
        data() {
        var selected = 'grade';

        return {
            selected
        }
    },
    methods: {
        selectFilter(filter) {
            this.selected = filter;
            this.filterBody();
        },
    }
}
</script>

<style scoped>
.reports_body {
    width: 90%;
    margin: 0 auto;
    padding: 5% 0;
}
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
.reports_options {
    padding: 5% 0;
    width: 100%;
    display: grid;
    grid-template-columns: calc(100%/5) calc(100%/5) calc(100%/5) calc(100%/5);
    justify-content: space-between;
    height: 200px;
}
.reports_options > div {
    border: 1px solid var(--paper-grey-300);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
}
.reports_options > div:hover {
    border-color: var(--paper-light-blue-300);
    background: var(--paper-light-blue-300);
    color: white;
}
</style>