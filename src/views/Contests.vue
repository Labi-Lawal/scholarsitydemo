<template>
    <section class="contests">
        <Header />
        <section class="contests_body">
            <div class="sidebar_wrapper">
                <SideBar :navList="navlist" />
            </div>
            <section class="contests_view">
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
                title: 'Future Contests',
                link: '/student/contests/future-contests'
            },
            {
                title: 'Past Contests',
                link: '/student/contests/past-contests'
            },
            {
                title: 'advances analytics',
                link: '/student/contests/advanced-analytics'
            }
        ]
      }
    }
});
</script>

<style scoped>
.contests_body {
    padding: 3% 0;
}
.contests_body {
    display: flex;
    width: 90%;
    margin: 0 auto;
}
.sidebar_wrapper {
    width: 20%;
    height: 300px;
}
.contests_view {
    padding: 0  2%; 
    width: 80%;
}
</style>