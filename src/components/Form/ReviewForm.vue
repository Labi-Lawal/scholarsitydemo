<template>
    <section class="review_form">
        <form @submit.prevent="signInButtonPressed">
            <div class="form_inner_wrapper">
                <div class="">
                    <FormTitle title="Review" />
                </div>
                <div class="input_field_wrapper">
                    <textarea class="review_text_area"></textarea>
                </div>
                
                <div class="buttons_frame">
                    <div class="btn_wrapper">
                        <ButtonPlainText class="cancel" buttonText="Cancel" @buttonAction="$emit('cancel-action')" />
                    </div>
                    <div class="btn_wrapper">
                        <ButtonPlainText buttonText="Next" @buttonAction="$router.push('/teacher/create/publish')" />
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script> 
import { defineComponent } from "@vue/runtime-core";
import FormTitle from "@/components/Title/FormTitle.vue";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default defineComponent({
    name: 'review-form',
    components: { FormTitle, ButtonPlainText },
    data() {
        return {
          
        }
    },
    methods: {

    }
});
</script>

<style scoped>
.review_form {
    width: 90%;
    margin: 0 auto;
}

.review_text_area {
    width: 100%;
    height: 400px;
    resize: none;
    padding: 2%;
    font-size: 110%;
    outline: none;
    transition: 0.5s;
    border-radius: 5px;
    border: 2px solid var(--paper-grey-400);
}
.review_text_area:focus {
    border-color: var(--paper-light-blue-800);
}

.form_inner_wrapper {
    width: 50%;
}

.buttons_frame {
    display: flex;
    justify-content: space-between;
}
.btn_wrapper {
    width: 100%;
    margin-top: 5%;
    height: 40px;
    width: 45%;
}
.btn_wrapper button {
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
    border-radius: 3px;
    font-size: 80%;
}
button.cancel {
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-300);
    color: var(--paper-grey-900);
}
</style>