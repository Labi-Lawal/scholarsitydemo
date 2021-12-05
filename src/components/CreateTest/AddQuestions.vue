<template>
    <section class="instructions_from">
        <form @submit.prevent="signInButtonPressed">
            <div class="section_title">
                Questions
            </div>
            
            <div class="input_field_wrapper">
                <div 
                    class="field" 
                    v-for="(item, index) in allFields"
                    :key="index"
                >   
                    <div class="question_number">{{ index + 1 }}.</div>
                    <div class="content">
                        <div class="remove">
                            <div class="remove_field_btn_wrapper" v-if="index > 0">
                                <ButtonIcon iconName="minus" @buttonAction="removeField(index)" />
                            </div>
                        </div>
                        <div class="top">
                            <div class="field_input">
                                <textarea 
                                    v-model="item.value" 
                                    autocomplete="false" 
                                    @keydown="save(item.value)"
                                ></textarea>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="field_options">
                                <div class="option">
                                    <input 
                                        placeholder="A."
                                        autocomplete="false" 
                                    >
                                </div>
                                <div class="option">
                                    <input 
                                        placeholder="B."
                                        autocomplete="false" 
                                    >
                                </div>
                                <div class="option">
                                    <input 
                                        placeholder="C."
                                        autocomplete="false" 
                                    >
                                </div>
                                <div class="option">
                                    <input 
                                        placeholder="D."
                                        autocomplete="false" 
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="add_field_btn_wrapper">
                    <ButtonIcon iconName="plus" @buttonAction="addNewField" />
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

        </form>
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";
import ButtonIcon from "@/components/buttons/ButtonIcon.vue";

export default defineComponent({
    name: 'instructions-form',
    components: { ButtonIcon, ButtonPlainText },
    data() {
        return {
            allFields: [
                {
                    value: '',
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
        },
        goToNextSection() {
            this.$emit('next-button-action');
        }
    }
});
</script>

<style scoped>
.instructions_from {
    
}
form {
    
}
.section_title {
    border-bottom: 1px solid var(--paper-grey-200);
    color: var(--paper-grey-600);
    font-weight: 400;
    font-size: 150%;
    margin: 5% 0 2%;
    padding: 1% 0;
    text-transform: capitalize;
}
.input_field_wrapper {
}
div.field {
    margin-top: 15px;
    border: 1px solid var(--paper-grey-200);
    padding: 4% 2%;
    display: flex;
}
.field div.label {
    font-weight: 400;
    font-size: 110%;
    color: var(--paper-grey-600);
    margin-bottom: 5px;
    margin-left: 5px;
}
.field_input {
    display: flex;
    align-items: center;
}
div.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.question_number {
    margin-right: 1%;
    font-size: 20px;
    font-weight: 600;
    color: var(--paper-grey-600);
}
.content {
    width: 100%;
    height: 100%;
}
.field_input {
    width: 100%;
    margin: 0;
}
textarea, input {
    display: block;
    width: 95%;
    padding: 2% 3%;
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-100);
    color: var(--paper-grey-500);
    border-radius: 10px;
    outline: none;
    font-size: 100%;
    resize: none;
}
input::placeholder {
    color: var(--paper-grey-500);
}
.bottom {
    width: 100%;
    margin: 0 auto 0 auto;
    margin-top: 1%;
    
}
.field_options {
    display: grid;
    grid-template-columns: calc(100% / 2) calc(100% / 2);
    column-gap: 10px;
    row-gap: 10px;
}
.option {
    width: calc(100% - 10px);
    height: 50px;
}
.option input {
    height: 40%;
    width: 93%;
}

.add_field_btn_wrapper {
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-top: 10px;
}

.remove {
    margin-bottom: 5px;
}
.remove_field_btn_wrapper {
    width: 20px;
    height: 20px;
    margin-left: auto;
}
.remove_field_btn_wrapper button {
    border-radius: 50%;
    border: 1px solid rgba(243, 118, 118);
    background: rgba(243, 118, 118);
    color: white;
}
.add_field_btn_wrapper button {
    border-radius: 10px;
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
}
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