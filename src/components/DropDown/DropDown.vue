<template>
    <div class="select">
        <div class="display" :class="(hideBorder)?'hide-border':''" @click="$emit('show-options', dropDownIndex)">
            <div class="placeholder-option" v-if="placeholder!=undefined && !selected">{{placeholder}}</div>
            <div class="selected-option" v-if="placeholder!=undefined && selected">{{options[selectedIndex].display_name}}</div>
            <div class="selected-option" v-if="placeholder==undefined && selected">{{options[selectedIndex].display_name}}</div>
            <div class="icon" v-if="!hideIcon">
                <font-awesome-icon :icon="['fas', 'caret-down']" v-if="!isOptionsVisible"/>
                <font-awesome-icon :icon="['fas', 'caret-up']" v-if="isOptionsVisible"/>
            </div>
        </div>
        <div 
            class="options"
            :class="{
                raise_by_1_level: (raiseByOne == 1) ? true : false,
                raise_by_2_level: (raiseByOne == 2) ? true : false,
                raise_by_3_level: (raiseByOne == 3) ? true : false,
                raise_by_4_level: (raiseByOne == 4) ? true : false,
                raise_by_5_level: (raiseByOne == 5) ? true : false
            }" 
            v-if="isOptionsVisible"
        >
            <div class="option" v-for="(option, index) in options" :key="option.value" @click="optionSelected(index)"> {{ option.display_name }}</div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'Drop-Down',
    props: [
        'placeholder', 
        'options', 
        'isOptionsVisible',
        'selected', 
        'selectedIndex', 
        'hideIcon', 
        'hideBorder', 
        'raiseByOne', 
        'dropDownIndex'
    ],
    data(){
        return {}
    },
    methods: {
        optionSelected (index){
            this.$emit('option-select', { dropDownIndex: this.dropDownIndex, optionIndex: index });
        }
    }
});
</script>

<style scoped>
    div.select {
        height: 100%;
        width: 100%;
        cursor: pointer;
        position: relative;
    }
    div.select *::selection {
        background: none;
    }
    div.display {
        height: 100%;
        padding: 0% 6%;
        display: flex;
        border: 1px solid lightgrey;
        border-radius: 5px;
        text-transform: capitalize;
        font-size: 110%;
        color: rgb(83, 83, 83);
        font-weight: 500;
    }
    div.display.hide-border {
        border: none;
    }
    div.display > div {
        display: flex;
        align-items: center;
    }
    div.display div.selected-option, div.display div.placeholder-option {
        width: 90%;
    }
    div.display div.placeholder-option {
        color: rgba(146, 146, 146, 0.705);
    }
    div.icon {
        width: 10%;
        justify-content: center;
    }
    div.options {
        border: 1px solid lightgrey;
        background: white;
        position: absolute;
        width: 99.5%;
        left: 0;
        top: 105%;
        padding: 2% 0%;
        border-radius: 2px;
    }
    .raise_by_1_level {
        z-index: 1;
    }
    .raise_by_2_level {
        z-index: 2;
    }
    .raise_by_3_level {
        z-index: 3;
    }
    .raise_by_4_level {
        z-index: 4;
    }
    .raise_by_5_level {
        z-index: 5;
    }
    div.option {
        display: flex;
        align-items: center;
        height: 30px;
        color: grey;
        padding: 0% 6%;
        text-transform: capitalize;
    }
    div.option:hover {
        background: rgb(216, 216, 216);
    }
</style>