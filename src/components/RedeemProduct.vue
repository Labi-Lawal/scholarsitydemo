<template>
    <section class="redeem_product">
        <RedeemProductForm v-if="!isRedeemTriggered" @confirmAction="confirmRedemption"  @cancelAction="cancelRedemption" />
        <RedeemProductSuccess v-if="isRedemptionSuccess" @close="cancelRedemption" />
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import RedeemProductForm from "@/components/Form/RedeemProductForm.vue";
import RedeemProductSuccess from "@/components/messages/RedeemProductSuccess.vue";

export default defineComponent({
    name: 'redeem-product',
    components: { RedeemProductForm, RedeemProductSuccess },
    props: ['productDets'],
    data() {
        return {
            isRedeemTriggered: false,
            isRedemptionSuccess: false
        }
    },
    methods: {
        confirmRedemption(index) {
            this.isRedeemTriggered = true;
            this.isRedemptionSuccess = 'true';
        },
        cancelRedemption() {
            this.$emit('close-redemption');
        }
    }
});
</script>

<style>

</style>