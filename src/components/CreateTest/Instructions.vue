<template>
    <section class="instructions_from">
        <form @submit.prevent="signInButtonPressed">
            <div class="section_title">
                Test Intructions
            </div>
            
            <div class="input_field_wrapper">
                <div 
                    class="field" 
                    v-for="(item, index) in allFields"
                    :key="index"
                >
                    <div class="label">
                        Instruction {{ index + 1 }}
                    </div>
                    
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
            </div>

            <div class="button_section">
                <div class="button_wrapper prev">
                    <ButtonPlainText 
                        buttonText="Go Back"
                        @buttonAction="goToPrevSection()"
                    />
                </div>

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
            randomNo: parseInt((Math.random() * 10) * 10000),
            allFields: [
                {
                    value: 'Answer all questions'
                }
            ]
        }
    },
    methods: {
        addNewField () {
            this.allFields.push({
                value:''
            })
        },
        removeField (index) {
            this.allFields.splice(index, 1);
        },

        goToPrevSection() {
            this.$emit('prev-button-action');
        },
        goToNextSection() {

            var allInstructions = [];
            this.allFields.forEach(element => {
                if(element.value != '') allInstructions.push(element.value);
            }); 

            this.$store.dispatch('storeinstructions', allInstructions)
            .then(()=> this.$emit('next-button-action'))
            .catch((error)=> console.log(error));
        }
    },
    beforeMount() {
        var cachedInstructions = this.$store.getters.testData.instructions;
        if(cachedInstructions.length > 0) {
            this.allFields = [];
            cachedInstructions.forEach(element => {
                this.allFields.push({ value: element });
            });
        } 
    }
});
</script>

<style scoped>

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
    width: 50%;
}
div.field {
    margin-top: 15px;
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
input {
    display: block;
    width: 85%;
    padding: 2% 3%;
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-100);
    color: var(--paper-grey-800);
    border-radius: 10px;
    outline: none;
    font-size: 100%;
}
input::placeholder {
    color: var(--paper-grey-500);
}
.add_field_btn_wrapper {
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-top: 10px;
}
.remove_field_btn_wrapper {
    width: 20px;
    height: 20px;
    margin-left: 5px;
}
.remove_field_btn_wrapper button {
    border-radius: 50%;
    border: 1px solid rgba(196, 81, 81, 0.248);
    background: rgb(186, 59, 59);
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
    justify-content: space-between;
}

.body .button_section .button_wrapper {
    height: 50px;
    width: 200px;
}
.body .button_section .button_wrapper button {
    border: 1px solid var(--blue-100);
    background: var(--blue-100);
    color: white;
    font-weight: 600;
    border-radius: 25px;
}
.button_wrapper.prev button {
    border: none !important;
    background: lightgrey !important;
    color: var(--paper-grey-600) !important;
}
</style>