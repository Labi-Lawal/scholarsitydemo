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
                        
                        <div class="methods_list flex_list">
                            <div 
                                :class="{
                                    method_wrapper: true,
                                    selected: (selectedPaymentMethod === 'card') ?true :false
                                }"
                                @click="selectPaymentMethod('card')"
                            >
                                <img src="../assets/icons-credit-card-grey.png" />
                                <div class="label">
                                    Credit / Debit <br> Card
                                </div>
                            </div>

                            <div 
                                :class="{
                                    method_wrapper: true,
                                    selected: (selectedPaymentMethod == 'paypal') ?true :false
                                }"
                                @click="selectPaymentMethod('paypal')"
                            >
                                <img src="../assets/icons-paypal.png" />
                                <div class="label">
                                    Paypal
                                </div>
                            </div>
                        </div>

                        <form @submit.prevent="signInButtonPressed" >
                            
                            <div v-if="selectedPaymentMethod == 'card'">
                                <div class="field name_on_card">
                                    <div class="label"> Name On Card </div> 
                                    <input autocomplete />
                                </div>
                                
                                <div class="field name_on_card">
                                    <div class="label"> Card Number </div> 
                                    <div class="input_field">
                                        <input 
                                            type="number" 
                                            maxlength="1"
                                            autocomplete 
                                        />
                                        <div class="icon_img">
                                            <img src="../assets/icons-credit-card-grey.png" />
                                        </div>
                                    </div>
                                </div>

                                <div class="field field_3">
                                    <div class="field month drop_down_wrapper">
                                        <div class="label">Month</div>
                                        <DropDown 
                                            class="dropdown"
                                            placeholder="Select Month"
                                            :options="monthOptions"
                                            :selected=selectedStatus[0]
                                            :selectedIndex=selectedIndex[0]
                                            :isOptionsVisible="showOptions[0]"
                                            :hideIcon=false
                                            :hideBorder=false
                                            :dropDownIndex=0
                                            :raiseByOne=2
                                            @showOptions="showDropOptions"
                                            @optionSelect="optionSelected"
                                        />
                                    </div>

                                    <div class="field year drop_down_wrapper">
                                        <div class="label">Year</div>
                                        <DropDown 
                                            class="dropdown"
                                            placeholder="Select Year"
                                            :options="yearOptions"
                                            :selected=selectedStatus[1]
                                            :selectedIndex=selectedIndex[1]
                                            :isOptionsVisible="showOptions[1]"
                                            :hideIcon=false
                                            :hideBorder=false
                                            :dropDownIndex=1
                                            :raiseByOne=1
                                            @showOptions="showDropOptions"
                                            @optionSelect="optionSelected"
                                        />
                                    </div>

                                    <div class="field">
                                        <div class="label">CVV</div>
                                        <input  autocomplete="false" />
                                    </div>
                                </div>

                                <div class="btn_wrapper">
                                    <ButtonPlainText 
                                        buttonText="Pay"
                                        @buttonAction="buyCredit"
                                    />
                                </div>
                            </div>

                            <div v-if="selectedPaymetMethod == 'paypal'">
                                
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
        <SiteFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import SiteFooter from '@/components/Footer/SiteFooter.vue'
import Header from '@/components/Header/Header.vue'
import DropDown from '@/components/DropDown/DropDown.vue'
import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue'

