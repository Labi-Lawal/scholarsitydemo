<template>
    <section class="wallet">
        <Header />
        <section class="wallet_body">
            <div class="container_padding_5">
                <div class="balance_card_wrapper">
                    <BalanceCard :widthRatio="2" />
                </div>
                <div class="wallet_table">
                    <div class="filters">
                        <div 
                            class="credits-purchased"
                            :class="{ 
                                selected: (selected == 'credit-purchased') ? true : false
                            }"
                            @click="selectFilter('credit-purchased')"
                        >Credit Purchased</div>
                        <div 
                            class="credits-earned"
                            :class="{ 
                                selected: (selected == 'credit-earned') ? true : false
                            }"
                            @click="selectFilter('credit-earned')"
                        >Credit Earned</div>
                        <div 
                            class="credits-utilized"
                            :class="{ 
                                selected: (selected == 'credit-utilized') ? true : false
                            }"
                            @click="selectFilter('credit-utilized')"
                        >Credit Utilized</div>
                        <div 
                            class="credits-purchased"
                            :class="{ 
                                selected: (selected == 'date-range') ? true : false
                            }"
                            @click="selectFilter('date-range')"
                        >Date Range</div>
                    </div>
                    <div class="wallet_table_content">
                        <Table :tableHeadings="headings" :tableBody="body" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '@/components/Header/Header.vue';
import BalanceCard from '@/components/Wallet/BalanceCard.vue';
import Table from '@/components/Table.vue';
import Footer from '@/components/Footer/SiteFooter.vue';

export default defineComponent({
    components: { Header, BalanceCard, Table, Footer },
    data() {
        var selected = 'credit-purchased',
        headingCreditsPurchased = [
            'Transaction Date & Time',
            'Transaction Details',
            'Amount Paid [INR]',
            'Credits Purchased'
        ],
        headingCreditsEarned = [
            'Transaction Date & Time',
            'Transaction Details',
            'Credits Earned'
        ],
        headingCreditsUtilized = [
            'Transaction Date & Time',
            'Transaction Details',
            'Credits Utilized'
        ],
        bodyCreditsPurchased = [
            ['20-Oct-2021 20:06:55', 'Credits Purchased', '4,000.00', '400'],
            ['20-Oct-2021 20:06:55', 'Credits Purchased', '4,000.00', '400']
        ],
        bodyCreditsEarned = [
            ['20-Oct-2021 20:06:55', 'Credits Utilized - Test Title', '4,000.00', '400'],
        ],
        bodyCreditsUtilized = [
            ['20-Oct-2021 20:06:55', 'Credits Utilized', '400'],
            ['20-Oct-2021 20:06:55', 'Credits Utilized', '400']
        ];

        return {
            selected,
            headingCreditsPurchased,
            headingCreditsEarned,
            headingCreditsUtilized,
            bodyCreditsPurchased,
            bodyCreditsEarned,
            bodyCreditsUtilized,
            body: bodyCreditsPurchased,
            headings: headingCreditsPurchased
        }
    },
    methods: {
        selectFilter(filter) {
            this.selected = filter;
            this.filterBody();
        },
        filterBody() {
            if(this.selected == 'credit-purchased') {
                this.body = this.bodyCreditsPurchased;
                this.headings = this.headingCreditsPurchased;
            }
            if(this.selected == 'credit-earned') {
                this.body = this.bodyCreditsEarned;
                this.headings = this.headingCreditsEarned;
            }
            if(this.selected == 'credit-utilized') { 
                this.body = this.bodyCreditsUtilized;
                this.headings = this.headingCreditsUtilized;
            }
        }
    },
});
</script>

<style scoped>
.wallet_body {
    padding: 5% 0;
}
.balance_card_wrapper {
    width: 25%;
    margin-left: auto;
    height: 150px;
}
.wallet_table {
    margin-top: 1%;
}
.wallet_table .filters {
    display: flex;
    height: 50px; 
}
.wallet_table .filters div {
    border: 1px solid var(--paper-grey-300);
    color: var(--paper-grey-700);
    height: 100%;
    width: calc(100% / 2 / 4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1%;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
}
.wallet_table .filters div.selected {
    border-color: var(--paper-light-blue-800);
    color: var(--paper-light-blue-800);
}
.wallet_table .filters div::selection {
    background: none;
}
.wallet_table_content {
    margin-top: 1%;
}

</style>