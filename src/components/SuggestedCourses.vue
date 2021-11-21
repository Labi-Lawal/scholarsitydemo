<template>
    <div class="suggested_courses">
        <GridList  
            :columnAmnt=3
            :courses=courses
        />
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import GridList from "@/components/List/GridList.vue";

export default defineComponent({
    name:'suggested-courses',
    components: { GridList },
    props: ['courses']
});
</script>

<style scoped> 
    .suggested_courses {
        padding: 2% 0;
    }
</style>