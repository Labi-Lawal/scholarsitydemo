<template>
    <section class="student_list">
        <Header />
        <section class="student_list_wrapper">
            <div class="all_users_list" v-if="!isNewUserFormVisible">
                <div class="add_student_btn_wrapper">
                    <ButtonPlainText buttonText="Add New Student" @buttonAction="showNewUserForm" />
                </div>
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
                            selected: (selected == 'school') ? true : false
                        }"
                        @click="selectFilter('school')"
                    >School</div>
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
                <div class="student_list_table">
                    <Table :tableHeadings="headings" :tableBody="body" />
                </div>
            </div>
            <div class="add_new_user_form" v-if="isNewUserFormVisible">
                <StudentAddNew @cancelAction="hideNewUserForm" />
            </div>
        </section>

        <Footer />
    </section>  
</template>

<script>
import Header from "@/components/Header.vue";
import Table from '@/components/Table.vue';
import StudentAddNew from '@/components/Form/StudentAddNew.vue';
import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';
import Footer from '@/components/Footer/Footer.vue';


export default {
    components: { Header, Table, ButtonPlainText, StudentAddNew, Footer },
    data() {
        var selected = 'grade',
        headings = [
            'name',
            'school',
            'course',
            'grade',
            'date'
        ],
        body =  [];

        return {
            selected,
            isNewUserFormVisible: false,
            headings,
            body
        }
    },
    methods: {
        selectFilter(filter) {
            this.selected = filter;
            this.filterBody();
        },
        showNewUserForm() {
            this.isNewUserFormVisible = true;
        },
        hideNewUserForm() {
            this.isNewUserFormVisible = false;
        },
    }
}
</script>

<style scoped>
.student_list_wrapper {
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
.add_student_btn_wrapper {
    width: 15%;
    height: 50px;
    margin-left: auto;
}
.add_student_btn_wrapper button {
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
    border-radius: 5px;
}
.student_list_table {
    margin-top: 2%;
}
</style>