<template>
    <div class="navigation">
        <nav v-if="!isSignedIn">
            <div class="">
                <router-link to="/student"> Student </router-link>
            </div>
            <div class="">
                <router-link to="/teacher"> Teacher </router-link>
            </div>
        </nav>
        <nav v-if="isSignedIn" class="navigation_links">
            <div 
                v-for="(navItem, index) in navList"
                :key="index"
                class=""
            >
                <router-link 
                    :to="navItem.link"
                    :class="{
                        active_route: (this.currentRouteIndex == index) ?true :false
                    }"
                    @click="routeClicked(navItem, index)"
                >
                    {{ navItem.title }}
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'site-navigation',
    components: { },
    data() {
        const studentNav = [
            {
                title: 'analytics',
                link: 'analytics',
                icon: 'chart-pie',
                subLinks: [
                    {
                        title: 'summary',
                        link: 'summary'
                    },
                    {
                        title: 'Overall Statistics',
                        link: 'overall-statistics'
                    },
                    {
                        title: 'Advanced Analytics',
                        link: 'advanced-analytics'
                    },
                ]
            },
            {
                title: 'compete up',
                link: 'compete-up',
                icon: 'list-ol',
                subLinks: [
                    {
                        title: '1 On 1',
                        link: '1-on-1'
                    },
                    {
                        title: 'Advanced Analytics',
                        link: 'advanced-analytics'
                    },
                ]
            },
            {
                title: 'contests',
                link: 'contests',
                icon: 'chess',
                subLinks: [
                    {
                        title: 'Future Contests',
                        link: 'future-contests'
                    },
                    {
                        title: 'Past Contests',
                        link: 'past-contests'
                    },
                    {
                        title: 'Advanced Analytics',
                        link: 'advanced-analytics'
                    },
                ]
            },
            {
                title: 'wallet',
                link: 'wallet',
                icon: 'wallet'
            },
            {
                title: 'store',
                link: 'store',
                icon: 'store'
            },
            {
                title: 'bulletin-board',
                link: 'bulletin-board',
                icon: 'clipboard',
            }
        ],
        teacherNav = [
            {
                title: 'create',
                link: '/teacher/create',
                icon: 'chart-pie',
                subLinks: [
                    {
                        title: 'tests',
                        link: 'tests'
                    },
                    {
                        title: 'questions',
                        link: 'questions'
                    },
                    {
                        title: 'instructions',
                        link: 'instructions'
                    },
                    {
                        title: 'add questions',
                        link: 'add-questions'
                    },
                    {
                        title: 'reviews',
                        link: 'publish'
                    },
                    {
                        title: 'publish',
                        link: 'publish'
                    },
                    {
                        title: 'success',
                        link: 'success'
                    },
                ]
            },
            {
                title: 'analyse',
                link: '/teacher/analyse',
                icon: 'list-ol',
                subLinks: [
                    {
                        title: 'select test',
                        link: 'select-test'
                    },
                    {
                        title: 'overall statistics',
                        link: 'overall-statistics'
                    },
                    {
                        title: 'Student Level Statistics',
                        link: 'student-level-statistics'
                    },
                ]
            },
            {
                title: 'reports',
                link: '/teacher/reports',
                icon: 'chess'
            },
            {
                title: 'wallet',
                link: '/teacher/wallet',
                icon: 'wallet'
            },
            {
                title: 'student list',
                link: '/teacher/student-list',
                icon: 'store'
            }
        ], 
        navList:any = [],
        currentRouteIndex:any = null;

        return {
            userRole: null,
            isSignedIn: false,
            navList,
            studentNav,
            teacherNav,
            currentRouteIndex,
            currentSubRouteIndex: 0
        }
    },
    methods: {
        routeClicked(item:any, index:number) {
            this.currentRouteIndex = index;
            this.currentSubRouteIndex = 0;
            this.$emit('title-changed-action', item.title);
        }
    },
    beforeMount() {
        this.isSignedIn = this.$store.getters.isSignedIn;
        if(this.isSignedIn) this.userRole = this.$store.getters.userData.role;
        
        if(this.userRole === 'student') this.navList = this.studentNav;
        if(this.userRole === 'teacher') this.navList = this.teacherNav;
    }
});
</script>

<style scoped>
    .navigation {
        display: flex;
        align-items: center;
        height: 100%;
    }
    nav, .navigation_links {
        display: inherit;
        align-items: center;
        height: 100%;
    }
    nav * {
        display: flex;
        align-items: center;
    }
    nav > div {
        margin-right: 20px;
        font-size: 100%;
        height: 100%;
        text-transform: capitalize;
    }
    nav > div:last-child {
        margin-right: 0;
    }
    .active_route {
        color: var(--blue-100);
        font-weight: 500;
    }

</style>