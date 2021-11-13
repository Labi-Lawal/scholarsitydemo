<template>
    <section class="redeem_product_form">
        <form @submit.prevent="signInButtonPressed">
            <div class="">
                <FormTitle title="Add A New Student" />
            </div>
            <div class="input_field_wrapper">
                <div class="field">
                    <label>Student ID ( Auto Generated )</label>
                    <input :value="randomNo" autocomplete="false" readonly>
                </div>
                <div class="field">
                    <label>Student Name</label>
                    <input autocomplete="false">
                </div>
                <div class="field">
                    <label>School Name</label>
                    <input autocomplete="false">
                </div>
                <div class="field">
                    <label>Grade</label>
                    <input autocomplete="false">
                </div>
                <div class="field">
                    <label>Mobile No</label>
                    <input autocomplete="false">
                </div>
                <div class="field">
                    <label>Email Address</label>
                    <input autocomplete="false">
                </div>
                
                <div class="buttons_frame">
                    <div class="btn_wrapper">
                        <ButtonPlainText buttonText="Confirm Redemption" @buttonAction="$emit('confirm-action')" />
                    </div>
                    <div class="btn_wrapper">
                        <ButtonPlainText class="cancel" buttonText="Cancel" @buttonAction="$emit('cancel-action')" />
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
    name: 'student_add_new',
    components: { FormTitle, ButtonPlainText },
    data() {
        return {
            randomNo: parseInt((Math.random() * 10) * 10000)
        }
    }
});
</script>

<style scoped>
.redeem_product_form {

}
form {
    width: 35%;
    margin: 0 auto;
}

.input_field_wrapper {
    margin-top: 10%;
}
div.field {
    width: 100%;
    padding: 1% 0;
}
.field label {
    font-weight: 500;
    font-size: 90%;
}
input {
    display: block;
    width: 94%;
    padding: 3% 3%;
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-100);
    color: var(--paper-grey-800);
    border-radius: 3px;
    outline: none;
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