<template>
    <div class="students_list_table">
        <Table 
            :tableHeadings="headings"
            :tableBody="body"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Table from '@/components/Table/Table.vue';

export default defineComponent({
    name: 'students-list-table',
    components: { Table },
    data() {
        return {
            headings: [
                'Name',
                'Institution',
                'Grade'
            ],
            body: [
                [
                    'John Jones',
                    'UNILAG', 
                    'A+'
                ]
            ]
        }
    },
    methods: {

    }
})
</script>

<style scoped>

</style>