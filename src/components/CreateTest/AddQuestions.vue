<template>
    <section class="instructions_from">
        <form @submit.prevent="signInButtonPressed">
            <div class="section_title">
                Questions
            </div>
            
            <div class="input_field_wrapper">
                <div 
                    class="field" 
                    v-for="(field, index) in allFields"
                    :key="index"
                >   
                    <div class="question_number">{{ index + 1 }}.</div>
                    <div class="content">
                        <div class="remove">
                            <div class="remove_field_btn_wrapper" v-if="index > 0">
                                <ButtonIcon iconName="minus" @buttonAction="removeField(index)" />
                            </div>
                        </div>
                        <div class="question">
                            <div class="field_input">
                                <textarea
                                    v-model="field.question" 
                                    autocomplete="false"
                                ></textarea>
                            </div>
                        </div>
                        <div class="options">
                            <div class="field_options">
                                <div class="option">
                                    <input 
                                        placeholder="A."
                                        v-model="field.options[0]"
                                        autocomplete="false" 
                                    >
                                </div>
                                <div class="option">
                                    <input 
                                        placeholder="B."
                                        v-model="field.options[1]"
                                        autocomplete="false" 
                                    >
                                </div>
                                <div class="option">
                                    <input 
                                        placeholder="C."
                                        v-model="field.options[2]"
                                        autocomplete="false" 
                                    >
                                </div>
                                <div class="option">
                                    <input 
                                        placeholder="D."
                                        v-model="field.options[3]"
                                        autocomplete="false" 
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="details flex col_4">
                            
                            <div class="input_field correctans">
                                <div class="label">Which option is the correct one?</div>
                                <div class="drop_down_wrapper">
                                    <DropDown 
                                        placeholder="Select Correct Option"
                                        :options="field.optionsLabel.list"
                                        :selected=field.optionsLabel.selected
                                        :selectedIndex=field.optionsLabel.selectedIndex
                                        :isOptionsVisible="field.optionsLabel.showOptions"
                                        :hideIcon=false
                                        :hideBorder=false
                                        :dropDownIndex=index
                                        :raiseByOne=3
                                        @showOptions="showDropOptions"
                                        @optionSelect="selectOption"
                                    />
                                </div>
                            </div>

                            <div class="input_field">
                                <div class="label">Score For Correct Answer (+ve) </div>
                                <input 
                                    type="number"
                                    @keypress.e="clear(index, 0)"
                                    autocomplete="false"
                                >
                            </div>

                            <div class="input_field">
                                <div class="label">Score For Wrong Answer (-ve) </div>
                                <input 
                                    type="number"
                                    @keypress.e="clear(index, 1)"
                                    autocomplete="false"
                                >
                            </div>

                            <div class="input_field">
                                <div class="label">Max Question Time</div>
                                <div class="mixed_input_dropdown_double">
                                    <input 
                                        type="number"
                                        v-model="field.durationModel.digits"
                                        @keyup.e="reject()"
                                        autocomplete="false"
                                    >
                                    <div class="drop_down_wrapper">
                                        <DropDown
                                            :options="field.durationModel.options"
                                            :selected=field.durationModel.selected
                                            :selectedIndex=field.durationModel.selectedIndex
                                            :isOptionsVisible="field.durationModel.showOptions"
                                            :hideIcon=false
                                            :hideBorder=true
                                            :dropDownIndex=0
                                            :raiseByOne=0
                                            @showOptions="showDurationOptions"
                                            @optionSelect="selectDurationOption"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="explain input_field">
                            <div class="label">Explanation</div>
                            <textarea
                                v-model="field.explain" 
                                autocomplete="false"
                            ></textarea>
                        </div>
                    </div>
                </div>
                
                <div class="add_field_btn_wrapper">
                    <ButtonIcon iconName="plus" @buttonAction="addNewField" />
                </div>
            </div>

            <div class="button_section">
                <div class="button_wrapper">
                    <ButtonPlainText 
                        buttonText="Next"
                        @buttonAction="goToNextSection()"
                    />
                </div>
            </div>

        </form>
        <!-- <div class="resources">
            
        </div> -->
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";
import ButtonIcon from "@/components/buttons/ButtonIcon.vue";
import DropDown from '@/components/DropDown/DropDown.vue';

