<template>
  <section class="future_contests">
    <SectionTitle title="Future Contests" />
    <div class="future_list">
      <GridList contentType="contests" :listLength=4 />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import SectionTitle from "@/components/Title/SectionTitle.vue";
import GridList from "@/components/List/GridList.vue";

export default defineComponent({
  name: 'future-contests',
  components: { SectionTitle, GridList },
  data() {
    return {

    }
  },
  methods: {

  }
});
</script>

<style>

</style>