<template>
    <section class="compete_up_body">
        <router-view />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
      return { }
    }
});
</script>

<style scoped>
.compete_up_body {
    padding: 3%;
    width: 94%;
}
</style>