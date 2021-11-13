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
                <SearchBar class="search_bar" />

                <Notifications 
                    class="notification"
                    count="9" 
                />
            </div>

            <div class="btn_wrapper" v-if="!isSignedIn">
                <router-link to="/signin">
                    <ButtonPlainText buttonText="LOG IN" :isLoading="false" class="signin_btn"/>
                </router-link>
            </div>
                
            <div class="btn_wrapper" v-if="isSignedIn">
                <router-link to="/account">
                    <ButtonPlainText buttonText="ACCOUNT" :isLoading="false" class="signin_btn"/>
                </router-link>
            </div>
        </div>
        
        <div class="bottom" v-if="isSignedIn">
            <StudentNav v-if="routeParent === 'student'" />
            <TeacherNav v-if="routeParent === 'teacher'" />
        </div>
    </header>
</template>

<script>
    import { defineComponent } from "@vue/runtime-core";
    import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';
    import TeacherNav from "@/components/navigation/TeacherNav.vue";
    import StudentNav from "@/components/navigation/StudentNav.vue";
    import SearchBar from "@/components/Form/SearchBar.vue";
    import Notifications from "@/components/Notifications.vue";

    export default defineComponent({
        name: 'Header',
        components: { ButtonPlainText, TeacherNav, StudentNav, SearchBar, Notifications },
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
                if(this.windowTop >= 200) this.isFixed = true;
                else this.isFixed = false;
            }
        },
        created() {
            this.isSignedIn = this.$store.getters.isSignedIn;
            console.log(this.isSignedIn);

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
    header.signedin {
        height: 120px;
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
        font-size: 150%;
        font-weight: 600;
    }
    
    .nav {
        width: 70%;
        height: 60%;
        margin: 0 auto;
        display: flex;
    }

    .search_bar{
        /* background: var(--paper-grey-100); */
    }
    
    .notification {
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
    }

    .btn_wrapper {
        height: 60%;
        width: 8%;
    }
    .btn_wrapper button {
        border: none;
        background: var(--blue-100);
        color: white;
        font-weight: 600;
        border-radius: 25px;
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