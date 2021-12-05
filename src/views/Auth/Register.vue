<template>
    <section class="signin">
        <Header />
        <div class="signin_body">
            <div class="form-box">
                <div class="heading">
                    <div class="main">Register</div>
                    <div class="note">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div class="form">

                    <div class="error-msg" v-if="formModel.error != ''">{{ formModel.error }}</div>
                    
                    <form @submit.prevent="signInButtonPressed">

                        <div class="input_field">
                            <input 
                                v-model="fullnameModel.value" 
                                @keyup="validateFullname()"
                                :type="fullnameModel.type" 
                                :class="{
                                    error: (fullnameModel.error) ?true :false
                                }"
                                placeholder="Fullname" 
                                autocomplete="off"
                            >
                            <div class="error-message" v-if="fullnameModel.error != ''">{{ fullnameModel.error }}</div>
                        </div>

                        <div class="input_field">
                            <input 
                                v-model="emailModel.value" 
                                @keyup="validateEmail()" 
                                :type="emailModel.type" 
                                :class="{
                                    error: (emailModel.error) ?true :false
                                }"
                                placeholder="Email" 
                                autocomplete="off"
                            >
                            <div class="email_loader" v-if="isCheckingEmail">
                                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                            </div>
                            <FontAwesomeIcon 
                                :icon="['fas', 'check']" 
                                class="email_loader success_email_check" 
                                v-if="emailValidated"
                            />
                            <div class="error-message" v-if="emailModel.error != ''">{{ emailModel.error }}</div>
                        </div>
                        
                        <div class="input_field">
                            <input 
                                v-model="dobModel.value" 
                                @keyup="validateFullname()"
                                :type="dobModel.type" 
                                :class="{
                                    error: (dobModel.error) ?true :false
                                }"
                                placeholder="Date Of Birth" 
                                autocomplete="off"
                            >
                            <div class="error-message" v-if="dobModel.error != ''">{{ dobModel.error }}</div>
                        </div>

                        <div class="input_field drop_down">
                            <div class="drop_down_wrapper">
                                <DropDown 
                                    :dropDownIndex=0
                                    raiseByOne="2"
                                    placeholder="Account Type"
                                    :options="roleModel.options"
                                    :isOptionsVisible=optionsVisibility[0]
                                    :selected=roleModel.selected
                                    :selectedIndex=roleModel.selectedIndex
                                    :hideIcon=true
                                    :hideBorder=false
                                    @showOptions=toggleOptions
                                    @optionSelect=selectOption
                                    :class="{
                                        error: (emailModel.error) ?true :false
                                    }"
                                />
                            </div>
                            <div class="error-message" v-if="roleModel.error != ''">{{ roleModel.error }}</div>
                        </div>

                        <div 
                            class="drop_down_frame"
                            v-if="roleModel.value == 'student'"
                        >
                            <div class="input_field">
                                <div class="" >   
                                    <div class="input_field">
                                        <div class="drop_down_wrapper">
                                            <DropDown
                                                :dropDownIndex=1
                                                raiseByOne="2"
                                                placeholder="Grade"
                                                :options="gradeModel.options"
                                                :isOptionsVisible=optionsVisibility[1]
                                                :selected=gradeModel.selected
                                                :selectedIndex=gradeModel.selectedIndex
                                                :hideIcon=true
                                                :hideBorder=false
                                                @showOptions=toggleOptions
                                                @optionSelect=selectOption
                                                :class="{
                                                    error: (emailModel.error) ?true :false
                                                }"
                                            />
                                        </div>
                                        <div class="error-message" v-if="gradeModel.error != ''">{{ gradeModel.error }}</div>        
                                    </div>
                                </div>
                            </div>

                            <div class="input_field">
                                <div class="drop_down_wrapper">
                                    <DropDown 
                                        :dropDownIndex=2
                                        raiseByOne="1"
                                        placeholder="School Board"
                                        :options="boardModel.options"
                                        :isOptionsVisible=optionsVisibility[2]
                                        :selected=boardModel.selected
                                        :selectedIndex=boardModel.selectedIndex
                                        :hideIcon=true
                                        :hideBorder=false
                                        @showOptions=toggleOptions
                                        @optionSelect=selectOption
                                        :class="{
                                            error: (emailModel.error) ?true :false
                                        }"
                                    />
                                </div>
                                <div class="error-message" v-if="roleModel.error != ''">{{ roleModel.error }}</div>
                            </div>
                        </div>

                        <div class="input_field">
                            <input 
                                v-model="cityModel.value" 
                                @keyup="validateCity()"
                                :type="cityModel.type" 
                                :class="{
                                    error: (cityModel.error) ?true :false
                                }"
                                placeholder="City Of Residence" 
                                autocomplete="off"
                            >
                            <div class="error-message" v-if="cityModel.error != ''">{{ cityModel.error }}</div>
                        </div>

                        <div class="input_field">
                            <input 
                                v-model="passwordModel.value" 
                                @keyup="validatePassword()" 
                                :type="passwordModel.type" 
                                :class="{
                                    error: (passwordModel.error) ?true :false
                                }"
                                placeholder="Password" 
                                autocomplete="off"
                            >
                            <div class="error-message" v-if="passwordModel.error != ''">{{ passwordModel.error }}</div>
                        </div>

                       
                        <div class="signin_btn_wrapper">
                            <ButtonPlainText buttonText='Create Account' :isLoading="isLoading" @buttonAction="registerUser" />
                        </div>

                    </form>
                    
                    <div class="orsignup">
                        Already have an account? 
                        <router-link to="/signin"> Sign In </router-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Header from '@/components/Header/Header.vue';
