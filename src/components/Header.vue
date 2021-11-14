<template>
    <header 
        :class="{
            signedin: isSignedIn,
            fixed: isFixed
        }"
    >
        <div class="top">
            <div class="logo_wrapper">
                <router-link to="/">Scholarsity</router-link>
            </div>

            <div class="nav">
                <nav>
                    <div class="become_teacher"> Become A Teacher </div>
                </nav>
                
                
                <SearchBar class="search_bar" />

                <Notifications 
                    class="notification"
                    count="9"
                    v-if="isSignedIn"
                />
            </div>

            <div class="signin_btn_wrapper" v-if="!isSignedIn">
                <router-link to="/signin">
                    <ButtonPlainText buttonText="SIGN IN" :isLoading="false" class="signin_btn"/>
                </router-link>
            </div>
                
            <div class="profile_wrapper" v-if="isSignedIn">
                <router-link to="/account">
                    <UserProfileMin :showDetails=false />
                </router-link>
            </div>
        </div>
        
        <!-- <div class="bottom" v-if="isSignedIn">
            <StudentNav v-if="routeParent === 'student'" />
            <TeacherNav v-if="routeParent === 'teacher'" />
        </div> -->
    </header>
</template>

<script>
    import { defineComponent } from "@vue/runtime-core";
    import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';
    // import TeacherNav from "@/components/navigation/TeacherNav.vue";
    // import StudentNav from "@/components/navigation/StudentNav.vue";
    import SearchBar from "@/components/Form/SearchBar.vue";
    import Notifications from "@/components/Notifications.vue";
    import UserProfileMin from "@/components/UserProfileMin.vue";

    export default defineComponent({
        name: 'Header',
        components: { ButtonPlainText, SearchBar, Notifications, UserProfileMin },
        data () {
            var routeParent = this.$route.matched[0].name.toLowerCase();

            return  { 
                isSignedIn: false,
                routeParent,
                isNotificationVisible: false,
                windowTop: 0,
                isFixed: false
            }
        },
        methods: {
            handleOnSroll() {
                this.windowTop = window.top.scrollY;
                if(this.windowTop >= 500) this.isFixed = true;
                else this.isFixed = false;
            }
        },
        created() {
            this.isSignedIn = this.$store.getters.isSignedIn;

            window.addEventListener('scroll', this.handleOnSroll);
        },
        unmounted() {
            window.removeEventListener('scroll', this.handleOnSroll);
        }
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

    header {
        height: 70px;
        box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
    }
    
    header.fixed {
        position: fixed;
        width: 100%;
        z-index: 5;
        top: 0;
        background: white !important;
        color: var(--paper-grey-800) !important;
        box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
    }
    
    div.top {
        display: flex;
        align-items: center;
        height: 70px;
    }
    div.top > *:first-child {
        margin-left: 5%;
    }
    div.top > *:last-child {
        margin-right: 5%;
    }

    .logo_wrapper {
        font-size: 180%;
        font-weight: 600;
    }
    
    .nav {
        width: 80%;
        height: 60%;
        display: flex;
        margin-left: 2%;
        margin-right: 2%;
    }
    
    .search_bar {
        margin-left: auto;
        width: 25%;
    }
    .search_bar.expand {
        width: 40%;
    }
    
    .notification {
        margin-top: auto;
        margin-left: 5%;
        margin-bottom: auto;
    }
    
    nav {
        display: flex;
        align-items: center;
        margin-right: auto;
    }
    nav > div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .signin_btn_wrapper {
        margin-left: auto;
        height: 60%;
        width: 8%;
    }
    .signin_btn_wrapper button {
        border: none;
        background: var(--blue-100);
        color: white;
        font-weight: 600;
        border-radius: 25px;
    }
    .profile_wrapper {
        margin: auto 0;
    }
    

    .bottom {
        /* border: 1px solid black; */
        height: 49px;
        width: 100%;
    }
    .bottom nav {
        width: 90%;
        margin: 0 auto;
    }

</style>