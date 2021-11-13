<template>
    <section class="form_title">
        <div class="main">
          {{ title }}
        </div>
    </section> 
</template>

<script>
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: 'form-title',
    props: ['title']
});
</script>

<style scoped>
    .main {
        font-size: 150%;
        font-weight: 500;
        padding: 1% 0;
    }
</style>