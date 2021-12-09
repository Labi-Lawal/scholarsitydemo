<template>
    <router-link :to="`/course/` + courseid" class="course_card_wall">
    <div class="course_card">
        <div class="image_wrapper">
            <img src="../../assets/course-3.jpg">
        </div>
        <div class="details">
            <div class="title">
                {{ title }}
            </div>
            <div class="tutor">
                {{ tutor }}
            </div>
            <div class="ratings">
                <div class="avg_ratings">
                    {{ avgRatings }}
                </div>
                <div class="stars">
                    <font-awesome-icon 
                        :icon="['fas', 'star']" 
                        v-for="index in parseInt(avgRatings)" :key=index
                    />
                </div>
                <div class="total_ratings"> ({{ ratingsCount }}) </div>
            </div>
            <div class="price">
                ${{ price }}
            </div>
        </div>
    </div>
    </router-link>
</template> 

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    name: 'course-card',
    props: ['courseid', 'title', 'tutor', 'avgRatings', 'ratingsCount', 'price']
});
</script>

<style scoped>
*::selection {
    background: none;
}
.course_card_wall {
    margin-right: 2%;
}
.course_card {
    width: 100%;
    height: calc(100% - 30px);
    margin-top: 10px;
    margin-right: 3%;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 0 20px -2px rgb(20 23 28 / 10%);
    white-space: normal;
    display: inline-block;
}
.course_card:last-child {
    margin: 0;
}
.image_wrapper {
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
    height: 60%;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
}
.image_wrapper img {
    object-fit: cover;
}
.details {
    height: calc(40% - calc(5%));
    padding: 5px 1%;
}
.title {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 35px;
    margin-top: 3%;
    font-weight: 600;
    color: var(--paper-grey-900);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tutor {
    height: 15%;
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    color: var(--paper-grey-600);
}
.ratings {
    height: 15%;
    width: 100%;
    height: 15%;
}
.tutor {
    margin: 2% 0%;
    color: var(--paper-grey-700);
    font-size: 95%;
}
.ratings {
    display: flex;
    align-items: center;
}
.ratings > div {
    margin-right: 2%;
}
.avg_ratings {
    font-weight: 500;
}
.stars {
    font-size: 70%;
    color: var(--paper-grey-600);
}
.total_ratings {
    color: var(--paper-grey-600);
}
.price {
    border-top: 1px solid var(--paper-grey-300);
    height: 35%;
    font-size: 150%;
    display: flex;
    align-items: center;
    margin-top: 5%;
    font-weight: 600;
    color: var(--paper-grey-900);
}
</style>