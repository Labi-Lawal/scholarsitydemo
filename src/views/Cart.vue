<template>
    <div class="cart_page">
        <Header />
        <section class="cart_body">
            <div class="page_head">
                <div class="bread_crumbs">
                    Home > Cart
                </div>
                <div class="page_title">Your Cart</div>
            </div>
            <div class="cart">
                <div class="cart_item_list">
                    <ShoppingCartTable
                        v-if="cart_items.length > 0"
                        :cart_items="cart_items"
                        @increaseQty=incQty
                        @decreaseQty=decQty
                        @removeItem=rmItem
                    />

                    <div 
                        class="page_loader"
                        v-if="isLoading"
                    > 
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    
                </div>
                <div class="pricing_summary">
                    <div class="title">Order Summary</div>
                    <div class="summary">
                        <div class="">
                            <div class="label">Subtotal</div>
                            <div class="number">${{ checkoutInfo.subtotal.toFixed(2) }}</div>
                        </div>
                        <div class="">
                            <div class="label">Shipping</div>
                            <div class="number">${{ checkoutInfo.shipping }}</div>
                        </div>                        
                    </div>
                    <div class="bottom">
                        <div class="total"> 
                            <div class="label">Total</div>
                            <div class="number">${{ checkoutInfo.total.toFixed(2) }}</div>
                        </div>
                        <div class="checkout_btn_wrapper">
                            <ButtonPlainText
                                buttonText="CHECKOUT"
                                @buttonAction="proceedToCheckout()"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SiteFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "@/components/Header/Header.vue";
import ShoppingCartTable from "@/components/Table/ShoppingCartTable.vue";
import SiteFooter from "@/components/Footer/SiteFooter.vue";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";
import net from "@/services/http";

export default defineComponent({
    components: { Header, ShoppingCartTable, SiteFooter, ButtonPlainText },
    data () {
        var cart_items:any = [];
        return { 
            cart_items,
            checkoutInfo: {
                subtotal: 0.0,
                shipping: 50.0,
                total: 0.0,
            },
            isLoading: false
        }
    },
    methods: {
        incQty(itemIndex:number) {
            this.cart_items[itemIndex].qty++
            this.calcItemTotal(itemIndex);
        },
        decQty(itemIndex:number) {
            if(this.cart_items[itemIndex].qty > 1) { 
                this.cart_items[itemIndex].qty--
                this.calcItemTotal(itemIndex);
            }
        },
        calcItemTotal(itemIndex:number){
            this.cart_items[itemIndex].total = (this.cart_items[itemIndex].qty * this.cart_items[itemIndex].price).toFixed(2);
            this.calcCartTotal();
        },
        rmItem(itemIndex:number) {
            this.cart_items = this.cart_items.filter((item:any) => item.id !== this.cart_items[itemIndex].id );
        },
        async proceedToCheckout() {
            await this.$store.dispatch('savecheckoutinfo', this.checkoutInfo).
            then(()=> this.$router.push('/checkout'))
            .catch((error)=> this.$router.push('/signin'));
        },
        async calcCartTotal() {
            this.checkoutInfo.subtotal = 0;

            await this.cart_items.forEach((item:any)=> {
                this.checkoutInfo.subtotal += parseFloat(item.total);
            });
            this.checkoutInfo.total = this.checkoutInfo.subtotal + this.checkoutInfo.shipping;
        }
    },
    async beforeMount() {
        this.isLoading = true;
        var cartitems = await this.$store.dispatch('fetchcart');

        cartitems.forEach(async (item:any)=> {
            try {
                const response = await net.http.get(`/cart/fetchitem/${item.id}`);

                const itemDets = {
                    id: item.id,
                    title: response.data.item.title,
                    type: (response.data.course) ?'course' :'product',
                    price: response.data.item.price,
                    qty: item.quantity,
                    total: item.quantity * response.data.item.price
                };

                this.cart_items.push(itemDets);
                this.calcCartTotal();

                this.isLoading = false;
                
            } catch(error) {
                console.log(error);
            }
        });
    },
});
</script>

<style scoped>
.page_loader {
    height: 13px;
    width: 83px;
    margin-top: 10%;
    margin-left: 40%;
}

.cart_body {
    width: 90%;
    margin: 0 auto;
    padding: 0 0 5%;
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

.cart {
    display: flex;
}
.cart_item_list {
    width: 65%;
}

.pricing_summary {
    background: var(--paper-grey-100);
    border-radius: 10px;
    height: max-content;
    width: 30%;
    overflow: hidden;
    margin-left: auto;
    position: sticky;
    top: 70px;
}
.pricing_summary .title {
    font-size: 120%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 5%; 
    color: var(--paper-grey-800);
    border-bottom: 1px solid var(--paper-grey-300);
}
.pricing_summary .summary {
    padding: 5% 0;
}
.summary > div {
    display: flex;
    justify-content: space-between;
    padding: 1% 5%; 
    font-size: 110%;
}
.bottom {
    background: var(--paper-grey-200);
    padding: 0 5%;
}
.total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    font-size: 150%;
}
.checkout_btn_wrapper {
    margin: 0 0 5%;
}
.checkout_btn_wrapper button {
    height: 50px;
    background: var(--blue-100);
    border: none;
    color: white;
    border-radius: 5px;
}

</style>