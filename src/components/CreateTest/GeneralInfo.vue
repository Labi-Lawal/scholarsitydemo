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
                                :options="boardModel.options"
                                :selected=boardModel.selected
                                :selectedIndex=boardModel.selectedIndex
                                :isOptionsVisible="showOptions[0]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=0
                                :raiseByOne=3
                                @showOptions="showDropOptions"
                                @optionSelect="selectOption"
                            />
                        </div>
                    </div>
                    
                    <div class="field">
                        <div class="label">Grade</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Grade"
                                :options="gradeModel.options"
                                :selected=gradeModel.selected
                                :selectedIndex=gradeModel.selectedIndex
                                :isOptionsVisible="showOptions[1]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=1
                                :raiseByOne=2
                                @showOptions="showDropOptions"
                                @optionSelect="selectOption"
                            />
                        </div>
                    </div>
                    
                    <div class="field">
                        <div class="label">Course</div>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="Select Course"
                                :options="courseModel.options"
                                :selected=courseModel.selected
                                :selectedIndex=courseModel.selectedIndex
                                :isOptionsVisible="showOptions[2]"
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=2
                                :raiseByOne=1
                                @showOptions="showDropOptions"
                                @optionSelect="selectOption"
                            />
                        </div>
                    </div>

                </div>

                <div class="triple_field small_at_end new_field_group">
                  
                    <div class="field input">
                        <div class="label">Topic</div>
                        <input 
                            :type="topicModel.type"
                            :placeholder="topicModel.placeholder"
                            v-model="topicModel.value"
                            autocomplete="false"
                        >
                    </div>
                  
                    <div class="field input">
                        <div class="label">Test Title</div>
                        <input 
                            :type="testTitleModel.type"
                            :placeholder="testTitleModel.placeholder"
                            v-model="testTitleModel.value"
                            autocomplete="false"
                        >
                    </div>
                  
                    <div class="field">
                        <div class="label">Test Duration</div>
                        <div class="mixed_input_dropdown_double">
                            <input 
                                type="number"
                                v-model="durationModel.digits"
                                @keyup.e="reject()"
                                autocomplete="false"
                            >
                            <div class="drop_down_wrapper">
                                <DropDown 
                                    :options="durationModel.options"
                                    :selected=durationModel.selected
                                    :selectedIndex=durationModel.selectedIndex
                                    :isOptionsVisible="showOptions[3]"
                                    :hideIcon=false
                                    :hideBorder=true
                                    :dropDownIndex=3
                                    :raiseByOne=0
                                    @showOptions="showDropOptions"
                                    @optionSelect="selectOption"
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
                        v-for="(resultType, index) in resultTypesModel.options"
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
                
                <div class="new_field_group bonus_credit col_4">

                    <div class="field input">
                        <div class="label">For > 99th percentile</div>
                        <input 
                            :type="percentileAModel.type"
                            v-model="percentileAModel.value"
                            autocomplete="false"
                        >
                    </div>
            
                    <div class="field">
                        <div class="label">For 95 - 99th percentile</div>
                          <input 
                            :type="percentileBModel.type"
                            v-model="percentileBModel.value"
                            autocomplete="false"
                        >
                    </div>
            
                    <div class="field">
                        <div class="label">For 90 - 94.99th percentile</div>
                          <input 
                            :type="percentileCModel.type"
                            v-model="percentileCModel.value"
                            autocomplete="false"
                        >
                    </div>
            
                    <div class="field">
                        <div class="label">For 80 - 84.99th percentile</div>
                        <input 
                            :type="percentileDModel.type"
                            v-model="percentileDModel.value"
                            autocomplete="false"
                        >
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
        var resultTypesModel:any = {
                value: [],
                options: [
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
                ]
        },
        courseModel = {
            error: '',
            value: '',
            selected: false,
            selectedIndex: 0,
            options: [
                {
                    value: ''
                }
            ],
        };
      
        return {
            boardModel: {
                error: '',
                value: '',
                selected: false,
                selectedIndex: 0,
                options: [
                    {
                        display_name: 'Central Board of Secondary Education [CBSE]',
                        value: 'central-board-of-education-[CBSE]'
                    },
                    {
                        display_name: 'Indian Certificate of Secondary Education [ICSE]',
                        value: 'Central -board-ofEducation-[CBSE]'
                    },
                    {
                        display_name: 'Council For The Indian School Certificate Examinations [CISCE]',
                        value: 'Central -board-ofEducation-[CBSE]'
                    },
                    {
                        display_name: 'State Board',
                        value: 'Central -board-ofEducation-[CBSE]'
                    },
                    {
                        display_name: 'International Baccalaureate [IB]',
                        value: 'Central -board-ofEducation-[CBSE]'
                    },
                    {
                        display_name: 'National Institute of Open Schooling [NIOS]',
                        value: 'National Institute of Open Schooling [NIOS]'
                    }
                ]
            },
            gradeModel: {
                error: '',
                value: '',
                selected: false,
                selectedIndex: 0,
                options: [
                    {
                        display_name: 'Grade 1',
                        value: 'grade-1'
                    },
                    {
                        display_name: 'Grade 2',
                        value: 'grade-2'
                    },
                    {
                        display_name: 'Grade 3',
                        value: 'grade-3'
                    },
                    {
                        display_name: 'Grade 4',
                        value: 'grade-4'
                    },
                    {
                        display_name: 'Grade 5',
                        value: 'grade-5'
                    },
                    {
                        display_name: 'Grade 6',
                        value: 'grade-6'
                    },
                    {
                        display_name: 'Grade 7',
                        value: 'grade-7'
                    },
                    {
                        display_name: 'Grade 8',
                        value: 'grade-8'
                    },
                    {
                        display_name: 'Grade 9',
                        value: 'grade-9'
                    },
                    {
                        display_name: 'Grade 10',
                        value: 'grade-10'
                    },
                    {
                        display_name: 'Grade 11',
                        value: 'grade-11'
                    },
                    {
                        display_name: 'Grade 12',
                        value: 'grade-12'
                    },
                ]
            },
            courseModel,
            topicModel: {
                type: 'text',
                placeholder: 'Choose your test topic',
                error: '',
                value: ''
            },
            testTitleModel: {
                type: 'text',
                placeholder: 'Choose your test title',
                error: '',
                value: ''
            },
            durationModel:{
                error: '',
                value: 0,
                type: '',
                digits: 0,
                selected: true,
                selectedIndex: 0,
                options: [
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
                ]
            },
            resultTypesModel,
            percentileAModel: {
                type: 'number',
                value: 0
            },
            percentileBModel: {
                type: 'number',
                value: 0
            },
            percentileCModel: {
                type: 'number',
                value: 0
            },
            percentileDModel: {
                type: 'number',
                value: 0
            },

            selectedIndex: [0, 0, 0, 2, 0, 0, 0, 0],
            selectedStatus: [false, false, false, true, false, false, false, false],
            showOptions: [false, false, false, false],
            
            selectedBoard: '',
            selectedGrade: '',
            selectedCourse: '',
            selectedDurationInMs: '',
            selectedresultTypes: []
        }
    },
    methods: {
        reject() {
            this.durationModel.digits = 0;
        },
        selectOption(selected:any){
            if(selected.dropDownIndex == 0) {
                this.boardModel.selected = true;
                this.boardModel.selectedIndex = selected.optionIndex;
                this.boardModel.value = this.boardModel.options[selected.optionIndex].value;
            }
            if(selected.dropDownIndex == 1) {
                this.gradeModel.selected = true;
                this.gradeModel.selectedIndex = selected.optionIndex;
                this.gradeModel.value = this.gradeModel.options[selected.optionIndex].value;
            }
            if(selected.dropDownIndex == 2) {
                this.courseModel.selected = true;
                this.courseModel.selectedIndex = selected.optionIndex;
                this.courseModel.value = this.courseModel.options[selected.optionIndex].value;
            }
            if(selected.dropDownIndex == 3) {
                this.durationModel.selected = true;
                this.durationModel.selectedIndex = selected.optionIndex;
                this.durationModel.type = this.durationModel.options[selected.optionIndex].value;

                if(this.durationModel.type == 'secs') {
                    this.durationModel.value = this.durationModel.digits * 1;
                }
                if(this.durationModel.type == 'mins') {
                    this.durationModel.value = this.durationModel.digits * 60 //mins to secs;
                }
                if(this.durationModel.type == 'hrs') {
                    this.durationModel.value = this.durationModel.digits * (60 * 60) //hours to secs;
                }
            }

            this.hideAllDropDownOptions();
        },
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
            const selectedOption = this.resultTypesModel.options[index];

            if(!this.resultTypesModel.value.includes(selectedOption.value)) {
                this.resultTypesModel.value.push(selectedOption.value);
                selectedOption.selected = true;
            } 
            else {
                this.resultTypesModel.value.splice(selectedOption.value.indexOf(), 1);
                selectedOption.selected = false;
            } 
        },
        goToNextSection() {

            const generalInfo = {
                board: this.boardModel.value,
                grade: this.gradeModel.value,
                course: this.boardModel.value,
                topic: this.topicModel.value,
                testTitle: this.topicModel.value,
                duration: this.durationModel.value,
                resultsTypes: this.resultTypesModel.value,
                percentiles:{
                    a: this.percentileAModel.value,
                    b: this.percentileBModel.value,
                    c: this.percentileCModel.value,
                    d: this.percentileDModel.value
                }
            };

            // store general info
            this.$store.dispatch('storegeninfo', generalInfo)
            .then(()=> this.$emit('next-button-action'))
            .catch((error)=> console.log(error));
        },

        async fetchCourses() {
            await this.$store.dispatch('fetchcourses')
            .then((response)=> {
                
                this.courseModel.options = [];

                response.forEach((element:any) => {
                    var course = {
                        display_name: element.title,
                        value: element._id
                    }

                    this.courseModel.options.push(course);
                });

                console.log(this.courseModel.options);
            })
            .catch((error)=> {
                this.courseModel.error = 'There was an error fetching courses.'
                console.log(error);
            });
        }

    },
    async beforeMount() {
        this.fetchCourses();
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
        font-size: 110%;
    }
    input::placeholder {
        font-size: 110%;
        color: var(--paper-grey-500);
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

    .col_4 {
        display: flex;
    }
    .col_4 > div {
        width: calc(100% /4) calc(100% /4) calc(100% /4) calc(100% /4) !important;   
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