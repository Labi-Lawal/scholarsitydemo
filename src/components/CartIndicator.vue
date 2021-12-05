<template>
    <div class="cart_indicator">
        <router-link to="/cart">
            <div 
                class="indicator"
                v-if="updateCart.length > 0"
            > {{ updateCart.length }} </div>
            <FontAwesomeIcon :icon="['fas', 'shopping-bag']" class="icon" />
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'cart-indicator',
    props: ['count'],
    data() {
        return { 
            cart: this.$store.getters.cartData
        }
    },
    methods: {
        // updateCart() {
        //     this.cart = this.$store.getters.cartData
        // }
    },
    async beforeMount() {
        await   this.$store.dispatch('fetchcart')
                .then((response)=> {
                    this.cart = response.items;
                })
                .catch((error)=>{
                    console.log(error);
                });
    },
    computed: {
        updateCart () {
            return this.$store.getters.cartData;
        }
    },
});
</script>

<style scoped>
    .cart_indicator {
        position: relative;
    }
    .icon {
        font-size: 180%;
        color: var(--paper-grey-400);
    }
    .indicator {
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

</style>