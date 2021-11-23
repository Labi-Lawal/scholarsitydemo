<template>
    <section class="signin">
        <Header />
        <div class="signin_body">
            <div class="form-box">
                <div class="heading">
                    <div class="main">Login</div>
                    <div class="note">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div class="form">

                    <div class="error-msg" v-if="formModel.error != ''">{{ formModel.error }}</div>
                    
                    <form @submit.prevent="signInButtonPressed">

                        <input 
                            v-model="emailModel.value" 
                            @keyup="validateEmail()" 
                            :type="emailModel.type"
                            :class="{ error: (emailModel.error) ?true :false }"
                            placeholder="Email" 
                            autocomplete="off"
                        >
                        <div class="error-message" v-if="emailModel.error != ''">{{ emailModel.error }}</div>

                        <input 
                            v-model="passwordModel.value" 
                            @keyup="validatePassword()" 
                            :type="passwordModel.type" 
                            :class="{ error: (passwordModel.error) ?true :false }"
                            placeholder="Password" 
                            autocomplete="off"
                        >
                        <div class="error-message" v-if="passwordModel.error != ''">{{ passwordModel.error }}</div>

                        <div class="link">
                            <router-link to="/"> Forgot your password? </router-link>
                        </div>
                        
                        <div class="signin_btn_wrapper">
                            <ButtonPlainText buttonText='SIGN IN' :isLoading="isLoading" @button-action="signUserIn" />
                        </div>

                    </form>
                    <div class="orsignup">
                        Don't have an account? 
                        <router-link to="/register"> Create Account </router-link>
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
import Footer from '@/components/Footer/SiteFooter.vue';
import helper from '@/helper';

export default defineComponent({
    components: { Header, ButtonPlainText, Footer },
    data() {
        var emailModel = {
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
            emailModel,
            passwordModel, 
            formModel, 
            isDisabled,
            isLoading: false
        }
    },
    methods: {
        async signUserIn() {
            if(this.validateFormInput()) {
                var payload = {
                    email: this.emailModel.value,
                    password: this.passwordModel.value
                };

                this.isLoading = true;
                
                await this.$store.dispatch('signuserin', payload)
                .then(()=> {
                    this.$router.push({ path: '/dashboard' })
                })
                .catch((error)=> {
                    this.isLoading = false;
                    
                    if( error.response.status == 409 )
                        this.emailModel.error = error.response.data.message
                    if (error.response.status == 422 )
                        this.formModel.error = error.response.data.message;
                    if (error.response.status == 404 )
                        this.formModel.error = 'Invalid Login Credentials';
                });
            }
        },
        validateFormInput() {
            if(this.validateEmail() && this.validatePassword()) return true;
            else return false;
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

            this.emailModel.error = '';
            return true;
        },
        validatePassword() {
            if(this.passwordModel.value == '') {
                this.passwordModel.error = "Password field cannot be empty";
                return false;
            }

            this.passwordModel.error = '';
            return true;
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
        color: rgb(146, 146, 146);
    }
    div.form-box input.error {
        border: 1px solid red;
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