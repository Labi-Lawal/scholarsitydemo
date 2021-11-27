<template>
    <div class="all_questions_page">
        <div class="page_head">
            <div class="page_title">Questions</div>
            <div class="boxes">
                <div class="section_box create_new_test">
                    <router-link to="/teacher/create/tests">
                        <div class="illustration_wrapper">
                            <img src="@/assets/teacher/create/illustration-create-test.png" >
                        </div>
                        
                        <div class="label">
                            View Tests
                        </div>
                        <div class="sub_label">All Tests stored in your archive</div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="all_tests_list">
            <GridList 
                :columnAmnt=4
                :tests="allTests"
            />
        </div>

        <div class>

        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import GridList from '@/components/List/GridList.vue';

export default defineComponent({
    components: { GridList },
    data() {
        return {
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
            ]
        }
    }
})
</script>

<style scoped>
    .page_head {
        height: 180px;
        margin-top: 5%;
        display: flex;
    }
    .page_title {
        font-size: 200%;
        height: 50px;
    }
    .boxes {
        margin-left: auto;
        display: flex;
        height: 120px;
    }
    .boxes > div > div {
        width: 100%;
    }
    .section_box {
        position: relative;
        cursor: pointer;
        width: 150px;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .create_new_test {
        background: rgba(7, 44, 87);
        margin-left: auto;
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
        margin-top: 12%;
    }
    .section_box .sub_label {
        width: 60%;
        z-index: 1;
        font-size: 80%;
        margin-top: 4%;
        color: var(--paper-grey-100);
    }
</style>