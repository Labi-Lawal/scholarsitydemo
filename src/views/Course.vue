<template>
    <section class="course_page">
        <Header />
        <section class="course_details">
            <div class="course_image_title_wrapper">
                <div class="image_wrapper">
                    <img src="../assets/course-3.jpg">
                </div>
                <div class="overlay">
                    <div class="content">
                        <div class="title">
                            {{ course.title }}
                        </div>
                        <div class="teacher_profile">
                            <UserProfileMin 
                                class="user_profile_min"
                                :showDetails=true
                            />
                        </div>
                    </div>
                    <div 
                        class="price_section"
                        :class="{
                            fixed: isFixed
                        }"
                    >      
                        <div class="mini_title">
                            {{ course.title }}
                        </div>
                        <div class="ratings">
                            <div class="avg_ratings">
                                {{ course.avg_ratings }}
                            </div>
                            <div class="stars">
                                <font-awesome-icon 
                                    :icon="['fas', 'star']" 
                                    v-for="index in parseInt(course.avg_ratings)" :key=index
                                />
                            </div>
                            <div class="total_ratings"> ({{ course.ratingsCount }}) </div>
                        </div>
                        <div class="price">$84.99</div>
                        <div class="buttons">
                            <div class="btn_wrapper">
                                <ButtonPlainText buttonText="Add To Cart" class="add_to_cart"/>
                            </div>
                            <div class="btn_wrapper">
                                <ButtonPlainText buttonText="Buy Now" class="buy_now" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about_course">
                <SectionTitle title="Description" class="section_title" />
                <div class="text_body">
                    {{ course.description }}
                </div>
            </div>
        </section>
        <Footer />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import UserProfileMin from "@/components/UserProfileMin.vue";
import SectionTitle from '@/components/Title/SectionTitle.vue';
import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';

export default defineComponent({
    components: { Header, Footer, UserProfileMin, SectionTitle, ButtonPlainText },
    data() {

        var course = {
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam orci elit, vel mollis purus volutpat facilisis. Nunc et facilisis mi. Vestibulum consequat bibendum orci ullamcorper bibendum. Nam consectetur, justo ac lobortis maximus, quam tortor tempor mi, nec tincidunt dolor felis at libero. Sed scelerisque nisi sit amet leo tristique porta. Mauris sed varius ipsum. Vivamus vulputate leo vel rutrum suscipit. Sed sed sapien a elit ultricies mattis. Vivamus at sem orci. Nam porttitor consectetur scelerisque. Donec egestas mi et consequat tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis risus ut lorem bibendum vulputate vitae eget risus. Nunc tempor leo et lorem maximus tempus. Aenean ullamcorper enim diam, vitae sagittis ex luctus vitae. Curabitur quis aliquet ipsum. Fusce vitae leo nec tortor laoreet semper. Nunc mollis sed nunc eget posuere. Aenean quis sem posuere, maximus urna non, vehicula nisi. Ut commodo lacus in faucibus lobortis. Aliquam erat volutpat. Sed suscipit, lectus quis tincidunt sodales, est tellus fermentum erat, eget volutpat quam nisi sit amet sapien.',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99
        };

        return {
            course,
            windowTop: 0,
            isFixed: false
        }
    },
    methods: {
        handleOnSroll() {
            this.windowTop = window.top.scrollY;
            if(this.windowTop >= 500) this.isFixed = true;
            else this.isFixed = false;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleOnSroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleOnSroll);
    }
})
</script>

<style scoped>
    .course_details {
        min-height: 80vh; 
        padding: 2% 5% 5%;
    }
    .course_image_title_wrapper {
        height: 500px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
    }
    .image_wrapper {
        height: 100%;
    }
    img {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        object-position: 0 15%;
    }
    .overlay {
        background: linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.446), rgba(0, 0, 0, 0.842));
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
    .content {
        width: 70%;
        padding-left: 3%;
        padding-bottom: 3%;
    }
    .title {
        font-size: 220%;
        font-weight: 600;
        color: white;
        width: 70%;
    }
    .teacher_profile,
    .price_section {
        box-shadow: inset 0 0 2000px rgba(0, 0, 0, 0.4);
    }
    .teacher_profile {
        border-radius: 10px;
        margin-top: 2%;
        width: 20%;
        padding: 10px 5px;
    }
    .teacher_profile::before {
        filter: blur(10px);
    }
    .user_profile_min {
        color: white;
    }

    .price_section {
        margin-bottom: 3%;
        width: 20%;
        border-radius: 10px;
        padding: 2%;
    }
    .price_section.fixed {
        position: fixed;
        top: 70px;
        right: 5%;
    } 
    .mini_title {
        color: white;
        margin: 5%;
        margin-top: 0;
        font-weight: 700;
        display: none;
    }
    .price_section .ratings {        
        display: flex;
        color: white;
        width: 90%;
        margin: 0 auto;
        display: none;
    }
    .price_section .ratings > * {
        margin-right: 2%;
    }
    .price_section.fixed {
        background: rgb(26, 26, 26);
        border-radius: 0px 0px 15px 15px;
    } 
    .price_section.fixed .mini_title,
    .price_section.fixed .ratings {
        display: flex;
    }
    .price {
        color: white;
        font-weight: 600;
        font-size: 350%;
        margin-top: 10%;
        margin-bottom: 10%;
    }
    .btn_wrapper {
        height: 50px;
        margin-bottom: 2%;
    }
    .btn_wrapper button {
        border-radius: 5px;
    }
    .btn_wrapper .add_to_cart {
        border: 1px solid var(--blue-100);
        background: var(--blue-100);
        color: white;
    }
    .btn_wrapper .buy_now {
        border: 1px solid white;
        background: white;
        color: var(--blue-100);
    }
    
    .about_course {
        border-radius: 10px;
        margin-top: 5%;
        box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
        padding: 2% 5%;
    }
    .about_course .section_title {
        font-size: 90% !important;
    }
    .about_course .text_body {
        font-size: 110%;
        color: var(--paper-grey-600);
        line-height: 150%;
        font-weight: 500;
    }
</style>