import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';
import DropDown from '@/components/DropDown/DropDown.vue';
import Footer from '@/components/Footer/SiteFooter.vue';
import helper from '@/helper';

export default defineComponent({
    components: { Header, ButtonPlainText, Footer, DropDown },
    data() {
        var fullnameModel = {
                type: 'fullname',
                value: '',
                error: ''
            },
            emailModel = {
                type: 'email',
                value: '',
                error: ''
            },
            passwordModel = {
                type: 'password',
                value: '',
                error: ''
            },
            dobModel = {
                type: 'date',
                value: '',
                error: ''
            },
            cityModel = {
                type: 'text',
                value: '',
                error: ''
            },
            formModel = {
                error: ''
            },
            isDisabled = true;

        return {
            fullnameModel,
            emailModel,
            passwordModel,
            dobModel,
            cityModel,
            roleModel: {
                error: '',
                value: '',
                selected: false,
                selectedIndex: 0,
                options: [
                    {
                        display_name: 'student',
                        value: 'student'
                    },
                    {
                        display_name: 'teacher',
                        value: 'teacher'
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
            optionsVisibility: [false, false, false],
            formModel, 
            isDisabled,
            isLoading: false,
            isCheckingEmail: false,
            emailValidated: false 
        }
    },
    methods: {
        toggleOptions(selected) {
            console.log(selected);

            if(this.optionsVisibility[selected]) 
                this.optionsVisibility[selected] = false;
            else {
                this.hideAllDropDownOptions();
                this.optionsVisibility[selected] = true;
            }

            if(selected == 0) this.validateRole();
            if(selected == 1) this.validateGrade();
        },
        hideAllDropDownOptions () {
            for(var i = 0; i < this.optionsVisibility.length; i++) {
                this.optionsVisibility[i] = false; 
            }
        },
        selectOption(selected) {
            if(selected.dropDownIndex == 0) {
                this.roleModel.selectedIndex = selected.optionIndex;
                this.roleModel.value = this.roleModel.options[selected.optionIndex].value;
                this.roleModel.selected = true;
            }
            if(selected.dropDownIndex == 1) {
                this.gradeModel.selectedIndex = selected.optionIndex;
                this.gradeModel.value = this.gradeModel.options[selected.optionIndex].value;
                this.gradeModel.selected = true;
            }
            if(selected.dropDownIndex == 2) {
                this.boardModel.selectedIndex = selected.optionIndex;
                this.boardModel.value = this.boardModel.options[selected.optionIndex].value;
                this.boardModel.selected = true;
            }

            this.toggleOptions(selected.dropDownIndex);
        },
        async registerUser() {
            if(this.validateFormInput()) {
                var body = {
                    fullname: this.fullnameModel.value,
                    email: this.emailModel.value,
                    role: this.roleModel.value,
                    dob: this.dobModel.value,
                    grade: this.gradeModel.value,
                    board: this.boardModel.value,
                    city: this.cityModel.value,
                    password: this.passwordModel.value
                };

                this.isLoading = true;
            
                this.$store.dispatch('registerUser', body)
                .then(()=> {
                    this.$router.push({ path: '/' })
                })
                .catch((error)=> {
                    this.isLoading = false;

                    if(error.response.status == 404)
                        this.formModel.error = "Invalid Login Credentials";
                    else
                        this.formModel.error = "A server error occurred, please try logging in again";
                });
            } else {
                console.log("ERROR");
            }
        },
        validateFormInput() {
            if( this.validateFullname() && this.validateEmail() && this.validateRole() && 
                this.validateDOB() && this.validateCity() && this.validatePassword()) {
                    if(this.roleModel.value == 'student') {
                        if( this.validateGrade() && this.validateBoard()) return true;
                        else return false;
                    } else return true;
                }
            else return false;
        },
        validateFullname() { 
            if(this.fullnameModel.value.trim() == '') {
                this.fullnameModel.error = 'Fullname field cannot be empty';
                return false;
            }
            if(this.fullnameModel.value.trim().split(' ').length != 2) {
                this.fullnameModel.error = 'Please seperate your first and last name with a space';
                return false;
            }

            this.fullnameModel.error = '';
            return true;
        },
        validateEmail() { 
            if(this.emailModel.value == '') {
                this.emailModel.error = "Email field cannot be empty";
                this.emailValidated = false;
                return false;
            }
            if(!helper.emailValidation(this.emailModel.value)) { 
                this.emailModel.error = "Email isn't valid";
                this.emailValidated = false;
                return false;
            }
            if(!this.checkEmail(this.emailModel.value)) {
                this.emailModel.error = "Email already exist";
                this.emailValidated = false;
                return false;
            }

            this.emailModel.error = '';
            this.emailValidated = true;
            return true;
        },
        validateRole() {
            console.log(this.roleModel.value);
            if(this.roleModel.value == '') {
                this.roleModel.error = "Please select your account type";
                return false;
            }

            this.roleModel.error = '';
            return true;
        },
        validateDOB() {
            if(this.dobModel.value.trim() == '') {
                this.dobModel.error = 'Fullname field cannot be empty';
                return false;
            }
            
            this.gradeModel.error = '';
            return true;
        },
        validateGrade() {
            if(this.gradeModel.value == '') {
                this.gradeModel.error = "Please select your grade";
                return false;
            }

            this.gradeModel.error = '';
            return true;
        },
        validateBoard() {
            if(this.boardModel.value.trim() == '') {
                this.boardModel.error = 'Please select your school board';
                return false;
            }
            
            this.boardModel.error = '';
            return true;
        },
        validateCity() {
            console.log(this.cityModel.value);

            if(this.cityModel.value.trim() == '') {
                this.cityModel.error = 'Please select your city of residence';
                return false;
            }
            
            this.cityModel.error = '';
            return true;
        },
        validatePassword() {
            if(this.passwordModel.value == '') {
                this.passwordModel.error = "Password field cannot be empty";
                return false;
            }
            if(this.passwordModel.value.length < 8) {
                this.passwordModel.error = "Password cannot be less than 8 characters";
                return false;
            }

            this.passwordModel.error = '';
            return true;
        },
        async checkEmail(email) {
            this.isCheckingEmail = true;
            await this.$store.dispatch('checkemail', email)
            .then(()=> {
                console.log('SUCCESS');
                this.emailModel.error = "";
                this.isCheckingEmail = false;
                return true;
            })
            .catch((error)=> {
                console.log(error);
                this.emailModel.error = "Email already exist";
                this.isCheckingEmail = false;
                return false;
            });
        },
    }
});
</script>

<style scoped>
    header {
        height: 70px;
    }
    section.body {
        display: flex;
        padding: 0% 5%;
        height: calc(100vh - 71px);
    }
    div.image-box {
        width: 45%;
        height: 80vh;
        margin: auto 0;
    }
    .signin_body {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6% 0;
    }

    div.error-message, div.error-msg {
        text-align: start;
        padding: 0% 5%;
        color: red;
        font-size: 90%;
    }
    div.error-msg {
        font-size: 100%;
    }

    div.form-box {
        width: 25%;
        text-align: center;
    }
    div.heading {
        padding: 0% 5%;
        color: rgb(20, 20, 20);
        margin-bottom: 5%;
        text-align: start;
    }
    .main {
        font-size: 180%;
        font-weight: 600;
    }
    .note {
        font-size: 100%;
        font-weight: 400;
        color: var(--paper-grey-600);
    }
    
    .input_field {
        margin: 0 0 2%;
    }

    .drop_down_wrapper {
        width: 90%;
        height: 50px;
        margin: 0 auto;
    }
    .drop_down_wrapper div.display div.placeholder-option {
        color: rgb(83, 83, 83);
    }
    div.form-box input {
        width: 80%; 
        height: 40px;
        font-weight: 500;
        padding: 1% 5%;
        font-size: 110%;
        border: 1px solid lightgrey;
        color: rgb(83, 83, 83);
        outline: none;
        border-radius: 5px;
    }
    div.form-box input::placeholder {
        color: rgba(146, 146, 146, 0.705);
    }
    div.form-box input.error {
        border: 1px solid red !important;
    }
    div.form-box input.error ~ div.error-message {
        display: block;
    }
    div.link{
        text-align: right;
        width: 95%;
        padding: 0% 0% 0%;
        margin: 2% 0%;
        color: grey;
        font-size: 90%;
        font-weight: 500; 
    }

    div.orsignup {
        width: 90%;
        margin: 10% auto 0;
        display: flex;
        justify-content: space-between;
        color: grey;
    }
    div.orsignup a{
        width: fit-content;
        font-weight: 700;
        font-size: 100%;
        color: #bd1d1d;
    }

    .signin_btn_wrapper {
        height: 60px;
        border-radius: 5px;
        overflow: hidden;
        width: 90%;
        margin: 5% auto 0;
    }
    .signin_btn_wrapper button {
        border: 1px solid var(--paper-light-blue-900);
        background: var(--paper-light-blue-900);
        color: white;
    }

    .input_field {
        position: relative;
    }
    .email_loader {
        height: 20px;
        width: 20px;
        position: absolute;
        top: 30%;
        right: 7%;
        margin: auto 0;
    }
    .success_email_check {
        color: green;
        width: 15px;
        height: 15px;
        margin-top: 1%;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 100%;
        height: 100%;
    }
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--blue-100);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--blue-100) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>