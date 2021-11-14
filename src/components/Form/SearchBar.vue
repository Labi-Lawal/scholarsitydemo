<template>
    <form 
        @submit.prevent="signInButtonPressed"
        :class="{ 
            search_bar: true,
            expand: isExpand
        }"
    >
        <input placeholder="Search by keyword" @mousedown="expandForm" @blur="reduceForm" />
        <button>
            <FontAwesomeIcon :icon="['fas', 'search']" class="icon" />
        </button>
    </form>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: 'search-bar',
    components: { },
    data() {
        return {
            isExpand: false
        }
    },
    methods: {
        expandForm() {
            this.isExpand = true;
        },
        reduceForm() {
            this.isExpand = false;
        }
    }
});
</script>

<style scoped>
    form.search_bar {
        background: var(--paper-grey-80);
        height: 100%;
        display: flex;
        border-radius: 25px;
        transition: 0.2s ease-in-out;
    }

    .search_bar input {
        height: 100%;
        width: 70%;
        padding: 0% 5%;
        outline: none;
        background: none;
        border: none;
        font-size: 90%;
        color: var(--paper-grey-700);
        transition: 0.5s;
    }
    .search_bar.expand input {
        width: 80%;
    }
    .search_bar input::placeholder {
        color: var(--paper-grey-400);
    }
    .search_bar button {
        height: 100%;
        width: 20%;
        border: none;
        background: none;
        color: var(--paper-grey-600);
        transition: 0.5s;
    }
    .search_bar.expand button {
        width: 10%;
    }
</style>