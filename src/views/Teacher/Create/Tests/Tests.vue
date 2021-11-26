<template>
    <div class="all_tests_page">
        <div class="page_head">
            <div class="page_title">Tests</div>
            <div class="boxes">
                <div class="total">
                    <div class="number">{{ allTests.length }}</div>
                    <div class="label">Total <br /> Tests</div>
                </div>
                
                <div class="completed">
                    <div class="number">{{ 3 }}</div>
                    <div class="label">Completed <br />Tests</div>
                </div>

                <div class="pending">
                    <div class="number">{{ 2 }}</div>
                    <div class="label">
                        Pending <br /> Tests
                    </div>
                </div>

                <div class="add_new_question">
                    <div class="illustration_wrapper">
                        <img src="@/assets/teacher/create/illustration-create-test.png" > 
                    </div>
                    <FontAwesomeIcon :icon="['fas', 'plus']" class="icon" />
                    <div class="label">
                        Create <br /> New Test
                    </div>
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
    }
})
</script>

<style scoped>
    .page_head {
        height: 250px;
        margin-top: 5%;
    }
    .page_title {
        font-size: 250%;
        height: 50px;
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
    div.add_new_question {
        margin-left: auto;
        background: rgba(7, 44, 87);
        position: relative;
        cursor: pointer;
    }

    .add_new_question .illustration_wrapper {
        position: absolute;
        top: 0;
        right: 0;
        height: 80%;
        width: 70%;
        z-index: 0;
        opacity: 0.7;
    }

    .add_new_question .icon {
        background: var(--paper-grey-100);
        color: rgba(7, 44, 87);
        border-radius: 50%;
        width: 10px;
        height: 10px;
        padding: 5px;
    }
    .add_new_question .label {
        z-index: 1;
        color: white;
        font-weight: 600;
        font-size: 100%; 
    }
</style>