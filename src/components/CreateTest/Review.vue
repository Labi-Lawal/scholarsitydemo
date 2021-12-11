<template>
    <div class="review_page">
        <div class="review_content">
            <div class="board">
                <div class="content_wrapper">
                    {{ testInfo.board.replaceAll('-', ' ') }}
                </div>
            </div>
            <div class="board">
                <div class="test_title">
                    {{ testInfo.testTitle }}
                </div>
            </div>
        </div>
        <div class="button_section">
            <div class="button_wrapper">
                <ButtonPlainText 
                    buttonText="Next"
                    @buttonAction="goToNextSection()"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default defineComponent({
    name: 'review',
    components: { ButtonPlainText },
    data() {
        return {
            testInfo: this.$store.getters.testData
        }  
    },
    methods: {
        goToNextSection() {
            this.$emit('next-button-action');
        }
    }
});
</script>

<style scoped>
.review_content {
    padding: 1% 0;
}
.board {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
}
.content_wrapper {
    border: 1px solid var(--paper-grey-200);
    padding: 1%;
    border-radius: 25px;
    background: var(--paper-grey-200);
    font-size: 90%;
    color: var(--paper-grey-600);
}
.test_title {
    text-transform: capitalize;
}

.button_section {
    margin: 5% auto;
    height: 50px;
    display: flex;
    align-items: center;
}
.button_section .button_wrapper {
    height: 50px;
    width: 200px;
    margin: 0 0 0 auto;
}
.button_section .button_wrapper button {
    border: 1px solid var(--blue-100);
    background: var(--blue-100);
    color: white;
    font-weight: 600;
    border-radius: 25px;
}

</style>