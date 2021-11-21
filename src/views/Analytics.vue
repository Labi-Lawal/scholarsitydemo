<template>
    <section class="analytics">
        <Header />
        <section class="analytics_body">
            <div class="sidebar_wrapper">
                <SideBar :navList="navlist" />
            </div>
            <section class="analytics_view">
                <router-view />
            </section>
        </section>
        <Footer />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header/Header.vue';
import SideBar from '@/components/Sidebar/SideBar.vue';
// import SectionTitle from '@/components/Title/SectionTitle.vue';
import Footer from '@/components/Footer/Footer.vue';

export default defineComponent({
    components: { Header, SideBar, Footer },
    data() {
      return {
        navlist: [
            {
                title: 'summary',
                link: '/student/analytics/summary'
            },
            {
                title: 'overall statistics',
                link: '/student/analytics/overall-statistics'
            },
            {
                title: 'advanced analytics',
                link: '/student/analytics/advanced-analytics'
            }
        ]
      }
    }
});
</script>

<style scoped>
.analytics_body {
    padding: 3% 0;
}
.analytics > div {
    display: flex;
}
.analytics_body {
    width: 90%;
    margin: 0 auto;
    display: flex;
}
.sidebar_wrapper {
    width: 20%;
    height: 300px;
}
.analytics_view {
    width: 80%;
    padding: 0 2%;
}
</style>