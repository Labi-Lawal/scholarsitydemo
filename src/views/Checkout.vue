<template>
    <div class="checkout_page">
        <Header />
        <section class="checkout_page_body">
            <div class="checkout_processes">
                <div class="section delivery_address">
                    <div class="section_title">
                        Delivery Address
                        <div class="add_btn_wrapper">
                            <ButtonIconText
                                buttonText="Add"
                                buttonIcon="plus"
                                @buttonAction="addAddress()"
                            />
                        </div>
                    </div>
                    <div class="address_list grid_list col_3">
                        <div 
                            v-for="(address, index) in addresses"
                            :key="index"
                            :class="{
                                address_frame: true,
                                selected_address: (deliveryInfo.selectedAddress == index) ?true :false
                            }"
                            @click="selectAddress(index)"
                        >   
                            <FontAwesomeIcon :icon="['fas', 'check']" class="icon" />
                            <div class="person">{{ address.name }}</div>
                            <div class="address_details">
                                <div class="street">{{ address.str }}</div>
                                <div class="nation">
                                    <div class="city">{{ address.city }},</div>
                                    <div class="state"> {{ address.state }}</div>
                                </div>
                            </div>
                            <div class="contact">
                                <div class="phone">
                                    <div class="label">Mobile</div>
                                    <div class="digits">{{ address.phone }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section delivery_address">
                    <div class="section_title">
                        Payment
                    </div>
                    <div class="not_enough_credit">
                        <div class="warning">
                            <FontAwesomeIcon 
                                :icon="['fas', 'exclamation-circle']" 
                                class="icon"
                            />
                            <div class="message">
                                You unfortunately don't have enough credit to make this purchase.
                            </div>
                        </div>
                        <div class="button_wrapper">
                            <ButtonPlainText 
                                buttonText="Purchase Credit"
                                @buttonAction="goToWallet()"
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
import SiteFooter from "@/components/Footer/SiteFooter.vue";
import Header from "@/components/Header/Header.vue";
import ButtonIconText from "@/components/buttons/ButtonIconText.vue";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default defineComponent({
    components: { SiteFooter, Header, ButtonIconText, ButtonPlainText },
    data() {
        return {
            addresses: [
                {
                    name: 'John Doe',
                    str: '32, DD Towers, Second Park Avenue,',
                    city: 'UGS',
                    state: 'Tokyo',
                    phone: '+91 9123456789'
                },
                {
                    name: 'John Doe',
                    str: '32, DD Towers, Second Park Avenue,',
                    city: 'UGS',
                    state: 'Tokyo',
                    phone: '+91 9123456789'
                }
            ],
            deliveryInfo: {
                selectedAddressIndex: 0,
                selectedAddress: {},
            }
        }
    },
    methods: {
        selectAddress(index:number) {
            this.deliveryInfo.selectedAddressIndex = index;
            this.deliveryInfo.selectedAddress = this.addresses[index];
        },
        addAddress() {
            alert('r/woosh');
        },
        goToWallet() {
            const role = this.$store.getters.userData.role;
            this.$router.push(`/${role}/wallet`);
        }
    }
});
</script>

<style scoped>
    .checkout_page_body {
        width: 90%;
        margin: 0 auto;
        padding: 5% 0;
    }
    .checkout_processes {
        width: 70%;
    }

    .section {
        border-radius: 5px;
        box-shadow: var(--shadow-100);
        padding: 5%;
        margin: 5% 0;
    }
    .section_title {
        font-size: 110%;
        font-weight: 600;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .section_title .add_btn_wrapper {
        width: 80px;
        height: 30px;
    }
    .section_title .add_btn_wrapper button {
        border-radius: 25px;
        font-size: 80%;
        border: 1px solid var(--blue-100);
        background: var(--blue-100);
        color: white;
    }

    .grid_list {
        display: grid;
        justify-content: space-between;
        --gap: 100px;
        row-gap: var(--gap);
    }
    .col_3 {
        grid-template-columns: calc(calc(100% - var(--gap)) / 3) calc(calc(100% - var(--gap)) / 3) calc(calc(100% - var(--gap)) / 3);
    }

    .address_list {
        margin-top: 5%;
        width: 100%;
    }
    .address_frame {
        border: 1px solid var(--paper-grey-300);
        border-radius: 5px;
        width: 100%;
        cursor: pointer;
        position: relative;
    }
    .address_frame .icon {
        padding: 10px;
        width: 10px;
        height: 10px;
        background: rgb(54, 140, 232);
        color: white;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    }
    .address_frame .person {
        font-weight: 500;
        padding: 5%;
    }
    .address_frame .address_details {
        font-size: 90%;
        padding: 0 5%;
    }
    .nation {
        display: flex;
        font-weight: 500;
        color: var(--paper-grey-800);
    }
    .address_frame .contact {
        display: flex;
        padding: 3% 5%;
        margin-top: 5%;
    }
    .contact .label {
        font-size: 90%;
        font-weight: 500;
    }
    .contact .digits {
        margin-top: 2%;
        border-radius: 25px;
        background: rgba(141, 193, 248, 0.152);
        color: rgb(54, 140, 232);
        padding: 5px;
    }

    .selected_address {
        background:rgba(141, 193, 248, 0.05)
    }
    .selected_address .icon {
        display: block;
    }

    .warning {
        display: flex;
        align-items: center;
    }
    .warning .icon {
        color: rgb(119, 33, 50);
        font-size: 150%;
    }
    .message {
        margin-left: 2%;
        width: 40%;
    }
    .button_wrapper {
        margin-top: 3%;
        margin-left: 5%;
        width: 15%;
        height: 40px;
    }
    .button_wrapper button {
        border-radius: 25px;
        border: 1px solid var(--blue-100);
        background: var(--blue-100);
        color: white;
    }

</style>