<template>
  <div class="create_page">
    <Header />

    <div class="create_page_body">
      <router-view />
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import SiteFooter from '@/components/Footer/SiteFooter.vue';

export default {
  components: { Header, SiteFooter }

}
</script>
<style scoped>
.create_page_body {
  width: 90%;
  margin: 0 auto;
}
</style>