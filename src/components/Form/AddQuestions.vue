<template>
    <section class="redeem_product_form">
        <div class="import_questions_btn_wrapper">
            <ButtonPlainText buttonText="Import Questions" />
        </div>
        <form @submit.prevent="signInButtonPressed">
            <div class="">
                <FormTitle title="Add Questions" />
            </div>
            <div class="input_field_wrapper">
                <div 
                    class="field"   
                    v-for="(item, index) in allFields"
                    :key="index"
                >
                    <div class="field_input">
                        <input v-model="item.value" autocomplete="false" @keydown="save(item.value)">

                        <div class="remove_field_btn_wrapper" v-if="index > 0">
                            <ButtonIcon iconName="minus" @buttonAction="removeField(index)" />
                        </div>        
                    </div>
                </div>
                
                <div class="add_field_btn_wrapper">
                    <ButtonIcon iconName="plus" @buttonAction="addNewField" />
                </div>
                <div class="buttons_frame">
                    <div class="btn_wrapper">
                        <ButtonPlainText class="cancel" buttonText="Cancel" @buttonAction="$emit('cancel-action')" />
                    </div>
                   <div class="btn_wrapper">
                        <ButtonPlainText buttonText="Submit" @buttonAction="$emit('success')" v-if="position == 'indie'" />
                        <ButtonPlainText buttonText="Next" @buttonAction="$router.push('/teacher/create/review')" v-if="position == 'band'" />
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
import ButtonIcon from "@/components/buttons/ButtonIcon.vue";

export default defineComponent({
    name: 'add_questions',
    components: { FormTitle, ButtonIcon, ButtonPlainText },
    props: ['position'],
    data() {
        return {
            randomNo: parseInt((Math.random() * 10) * 10000),
            allFields: [
                {
                    value: 'Answer All Questions',
                }
            ]
        }
    },
    methods: {
        save(value) {
            console.log(value);
        },
        addNewField () {
            this.allFields.push({
                value:''
            })
        },
        removeField (index) {
            this.allFields.splice(index, 1);
        }
    }
});
</script>

<style scoped>
.redeem_product_form {

}
.import_questions_btn_wrapper {
    width: 15%;
    margin-left: auto;
    height: 45px;
}
.import_questions_btn_wrapper button {
    color: white;
    background: var(--paper-light-blue-800);
    border: 1px solid var(--paper-light-blue-800);
    border-radius: 5px;
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
.field_input {
    display: flex;
    align-items: center;
}
input {
    display: block;
    width: 85%;
    padding: 3% 3%;
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-100);
    color: var(--paper-grey-800);
    border-radius: 3px;
    outline: none;
}
.add_field_btn_wrapper {
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-top: 10%;
}
.remove_field_btn_wrapper {
    width: 20px;
    height: 20px;
    margin-left: auto;
}
.remove_field_btn_wrapper button {
    border-radius: 50%;
    border: 1px solid rgb(186, 59, 59);
    background: rgb(186, 59, 59);
    color: white;
}
.add_field_btn_wrapper button {
    border-radius: 50%;
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
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