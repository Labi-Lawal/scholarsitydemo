<template>
    <section class="course_page">
        <Header />
        <section class="course_details">
            <div class="">
                 
            </div>
        </section>
        <Footer />
    </section>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
    components: { Header, Footer },
    data() {
        return {
            course: {
                title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
                tutor: 'Jose Portilla',
                ratingsCount: 52,
                avg_ratings: 4.8,
                price: 84.99
            }
        }
    },
    methods: {

    },
}
</script>

<style scoped>
    .course_details {
        height: 80vh; 
    }
</style>