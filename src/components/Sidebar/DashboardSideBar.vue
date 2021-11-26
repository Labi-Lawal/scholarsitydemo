<template>
    <section class="dashboard_side_bar">
        <div class="logo_wrapper">
            <div class="logo">
                <router-link to="/">SCHOLARSITY</router-link>
            </div>
        </div>
        <nav>
            <div 
                v-for="(item, index) in navList"
                :key=index
            >   
                <router-link 
                    :to="'/account/' + item.link"
                    :class="{
                        dashboard_side_bar_nav_item: true,
                        active_route: (this.currentRouteIndex == index) ?true :false
                    }"
                    @click="routeClicked(item, index)"
                > 
                    <FontAwesomeIcon :icon="['fas', item.icon]" class="icon" />

                    <!-- <div class="image_wrapper"> -->
                        <!-- <img src="../../assets/icon-analytics.png"> -->
                    <!-- </div> -->
                    <div class="text"> {{ item.title }} </div>

                    <FontAwesomeIcon 
                        :icon="['fas', 'angle-down']" 
                        class="icon arrow"
                        v-if="(this.currentRouteIndex != index && item.subLinks)"
                    />
                    <FontAwesomeIcon 
                        :icon="['fas', 'angle-up']" 
                        class="icon arrow"
                        v-if="(this.currentRouteIndex == index && item.subLinks)"
                    />
                </router-link>
                <div class="sub_links_frame" v-if="item.subLinks">
                    <div 
                        v-for="(sublink, subIndex) in item.subLinks"
                        :key="subIndex"
                        :class="{ 
                            dashboard_sub_link: true,
                            active_sub_route: (this.currentSubRouteIndex == subIndex) ?true :false
                        }"
                        @click="subRouteClicked(sublink, subIndex)"
                    >
                        <router-link 
                            :to="'/account/' + item.link + '/' + sublink.link"
                        > 
                            <div class="text"> {{ sublink.title}} </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <div 
            class="dashboard_side_bar_nav_item settings"
        >
            <div class="image_wrapper">
                <img src="../../assets/icons-settings.png">
            </div>
 
            <router-link to="settings" class="text">
                Settings
            </router-link>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'dashboard-side-bar',
    components: {  },
    props: ['navList'],
    data() {
        return { 
            currentRouteIndex: 0,
            currentSubRouteIndex: 0
        }
    },
    methods: {
        routeClicked(item:any, index:number) {
            this.currentRouteIndex = index;
            this.currentSubRouteIndex = 0;
            this.$emit('title-changed-action', item.title);
        },
        subRouteClicked(sublinkItem:any, subIndex:number) {
            this.currentSubRouteIndex = subIndex;
        }
    }
});
</script>

<style scoped>
.dashboard_side_bar {
    width: 100%;
    height: 100%;
    background: var(--blue-500);
    padding: 5% 0%;
    overflow: auto;
}

.logo_wrapper {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: flex-start;
    /* justify-content: center; */
    padding: 0% 10%;
}
.logo {
    font-size: 150%;
    font-weight: 800;
    color: white;
}

nav {
    /* height: 40%; */
    /* display: flex; */
    /* flex-wrap: wrap;
    justify-content: space-between; */
}
nav > div {
    width: 100%;
} 
.dashboard_side_bar_nav_item {
    width: calc(100% - 23%);
    text-transform: capitalize;
    font-weight: 400;
    color: rgb(214, 214, 214);
    margin-left: auto;
    margin-right: auto;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    align-items: center;
    height: 50px;
}

.dashboard_side_bar_nav_item .image_wrapper {
    width: 12%;
    height: min-content;
}
.dashboard_side_bar_nav_item .image_wrapper img {
    height: auto;
}
.dashboard_side_bar_nav_item .icon {
    font-size: 130%;
    width: 10%;
}
.dashboard_side_bar_nav_item .icon.arrow {
    font-size: 100%;
}
.dashboard_side_bar_nav_item .text {
    display: flex;
    align-items: center;
    width: calc(100% - 20%);
    border-radius: 15px 0px 0px 15px;
    margin-left: 5%;
}
.dashboard_side_bar_nav_item:hover {
    color: white;
}
.dashboard_side_bar_nav_item.active_route {
    color: white;
}
.dashboard_side_bar_nav_item.active_route .text {
    font-weight: 600;
}
.dashboard_side_bar_nav_item.active_route ~ div.sub_links_frame {
    display: block;
}

.dashboard_side_bar_nav_item.settings {
    width: calc(100% - 25%);
    margin-top: 15%;
}

.sub_links_frame {
    border-left: 1px solid var(--paper-grey-300);
    width: 70%;
    margin: 2% auto;
    padding: 1% 0;
    display: none;
}
.dashboard_sub_link {
    width: 90%;
    height: 40px;
    margin: 2% 0;
    margin-left: auto;
    text-transform: capitalize;
    color: var(--paper-grey-300);
}
.dashboard_sub_link > * {
    padding-left: 5%;
    display: flex;
    align-items: center;
}
.active_sub_route {
    background: #3079ee85;
    border-radius: 10px;
    color: white;
    font-weight: 500;
}

</style>