export default defineComponent({
    name: 'instructions-form',
    components: { ButtonIcon, ButtonPlainText, DropDown },
    data() {
        return {
            allFields: [
                {
                    question: '',
                    explanation: '',
                    options: [],
                    optionsLabel: {
                        selected: false,
                        selectedIndex: 0,
                        showOptions: false,
                        list: [
                            {
                                display_name: 'A',
                                value: 0
                            },
                            {
                                display_name: 'B',
                                value: 1
                            },
                            {
                                display_name: 'C',
                                value: 2
                            },
                            {
                                display_name: 'D',
                                value: 3
                            }
                        ]
                    },
                    correctOption: 0,
                    correctAnsScore: 0,
                    wrongAnsScore: 0,
                    timeInSecs: 0,
                    durationModel: {
                        digits: 0,
                        selectedType: '',
                        selected: true,
                        selectedIndex: 0,
                        showOptions: false,
                        options: [
                            {
                                display_name: 'Secs',
                                value: 'secs'
                            },
                            {
                                display_name: 'Mins',
                                value: 'mins'
                            },
                            {
                                display_name: 'Hrs',
                                value: 'hrs'
                            }
                        ]
                    }
                }
            ],
        }
    },
    methods: {
        clear(questionIndex:any, optionIndex:any) {
            if(optionIndex == 0) {
                this.allFields[questionIndex].correctAnsScore
            } else {
                this.allFields[questionIndex].correctAnsScore
            }
        },
        save(value:any) {
            console.log(value);
        },
        addNewField () {
            this.allFields.push({
                question: '',
                explanation: '',
                options: [],
                optionsLabel: {
                    selected: false,
                    selectedIndex: 0,
                    showOptions: false,
                    list: [
                        {
                            display_name: 'A',
                            value: 0
                        },
                        {
                            display_name: 'B',
                            value: 1
                        },
                        {
                            display_name: 'C',
                            value: 2
                        },
                        {
                            display_name: 'D',
                            value: 3
                        }
                    ]
                },
                correctOption: 0,
                correctAnsScore: 0,
                wrongAnsScore: 0,
                timeInSecs: 0,
                durationModel: {
                    selectedType: '',
                    digits: 0,
                    selected: false,
                    selectedIndex: 0,
                    showOptions: false,
                    options: [
                        {
                            display_name: 'Secs',
                            value: 'secs'
                        },
                        {
                            display_name: 'Mins',
                            value: 'mins'
                        },
                        {
                            display_name: 'Hrs',
                            value: 'hrs'
                        }
                    ]
                }
            })
        },
        removeField (index:any) {
            this.allFields.splice(index, 1);
        },

        showDropOptions(index:any) {
            if(this.allFields[index].optionsLabel.showOptions)
                this.allFields[index].optionsLabel.showOptions = false;
            else {
                this.hideAllDropDownOptions();
                this.allFields[index].optionsLabel.showOptions = true;
            }
        },
        hideAllDropDownOptions () {
            for(var i = 0; i < this.allFields.length; i++) {
                this.allFields[i].optionsLabel.showOptions = false;
                this.allFields[i].durationModel.showOptions = false;
            }
        },
        showDurationOptions(index:any) {

            if(this.allFields[index].durationModel.showOptions)
                this.allFields[index].durationModel.showOptions = false;
            else {
                this.hideAllDropDownOptions();
                this.allFields[index].durationModel.showOptions = true;
            }
        },

        selectOption(selected:any){
            const selectedField = this.allFields[selected.dropDownIndex];

            selectedField.optionsLabel.selected = true;
            selectedField.optionsLabel.selectedIndex = selected.optionIndex;

            selectedField.correctOption = selectedField.optionsLabel.list[selected.optionIndex].value;

            this.hideAllDropDownOptions();
        },
        selectDurationOption(selected:any){
            const selectedField = this.allFields[selected.dropDownIndex];

            selectedField.durationModel.selected = true;
            selectedField.durationModel.selectedIndex = selected.optionIndex;

            selectedField.durationModel.selectedType = selectedField.durationModel.options[selected.optionIndex].value;

            if(selectedField.durationModel.selectedType == 'secs'){
                selectedField.timeInSecs = selectedField.durationModel.digits;
            }
            if(selectedField.durationModel.selectedType == 'mins'){
                selectedField.timeInSecs = selectedField.durationModel.digits * 60;
            }
            if(selectedField.durationModel.selectedType == 'hrs'){
                selectedField.timeInSecs = selectedField.durationModel.digits * (60 * 60);
            }

            this.hideAllDropDownOptions();
        },

        goToNextSection() {
            this.$store.dispatch('storequestions', this.allFields)
            .then(()=> this.$emit('next-button-action'))
            .catch((error)=> console.log(error))
        }
    }
});
</script>

