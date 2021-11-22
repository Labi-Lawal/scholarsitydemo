<template>
    <section class="redeem_product_form">
        <form @submit.prevent="signInButtonPressed">
            <div class="title">
                <FormTitle title="Create A New Test" />
            </div>
            <div class="input_field_wrapper">
                <section class="section_wrapper">
                    <div class="field">
                        <label>Board</label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Board --"
                                :options="boardOptions"
                                :selected=dropDownSelected[0]
                                :selectedIndex=dropDownSelectedIndex[0]
                                :isOptionsVisible=showOptions[0]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=0
                                raiseByOne=2
                                @showOptions="showDropDownOptions(0)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>Grade</label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Grade --"
                                :options="gradeOptions"
                                :selected=dropDownSelected[1]
                                :selectedIndex=dropDownSelectedIndex[1]
                                :isOptionsVisible=showOptions[1]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=1
                                raiseByOne=1
                                @showOptions="showDropDownOptions(1)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>Course</label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Course --"
                                :options="courseOptions"
                                :selected=dropDownSelected[2]
                                :selectedIndex=dropDownSelectedIndex[2]
                                :isOptionsVisible=showOptions[2]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=2
                                raiseByOne=1
                                @showOptions="showDropDownOptions(2)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>Topic</label>
                        <input autocomplete="false">
                    </div>
                    <div class="field">
                        <label>Test Title</label>
                        <input autocomplete="false">
                    </div>
                    <div class="field">
                        <label>Test Title Limit ( in Minutes )</label>
                        <input autocomplete="false">
                    </div>
                </section>

                <section class="scoring_criteria section_wrapper">
                    <div class="">
                        <FormTitle title="Scoring Criteria" />
                    </div>
                    <div class="field">
                        <label>Correct Response</label>
                        <input placeholder="+100%" autocomplete="false">
                    </div>
                    <div class="field">
                        <label>Incorrect Response</label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Negative % --"
                                :options="negativeOptions"
                                :selected=dropDownSelected[3]
                                :selectedIndex=dropDownSelectedIndex[3]
                                :isOptionsVisible=showOptions[3]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=3
                                raiseByOne=2
                                @showOptions="showDropDownOptions(3)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                </section>

                <section class="scoring_criteria section_wrapper">
                    <div class="">
                        <FormTitle title="Result To Be Published To Student" />
                    </div>
                    <div class="field">
                        <label>Correct Response</label>
                        <input autocomplete="false">
                    </div>
                     <div class="field">
                        <label>Net Score</label>
                        <input autocomplete="false">
                    </div>
                     <div class="field">
                        <label>Total Score</label>
                        <input autocomplete="false">
                    </div>
                     <div class="field">
                        <label>Negative Score</label>
                        <input autocomplete="false">
                    </div>
                     <div class="field">
                        <label>Accuracy Rate</label>
                        <input autocomplete="false">
                    </div>
                     <div class="field">
                        <label>Percentile</label>
                        <input autocomplete="false">
                    </div>
                     <div class="field">
                        <label>Correct Solutions</label>
                        <input autocomplete="false">
                    </div>
                    <div class="field">
                        <label>Comparison Analytics</label>
                        <input autocomplete="false">
                    </div>
                </section>

                <section class="scoring_criteria section_wrapper">
                    <div class="">
                        <FormTitle title="Bonus Credits Criteria" />
                    </div>
                    <div class="field">
                        <label>For Scoring > 99 Percentile: </label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Negative % --"
                                :options="negativeOptions"
                                :selected=dropDownSelected[4]
                                :selectedIndex=dropDownSelectedIndex[4]
                                :isOptionsVisible=showOptions[4]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=4
                                raiseByOne=2
                                @showOptions="showDropDownOptions(4)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>For Scoring > 99 Percentile: </label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Negative % --"
                                :options="negativeOptions"
                                :selected=dropDownSelected[5]
                                :selectedIndex=dropDownSelectedIndex[5]
                                :isOptionsVisible=showOptions[5]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=5
                                raiseByOne=2
                                @showOptions="showDropDownOptions(5)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>For Scoring > 95 - 99 Percentile: </label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Negative % --"
                                :options="negativeOptions"
                                :selected=dropDownSelected[6]
                                :selectedIndex=dropDownSelectedIndex[6]
                                :isOptionsVisible=showOptions[6]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=6
                                raiseByOne=2
                                @showOptions="showDropDownOptions(6)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>For Scoring > 90 - 94.99 Percentile: </label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Negative % --"
                                :options="negativeOptions"
                                :selected=dropDownSelected[7]
                                :selectedIndex=dropDownSelectedIndex[7]
                                :isOptionsVisible=showOptions[7]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=7
                                raiseByOne=2
                                @showOptions="showDropDownOptions(7)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label>For Scoring > 80 - 89.99 Percentile: </label>
                        <div class="drop_down_wrapper">
                            <DropDown 
                                placeholder="-- Select Negative % --"
                                :options="negativeOptions"
                                :selected=dropDownSelected[8]
                                :selectedIndex=dropDownSelectedIndex[8]
                                :isOptionsVisible=showOptions[8]
                                :hideIcon=false
                                :hideBorder=false
                                :dropDownIndex=8
                                raiseByOne=2
                                @showOptions="showDropDownOptions(8)"
                                @optionSelect="optionSelected"
                            />
                        </div>
                    </div>
                </section>
                
                <div class="buttons_frame">
                    <div class="btn_wrapper">
                        <ButtonPlainText class="cancel" buttonText="Cancel" @buttonAction="$emit('cancel-action')" />
                    </div>
                    <div class="btn_wrapper">
                        <ButtonPlainText buttonText="Next" @buttonAction="$router.push('/teacher/create/instructions')" />
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import DropDown from "@/components/DropDown/DropDown.vue";
import FormTitle from "@/components/Title/FormTitle.vue";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default defineComponent({
    name: 'student_add_new',
    components: { DropDown, FormTitle, ButtonPlainText },
    data() {
        var boardOptions = [
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
        gradeOptions = [
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
        courseOptions = [
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
        negativeOptions = [
            {
                value: 'negative-1',
                display_name: 'Negative 1'
            },
            {
                value: 'negative-2',
                display_name: 'Negative 2'
            },
            {
                value: 'negative-3',
                display_name: 'Negative 3'
            },
            {
                value: 'negative-4',
                display_name: 'Negative 4'
            }
        ],  
        dropDownSelected = [false, false, false, false],
        dropDownSelectedIndex = [],
        showOptions = [false];

        return {
            randomNo: parseInt((Math.random() * 10) * 10000),
            boardOptions,
            gradeOptions,
            negativeOptions,
            dropDownSelected,
            dropDownSelectedIndex,
            showOptions,
            courseOptions
        }
    },
    methods: {
        showDropDownOptions(index) {
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
        optionSelected(selected) {
            this.dropDownSelected[selected.dropDownIndex] = true;
            this.dropDownSelectedIndex[selected.dropDownIndex] = selected.optionIndex;
            this.showDropDownOptions(selected.dropDownIndex);
        },
        cancel() {
            this.$emit('cancel');
        }
    }
});
</script>

<style scoped>
.redeem_product_form {

}
form {
    width: 90%;
    margin: 0 auto;
}
.title {
    border-bottom: 1px solid var(--paper-grey-300);
    padding: 0 0 2%;
}
div.field {
    width: 100%;
    padding: 1% 0;
}
.field label {
    font-weight: 500;
    font-size: 90%;
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
.buttons_frame {
    display: flex;
    justify-content: space-between;
}
.btn_wrapper {
    width: 100%;
    margin-top: 5%;
    height: 40px;
    width: 45%;
}
.btn_wrapper button {
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
    border-radius: 3px;
    font-size: 80%;
}
button.cancel {
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-300);
    color: var(--paper-grey-900);
}
.drop_down_wrapper {
    width: 100%;
    height: 40px;
}
.section_wrapper {
    padding: 5% 0;
}
.scoring_criteria {
    border-top: 1px solid var(--paper-grey-300);
}

</style>