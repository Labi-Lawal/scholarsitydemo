<template>
  <section class="bulletin_board">
      <Header />
      <section class="bulletin_board_body">
        <div class="list">
          <GridList contentType="bulletin-board" v-if="!boardOpen" @openBoardAction="openBoard" />
          <BulletinBoardBlogs :bulletinBoardDets="bulletinDets" v-if="boardOpen" @close="closeBoard"/>
        </div>
      </section>
      <Footer /> 
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Header from "@/components/Header/Header.vue";
import GridList from "@/components/List/GridList.vue";
import BulletinBoardBlogs from "@/components/BulletinBoardBlogs.vue";
import Footer from "@/components/Footer/Footer.vue";

export default defineComponent({
  components: { Header, GridList, BulletinBoardBlogs, Footer },
  data() {
    var openedBoardIndex,
    bulletinDets;

    return {
      boardOpen: false,
      openedBoardIndex,
      bulletinDets
    }
  },
  methods: {
    openBoard(index) {
      this.boardOpen = true;
      this.openedBoardIndex = index;
      this.bulletinDets = index
    },
    closeBoard() {
      this.boardOpen = false;
    }
  }
});
</script>

<style scoped>
.bulletin_board_body {
  padding: 5% 0;
}
.list {
  width: 90%;
  margin: 0 auto;
}
</style>