<template>
    <div class="shopping_cart_table">
        <div class="heading">
            <div class="item">Item</div>
            <div class="others">
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div></div>
            </div>
        </div>

        <div class="cart_card_list">
            <CartItemCard 
                v-for="(item, index) in cart_items"
                :key="item.itemId"
                :title="item.title"
                :itemType="item.type"
                :price=item.price
                :qty=item.qty
                :itemTotal=item.total
                @decQtyAction="$emit('decreaseQty', index)"
                @incQtyAction="$emit('increaseQty', index)"
                @deleteItemAction="$emit('removeItem', index)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import CartItemCard from "@/components/Card/CartItemCard.vue";

export default defineComponent({
    name: 'shopping-cart-table',
    components: { CartItemCard },
    props: ['cart_items'],
    data() {
        return { 
            
        }
    },
    methods:   {

    }
})
</script>

<style scoped>
.shopping_cart_table {
    width: 100%;
    height: 100%;
}

.heading {
    display: flex;
    font-size: 100%;
    color: var(--paper-grey-500);
    height: 70px;
}
.heading .item {
    width: 40%;
}
.heading .others {
    display: flex;
    width: 58%;
    margin-left: auto !important;
}
.heading .others > div {
    width: calc(100% / 3);
}
.heading .others > div:last-child {
    width: calc(100% / 6);
}

</style>