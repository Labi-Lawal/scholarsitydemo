<template>
    <div class="cart_item_card">
        <div class="item">
            <img src="../../assets/course-3.jpg">
            <div class="item_details">
                <div class="title">
                    {{ title }}
                </div>
                <div class="item_type">
                    {{ itemType }}
                </div>
            </div>
        </div>
        <div class="others">
            <div class="price">${{ price }}</div>
            <div class="qty">
                <div class="qty_button">
                    <FontAwesomeIcon 
                        :icon="['fas', 'minus']" 
                        class="icon"
                        @click="$emit('dec-qty-action')"
                    />
                    <div>{{ qty }}</div>
                    <FontAwesomeIcon 
                        :icon="['fas', 'plus']" 
                        class="icon"
                        @click="$emit('inc-qty-action')"
                    />
                </div>
            </div>
            <div class="price">${{ itemTotal }}</div>
            <div class="delete_cell">
                <div class="delete_btn_wrapper" @click="$emit('delete-item-action')">
                    <FontAwesomeIcon :icon="['fas', 'times']" class="icon"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'shopping-cart-table',
    props: ['title', 'itemType', 'price', 'qty', 'itemTotal'],
    data() {
        return {
            
        }
    }
})
</script>

<style scoped>
    .cart_item_card {
        border-top: 1px solid var(--paper-grey-200);
        display: flex;
        height: 150px;
    }
    .cart_item_card:last-child {
        border-bottom: 1px solid var(--paper-grey-200);
    }
    .cart_item_card > div {
        display: flex;
        height: 80%;
        margin: auto 0;
    }

    .item {
        width: 35%;
        justify-content: space-between;
    }
    .item img {
        width: 30%;
        object-fit: contain;
    }
    .item_details {
        width: 65%;
        height: 70%;
        margin: auto 0;
        margin-left: auto;
    }
    .title {
        font-weight: 500;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .item_type {
        margin-top: 8%;
        font-weight: 500;
        color: var(--paper-grey-400);
    }

    .others {
        align-items: center;
        width: 58%;
        margin-left: auto !important;
    }

    .price {
        font-size: 120%;
        font-weight: 500;
    }
    .qty *::selection {
        background: none;
    }
    .qty_button{
        width: 40%;
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: space-between;
        background: var(--paper-grey-200);
    }
    .qty_button .icon {
        font-size: 70%;
        color: var(--paper-grey-700);
        cursor: pointer;
    }
    .total_price {

    }

    .others > div {
        width: calc(100% / 3);
    }
    .others > div:last-child {
        width: calc(100% / 6);
    }
    .others .delete_btn_wrapper {
        border-radius: 50%;
        border: 1px solid var(--paper-grey-300);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--paper-grey-700);
        background: var(--paper-grey-200);
        cursor: pointer;
    }

</style>