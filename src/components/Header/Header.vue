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
                <SiteNavigation class="nav_links" />

                <SearchBar class="search_bar" />

                <Notifications
                    v-if="isSignedIn" 
                    class="notification"
                    count="9"
                />

                <CartIndicator 
                    class="cart_indicator"
                />
            </div>

            <div class="signin_btn_wrapper" v-if="!isSignedIn">
                <router-link to="/signin">
                    <ButtonPlainText buttonText="SIGN IN" :isLoading="false" class="signin_btn"/>
                </router-link>
            </div>
                
            <UserProfileMin
                v-if="isSignedIn"
                class="profile"
                :showDetails=false
            />
        </div>
    </header>
</template>

<script>
    import { defineComponent } from "@vue/runtime-core";
    import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';
    import SiteNavigation from '@/components/navigation/SiteNavigation.vue';
    import SearchBar from "@/components/Form/SearchBar.vue";
    import Notifications from "@/components/Notifications.vue";
    import UserProfileMin from "@/components/UserProfileMin.vue";
    import CartIndicator from "@/components/CartIndicator.vue";

    export default defineComponent({
        name: 'Header',
        components: { 
            ButtonPlainText, 
            SearchBar, 
            Notifications, 
            UserProfileMin, 
            SiteNavigation, 
            CartIndicator 
        },
        data () {
            var routeParent = this.$route.matched[0].name.toLowerCase();

            return  { 
                isSignedIn: this.$store.getters.isSignedIn,
                routeParent,
                isNotificationVisible: false,
                windowTop: 0,
                isFixed: false,
            }
        },
        methods: {
            handleOnSroll() {
                this.windowTop = window.top.scrollY;
                if(this.windowTop >= 400) this.isFixed = true;
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
        margin-left: 2%;
        margin-right: 2%;
        height: 60%;
        width: calc(100% - calc(8%));
        display: flex;
        align-items: center;
    }
    
    .nav_links {
        margin-right: auto;
    }
    
    .nav_links:deep(nav > div) {
        color: var(--paper-grey-500);
    }
    .nav_links:deep(nav > div):hover {
        color: var(--blue-100);
        font-weight: 500;
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

    .cart_indicator {
        margin-left: 2%;
    }
    
    .signin_btn_wrapper {
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
    .profile {
        width: fit-content;
    }
    

    .bottom {
        height: 49px;
        width: 100%;
    }
    .bottom nav {
        width: 90%;
        margin: 0 auto;
    }

</style>