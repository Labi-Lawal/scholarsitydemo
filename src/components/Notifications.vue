<template>
    <div class="notification">
        <div class="icon_wrapper" @click="toggleNotificationList">
            <div class="indicator">9</div>
            <FontAwesomeIcon :icon="['fas', 'bell']" class="icon" />
        </div>
        <div class="list_wrapper" v-if="isNotificationVisible">
            <div class="title"> Notifications </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "notifications",
    data() {
        return {
            isNotificationVisible: false
        }
    },
    methods: {
        toggleNotificationList() {
            this.isNotificationVisible = !this.isNotificationVisible
        }
    }
});
</script>

<style scoped>
    *::selection {
        background: none;
    }
    .notification {
        position: relative;
    }
    .icon_wrapper {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }
    .icon_wrapper .icon {
        font-size: 180%;
        color: var(--paper-grey-400);
    }
    .icon_wrapper .indicator {
        position: absolute;
        top: -20%;
        right: -50%;
        min-width: 15px;
        height: 15px;
        font-size: 75%;
        padding: 5px;
        background: var(--red-100);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .list_wrapper {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.192);
        border-radius: 5px;
        position: absolute;
        z-index: 5;
        top: 120%;
        right: 0;
        width: 350px;
        height: 60vh;
        background: white;
        padding: 1%;
    }
    
    .title {
        font-weight: 500;
        border-bottom: 1px solid lightgrey;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 5%;
    }
</style>