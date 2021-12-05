<template>
    <div class="create_new_tests_general">
        <form @submit.prevent="signInButtonPressed">
            <section class="section_wrapper">
                <div class="triple_field new_field_group">
                    <div class="field">
                        <div class="label">Board</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Board"
                                :options="boardOptions"
                                :selected=selectedStatus[0]
                                :selectedIndex=selectedIndex[0]
                                :isOptionsVisible="showOptions[0]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=0
                                :raiseByOne=3
                                @showOptions="showDropOptions"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="label">Grade</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Grade"
                                :options="gradeOptions"
                                :selected=selectedStatus[1]
                                :selectedIndex=selectedIndex[1]
                                :isOptionsVisible="showOptions[1]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=1
                                :raiseByOne=2
                                @showOptions="showDropOptions"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="label">Course</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Course"
                                :options="courseOptions"
                                :selected=selectedStatus[2]
                                :selectedIndex=selectedIndex[2]
                                :isOptionsVisible="showOptions[2]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=2
                                :raiseByOne=1
                                @showOptions="showDropOptions"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                </div>

                <div class="triple_field small_at_end new_field_group">
                    <div class="field input">
                        <div class="label">Topic</div>
                        <input autocomplete="false">
                    </div>
                    <div class="field input">
                        <div class="label">Test Title</div>
                        <input autocomplete="false">
                    </div>
                    <div class="field">
                        <div class="label">Test Duration</div>
                        <div class="mixed_input_dropdown_double">
                            <input autocomplete="false">
                            <div class="drop_down_wrapper">
                                <DropDown 
                                    placeholder="Select Time Parameter"
                                    :options="durationOptions"
                                    :selected=selectedStatus[3]
                                    :selectedIndex=selectedIndex[3]
                                    :isOptionsVisible="showOptions[3]"
                                    :hideIcon=false
                                    :hideBorder=true
                                    :dropDownIndex=3
                                    :raiseByOne=0
                                    @showOptions="showDropOptions"
                                    @optionSelect="optionSelected"
                                />
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            <section class="section_wrapper">
                <div class="section_title"> Results to be published to student </div>
                <div class="grid_7">
                    <div 
                        class="check_box_wrapper"
                        v-for="(resultType, index) in resultTypes"
                        :key="index"
                    >
                        <CheckBox 
                            :index=index
                            :label=resultType.label
                            :value=resultType.value
                            :selected="resultType.selected"
                            @selectCheckBox=selectBox
                        />
                    </div>
                </div>
            </section>

            <section class="section_wrapper">
                <div class="section_title"> Bonus Credit Criteria </div>
                <div class="triple_field new_field_group bonus_credit">
                    <div class="field">
                        <div class="label">For > 99th percentile</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Board"
                                :options="boardOptions"
                                :selected=selectedStatus[4]
                                :selectedIndex=selectedIndex[4]
                                :isOptionsVisible="showOptions[4]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=4
                                :raiseByOne=3
                                @showOptions="showDropOptions"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="label">For 95 - 99th percentile</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Grade"
                                :options="gradeOptions"
                                :selected=selectedStatus[5]
                                :selectedIndex=selectedIndex[5]
                                :isOptionsVisible="showOptions[5]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=5
                                :raiseByOne=2
                                @showOptions="showDropOptions"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="label">For 90 - 94.99th percentile</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Course"
                                :options="courseOptions"
                                :selected=selectedStatus[6]
                                :selectedIndex=selectedIndex[6]
                                :isOptionsVisible="showOptions[6]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=6
                                :raiseByOne=1
                                @showOptions="showDropOptions"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="label">For 80 - 84.99th percentile</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Course"
                                :options="courseOptions"
                                :selected=selectedStatus[7]
                                :selectedIndex=selectedIndex[7]
                                :isOptionsVisible="showOptions[7]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=7
                                :raiseByOne=1
                                @showOptions="showDropOptions"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div class="button_section">
                <div class="button_wrapper">
                    <ButtonPlainText 
                        buttonText="Next"
                        @buttonAction="goToNextSection()"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import DropDown from '@/components/DropDown/DropDown.vue';
import CheckBox from '@/components/CheckBox/CheckBox.vue';
import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';

