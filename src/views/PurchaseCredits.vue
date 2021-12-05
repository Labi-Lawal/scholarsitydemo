<template>
    <div class="purchase_credits_page">
        <Header />
        <section class="purchase_credits_body">
            <div class="page_head">
                <div class="bread_crumbs">
                    Home > Purchase Credits
                </div>
                <div class="page_title">Purchase Credits</div>
            </div>

            <div class="content">

                <div class="credit_info">
                    <div class="top_section">
                        <div class="title">
                            <div class="prompt">Enter credit amount</div>
                            <div class="currency_label">USD $ </div>
                        </div>
                        <div class="currency_icon">
                            <img src="../assets/icons-currency.png" />
                        </div>
                    </div>
                    <div class="qty_wrapper">
                        <FontAwesomeIcon 
                            :icon="['fas', 'minus']" 
                            class="icon"
                            @click="$emit('dec-qty-action')"
                        />
                        <input 
                            type="number" 
                            v-model="creditAmnt"
                            max="5"
                            min="5"
                            autofocus 
                            autocomplete="false" 
                        />
                        <FontAwesomeIcon 
                            :icon="['fas', 'plus']" 
                            class="icon"
                            @click="$emit('inc-qty-action')"
                        />
                    </div>
                     <div class="floating_grid">
                        <img src="../assets/icons-grid.png" />
                    </div>
                    <div class="floating_bubble bubble_1"></div>
                    <div class="floating_bubble bubble_2"></div>
                    <div class="floating_bubble bubble_3"></div>
                </div>

                <div class="card_info">
                    <div class="payment_methods">
                        <div class="title">
                            Select Payment Methods
                        </div>
                        <div class="methods_list grid">
                            <div class="method_wrapper">
                                <ButtonIconText 
                                    buttonIcon=""
                                    buttonText="Credit Card"
                                    @onclick="selectPaymentMethod(0)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SiteFooter />
    </div>
</template>

<script lang="ts">
import SiteFooter from '@/components/Footer/SiteFooter.vue'
import Header from '@/components/Header/Header.vue'
import ButtonIconText from '@/components/buttons/ButtonIconText.vue'

export default {
  components: { SiteFooter, Header, ButtonIconText },
  data(){
      return {
          creditAmnt: 20
      }
  }
}
</script>

<style scoped>
.purchase_credits_body {
    width: 90%;
    margin: 0 auto;
}
.page_head {
    height: 150px;
    margin: 0 auto;
    z-index: 4;
    top: 70px;
    padding: 1% 0;
}
.bread_crumbs {
    font-size: 90%;
    color: var(--paper-grey-600);
}
.page_title {
    font-size: 250%;
    height: 50px;
    margin-top: 50px;
    margin-bottom: 20px;
}

.content {
    display: flex;
}
.credit_info {
    background: #0e326b;
    width: 30%;
    padding: 20px;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    z-index: 0;
}
.top_section {
    display: flex;
}
.credit_info .title {
    color: rgb(255, 255, 255);
    padding: 1% 0;
    width: 70%;
}
.title .prompt {
    font-weight: 600;
    font-size: 110%;
    white-space: nowrap;
    width: 10%;
    border-bottom: 3px solid white;
}
.title .currency_label {
    font-weight: 600;
    font-size: 150%;
    margin-top: 2%;
}

.credit_info .currency_icon {
    padding: 5px;
    width: 80px;
    height: 80px;
    margin-left: auto;
    border-radius: 20px;
}
.qty_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}
.qty_wrapper .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--blue-500);
    padding: 10px;
    color: white;
}
input {
    width: 80%;
    text-align: center;
    font-size: 400%;
    font-weight: 600;
    border: none;
    outline: none;
    color: white;
    background: none;
}

.floating_grid {
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50%;
    top: 30%;
    left: 30%;
    z-index: -1;
    transform: rotateZ(-40deg);
}
.floating_bubble {
    width: 100px;
    height: 100px;
    background: var(--blue-100);
    position: absolute;
    border-radius: 50%;
}
.bubble_1 {

}
.bubble_2 {
    left: 60%;
    top: -20%;
    z-index: 0;
    background: var(--paper-light-blue-900);
}
.bubble_3 {
    background: var(--blue-900);
    left: calc(60% + 10px);
    top: -25%;
    width: 80px;
    height: 80px;
    z-index: 0;
}

.card_info {
    margin-left: 5%;
}
.payment_methods .title {
    font-weight: 500;
    font-size: 110%;
}
.grid_list {
    display: grid;
}
.col_2 {

}

.method_wrapper {
    border: 1px solid black;
}
.method_wrapper button {
    height: 100px;
}
</style>