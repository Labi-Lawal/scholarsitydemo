<template>
    <section class="signin">
        <Header />
        <div class="signin_body">
            <div class="form-box">
                <div class="heading">Log into your <br /> account  </div>
                <div class="form">

                    <div class="error-msg" v-if="formModel.error != ''">{{ formModel.error }}</div>
                    
                    <form @submit.prevent="signInButtonPressed">

                        <input v-model="emailModel.value" @keyup="validateEmail()" :type="emailModel.type" class="email" placeholder="Email" autocomplete="off">
                        <div class="error-message" v-if="emailModel.error != ''">{{ emailModel.error }}</div>

                        <input v-model="passwordModel.value" @keyup="validatePassword()" :type="passwordModel.type" placeholder="Password" autocomplete="off">
                        <div class="error-message" v-if="passwordModel.error != ''">{{ passwordModel.error }}</div>

                        <div class="link">
                            <router-link to="/"> Forgot your password? </router-link>
                        </div>
                        
                        <div class="btn_wrapper">
                            <ButtonPlainText buttonText='SIGN IN' :isLoading="isLoading" @button-action="signUserIn" />
                        </div>

                    </form>
                    <div class="orsignup">
                        Don't have an account? 
                        <router-link to="/register"> Create an account </router-link>
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
import Footer from '@/components/Footer/Footer.vue';

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
        signUserIn() {
            this.$store.dispatch('signuserin')
            .then(()=> this.$router.push('/'));
        },
        signUserOut() {
            this.$store.dispatch('signuserout')
            .then(()=> this.$router.push('/'));
        }
    }
});
</script>

<style scoped>
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
        width: 30%;
        text-align: center;
    }
    div.heading {
        padding: 0% 5%;
        font-weight: 700;
        color: rgb(20, 20, 20);
        font-size: 180%;
        margin-bottom: 5%;
        text-align: start;
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
        font-weight: 700;
        font-size: 100%;
        color: #bd1d1d;
    }
    .btn_wrapper {
        height: 60px;
        border-radius: 5px;
        overflow: hidden;
        width: 90%;
        margin: 0 auto;
    }
    .btn_wrapper button {
        border: 1px solid var(--paper-light-blue-900);
        background: var(--paper-light-blue-900);
        color: white;
    }
</style>