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

            <div class="section_frame">
                <SectionTitle title="Description" class="section_title" />
                <div class="text_body">
                    {{ course.description }}
                </div>
            </div>

            <div class="section_frame">
                <SectionTitle title="Student Feedback" class="section_title" />
                <div class="section_sub_frame ratings">
                    <div class="avg_ratings">
                        <div class="digit">{{ course.avg_ratings }}</div>
                        <div class="stars">
                            <FontAwesomeIcon
                                :icon="['fas', 'star']"
                                v-for="index in 5"
                                :key=index
                            />
                        </div>
                        <div class="label">
                            Course Rating
                        </div>
                    </div>
                    <div class="ratings_details">
                        <div class="progress_indicator_wrapper">
                            <div class="bar_wrapper"></div>
                            <div class="rank">
                                <div class="stars">
                                    <FontAwesomeIcon
                                        :icon="['fas', 'star']"
                                        v-for="index in 5"
                                        :key=index
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="progress_indicator_wrapper">
                            <div class="bar_wrapper"></div>
                            <div class="rank">
                                <div class="stars">
                                    <FontAwesomeIcon
                                        :icon="['fas', 'star']"
                                        v-for="index in 5"
                                        :key=index
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="progress_indicator_wrapper">
                            <div class="bar_wrapper"></div>
                            <div class="rank">
                                <div class="stars">
                                    <FontAwesomeIcon
                                        :icon="['fas', 'star']"
                                        v-for="index in 5"
                                        :key=index
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="progress_indicator_wrapper">
                            <div class="bar_wrapper"></div>
                            <div class="rank">
                                <div class="stars">
                                    <FontAwesomeIcon
                                        :icon="['fas', 'star']"
                                        v-for="index in 5"
                                        :key=index
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="progress_indicator_wrapper">
                            <div class="bar_wrapper"></div>
                            <div class="rank">
                                <div class="stars">
                                    <FontAwesomeIcon
                                        :icon="['fas', 'star']"
                                        v-for="index in 5"
                                        :key=index
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section_sub_frame reviews">
                    <div class="sub_title">Reviews</div>
                    <div class="review_list_frame">
                        <ReviewCard 
                            v-for="(review, index) in course.reviews"
                            :review=review
                            :key=index
                        />
                    </div>
                </div>
            </div>

            <div class="more_courses_wrapper">
                <div class="more_courses_title">More Courses Like This</div>
                <SuggestedCourses 
                    :courses="courses"
                />
            </div>
        </section>
        <Footer />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import UserProfileMin from "@/components/UserProfileMin.vue";
import SectionTitle from '@/components/Title/SectionTitle.vue';
import ButtonPlainText from '@/components/buttons/ButtonPlainText.vue';
import ReviewCard from "@/components/Card/ReviewCard.vue";
import SuggestedCourses from "@/components/SuggestedCourses.vue";

export default defineComponent({
    components: { Header, Footer, UserProfileMin, SectionTitle, ButtonPlainText, ReviewCard, SuggestedCourses },
    data() {

        var course = {
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam orci elit, vel mollis purus volutpat facilisis. Nunc et facilisis mi. Vestibulum consequat bibendum orci ullamcorper bibendum. Nam consectetur, justo ac lobortis maximus, quam tortor tempor mi, nec tincidunt dolor felis at libero. Sed scelerisque nisi sit amet leo tristique porta. Mauris sed varius ipsum. Vivamus vulputate leo vel rutrum suscipit. Sed sed sapien a elit ultricies mattis. Vivamus at sem orci. Nam porttitor consectetur scelerisque. Donec egestas mi et consequat tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis risus ut lorem bibendum vulputate vitae eget risus. Nunc tempor leo et lorem maximus tempus. Aenean ullamcorper enim diam, vitae sagittis ex luctus vitae. Curabitur quis aliquet ipsum. Fusce vitae leo nec tortor laoreet semper. Nunc mollis sed nunc eget posuere. Aenean quis sem posuere, maximus urna non, vehicula nisi. Ut commodo lacus in faucibus lobortis. Aliquam erat volutpat. Sed suscipit, lectus quis tincidunt sodales, est tellus fermentum erat, eget volutpat quam nisi sit amet sapien.',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99,
            reviews: [
                {
                    name: 'jon doe',
                    ratings: 5,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non fermentum enim. Maecenas eu turpis in arcu iaculis fringilla nec a turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ornare nibh et est eleifend porttitor. Aliquam erat volutpat. Aenean in mauris sed lacus commodo laoreet ut at felis. Nullam id mauris turpis. Fusce cursus ipsum sem, at placerat eros dapibus ac.',
                    dateCreated: Date.now()
                },
                {
                    name: 'jon doe',
                    ratings: 5,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non fermentum enim. Maecenas eu turpis in arcu iaculis fringilla nec a turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ornare nibh et est eleifend porttitor. Aliquam erat volutpat. Aenean in mauris sed lacus commodo laoreet ut at felis. Nullam id mauris turpis. Fusce cursus ipsum sem, at placerat eros dapibus ac.',
                    dateCreated: Date.now()
                }
            ]
        },

        courses = [
            {
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99
            },
            {
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99
            },
            {
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99
            },
            {
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99
            },
            {
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99
            },{
            title: '2021 Complete Python Bootcamp From Zero to Hero in Python 2021 Complete Python Bootcamp From Zero to Hero in Python',
            tutor: 'Jose Portilla',
            ratingsCount: 52,
            avg_ratings: 4.8,
            price: 84.99
            }
        ];

        return {
            course,
            windowTop: 0,
            isFixed: false,
            courses
        }
    },
    methods: {
        handleOnSroll() {
            this.windowTop = window.top.scrollY;
            console.log(this.windowTop);

            if(this.windowTop >= 500) this.isFixed = true;
            else this.isFixed = false;

            if(this.windowTop >= 2600) this.isFixed = false;
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
        margin-bottom: 10%;
    }
    .price_section.fixed .price {
        margin-top: 10%;
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
    
    .section_frame {
        border-radius: 10px;
        margin-top: 5%;
        box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
        padding: 2% 5%;
    }
    .section_frame .section_title {
        font-size: 90% !important;
    }
    .section_frame .text_body {
        font-size: 110%;
        color: var(--paper-grey-600);
        line-height: 150%;
        font-weight: 500;
    }
    .section_sub_frame {
        margin: 5% 0;
    }
    .section_sub_frame.ratings{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70%;
    }
    .avg_ratings {
        width: 20%;
    }
    .avg_ratings .digit {
        font-size: 500%;
        font-weight: 700;
    }
    .ratings .stars {
        font-size: 140%;
    }
    .ratings .avg_ratings .label {
        margin: 4% 0;
        font-size: 12 0%;
        font-weight: 600;
    }
    .ratings_details {
        width: 70%;
        margin-left: auto;
    }
    .ratings_details .progress_indicator_wrapper {
        width: 100%;
        margin-bottom: 1%;
        display: flex;
        align-items: center;
    }
    .progress_indicator_wrapper .bar_wrapper {
        width: 70%;
        background: lightgrey;
        height: 10px;
    }
    .progress_indicator_wrapper .rank {
        margin-left: 10%;
    }
    .progress_indicator_wrapper .rank .stars {
        font-size: 110%;
    }
    .reviews {

    }
    .sub_title {
        font-weight: 600;
        font-size: 150%;
    }
    .review_list_frame {
        width: 70%;
    }

    .more_courses_wrapper {
        margin-top: 5%;
        width: 70%;
    }
    .more_courses_title {
        font-size: 160%;
        font-weight: 400;
    }
</style>
