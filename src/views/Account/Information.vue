<template>
    <div class="information_body">
        <div class="title"> Account Information </div>

        <div class="profile_progress">
            <div class="top">
                <div class="progress_circle">
                    
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="70px"
                        height="70px"
                    >
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle 
                            cx="35" 
                            cy="35" 
                            r="32"
                            stroke-linecap="round" 
                            :style="{
                                        'stroke-dashoffset': calProgress
                                    }"
                        />
                    </svg>

                    <div class="percent">
                        <div class="digit">{{ user.completed }}</div>
                        <div class="symbol">%</div>
                    </div>
                </div>
                <div class="info">
                    <div class="head">Your profile is incomplete</div>
                    <div class="body">
                        Complete your profile to get more credits
                    </div>
                </div>
            </div>
            <div class="btn_wrapper">
                <ButtonPlainText buttonText="Complete My Profile" />
            </div>
        </div>
        
        <div class="form">
            <form @submit.prevent="signInButtonPressed">

                <div class="form_section">
                    <div class="form_title"> Personal </div>
                    
                    <div class="field col_2">
                        <div class="field">
                            <div class="label">First Name</div>
                            <input
                                v-model="user.fullname.split(' ')[0]"
                                autocomplete="false"
                                readonly
                            >
                        </div>
                        <div class="field">
                            <div class="label">Last Name</div>
                            <input 
                                v-model="user.fullname.split(' ')[1]"
                                autocomplete="false"
                                readonly
                            >
                        </div>
                    </div>
                   
                    <div class="field">
                        <div class="label">Email Address</div>
                        <div class="input_field">
                            <input
                                v-model="user.email.value"
                                readonly
                                autocomplete="false"
                            >
                            <div class="status warning">
                                <FontAwesomeIcon :icon="['fas', 'exclamation-triangle']" class="icon"/>
                                <div class="text">
                                    Email Not Verified
                                </div>
                            </div>
                            <div 
                                class="verify-btn"
                                @click="verifyEmail"
                            >  
                                <router-link 
                                    to="email-verification"
                                >
                                    Verify Now
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="field col_2">
                        <div class="field">
                            <div class="label">Phone Number</div>
                            <input 
                                type="number"
                                v-model="phoneModel.value"
                                autocomplete="false"
                            >
                        </div>

                        <div class="field">
                            <div class="label">Date Of Birth</div>
                            <input
                                type="date"
                                v-model="user.dob"
                                autocomplete="false"
                            >
                        </div>
                    </div>

                    <div class="field" v-if="user.role.value == 'student'">
                        <div class="label">Interests</div>
                        <div class="tag_field">
                            <div class="tags_list">
                                <div 
                                    class="tag"
                                    v-for="(interest, index) in interestsModel.value"
                                    :key="index"
                                >
                                    {{ interest }} 
                                    <FontAwesomeIcon :icon="['fas', 'times']" class="icon"/>
                                </div>
                            </div>
                            <input
                                type="text"
                                v-model="interestsModel.tempValue"
                                autocomplete="false"
                                @keyup.space="saveNewInterest"
                            >
                        </div>
                    </div>
                    
                </div>

                <div class="form_section">
                    <div class="form_title"> Socials </div>

                    <div class="field col_2">
                        <div class="field">
                            <div class="label">Facebook</div>
                            <input
                                v-model="facebookModel.value"
                                autocomplete="false"
                            >
                        </div>
                        <div class="field">
                            <div class="label">Instagram</div>
                            <input 
                                v-model="instagramModel.value"
                                autocomplete="false"
                            >
                        </div>
                    </div>
                    
                </div>

                <div class="form_section" v-if="user.role.value == 'student'">
                    <div class="form_title"> Student </div>

                    <div class="field col_2">
                        
                        <div class="field">
                            <div class="label"> Grade </div>
                            <div class="drop_down_wrapper">
                                <DropDown
                                    :dropDownIndex=0
                                    raiseByOne="2"
                                    placeholder="Grade"
                                    :options="gradeModel.options"
                                    :isOptionsVisible=optionsVisibility[0]
                                    :selected=gradeModel.selected
                                    :selectedIndex=gradeModel.selectedIndex
                                    :hideIcon=true
                                    :hideBorder=false
                                    @showOptions=toggleOptions
                                    @optionSelect=selectOption
                                />
                            </div>
                        </div>

                        <div class="field">
                            <div class="label"> Board </div>
                            <div class="drop_down_wrapper">
                                <DropDown
                                    :dropDownIndex=1
                                    raiseByOne="2"
                                    placeholder="Board"
                                    :options="boardModel.options"
                                    :isOptionsVisible=optionsVisibility[1]
                                    :selected=boardModel.selected
                                    :selectedIndex=boardModel.selectedIndex
                                    :hideIcon=true
                                    :hideBorder=false
                                    @showOptions=toggleOptions
                                    @optionSelect=selectOption
                                />
                            </div>
                        </div>
                    
                    </div>
                    
                    <div class="field">
                        <div class="label">Institution</div>
                        <input v-model="institutionModel.value"  autocomplete="false" />
                    </div>
                </div>

                <div class="save_btn_wrapper">
                    <ButtonPlainText 
                        buttonText="Save Changes" 
                        :isLoading="isSavingChanges"
                        @buttonAction="saveChanges()"
                    />
                </div>

            </form>
        </div>

    </div>
