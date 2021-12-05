<template>
  <section class="redeem_product_success">
    <div class="redeem_product_success_wrapper">
        <font-awesome-icon :icon="['fas', 'check-circle']" class="icon" />
        <div class="content">
            <div class="title">PUBLISH SUCCESS</div>
            <div class="text">
                Test has been published based on set schedule. 
            </div>
            <div class="button_section">
                <div class="btn_wrapper">
                    <ButtonPlainText 
                        buttonText="Create Again"
                        @buttonAction="$emit('back-to-start')"
                    />
                </div>
                <div class="btn_wrapper">
                    <ButtonPlainText 
                        buttonText="Finish"
                        @buttonAction="$emit('view-tests')"
                    />
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ButtonPlainText from '../buttons/ButtonPlainText.vue';

export default defineComponent({
    name: 'redeem-product-success',
    components: { ButtonPlainText }
});
</script>

<style scoped>
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
.button_section {
    width: 100%;
    margin-top: 5%;
    display: flex;
    /* justify-content: flex-end; */
}
.btn_wrapper {
    width: 15%;
    height: 50px;
    margin-top: 1%;
}
.btn_wrapper button {
    border: #3079ee54;
    background: #3079ee54;
    color: var(--blue-100);
    border-radius: 25px;
}
.btn_wrapper:last-child button {
    background: #3079ee;
    color: white;
    margin-left: 10%;
}
</style>