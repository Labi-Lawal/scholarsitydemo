<template>
  <section class="redeem_product_success">
    <div class="redeem_product_success_wrapper">
        <font-awesome-icon :icon="['fas', 'check-circle']" class="icon" />
        <div class="content">
            <div class="title">PUBLISH SUCCESS</div>
            <div class="text">
                Test has been published based on set schedule. 
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'redeem-product-success',
    components: { }
});
</script>

<style scoped>
.redeem_product_success {
    
}
.redeem_product_success_wrapper {
    display: flex;
    align-items: center;
}
.content {
    height: 90px;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
}
.title {
    font-weight: 600;
    font-size: 180%;
}
.icon {
    color: rgb(22, 211, 101);
    font-size: 250%;
    width: 10%;
}
.text {
    font-size: 130%;
    width: 90%;
    margin-top: auto;
    color: var(--paper-grey-500);
    font-weight: 500;
}
.btn_wrapper {
    width: 15%;
    height: 30px;
    margin-left: 10%;
    margin-top: 1%;
}
.btn_wrapper button {
    border: 1px solid var(--paper-grey-800);
    background: var(--paper-grey-800);
    color: white;
    border-radius: 15px;
}
</style>