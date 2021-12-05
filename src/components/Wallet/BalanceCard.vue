<template>
    <div class="wallet_balance">
        <div class="label">Balance Credits</div>
        <div class="price">
            $ 44,530
        </div>
        <div 
            class="purchase_credits"
            :class="{
                div_width_by_none: (widthRatio == 1) ? true : false,
                div_width_by_2: (widthRatio == 2) ? true : false,
                div_width_by_3: (widthRatio == 3) ? true : false
            }"
            @click="gotoPurchaseCredits()"
        >Purchase Credits</div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'balance-credits',
    props: ['widthRatio'],
    methods: {
        gotoPurchaseCredits() {
            this.$router.push('/purchase-credits');
        }
    }
});
</script>

<style scoped>
.wallet_balance {
    border: 1px solid #EAEEFA;
    background: #EAEEFA;
    border-radius: 20px;
    height: 70%;
    width: 100%;
    padding: 5% 0;
    position: relative;
}
.label {
    color: #7D8081;
    font-weight: 500;
    font-size: 80%;
    display: flex;
    align-items: center;
    padding: 0 5%;
    position: relative;
}
.price {
    display: flex;
    align-items: center;
    padding: 0 5%;
    font-size: 180%;
    font-weight: 700;
    color: var(--paper-light-blue-900);
}
.purchase_credits {
    position: absolute;
    right: 2%;
    bottom: 5%;
    padding: 2% 0;
    color: white;
    font-weight: 500;
    background: var(--paper-light-blue-800);
    border: 1px solid var(--paper-light-blue-800);
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.div_width_by_none {
    width: 50%;
    font-size: 80%;
}
.div_width_by_2 {
    width: calc(100% / 2);
    font-size: 90%;
}
.div_width_by_3 {
    width: calc(100% / 3);
    font-size: 80%;
}
</style>