export default defineComponent({
    components: { SiteFooter, Header, DropDown, ButtonPlainText },
    data(){
        var yearOptions:any = [];

        return {
            selectedPaymentMethod: 'card',
            creditAmnt: 20,
            monthOptions: [
                {
                display_name: '01',
                value: '01'
                },
                {
                display_name: '02',
                value: '02'
                },
                {
                display_name: '03',
                value: '03'
                },
                {
                display_name: '04',
                value: '04'
                },
                {
                display_name: '05',
                value: '05'
                },
                {
                display_name: '06',
                value: '06'
                },
                {
                display_name: '07',
                value: '07'
                },
                {
                display_name: '08',
                value: '08'
                },
                {
                display_name: '09',
                value: '09'
                },
                {
                display_name: '10',
                value: '10'
                },
                {
                display_name: '11',
                value: '11'
                },
                {
                display_name: '12',
                value: '12'
                }
            ],
            monthModel: {
                value: '',
                error: ''
            },
            yearOptions,
            yearModel: {
                value: '',
                error: ''
            },
            selectedStatus: [false],
            selectedIndex: [0],
            showOptions: [false],

        }
    },
    methods: {
        showDropOptions(index:number) {
            this.showOptions[index] = !this.showOptions[index];
        },
        hideAllOptions() {
            for (var i=0; i<this.showOptions.length; i++) 
                this.showOptions[i] = false;
        },
        optionSelected(selected:any) {
            var dropdown = selected.dropDownIndex;

            this.monthModel.value = this.monthOptions[selected.optionIndex].value;
            
            this.selectedStatus[dropdown] = true;
            this.selectedIndex[dropdown] = selected.optionIndex;

            this.hideAllOptions();
        },
        generateYears() {
            return new Promise<void>((resolve, rejecct)=> {
                var today:any = new Date(),
                fromYear = today.getFullYear() - 4,
                toYear = today.getFullYear() + 4;

                for(var i=fromYear; i <= toYear; i++) {
                    var year = fromYear+i;

                    this.yearOptions.push({
                        display_name: year,
                        value: year
                    });

                    if(i == 0) resolve();
                }
            });
        },
        selectPaymentMethod(method:string) {
            this.selectedPaymentMethod = method;
        },
        buyCredit() {
            if(this.validateInput()) {
                this.$store.dispatch('buycredit', this.creditAmnt)
                .then((response)=> {
                    this.$router.push('/purchase-credits/success');
                })
                .catch((error)=> {
                    console.log(error);
                });
            }
        },
        validateInput() {
            if(this.creditAmnt <= 0 && this.creditAmnt.toString() == '') {                
                return false;
            }
            if(this.selectedPaymentMethod == '') {
                return false;
            }

            
            return true;
        }
    },
    beforeMount() {
        this.generateYears();
    }
})
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
    height: 200px;
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
.credit_info input {
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
    width: 50%;
}
.payment_methods .title {
    font-weight: 500;
    font-size: 110%;
}
.grid_list {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    gap: 5px;
}
.flex_list {
    display: flex;
    align-items: center;
}
.flex_list > div {
    margin-right: 2%;
}

.methods_list {
    margin-top: 2%;
}
.method_wrapper {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid var(--paper-grey-400);
    color: var(--paper-grey-600);
    height: 60px;
    width: 150px;
    font-size: 90%;
    cursor: pointer;
}
.method_wrapper img {
    width: 20%;
    height: auto;
}
.methods_wrapper .label {
    font-size: 50%;
}
.method_wrapper.selected {
    border: 1px solid #5797ff28;
    background: #5797ff28;
}

form {
    margin: 5% 0;
}
.field {
    height: 70px;
    margin-bottom: 5%;
}
.field input, .input_field {
    width: 96%;
    height: 50px;
    font-size: 110%;
    padding: 0 2%;
    text-transform: uppercase;
    outline: none;
    border: 1px solid var(--paper-grey-400);
    border-radius: 5px;
}
.field_3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.field_3 > div {
    width: 30%;
    height: 100%;
}
.input_field {
    display: flex;
    align-items: center;
}
.input_field input {
    width: 90%;
    border: none;
    height: 100%;
}
.input_field .icon_img {
    height: 90%;
}
.drop_down_wrapper .dropdown {
    height: 45px;
}

.btn_wrapper {
    width: 25%;
    height: 50px;
    margin-left: auto;
}
.btn_wrapper button {
    border-radius: 25px;
    background: var(--blue-100);
    border: 1px solid var(--blue-100);
    color: white;
    font-size: 110%;
}
 
</style>