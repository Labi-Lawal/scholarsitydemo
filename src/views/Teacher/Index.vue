<template>
  <div class="create_page">
    <DashBoardHeader />

    <div class="create_page_body">
      <router-view />
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import DashBoardHeader from '@/components/Header/DashboardHeader.vue';
import SiteFooter from '@/components/Footer/SiteFooter.vue';

export default {
  components: { DashBoardHeader, SiteFooter }

}
</script>
<style scoped>
.create_page_body {
  width: 90%;
  margin: 0 auto;
}
</style>