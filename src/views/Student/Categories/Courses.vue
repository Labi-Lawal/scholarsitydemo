<template>
    <div class="courses_page">
        <div class="courses_list">
            <GridList 
                :columnAmnt="4"
                :courses="courses"
            />
        </div>
    </div>
</template>

<script>
import GridList from '@/components/List/GridList.vue'

export default {
    components: { GridList },
    data() {
        return {
            courses: []
        }
    },
    methods: { },
    beforeMount() {
        this.$store.dispatch('fetchcourses')
        .then((response)=> {
            this.courses = response;
        })
        .catch((error)=> {
            console.log(error);
        });
    }
}
</script>

<style>

</style>