</template>

<script lang="ts">
import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';
import DropDown from '@/components/DropDown/DropDown.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    components: { ButtonPlainText, DropDown },
    data() {
        const user = this.$store.getters.userData,
        newFullname = {
            type: 'text',
            value: user.fullname,
            error: ''
        },
        optionsVisibility = [false];

        return {
            user,
            newFullname,
            percentIncomplete: 100 - user.completed,
            offset: 210,
            phoneModel: {
                value: user.phone_number.value || ''
            },
            gradeModel: {
                value: user.grade.value,
                selected: (user.grade.value) ?true :false,
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
                    }
                ]
            },
            boardModel: {
                value: user.board.value,
                selected: (user.board.value) ?true :false,
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
            interestsModel: {
                tempValue: '',
                value: user.interests.value,
                error: ''
            },
            facebookModel: {
                value: user.socials.facebook || '',
            },
            instagramModel: {
                value: user.socials.instagram || '',
            },
            institutionModel: {
                value: user.institution.value || ''
            },
            optionsVisibility,
            isSavingChanges: false
        }
    },
    computed: {
        calProgress() {
            var progressNum = parseInt(((this.percentIncomplete / 100) * this.offset).toString());
            return progressNum;
        }
    },
    methods: {
        saveNewInterest() {
            this.interestsModel.value.push(this.interestsModel.tempValue.trim())
            this.interestsModel.tempValue = '';
        },
        hideAllDropDownOptions () {
            for(var i = 0; i < this.optionsVisibility.length; i++) {
                this.optionsVisibility[i] = false; 
            }
        },
        selectOption(selected:any) {
            if(selected.dropDownIndex == 0) {
                this.gradeModel.selectedIndex = selected.optionIndex;
                this.user.grade = this.gradeModel.options[selected.optionIndex].value;
                this.gradeModel.selected = true;
            }
            if(selected.dropDownIndex == 1) {
                this.boardModel.selectedIndex = selected.optionIndex;
                this.user.board = this.boardModel.options[selected.optionIndex].value;
                this.boardModel.selected = true;
            }

            this.hideAllDropDownOptions();
        },
        toggleOptions(index:number) {
            console.log(this.optionsVisibility[index]);
            if(this.optionsVisibility[index])
                this.optionsVisibility[index] = false;
            else {
                this.hideAllDropDownOptions();
                this.optionsVisibility[index] = true;
            }
        },

        determineGradeInit() {
            for(var i=0; i<this.gradeModel.options.length; i++) {
                var option = this.gradeModel.options[i];

                if(option.value == this.user.grade.value) this.gradeModel.selectedIndex = i;
            }
        },
        determineBoardInit() {
            for(var i=0; i<this.boardModel.options.length; i++) {
                var option = this.boardModel.options[i];

                if(option.value == this.user.grade.value) this.boardModel.selectedIndex = i;
            }
        },

        async saveChanges() {
            console.log(this.user._id);

            const body = {
                email: this.user.email.value,
                dob: this.user.dob.value,
                fullname: this.user.fullname,
                phone: this.phoneModel.value,
                grade: this.gradeModel.value,
                board: this.boardModel.value,
                interests: this.interestsModel.value,
                socials: {
                    facebook: this.facebookModel.value,
                    instagram: this.instagramModel.value
                },
                institution: this.institutionModel.value
            };

            this.isSavingChanges = true;

            console.log(body);

            await this.$store.dispatch('updateuserdata', body)
            .then((response)=> {
                console.log(response);
                this.user = response;

                this.isSavingChanges = false;
            })
            .catch((error)=> {
                console.log(error.response);
                this.isSavingChanges = false;
            })
        }
    },
    beforeMount() {
        this.determineGradeInit();
        this.determineBoardInit();
    },
});
</script>

