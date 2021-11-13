<template>
    <section class="section_title">
        <div class="main">
          {{ title }}
        </div>
    </section> 
</template>

<script>
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: 'section-title',
    props: ['title']
});
</script>

<style scoped>
    .main {
        font-size: 200%;
        padding: 1% 0;
    }
</style>