<style scoped>
.section_title {
    border-bottom: 1px solid var(--paper-grey-200);
    color: var(--paper-grey-600);
    font-weight: 400;
    font-size: 150%;
    margin: 5% 0 2%;
    padding: 1% 0;
    text-transform: capitalize;
}
.grid {
    display: grid;
}
.flex {
    display: flex;
    justify-content: space-between;
}
.flex.col_4 > div{
    width: calc(100% / 4.3);
}
.details {
    margin-top: 2%;
}
.input_field input, 
.input_field .drop_down_wrapper {
    height: 50px;
    padding: 0 3%;
    width: 100%;
}
.correctans .drop_down_wrapper {
    height: 55px;
}
.drop_down_wrapper {
    padding: 0;
}

.field {
    margin-top: 15px;
    border: 1px solid var(--paper-grey-200);
    padding: 4% 2%;
    display: flex;
    border-radius: 5px;
}
.field div.label {
    font-weight: 500;
    font-size: 95%;
    color: var(--paper-grey-600);
    margin-bottom: 5px;
    margin-left: 5px;
}
.field_input {
    display: flex;
    align-items: center;
}
div.question {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.question_number {
    margin-right: 1%;
    font-size: 20px;
    font-weight: 600;
    color: var(--paper-grey-600);
}
.content {
    width: 100%;
    height: 100%;
}
.field_input {
    width: 100%;
    margin: 0;
}
textarea, input {
    display: block;
    width: 95%;
    padding: 2% 3%;
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-100);
    color: var(--paper-grey-800);
    border-radius: 10px;
    outline: none;
    font-size: 100%;
    resize: none;
}
input::placeholder {
    color: var(--paper-grey-500);
}
.options {
    width: 100%;
    margin: 0 auto 0 auto;
    margin-top: 1%;
    
}
.field_options {
    display: grid;
    grid-template-columns: calc(100% / 2) calc(100% / 2);
    column-gap: 10px;
    row-gap: 10px;
}
.option {
    width: calc(100% - 10px);
    height: 50px;
}
.option input {
    height: 40%;
    width: 93%;
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
    background: var(--paper-grey-100);
}

.explain {
    margin-top: 2%;
}

.add_field_btn_wrapper {
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-top: 10px;
}

.remove {
    margin-bottom: 5px;
}
.remove_field_btn_wrapper {
    width: 20px;
    height: 20px;
    margin-left: auto;
}
.remove_field_btn_wrapper button {
    border-radius: 50%;
    border: 1px solid rgba(243, 118, 118);
    background: rgba(243, 118, 118);
    color: white;
}
.add_field_btn_wrapper button {
    border-radius: 10px;
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
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