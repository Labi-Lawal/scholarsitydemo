<template>
    <section class="create">
        <Header />
        <section class="create_body">

            <div class="create_options" v-if="!isOptionSelected">
                <div class="create_new_test" @click="showCreateNewTestForm">
                    Create A New Test
                </div>
                <div class="edit_unpublished_test" @click="showEditNewTest">
                    Edit An Unpublished Test
                </div>
                <div class="create_new_question" @click="showNewQuestion">
                    Create A New Question
                </div>
            </div>

            <div class="create_activity_wrapper" v-if="isOptionSelected">
                <div class="back_btn_wrapper" @click="hideCreateNewTestForm">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                </div>
                
                <div class="create_new_test" v-if="createNewTestFormVisible">
                    <div class="side_bar_wrapper">
                        <SideBar :navList="createNewTestSideBarLinks" />
                    </div>
                    <div class="form_wrapper">
                        <router-view 
                            @publishSuccess="$router.push('/teacher/create/publish/success')"
                        />
                    </div>
                </div>
                
                <div class="edit_test" v-if="editTestFormVisible">
                    <div class="test_list_wrapper">
                        <VerticalList contentType="tests" />
                    </div>
                </div>

                <div class="create_question" v-if="createNewQuestion">
                    <div class="question_success_message" v-if="successMessageVisible">
                        <QuestionSuccess />
                    </div>
                    <div class="add_new_questions_form" v-if="!successMessageVisible">
                        <AddQuestions position="indie" @success="showSuccessMessage" />
                    </div>
                </div>
            </div>

        </section>
        <Footer />
    </section>
</template>

<script>
import Header from "@/components/Header.vue";
import SideBar from "@/components/Sidebar/SideBar.vue";
import VerticalList from "@/components/List/VerticalList.vue";
import AddQuestions from "@/components/Form/AddQuestions.vue";
import QuestionSuccess from "@/components/messages/QuestionSuccess.vue";
// import CreateNewTestForm from "@/components/Form/CreateNewTestForm.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
    components: { Header, Footer, SideBar, VerticalList, AddQuestions, QuestionSuccess },
    data() {
        var createNewTestSideBarLinks = [
            {
                title: 'General',
                link: '/teacher/general'
            },
            {
                title: 'Instructions',
                link: '/teacher/create/instructions'
            },
            {
                title: 'Add Questions',
                link: '/teacher/create/add-questions'
            },
            {
                title: 'Review',
                link: '/teacher/create/review'
            },
            {
                title: 'Publish',
                link: '/teacher/create/publish'
            },
        ];

        return { 
            isOptionSelected: false,
            createNewTestFormVisible: false,
            createNewTestSideBarLinks,
            editTestFormVisible: false,
            createNewQuestion: false,
            successMessageVisible: false
        }
    },
    methods: {
        showCreateNewTestForm() {
            this.isOptionSelected = true;
            this.createNewTestFormVisible = true;
        },
        showEditNewTest() {
            this.isOptionSelected = true;
            this.editTestFormVisible = true;
        },
        showNewQuestion() {
            this.isOptionSelected = true;
            this.createNewQuestion = true;
        },
        showSuccessMessage() {
            this.successMessageVisible = true;
        },
        hideCreateNewTestForm() {
            this.isOptionSelected = false;
            this.createNewTestFormVisible = false;
            this.editTestFormVisible = false;
            this.createNewQuestion = false;
            this.successMessageVisible = false;
        },
    }

}
</script>

<style scoped>
.create_body {
    padding: 5% 0;
}
.create_options {
    width: 80%;
    margin: 5% auto 0%;
    display: grid;
    grid-template-columns: calc(100%/4) calc(100%/4) calc(100%/4);
    justify-content: center;
    column-gap: 5%;
    height: 200px;
}
.create_options > div {
    border: 1px solid var(--paper-grey-300);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
}
.create_options > div:hover {
    border-color: var(--paper-light-blue-300);
    background: var(--paper-light-blue-300);
    color: white;
}
.back_btn_wrapper {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 150%;
    width: 20%;
    cursor: pointer;
    color: var(--paper-light-blue-200);
}
div.create_activity_wrapper {
    width: 90%;
    margin: 0 auto;
}
.create_new_test {
    width: 100%;
    height: 100%;
    display: flex;
}
.side_bar_wrapper {
    width: 20%;
    height: 400px;
}
.form_wrapper {
    width: 80%;
}
</style>