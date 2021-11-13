<template>
    <div class="product_card" v-for="(item, index) in list" :key=index>
        <div class="image_wrapper">
            <img src="../../assets/hero_img.png">
        </div>
        <div class="details">
            <div class="title">
                2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python
            </div>
            <div class="credit_required">
                <div class="price"> $84.99 </div>
                <div class="label"> Credits </div>
            </div>
            <div class="btn_wrapper">
                <ButtonPlainText buttonText="Redeem" :isLoading="false" @buttonAction="$emit('button-action', index)" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default defineComponent({
    name: 'product-card',
    components: { ButtonPlainText },
    props: ['list']
});
</script>

<style scoped>
.product_card {
    box-shadow: 0px 0px 5px 3px var(--grey-100);
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border-radius: 5px;
    display: inline-block;
    margin-right: 5%;
}
.image_wrapper {
    height: 50%;
    width: 100%;
}
.image_wrapper img {
    object-fit: cover;
}
.details {
    width: 100%;
    height: 50%;
    padding: 2% 2% 0%;
}
.title {
    width: 100%;
    height: 28%;
    line-height: calc(100%);
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 500;
    font-size: 90%;
    color: var(--paper-grey-700);
}
.credit_required {
    display: flex;
    align-items: center;
    margin-top: 10%;
}
.credit_required .price {
    margin: 2% 0;
    color: var(--paper-yellow-900);
    font-weight: 700;
    font-size: 140%;
}
.credit_required .label {
    color: grey;
    font-size: 90%;
    font-weight: 500;
    margin-left: 1%;
}
.btn_wrapper {
    width: 95%;
    height: 25%;
    overflow: hidden;
}
.btn_wrapper button {
    border-radius: 5px;
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
}
</style>