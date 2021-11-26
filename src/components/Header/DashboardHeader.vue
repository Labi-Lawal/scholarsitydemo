<template>
    <header>
        <div class="logo">
            <SectionTitle  />
        </div>
        <div class="nav">
            
            <SearchBar class="search_bar" />

            <Notifications 
                class="notification"
                count="9"
            />
        </div>
            
        <div class="profile_wrapper">
            <div class="profile" @click="toggleMenu">
                <div class="profile_image">
                    <img 
                        src="https://res.cloudinary.com/labilawal/image/upload/v1634448089/f4sxdfzfyvvwgnalozbm.jpg"
                    />
                </div>
                <div class="name"> {{ userName }} </div>
            </div>
            <div class="user_profile_menu" v-if="isMenuVisible">
                <div class="item logout"> 
                    <router-link to="/signout">Log Out</router-link> 
                </div>
            </div>
        </div>
        
    </header>
</template>

<script>
    import { defineComponent } from "@vue/runtime-core";
    import SearchBar from "@/components/Form/SearchBar.vue";
    import SectionTitle from "@/components/Title/SectionTitle.vue";
    import Notifications from "@/components/Notifications.vue";

    export default defineComponent({
        name: 'dashboard-header',
        components: { SearchBar, Notifications,SectionTitle },
        props: ['pageTitle'],
        data () {
            return  { 
                isNotificationVisible: false,
                isMenuVisible: false,
                is: '',
                userName: '',
            }
        },
        methods: {
            toggleMenu () {
                this.isMenuVisible = !this.isMenuVisible;      
            }
        },
        beforeMount() {
            this.userName = this.$store.getters.userData.fullname;
        }
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

    header {
        height: 70px;
        box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
        display: flex;
        align-items: center;
        padding: 0 3%;
    }

    .logo_wrapper {
        font-size: 180%;
        font-weight: 600;
    }
    
    .nav {
        margin-left: auto;
        height: 60%;
        display: flex;
        margin-right: 2%;
    }
    
    .search_bar {
        margin-left: auto;
        width: 300px;
    }
    .search_bar.expand {
        width: 600px;
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
        position: relative;
    }
    .profile_wrapper *::selection {
        background: none;
    }
    .profile_wrapper .profile { 
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
    }
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }
    .name {
        margin-left: 10px;
        font-weight: 500;
        text-transform: capitalize;
    }

    .user_profile_menu {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.192);
        border-radius: 5px;
        position: absolute;
        z-index: 5;
        top: 120%;
        right: 0;
        width: 200px;
        padding: 3% 0;
        background: white;
    }
    .item {
        font-weight: 500;
        height: 40px;
        cursor: pointer;
        color: var(--paper-grey-600);
    }
    .item > * {
        padding: 0 5%;
        display: flex;
        align-items: center;
    }
    .item:hover {
        background: var(--paper-grey-100);
    }

</style>