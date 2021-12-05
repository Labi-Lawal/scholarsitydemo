<template>
    <div class="review_page">
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
    methods: {
        goToNextSection() {
            this.$emit('next-button-action');
        }
    }
});
</script>

<style scoped>
.button_section {
    margin: 5% auto;
    height: 50px;
    display: flex;
    align-items: center;
}
.body .button_section .button_wrapper {
    height: 50px;
    width: 200px;
    margin: 0 0 0 auto;
}
.body .button_section .button_wrapper button {
    border: 1px solid var(--blue-100);
    background: var(--blue-100);
    color: white;
    font-weight: 600;
    border-radius: 25px;
}
</style>