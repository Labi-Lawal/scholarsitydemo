<template>
    <section class="create_body">

        <div class="create_options" v-if="!isOptionSelected">
            <div class="create_new_test">
                <div class="overlay">
                    <div class="text">
                        Organize your own tests to spark your 
                        <span class="emphasis">students</span> study
                    </div>
                    <div class="btn_wrapper">
                        <ButtonPlainText 
                            buttonText="Create New Test"
                            @buttonAction="showCreateNewTestForm"
                        />
                    </div>
                </div>
                <div class="illustration_wrapper">
                    <img src="../../assets/teacher/create/illustration-create-test.png" >
                </div>
                <div class="floating_bubble"></div>
                <div class="rad_emit">
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="edit_unpublished_test">
                <div class="overlay">
                    <div class="text">
                        Go ahead and edit that test one last time
                        <span class="emphasis">before</span> publishing 
                    </div>
                    <div class="btn_wrapper">
                        <ButtonPlainText 
                            buttonText="Edit Test"
                            @buttonAction="showEditNewTest"
                        />
                    </div>
                </div>
                <div class="illustration_wrapper">
                    <img src="../../assets/teacher/create/illustration-edit-test.png" >
                </div>
                <div class="floating_bubble"></div>
                <div class="rad_emit">
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="create_new_question">
                <div class="overlay">
                    <div class="text">
                        Create A New Question
                        <!-- <span class="emphasis">unpublished</span> test -->
                    </div>
                    <div class="btn_wrapper">
                        <ButtonPlainText 
                            buttonText="Create New Question"
                            @buttonAction="showNewQuestion"
                        />
                    </div>
                </div>
                <div class="illustration_wrapper">
                    <img src="../../assets/teacher/create/illustration-create-test.png" >
                </div>
                <div class="floating_bubble"></div>
                <div class="rad_emit">
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="create_activity_wrapper" v-if="isOptionSelected">
            <div class="back_btn_wrapper" @click="hideCreateNewTestForm">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <div class="route">{{ route }}/{{ currentSection }}</div>
            </div>
            
            <div class="create_content_body">
                <div class="create_new_test_body" v-if="createNewTestFormVisible">
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
        </div>

    </section>
</template>

<script>
import VerticalList from "@/components/List/VerticalList.vue";
import AddQuestions from "@/components/Form/AddQuestions.vue";
import QuestionSuccess from "@/components/messages/QuestionSuccess.vue";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default {
    components: { VerticalList, AddQuestions, QuestionSuccess, ButtonPlainText },
    data() {
        return { 
            route: '',
            currentSection: '',
            isOptionSelected: false,
            createNewTestFormVisible: false,
            editTestFormVisible: false,
            createNewQuestion: false,
            successMessageVisible: false
        }
    },
    methods: {
        showCreateNewTestForm() {
            this.isOptionSelected = true;
            this.createNewTestFormVisible = true;
            this.currentSection = 'Create New Test';
        },
        showEditNewTest() {
            this.isOptionSelected = true;
            this.editTestFormVisible = true;
            this.currentSection = 'Edit Test';
        },
        showNewQuestion() {
            this.isOptionSelected = true;
            this.createNewQuestion = true;
            this.currentSection = 'Create New Question';
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
    },
    beforeMount() {
        var g = this.$route.path.split('/');
        g.splice(0, 1);
        this.route = g.join('/');
    }

}
</script>

<style scoped>
.create_body {
    padding: 3%;
    width: 94%;
}
.create_options > div {
    border: 1px solid var(--paper-grey-100);
    box-shadow: var(--shadow-100);
    width: calc(100%/2.5);
    height: 200px;
    margin: 0 auto 2%; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    cursor: pointer;
    padding: 0 2%;
    overflow: hidden;
}
.create_options .overlay {
    margin-left: 5%;
    width: 50%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
}
.create_options .text {
    font-weight: 500;
    font-size: 120%;
}
.text span.emphasis {
    font-weight: 600;
}
.create_options .btn_wrapper {
    height: 40px;
    width: 70%;
    margin-top: auto;
}
.create_options .btn_wrapper button {
    border: 1px solid var(--paper-grey-200);
    color: rgb(7, 45, 87);
    background: var(--paper-grey-100);
    font-weight: 600;
    border-radius: 20px;
}

.create_new_test, .edit_unpublished_test, .create_new_question {
    background: rgb(7, 45, 87);
    color: white;
    position: relative;
}
.edit_unpublished_test {
    background: var(--red-100);
    transform: rotateY(180deg);
}
.edit_unpublished_test .floating_bubble {
    background: var(--red-100-faded);
}
.edit_unpublished_test .overlay {
    background: var(--red-100);
    transform: rotateY(-180deg);
}
.edit_unpublished_test .overlay .text {
    text-align: end;
}
.edit_unpublished_test .overlay .btn_wrapper {
    margin-left: auto;
}
.create_new_question {
    background: var(--paper-yellow-800);
    color: rgb(7, 45, 87);
}
.create_new_question .floating_bubble {
    background: var(--paper-yellow-700);
}

.edit_unpublished_test .illustration_wrapper {
    height: 90%;
}


.illustration_wrapper {
    height: 110%;
    position: absolute;
    z-index: 1;
    right: 0;
}
.floating_bubble {
    background: rgb(15, 60, 112);
    border-radius: 50%;
    height: 200px;
    width: 200px;
    position: absolute;
    z-index: 0;
    right: -7%;
    top: -7%;
}
.rad_emit {
    border: 1px solid white;
    position: absolute;
    left: -5%;
    bottom: -20%;
    z-index: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.rad_emit > div {
    border: 1px solid white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.rad_emit > div > div {
    border: 1px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

.back_btn_wrapper {
    display: flex;
    align-items: center;
    font-size: 100%;
    cursor: pointer;
    color: var(--paper-grey-600);
}
.route {
    margin-left: 3%;
    text-transform: capitalize;    
}

.create_content_body {
    margin: 5% 0;
}
.create_new_test {
    width: 100%;
    height: 100%;
    display: flex;
}

.form_wrapper {
    width: 80%;
}
</style>