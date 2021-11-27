<template>
    <div class="board_drop_down_wrapper">
       
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import DropDown from "@/components/DropDown/DropDown.vue";

export default defineComponent({
    name: 'board-drop-down',
    components: { DropDown },
    props: ['dropDownIndex', 'raiseBy'],
    data() {
        var selectedIndex, 
            selectedStatus,
            showOptions:any = [];

        return { 
            boardOptions: [
                {
                    value: 'board-1',
                    display_name: 'board 1'
                },
                {
                    value: 'board-2',
                    display_name: 'board 2'
                },
                {
                    value: 'board-3',
                    display_name: 'board 3'
                },
                {
                    value: 'board-4',
                    display_name: 'board 4'
                }
            ],
            optionSelected: null,
            selectedIndex,
            selectedStatus,
            showOptions
        }
    },
    methods: {
        showDropOptions () {
            console.log(!this.showOptions[this.dropDownIndex]);
            return !this.showOptions[this.dropDownIndex];
        }
    },
    async () {
        this.showOptions[this.dropDownIndex] = false;
        // this.$store.dispatch('fetchboards')
        // .then((response)=> { this.boardOptions = response; })
        // .catch((error)=>{
        //     console.log(error.response);
        //     console.log("THere was an error fetching boards");
        // });
    }
});
</script>

<style scoped>

</style>