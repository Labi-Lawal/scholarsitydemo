<template>
    <div class="account_page">
        <Header />
        <div class="account_page_body">
            
            <div class="account_sidebar">
              <div class="profile">
                <div class="profile_img">
                  <img :src=source />
                </div>
                <div class="name">
                  {{ userInfo.fullname }}
                </div>
              </div>
              <div class="links">
                <div 
                  v-for="(nav, index) in navLinks"
                  :key="index"
                >
                  <router-link
                    class="account_sidebar_link_frame"
                    :to="'/account/' + nav.link"
                  > 
                    <FontAwesomeIcon 
                      :icon="['fas', nav.icon]"
                      class="icon" 
                    />    
                    <div class="label"> {{ nav.display }} </div>
                  </router-link>
                </div>
              </div>
              <div class="">
                <router-link 
                  class="account_sidebar_link_frame logout"
                  to="/signout"
                >  
                  <FontAwesomeIcon 
                    :icon="['fas', 'sign-out-alt']" 
                    class="icon"
                  />
                  <div class="label">Logout</div>
                </router-link>
              </div>
            </div>

            <div class="content">
              <router-view />
            </div>
        
        </div>
        <SiteFooter />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SiteFooter from '@/components/Footer/SiteFooter.vue'

export default {
  components: { Header, SiteFooter },
  data() {
    return {
      userInfo: this.$store.getters.userData,
      source: "https://res.cloudinary.com/labilawal/image/upload/v1634448089/f4sxdfzfyvvwgnalozbm.jpg",
      navLinks: [
         {
          display: 'Information',
          link: 'info',
          icon: 'user'
        },
        {
          display: 'Notifications',
          link: 'notifications',
          icon: 'bell'
        },
        {
          display: 'Settings',
          link: 'settings',
          icon: 'cogs'
        }
      ]
    }
  },
}
</script>

<style scoped>
.account_page_body {
  width: 90%;
  margin: 0 auto;
  padding: 1% 0;
  min-height: 90vh;
  display: flex;
}

.account_sidebar {
  width: 18%;
  height: 80vh;
  display: block;
  background: var(--paper-grey-900);
  color: white;
  padding: 2% 0;
  position: relative;
}

.profile {
  margin-left: 15%;
}
.profile .name {
  display: flex;
  align-items: center;
  text-transform: capitalize;
  height: 50px;
  font-weight: 600;
  font-size: 150%;
}
.profile_img {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  overflow: hidden;
}
.profile_img img {
  object-fit: cover;
  object-position: top;
}

.account_sidebar .links {
  margin-top: 10%;
}
.account_sidebar .links > div {
  width: 100%;
}
.account_sidebar .account_sidebar_link_frame {
  cursor: pointer;
  color: var(--paper-grey-700);
  padding-left: 15%;
  height: 40px;
  width: calc(100% - 15%);
  display: flex;
  align-items: center;
  font-size: 110%;
  font-weight: 500;
}

.account_sidebar_link_frame .icon {
  width: 20px;
}
.account_sidebar_link_frame .label {
  margin-left: 5%;
}
.account_sidebar_link_frame.router-link-exact-active, 
.account_sidebar_link_frame:hover {
  color: white !important;
}
.logout {
  position: absolute;
  bottom: 0;
  height: 100px !important;
}

.content {
  height: 100%;
  width: 82%;
  margin-left: 1%;
}
.content:deep .title {
  font-size: 150%;
}
</style>