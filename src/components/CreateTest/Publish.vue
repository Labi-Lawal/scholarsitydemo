<template>
    <div class="publish_page">

        <div class="content">
            <div class="date double_field">
                <div class="field">
                    <div class="label">Date & Time Of Publishing</div>
                    <input type="datetime-local" class="date_time">
                </div>

                <div class="field">
                    <div class="label">Keep Open Till</div>
                    <input type="datetime-local" class="date_time">
                </div>
            </div>

            <div class="students_invite">
                <StudentsListTable />
            </div>
        </div>
        
        <div class="button_section">
                <div class="button_wrapper">
                    <ButtonPlainText 
                        buttonText="Publish To Schedule"
                        @buttonAction="goToNextSection()"
                    />
                </div>
            </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import StudentsListTable from '@/components/Table/StudentsListTable.vue';
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";

export default defineComponent({
    name: 'publish',
    components: { StudentsListTable, ButtonPlainText },
    methods: {
        goToNextSection() {
            this.$emit('next-button-action');
        }
    }
});
</script>

<style scoped>
.content {
    /* border: 1px solid black; */
    margin-top: 10%;
}
.double_field {
    width: 40%;
    display: flex;
    justify-content: space-between;
}
.double_field .field {
    width: 45%;
    height: 100%;
}
.field {
    
}
.field .label {
    font-weight: 500;
    font-size: 90%;
    margin-bottom: 2%;
    color: var(--paper-grey-600);
}
.field input.date_time {
    height: 35px;
    border: none;
    background: var(--paper-grey-200);
    color: var(--paper-grey-500);
    border-radius: 5px;
    padding: 2%;
    outline: none;
    font-weight: 500;
}
.field input.date_time:focus-within {
    background: #3079ee1c;
    color: #3079ee;
}

.students_invite {
    margin-top: 5%;
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