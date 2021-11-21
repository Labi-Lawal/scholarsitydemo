<template>
    <section class="analyse">
        <Header />
        <section class="analyse_body">
            <div class="content">
                <div class="sidebar_wrapper">
                    <SideBar :navList="nav" />
                </div>
                <div class="router_view_wrapper">
                    <router-view />
                </div>
            </div>
        </section>
        <Footer />
    </section>
</template>

<script> 
import Header from "@/components/Header/Header.vue";
import SideBar from "@/components/Sidebar/SideBar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
    components: { Header, Footer, SideBar },
    data() {
        return {
            nav: [
                {
                    title: 'Select Test',
                    link: '/teacher/analyse/select-test'
                },
                {
                    title: 'Overall Statistics',
                    link: '/teacher/analyse/overall-statistics'
                },
                {
                    title: 'Student Level Statistics',
                    link: '/teacher/analyse/student-level-statistics'
                }
            ]
        }
    }

}
</script>

<style scoped>
.analyse_body {
    padding: 5% 0;
    width: 90%;
    margin: 0 auto;
}
.content {
    display: flex; 
}
.sidebar_wrapper {
    width: 20%;
    height: 200px;
}
.router_view_wrapper {
    width: 80%;
    padding: 0 2%;
}
</style>