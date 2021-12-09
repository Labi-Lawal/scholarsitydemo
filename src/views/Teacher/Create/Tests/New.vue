<template>
    <div class="all_tests_page">
    
        <div class="page_head" v-if="!submitted">
            <div class="bread_crumbs">Home > Create > New</div>

            <div class="page_title">Create New Test</div>
            <div class="progress_indicator_wrapper">
                <PageProgressIndicator
                    :sections="sections"
                    :currentSectionIndex=currentSectionIndex
                    @prevSectionButtonAction="goToPrevSection"
                />
            </div>
        </div>

        <div class="body" ref="bodyContainer" v-if="!submitted">
            <GeneralInfo 
                v-if="currentSectionIndex === 0"
                @nextButtonAction="goToNext()"
            />
            <Instructions 
                v-if="currentSectionIndex === 1"
                @nextButtonAction="goToNext()"
            />
            <AddQuestions 
                v-if="currentSectionIndex === 2"
                @nextButtonAction="goToNext()"
            />
            <Review 
                v-if="currentSectionIndex === 3"
                @nextButtonAction="goToNext()"
            />
            <Publish 
                v-if="currentSectionIndex === 4"
                @nextButtonAction="goToNext()"
            />
        </div>

        <div
            v-if="submitted && success" 
            class="publish_success_wrapper"
        >
            <PublishSuccess 
                @backToStart="createTest()"
                @viewTests="backToTests()"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import PageProgressIndicator from '@/components/PageProgressIndicator.vue';
import GeneralInfo from '@/components/CreateTest/GeneralInfo.vue';
import Instructions from '@/components/CreateTest/Instructions.vue';
import AddQuestions from '@/components/CreateTest/AddQuestions.vue';
import Review from '@/components/CreateTest/Review.vue';
import Publish from '@/components/CreateTest/Publish.vue';
import PublishSuccess from '@/components/messages/PublishSuccess.vue';

export default defineComponent({
    components: { PageProgressIndicator, GeneralInfo, Instructions, AddQuestions, Publish, Review, PublishSuccess },
    data() {
        return {
            currentSectionIndex: 0,
            allTests: [
                {
                    title: 'TEST 01',
                    course: 'COURSE 01 - Lorem ipsum ia kadhyvk ',
                    progress: 80,
                    duration: '2hrs',
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
                    title: 'TEST 01 - WHATEVER YOU WANNA CALL IT',
                    course: 'COURSE 01',
                    progress: 20,
                    duration: '2hrs',
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
                    title: 'TEST 01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    course: 'COURSE 01',
                    progress: 70,
                    duration: '2hrs',
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
                    title: 'TEST 01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    course: 'COURSE 01',
                    progress: 90,
                    duration: '2hrs',
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
                    title: 'TEST 01 - Lorem ipsum dolor sit amet, consectetur adipiscing elit os sdhj sdih kjasd vbdfs kaijshd sidf',
                    course: 'COURSE 01',
                    progress: 40,
                    duration: '2hrs',
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
            ],
            sections: [
                {
                    title: 'General'
                },
                {
                    title: 'Instructions'
                },
                {
                    title: 'Add Questions'
                },
                {
                    title: 'Review'
                },
                {
                    title: 'Publish'
                }
            ],
            submitted: false,
            success: false
        }
    },
    methods:  {
        goToNext() {
            if(this.currentSectionIndex < this.sections.length - 1)
                this.currentSectionIndex++;
            else  {
                // TODO: SUBMIT ALL INFORMAION TO SERVER
                this.submitted = true;
                this.success = true;
            }
            
        },
        createTest() {
            this.submitted = false;
            this.success = false;
            this.currentSectionIndex = 0;
        },
        backToTests() {
            this.$router.push('/teacher/create');
        }
    },
    updated() {
        window.scrollTo(0, 0);
    }
})
</script>

<style scoped>
    .bread_crumbs {
        font-size: 90%;
        color: var(--paper-grey-600);
    }

    .page_head {
        background: white;
        height: 150px;
        margin: 0 auto;
        margin-top: 70px;
        position: sticky;
        z-index: 4;
        top: 70px;
        padding: 1% 0;
    }
    .page_title {
        font-size: 250%;
        height: 50px;
        margin-top: 0px;
        margin-bottom: 20px;
    }
    .boxes {
        display: flex;
        /* height: 150px; */
        height: 120px;
    }
    .boxes > div {
        /* width: 130px; */
        width: 100px;
        margin-right: 1%;
        padding: 20px;
        border-radius: 10px;
        background: var(--paper-grey-50);
        color: rgb(7, 45, 87);
        display: flex;
        flex-wrap: wrap;
    }
    .boxes > div > div {
        width: 100%;
    }
    .boxes .number {
        font-weight: 400;
        font-size: 220%;
        margin-top: auto;
    }
    .boxes .label {
        font-weight: 400;
        font-size: 100%;
        display: block;
        margin-top: auto;
        font-size: 90%;
    }
    div.section_box {
        position: relative;
        cursor: pointer;
        width: 150px;
    }
    div.create_new_test {
        background: rgba(7, 44, 87);
        margin-left: auto;
    }
    div.questions {
        background: var(--paper-orange-a100);
        width: 200px;
    }

    .section_box .illustration_wrapper {
        position: absolute;
        top: 0;
        right: 0;
        height: 80%;
        width: 100px;
        z-index: 0;
        opacity: 0.7;
    }
    .section_box img {
        object-fit: contain;
    }

    .section_box .icon {
        background: var(--paper-grey-100);
        color: rgba(7, 44, 87);
        border-radius: 50%;
        width: 10px;
        height: 10px;
        padding: 5px;
    }
    .section_box .label {
        z-index: 1;
        color: white;
        font-weight: 600;
        font-size: 100%;
    }
    .section_box.create_new_test .label {
        margin-top: 10%;
    }
    .section_box.questions .label {
        margin-top: 12%;
        color: var(--red-100-faded);
    }
    .section_box.questions .sub_label {
        font-size: 80%;
        margin-top: 3%;
        color: var(--paper-grey-600);
        width: 60%;
    }

    .body {
        width: 90%;
        margin: 0 auto;
    }

    .button_section {
        margin-top: 5%;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .body .button_section .button_wrapper {
        height: 50px;
        width: 200px;
        margin: 0 0 0 auto;
    }
    .body .button_section .button_wrapper button {
        border: 1px solid var(--blue-100);
        background: var(--blue-100);
        color: white;
        font-weight: 600;
        border-radius: 25px;
    }
    .publish_success_wrapper {
        padding: 15% 0;
    }
</style>