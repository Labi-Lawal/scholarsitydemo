<template>
   <div class="download_app">
        <div class="img_wrapper">
            <img src="../assets/download-ios.png">
        </div>
        <div class="img_wrapper">
            <img src="../assets/download.png">
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name:'download-app'
});
</script>

<style scoped>
.download_app {
    height: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.img_wrapper {
    height: 100%;
    width: 50%;
}
</style>