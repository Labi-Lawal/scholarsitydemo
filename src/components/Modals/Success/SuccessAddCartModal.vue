<template>
    <div class="modal success_modal">
        <FontAwesomeIcon :icon="['fas', 'check']" class="icon" />
        <div class="msg">
            {{ message }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'success-add-cart-modal',
    props: ['message', 'qty']
});
</script>

<style scoped>
    .modal {
        border: 1px solid green;
        border-radius: 5px;
        background: rgb(208, 247, 208);
        height: 50px;
        width: 300px;
        position: fixed;
        left: 40%;
        top: 5%;
        display: flex;
        align-items: center;
        color: green;
        z-index: 10000;
    }
    .icon {
        width: 10%;
        margin-left: 5%;
    }
    .msg {
        margin-left: 5%;
    }
</style>