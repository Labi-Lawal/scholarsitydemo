<template>
    <section class="store">
        <Header />

        <section class="store_body">
            <div class="left">
                <GridList contentType="products" v-if="!isProductSelected" @redeemAction="openRedeemProduct" @redeemSuccess="closeRedeemProduct"/>
                <RedeemProduct v-if="isProductSelected" @closeRedemption="closeRedeemProduct"/>
            </div>
            <div class="right">
                <div class="balance_card_wrapper">
                    <BalanceCard :widthRatio="1" />
                </div>
            </div>
        </section>

        <Footer />
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Header from '@/components/Header.vue';
import GridList from "@/components/List/GridList.vue";
import RedeemProduct from "@/components/RedeemProduct.vue";
import BalanceCard from '@/components/Wallet/BalanceCard.vue';
import Footer from '@/components/Footer/Footer.vue';

export default defineComponent({
    components: { Header, BalanceCard, Footer, GridList, RedeemProduct },
    data() {
        return { 
            isProductSelected: false,
            isRedemptionConfirmed: 'false',
        }
    },
    methods: {
        openRedeemProduct(index) {
            this.isProductSelected = true;
        },
        closeRedeemProduct(){
            this.isProductSelected = false;
        },
    }
});
</script>

<style scoped>
.store_body {
    display: flex;
    justify-content: space-between;
    padding: 5% 0;
    width: 90%;
    margin: 0 auto;
}
.left {
    width: 75%;
}
.right {
    width: 20%;
    height: 100vh;
    position: sticky;
    top: 10%;
}
.balance_card_wrapper {
    width: 100%;
    height: 20%;
    position: sticky;
    top: 10%;
}
</style>