<style scoped>
.information_body {
    position: relative;
    padding-top: 1%;
}

.profile_progress {
    position: absolute;
    right:  0;
    border: 1px solid var(--blue-100);
    background: var(--blue-100);
    margin-left: auto;
    height: 200px;
    width: 31%;
    border-radius: 10px;
    color: var(--paper-grey-300);
}
.profile_progress .top {
    height: 65%;
    display: flex;
    padding: 0 5%;
    display: flex;
    align-items: center;
}
.top .progress_circle {
    background: #77abff65;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: auto 0;
    display: flex;
    position: relative;
}
svg {
    position: absolute;
    top: 0;
    left: 0;
}
circle {
    z-index: 100;
    left: 0;
    fill: none;
    stroke: white;
    stroke-width: 5px;
    stroke-dasharray: 210;
    animation: anim 1.5s ease-in forwards;
}
@keyframes anim {
    0% {
        stroke-dashoffset: 210;
    }
}

.top .percent {
    margin: auto;
    display: flex;
    align-items: center;
}
.top .percent .digit {
    font-size: 150%;
}
.top .percent .symbol {
    font-size: 110%;
}

.top .info {
    width: 70%;
    margin-left: auto;
}
.top .info .head {
    color: var(--paper-grey-100);
    font-weight: 600;
}
.top .info .body {
    margin-top: 5%;
}


.profile_progress .btn_wrapper {
    width: 90%;
    margin: 0 auto;
    height: 40px;
}
.profile_progress .btn_wrapper button {
    border-radius: 25px;
    border: white;
    background: white;
    color: var(--blue-100);
}


.form {
    margin-top: 10%;
    width: 65%;
}
.form_section {
    margin-bottom: 10%;
}
.form_title {
    margin-bottom: 2%;
    font-weight: 500;
    font-size: 110%;
    color: var(--paper-grey-800);
}
.field {
    width: 100%;
    margin-bottom: 1%;
}
.field input, 
.drop_down_wrapper,
.input_field,
.tag_field {
    width: 95.5%;
    padding: 0 2%;
    height: 50px;
    font-size: 110%;
    border: 1px solid var(--paper-grey-500);
    border-radius: 5px;
    color: var(--paper-grey-800);
}
.col_2 {
    display: flex;
    justify-content: space-between;
}
.col_2 .field {
    width: 48%;
}

.input_field {
    display: flex;
    align-items: center;
    width: 95%;
}
.input_field input, .tag_field input {
    width: 60%;
    border: none;
    outline: none;
}
.status {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.status.warning {
    color: var(--paper-yellow-900);
    width: 25%;
}
.status .icon {
    position: static;
    font-size: 90%;
}
.status .text {
    font-size: 88%;
    font-weight: 500;
}
.verify-btn {
    font-size: 70%;
    padding: 5px;
    border-radius: 5px;
    background: var(--paper-grey-300);
    color: var(--paper-grey-600);
} 

.tag_field {
    width: 98%;
    height: unset;
    padding: 6px;
}
.tag_field .tags_list {
    display: inline-flex;
}
.tag_field input {
    display: inline-block;
    border: 1px solid var(--paper-grey-400);
    font-size: 90%;
    width: 28%;
    height: 30px;
    margin: 2% auto;
}
.tag_field .tag {
    display: inline-block;
    padding: 2px;
    border-radius: 5px;
    align-items: center;
    font-size: 80%;
    background: var(--paper-grey-200);
    margin: 5px 0;
    margin-right: 10px;
}
.tag .icon {
    position: unset;
    color: black;
    width: 15px;
    height: 15px;
    color: var(--paper-grey-600);
    margin-left: 5px;
}

.drop_down_wrapper {
    width: 100%;
    border: none;
    height: 55px;
    padding: 0;
}

.save_btn_wrapper {
    height: 50px;
    width: 20%;
    margin-left: auto;
    margin-right: 4%;
    margin-top: 5%;
}
.form .save_btn_wrapper button {
    border-radius: 25px;
    border: 1px solid var(--blue-100);
    background: var(--blue-100);
    color: white;
}
</style>