<template>
    <div class="review_page">
        <div class="review_content">
            <div class="heading">
                <div class="board">
                    <div class="content_wrapper">
                        {{ testInfo.board.replaceAll('-', ' ') }}
                    </div>
                </div>
                <div class="board">
                    <div class="test_course">
                        {{ testInfo.course.display_name }}
                    </div>
                </div>
                <div class="board double">
                    <div class="test_grade">
                        {{ testInfo.grade.replaceAll('-', ' ') }}
                    </div>
                    <FontAwesomeIcon :icon="['fas', 'circle']" class="dot" />
                    <div class="test_topic">
                        {{ testInfo.topic }}
                    </div>
                    <FontAwesomeIcon :icon="['fas', 'circle']" class="dot" />
                    <div class="test_duration">
                        {{ testInfo.duration.replaceAll('-', ' ') }}
                    </div>
                </div>
                <div class="board">
                    <div class="test_title">
                        {{ testInfo.testTitle }}    
                    </div>
                </div>
            </div>

            <div class="body">
                <div class="instructions">
                    <div class="section_title">INSTURCTIONS</div>
                    <div 
                        class="instruction"
                        v-for="(instruction, index) in testInfo.instructions"
                        :key="index"
                    >
                        <div class="no"> {{ index + 1 }}. </div>
                        <div class="content"> {{ instruction }} </div>
                    </div>
                </div>
            </div>

            <div class="all_questions">
                <div class="question_section_title">
                    QUESTIONS
                </div>
                <div 
                    class="question_frame"
                    v-for="(question, quesIndex) in testInfo.questions"
                    :key="quesIndex"
                > 
                   <div>{{ quesIndex + 1 }}.</div>
                   <div class="content">
                        <div class="question_text"> {{ question.question }} </div>
                        <div class="options grid_list col_2">
                            <div 
                                class="option"
                                v-for="(option, optionIndex) in question.options"
                                :key="optionIndex"
                            >
                                <div class="label" v-if="optionIndex === 0"> A </div>
                                <div class="label" v-if="optionIndex === 1"> B </div>
                                <div class="label" v-if="optionIndex === 2"> C </div>
                                <div class="label" v-if="optionIndex === 3"> D </div>
                                <div class="option">
                                    {{ option }}
                                </div>
                            </div>
                    </div>
                   </div>
                </div>
            </div>

        </div>
        <div class="button_section">
            <div class="button_wrapper prev">
                <ButtonPlainText 
                    buttonText="Go Back"
                    @buttonAction="goToPrevSection()"
                />
            </div>
            <div class="button_wrapper">
                <ButtonPlainText 
                    buttonText="Next"
                    @buttonAction="goToNextSection()"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default defineComponent({
    name: 'review',
    components: { ButtonPlainText },
    data() {
        return {
            testInfo: this.$store.getters.testData
        }  
    },
    methods: {
        goToPrevSection() {
            this.$emit('prev-button-action');
        },
        goToNextSection() {
            this.$emit('next-button-action');
        }
    }
});
</script>

<style scoped>
.review_content {
    padding: 1% 0;
    width: 80%;
}
.board {
    text-transform: capitalize;
    display: flex;
    align-items: center;
}
.content_wrapper {
    border: 1px solid var(--paper-grey-200);
    padding: 1%;
    border-radius: 5px;
    background: var(--paper-grey-200);
    font-size: 90%;
    font-weight: 500;
    color: var(--paper-grey-600);
}
.test_title {
    text-transform: capitalize;
    font-size: 300%;
    padding: 1% 0;
}
.test_course {
    font-size: 130%;
    width: 80%;
    margin: 1% 0;
}

.double {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: var(--paper-grey-600);
    font-size: 90%;
}
.dot {
    font-size: 30%;
    margin: 0 10px;
    color: var(--paper-grey-600);
}

.instructions {
    margin-top: 5%;
}
.instruction {
    display: flex;
}
.instruction .section_title {

}
.instruction .no {
    margin-right: 5px;
}

.all_questions {
    margin-top: 5%;
}
.question_section_title {
    font-size: 150%;
}
.question_frame {
    display: flex;
    margin-top: 2%;
}

.grid_list {
    display: grid;
    justify-content: space-between;
}
.col_2 {
    grid-template-columns: calc(100%/2.5) calc(100%/2.5);
}

.button_section {
    margin: 5% auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.button_wrapper.prev button {
    border: none !important;
    background: lightgrey !important;
    color: var(--paper-grey-600) !important;
}
.button_section .button_wrapper {
    height: 50px;
    width: 200px;
}
.button_section .button_wrapper button {
    border: 1px solid var(--blue-100);
    background: var(--blue-100);
    color: white;
    font-weight: 600;
    border-radius: 25px;
}

</style>