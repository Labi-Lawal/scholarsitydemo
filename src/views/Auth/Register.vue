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
                        <div class="error-message" v-if="emailModel.error != ''">{{ emailModel.error }}</div>
                        
                        <div class="drop_down_wrapper">
                            <DropDown 
                                :dropDownIndex=0
                                placeholder="Account Type"
                                :options="roleModel.options"
                                :isOptionsVisible=optionsVisibility
                                :selected=roleModel.selected
                                :selectedIndex=roleDropDownSelectedIndex
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
import Footer from '@/components/Footer/Footer.vue';
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
            formModel = {
                error: ''
            },
            isDisabled = true;

        return {
            fullnameModel,
            emailModel,
            passwordModel,
            roleModel: {
                error: '',
                value: '',
                selected: false,
                options: [
                    {
                        display_name: 'student',
                        value: 'student'
                    },
                    {
                        display_name: 'teacher',
                        value: 'teacher'
                    },
                ]
            },
            roleDropDownSelectedIndex: 0,
            optionsVisibility: false,
            formModel, 
            isDisabled,
            isLoading: false
        }
    },
    methods: {
        toggleOptions() {
            this.optionsVisibility = !this.optionsVisibility;
            this.validateRole();
        },
        selectOption(selected) {
            this.roleDropDownSelectedIndex = selected.optionIndex;
            this.roleModel.value = this.roleModel.options[this.roleDropDownSelectedIndex].value;
            this.roleModel.selected = true;
            this.toggleOptions();
        },
        async registerUser() {
            if(this.validateFormInput()) {
                var body = {
                    fullname: this.fullnameModel.value,
                    email: this.emailModel.value,
                    role: this.roleModel.value,
                    password: this.passwordModel.value
                };

                console.log(body);

                this.isLoading = true;
            
                this.$store.dispatch('registerUser', body)
                .then(()=> {
                    this.$router.push({ path: '/dashboard' })
                })
                .catch((error)=> {
                    this.isLoading = false;

                    if(error.response.status == 404)
                        this.formModel.error = "Invalid Login Credentials";
                    else
                        this.formModel.error = "A server error occurred, please try logging in again";
                });
            }
        },
        validateFormInput() {
            if(this.validateFullname() && this.validateEmail() && this.validateRole() && this.validatePassword()) return true;
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
                return false;
            }
            if(!helper.emailValidation(this.emailModel.value)) { 
                this.emailModel.error = "Email isn't valid";
                return false;
            }
            if(!this.checkEmail(this.emailModel.value)) {
                this.emailModel.error = "Email already exist";
                return false;
            }

            this.emailModel.error = '';
            return true;
        },
        validateRole() {
            if(this.roleModel.value == '') {
                this.roleModel.error = "Please select your account type";
                return false;
            }

            this.roleModel.error = '';
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
            await this.$store.dispatch('checkemail', email)
            .then(()=> { return true })
            .catch(()=> { return false });
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
    .drop_down_wrapper {
        width: 90%;
        margin: 2% auto 0;
        height: 50px;
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
        margin-top: 10px;
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
</style>