<template>
    <button 
        class="submit" 
        @click="$emit('button-action')"> 
        
        <div
            class="items"
            v-if="!isLoading">
            <img
                :src=source
            />
            <div class="text">
                {{ buttonText }}
            </div>
        </div>

        <div 
            class="loader"
            v-if="isLoading"
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: "button-icon",
    props: ['source', 'buttonText', 'isLoading']
});
</script>

<style scoped>
    .submit{
        width: 100%;    
        height: 100%;
        font-weight: 500;
        margin: 0% auto 0%;
        font-size: 90%;
        cursor: pointer;
        outline: none;
        opacity: 1;
        overflow: hidden;
    }
    .submit:disabled{
        opacity: 0.7;
    }
    .submit .items {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    img {
        width: 40px;
        height: 40px;
    }
    .text {
        color: inherit;
    }
    .loader {
        height: 13px;
        width: 83px;
    }
    .loader div {
        background: white;
    }
</style>

