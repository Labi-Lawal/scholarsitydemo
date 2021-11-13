<template>
    <header>
       <div class="top">
            <div class="left">
                <div class="logo_wrapper">
                    <router-link to="/">Scholarsity</router-link>
                </div>
                <div class="nav">
                    <div class="">
                        <router-link to="/student">Students</router-link>
                    </div>
                    <div class="">
                        <router-link to="/teacher">Teachers</router-link>
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="nav">
                    <div class="">Notifications</div>
                </div>
                <div class="btn_wrapper" v-if="!isSignedIn">
                    <router-link to="/signin">
                        <ButtonPlainText buttonText="SIGN IN" :isLoading="false" class="signin_btn"/>
                    </router-link>
                </div>
                <div class="btn_wrapper" v-if="isSignedIn">
                    <router-link to="/account">
                        <ButtonPlainText buttonText="ACCOUNT" :isLoading="false" class="signin_btn"/>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class="container_padding_5">
                <nav>
                    <div class="">
                        <router-link to="/student/categories">Create</router-link>
                    </div>
                    <div class="">
                        <router-link to="/student/analytics">Analyse</router-link>
                    </div>
                    <div class="">
                        <router-link to="/student/compete-up">Reports</router-link>
                    </div>
                    <div class="">
                        <router-link to="/student/contests">Wallet</router-link>
                    </div>
                    <div class="">
                        <router-link to="/student/wallet">Student List</router-link>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import { defineComponent } from "@vue/runtime-core";
    import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';

    export default defineComponent({
        name: 'HeaderTeacher',
        components: { ButtonPlainText },
        data () {
            console.log(this.$route);
            return { 
                isSignedIn: false
            }
        },
        methods: {

        },
        created() {
            this.isSignedIn = this.$store.getters.isSignedIn;
            console.log(this.isSignedIn);
        }
    });
</script>

<style scoped>
    header {
        height: 120px;
    }
    header > * > :first-child {
        margin-left: 5%;
    }
    header > * > :last-child {
        margin-right: 5%;
    }
    .top {
        height: 70px;
        display: flex;
        justify-content: space-between;
        background: var(--blue-100);
        color: white;
    }
    .top > div {
        width: 50%;
    }
    .left {
        display: flex;
    }
    .logo_wrapper {
        margin: auto 0;
        font-size: 150%;
        font-weight: 700;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        margin: auto 0 auto 10%;
    }
    .left .nav {
        width: 35%;
    }
    .left .nav > div {
        width: 50%;
    }

    .right {
        display: flex;
        justify-content: flex-end;
    }
    .right > * {
        margin: auto 0;
    }
    .right .nav {
        width: 20%;
    }
    .btn_wrapper {
        height: 60%;
        width: 15%;
    }
    .signin_btn {
        border: 1px solid white;
        background: white;
        color: var(--blue-100 );
    }
    

    .bottom {
        height: 50px;
    }
    .bottom nav {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }
    .bottom nav * {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bottom nav > div {
        width: calc(100%/7);
        cursor: pointer;
        color: rgba(0,0,0,0.66);
        font-weight: 500;
    }
    .bottom nav > div:hover {
        background-color: rgba(0,0,0,0.04);
    }
    .bottom nav > div *{
        width: 100%;
        height: 100%;
    }
    .bottom nav .router-link-exact-active {
        border-bottom: 5px solid var(--blue-100);
    }
</style>