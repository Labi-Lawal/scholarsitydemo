<template>
    <section class="compete_up">
        <Header />
        <section class="compete_up_body">
            <div class="sidebar_wrapper">
                <SideBar :navList="navlist" />
            </div>
            <section class="compete_up_view">
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
                title: '1 on 1',
                link: '/student/compete-up/1-on-1'
            },
            {
                title: 'advances analytics',
                link: '/student/compete-up/advanced-analytics'
            }
        ]
      }
    }
});
</script>

<style scoped>
.compete_up_body {
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 3% 0;
}
.sidebar_wrapper {
    width: 20%;
    height: 300px;
}
.compete_up_view {
    padding: 0  2%;
    width: 80%;
}
</style>