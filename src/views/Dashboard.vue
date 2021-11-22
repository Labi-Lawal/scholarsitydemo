<template>
    <section class="dashboard_page">
        <div class="dashboard_body">
            <div class="side_bar_wrapper">
                <DashboardSideBar
                    v-if="userRole == 'student'"
                    :navList="nav"
                    @titleChangedAction="changeTitle"
                />
                <DashboardSideBar
                    v-if="userRole == 'teacher'"
                    :navList="nav"
                    @titleChangedAction="changeTitle"
                />
            </div>
            <div class="dashboard_content">
                <DashboardHeader :pageTitle="currentPageTitle" />
                <section class="dashboard_view">
                    <router-view />
                </section>
            </div>
        </div>
    </section>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue';
import DashboardSideBar from "@/components/Sidebar/DashboardSideBar.vue";
import DashboardHeader from "@/components/Header/DashboardHeader.vue";

export default defineComponent({
    name: 'dashboard',
    components: { DashboardSideBar, DashboardHeader },
    data() {
        var nav:any = [];

        return {
            currentPageTitle: '',
            userRole: this.$store.getters.userRole,
            nav,
            studentNav: [
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
            teacherNav: [
               {
                    title: 'create',
                    link: 'create',
                    icon: 'chart-pie',
                    subLinks: [
                        {
                            title: 'general',
                            link: 'general'
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
                    link: 'analyse',
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
                            title: 'overall statistics',
                            link: 'student-level-statistics'
                        },
                    ]
                },
                {
                    title: 'reports',
                    link: 'reports',
                    icon: 'chess'
                },
                {
                    title: 'wallet',
                    link: 'wallet',
                    icon: 'wallet'
                },
                {
                    title: 'student list',
                    link: 'student-list',
                    icon: 'store'
                }
            ]
        }
    },
    methods: {
        changeTitle (title:string) {
            this.currentPageTitle = title;
        }
    },
    async beforeCreate() {
        if(!this.$store.getters.isSignedIn) {
            await this.$store.dispatch('fetchuserinfo')
            .then(()=>{
                this.userRole = this.$store.getters.userRole;
                if(this.userRole == 'student') {
                    this.nav = this.studentNav;
                }
                if(this.userRole == 'teacher') {
                    this.nav = this.teacherNav;
                }
                this.currentPageTitle = this.nav[0].title
            })  
            .catch((error)=>{
                console.log(error.response);
            });
        }
    }
});
</script>

<style scoped>
.dashboard_page {
    width: 100%;
    height: 100vh;
}
.dashboard_body {
    display: flex;
    height: 100%;
}
.side_bar_wrapper {
    width: 20%;
    height: 100%;
    position: fixed;
}
.dashboard_content {
    margin-left: 20%;
    width: 80%;
    height: 100%;
}
.dashboard_view {
    height: calc(100% - 70px);
    padding: 0;
    overflow-y: auto;
}
</style>