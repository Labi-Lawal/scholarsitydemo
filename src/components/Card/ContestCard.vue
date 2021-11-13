<template>
    <div 
        class="bulletin_board_card" 
        v-for="(item, index) in list" 
        :key=index
        @click="$emit('button-action', index)"
    >
        Contest {{ index }}
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    name: 'contest-card',
    props: ['list'],
    methods: {
   
    }
});
</script>

<style scoped>
.bulletin_board_card {
    border: 1px solid var(--paper-grey-300);
    background: var(--paper-grey-300);
    color: var(--paper-grey-800);
    font-weight: 500;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>