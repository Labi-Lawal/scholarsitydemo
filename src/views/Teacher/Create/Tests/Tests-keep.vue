<template>
    <section class="create_body">

        <div class="create_options_tests" v-if="!isOptionSelected">

            <div class="options">
                <div class="all_tests_metrics">
                    <div class="section_title">All Tests</div>
                    <div class="metrics">
                        <div>
                            <div class="number">{{ allTests.length }}</div>
                            <div class="label">Total</div>
                        </div>
                        
                        <div>
                            <div class="number">{{ 3 }}</div>
                            <div class="label">Completed</div>
                        </div>

                        <div>
                            <div class="number">{{ 2 }}</div>
                            <div class="label">Pending</div>
                        </div>
                    </div>
                </div>

                <div class="create_new_test" @click="showCreateNewTestForm">
                    <div class="illustration_wrapper">
                        <img src="@/assets/teacher/create/illustration-create-test.png" >
                    </div>
                    <div class="floating_bubble"></div>
                    <div class="rad_emit">
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div class="overlay">
                        <div class="content">
                            <FontAwesomeIcon :icon="['fas', 'plus']" class="plus_icon" />

                            <div class="option_title">Create New Test</div>
                            <div class="text">
                                Organize your own tests to spark your 
                                <span class="emphasis">students</span> study
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tests_frame">
                <div class="tests_grid_list_wrapper">
                    <GridList 
                        :tests=allTests
                        :columnAmnt=4
                        @showMenuOption=showMenu
                        @hideMenuOption=hideMenu
                    />
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
import GridList from "@/components/List/GridList.vue";


export default {
    components: { VerticalList, AddQuestions, QuestionSuccess, GridList },
    data() {
        return { 
            route: '',
            currentSection: '',
            isOptionSelected: false,
            createNewTestFormVisible: false,
            editTestFormVisible: false,
            createNewQuestion: false,
            successMessageVisible: false,
            allTests: [
                {
                    title: 'TEST 01',
                    course: 'COURSE 01 - Lorem ipsum ia kadhyvk ',
                    progress: 80,
                    students: [
                        {
                            name: 'one',
                            status: 'pending'
                        },
                        {
                            name: 'two',
                            status: 'pending'
                        }
                    ],
                    showMenu: false
                },
                {
                    title: 'TEST 01',
                    course: 'COURSE 01',
                    progress: 20,
                    students: [
                        {
                            name: 'one',
                            status: 'pending'
                        },
                        {
                            name: 'two',
                            status: 'pending'
                        }
                    ],
                    showMenu: false
                },
                {
                    title: 'TEST 01',
                    course: 'COURSE 01',
                    progress: 70,
                    students: [
                        {
                            name: 'one',
                            status: 'pending'
                        },
                        {
                            name: 'two',
                            status: 'pending'
                        }
                    ],
                    showMenu: false
                },
                {
                    title: 'TEST 01',
                    course: 'COURSE 01',
                    progress: 90,
                    students: [
                        {
                            name: 'one',
                            status: 'pending'
                        },
                        {
                            name: 'two',
                            status: 'pending'
                        }
                    ],
                    showMenu: false
                },
                {
                    title: 'TEST 01',
                    course: 'COURSE 01',
                    progress: 40,
                    students: [
                        {
                            name: 'one',
                            status: 'pending'
                        },
                        {
                            name: 'two',
                            status: 'pending'
                        }
                    ],
                    showMenu: false
                }
            ]
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
        showMenu(index) {
            this.allTests[index].showMenu = true;
        },
        hideMenu(index) {
            this.allTests[index].showMenu = false;
        }
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
.options {
    display: flex;
}
.options > div {
    box-shadow: var(--shadow-100);
    width: 250px;
    height: 200px;
    margin: 0 1% 0 0;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
}
.options .overlay {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    z-index: 1;
    padding: 0 8%;
}
.options .content {
    margin-top: auto;
    margin-bottom: 5%;
}
.options .option_title {
    font-size: 110%;
    font-weight: 600;
}
.options .text {
    font-weight: 400;
    font-size: 100%;
    line-height: 20px;
    margin-top: 5%;
}
.text span.emphasis {
    font-weight: 500;
}

.options .all_tests_metrics {
    width: 350px;
    padding: 0 1%;
    box-shadow: none;
    border: none;
    margin-right: auto;
}
.section_title {
    font-size: 160%;
    font-weight: 400;
    height: 20%;
    display: flex;
    align-items: center;
}
.all_tests_metrics .metrics {
    height: 40%;
    margin-top: 22%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.metrics > div {
    height: 100%;
    width: calc(100% / 4);
    border-radius: 10px;
    padding: 3%;
    background: var(--paper-grey-50);
    color: rgb(7, 45, 87);
    display: flex;
    flex-wrap: wrap;
}
.metrics > div > div {
    width: 100%;
}
.metrics .number {
    font-weight: 700;
    font-size: 150%;
    margin-top: auto;
}
.metrics .label {
    font-weight: 400;
    font-size: 100%;
    display: block;
    margin-top: auto;
}
.create_new_test, .create_new_question {
    color: white;
    position: relative;
}
.options > div.create_new_test {
    background: rgb(7, 45, 87);
    height: 150px;
    margin-top: auto;
}
.create_new_test .plus_icon {
    border: 1px solid white;
    border-radius: 50%;
    padding: 5px;
    width: 13px;
    height: 13px;
    background: white;
    color: rgb(7, 45, 87);
}
.create_new_question {
    background: var(--paper-yellow-800);
}
.create_new_question .floating_bubble {
    display: none;
}

.edit_unpublished_test .illustration_wrapper {
    height: 90%;
}


.illustration_wrapper {
    height: 60%;
    position: absolute;
    z-index: 1;
    right: 0;
}
.floating_bubble {
    background: rgb(15, 60, 112);
    opacity: 0.3;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    position: absolute;
    z-index: 0;
    right: -7%;
    top: -7%;
}
.rad_emit div {
    border: 1px solid rgba(255, 255, 255);
}
.rad_emit {
    opacity: 0.3;
    border: 1px solid rgba(255, 255, 255);
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
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.rad_emit > div > div {
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

.tests_frame {
    padding: 4% 1%;
    width: 98%;
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