<template>
    <section class="publish_form">
        <div class="">
            <FormTitle title="Set Publish Schedule" />
        </div>
        <div class="">
            <div class="date_range_frame">
                <div class="date_field_wrapper">
                    <label>From</label>
                    <input type="Date">
                </div>
                <div class="date_field_wrapper">
                    <input type="Date">
                    <label>Till</label>
                </div>
            </div>
        </div>
        <div class="students_list">
             <div class="">
                <FormTitle title="Students To Be Invited" />
            </div>
            <div class="student_list_table">
                <Table :tableHeadings="headings" :tableBody="body" />
            </div>
        </div>
        <div class="add_new_user_form" v-if="isNewUserFormVisible">
            <StudentAddNew @cancelAction="hideNewUserForm" />
        </div>
        <div class="publish_btn_wrapper">
            <ButtonPlainText 
                buttonText="Publish Test" 
                @buttonAction="$router.push('/teacher/create/success')"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import FormTitle from "@/components/Title/FormTitle.vue";
import ButtonPlainText from "@/components/buttons/ButtonPlainText.vue";
import Table from "@/components/Table/Table.vue";

export default defineComponent({
    name: 'publish-form',
    components: { FormTitle, ButtonPlainText, Table },
    data() {
        return {
            headings: [
                'name',
                'school',
                'course',
                'grade',
                'date'
            ],
            body:  []
        }
    }
});
</script>
<style scoped>
.publish_form {
    width: 90%;
    margin: 0 auto;
}
.date_range_frame {
    border: 2px solid var(--paper-grey-400);
    width: 40%;
    display: flex;
    height: 30px;
    padding: 1%;
    border-radius: 10px;
}
.date_field_wrapper {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
}
input {
    height: 90%;
    width: 70%;
    padding: 1% 4%;
    border: none;
    outline-color: var(--paper-light-blue-600);
}
label {
    width: 20%;
    font-size: 90%;
    font-weight: 500;
    color: var(--paper-grey-600);
}
div.students_list {
    margin: 4% 0;
}
.publish_btn_wrapper {
    width: 20%;
    height: 50px;
    margin: 10% 0 0;
    margin-left: auto;
}
.publish_btn_wrapper button {
    border: 1px solid var(--paper-light-blue-800);
    background: var(--paper-light-blue-800);
    color: white;
    border-radius: 5px;
}

</style>