export default defineComponent({
    name: 'general-info',
    components: { DropDown, CheckBox, ButtonPlainText },
    data() {
        return {
            boardOptions: [
                {
                    value: 'board-1',
                    display_name: 'board 1'
                },
                {
                    value: 'board-2',
                    display_name: 'board 2'
                },
                {
                    value: 'board-3',
                    display_name: 'board 3'
                },
                {
                    value: 'board-4',
                    display_name: 'board 4'
                }
            ],
            gradeOptions: [
                {
                    value: 'grade-1',
                    display_name: 'grade 1'
                },
                {
                    value: 'grade-2',
                    display_name: 'grade 2'
                },
                {
                    value: 'grade-3',
                    display_name: 'grade 3'
                },
                {
                    value: 'grade-4',
                    display_name: 'grade 4'
                }
            ],
            courseOptions: [
                {
                    value: 'course-1',
                    display_name: 'course 1'
                },
                {
                    value: 'course-2',
                    display_name: 'course 2'
                },
                {
                    value: 'course-3',
                    display_name: 'course 3'
                },
                {
                    value: 'course-4',
                    display_name: 'course 4'
                }
            ],
            durationOptions: [
                {
                    value: 'sec',
                    display_name: 'secs'
                },
                {
                    value: 'min',
                    display_name: 'Mins'
                },
                {
                    value: 'Hrs',
                    display_name: 'Hrs'
                }
            ],
            resultTypes: [
                {
                    label: 'Net Score',
                    value: 'net-score',
                    selected: false
                },
                {
                    label: 'Total Score',
                    value: 'total-score',
                    selected: true
                },
                {
                    label: 'Negative Score',
                    value: 'negative-score',
                    selected: false
                },
                {
                    label: 'Accuracy Score',
                    value: 'accuracy-score',
                    selected: false
                },
                {
                    label: 'Percentile',
                    value: 'percentile',
                    selected: false
                },
                {
                    label: 'Correct Solutions',
                    value: 'correct-ssolutions',
                    selected: false
                },
                {
                    label: 'Comparinson Analytics',
                    value: 'comparison-analytics',
                    selected: false
                }
            ],
            optionSelected: null,
            selectedIndex: [0, 0, 0, 2, 0, 0, 0, 0],
            selectedStatus: [false, false, false, true, false, false, false, false],
            showOptions: [false, false, false, false],
            
            selectedBoard: '',
            selectedGrade: '',
            selectedCourse: '',
            topic: '',
            testTitle: '',
            selectedDurationInMs: '',
            selectedresultTypes: []
        }
    },
    methods: {
        showDropOptions (index:number) {
            if(this.showOptions[index])
                this.showOptions[index] = false;
            else {
                this.hideAllDropDownOptions();
                this.showOptions[index] = true;
            }
        },
        hideAllDropDownOptions () {
            for(var i = 0; i < this.showOptions.length; i++) {
                this.showOptions[i] = false; 
            }
        },
        selectBox(index:number) {
            this.resultTypes[index].selected = !this.resultTypes[index].selected;
        },
        goToNextSection() {
            this.$emit('next-button-action');
        }
    },
    async beforeMount() {
        // this.$store.dispatch('fetchboards')
        // .then((response)=> { this.boardOptions = response; })
        // .catch((error)=>{
        //     console.log(error.response);
        //     console.log("THere was an error fetching boards");
        // });
    }
});
</script>

<style scoped>
    .create_new_tests_general {
        margin-top: 10%;
    }

    .section_title {
        border-bottom: 1px solid var(--paper-grey-200);
        color: var(--paper-grey-600);
        font-weight: 400;
        font-size: 150%;
        margin: 5% 0 2%;
        padding: 1% 0;
        text-transform: capitalize;
    }

    .field .label {
        font-weight: 500;
        font-size: 110%;
        color: var(--paper-grey-600);
        margin-bottom: 5px;
        margin-left: 5px;
    }
    
    .new_field_group {
        margin: 0 0 3% 0;
    }

    .triple_field, .double_field, .quadriple_field {
        display: flex;
        justify-content: space-between;
    }
    .triple_field .field {
        width: calc(100% / 4);
    }
    .triple_field .field:last-child > * {
        margin-left: auto;
    }
    .triple_field .field:last-child > .label {
        width: 80%;
    }
    
    .triple_field.small_at_end .field {
        width: calc(calc(100% - 30%) / 2);
    }
    .triple_field.small_at_end .field:last-child {
        width: 20%;
    }
    .bonus_credit {
        justify-content: space-between;
    }

    .mixed_input_dropdown_double {
        display: flex;
        border: 1px solid var(--paper-grey-300);
        border-radius: 5px;
    }
    .mixed_input_dropdown_double input {
        width: 60%;
        border-radius: 5px 0 0 5px;
        border: none;
        border-right: 1px solid var(--paper-grey-300);
    }
    .mixed_input_dropdown_double .drop_down_wrapper {
        width: 40%;
        border-radius: 0 5px 5px 0px;
    }


    .double_field .field.input {
        width: calc(calc(100% - 10px) / 2);
    }
    
    .drop_down_wrapper {
        width: 80%;
        height: 40px;
        background: var(--paper-grey-100);
    }
    input {
        display: block;
        width: 94%;
        padding: 3% 3%;
        border: 1px solid var(--paper-grey-300);
        background: var(--paper-grey-100);
        color: var(--paper-grey-800);
        border-radius: 3px;
        outline: none;
    }
    
    .grid_7 {
        width: 100%;
        display: grid;
        grid-template-columns: calc(100%/5) calc(100%/5) calc(100%/5) calc(100%/5) calc(100%/5);
        column-gap: 3px;
        row-gap: 10px;
    }
    .grid_7 > * {
        height: 50px;
        width: calc(100% - 12px);
    }

    .button_section {
        margin: 5% auto;
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
</style>