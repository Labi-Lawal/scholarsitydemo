<template>
    <div class="review_card" >
        <div class="user_profile_wrapper">
            <UserProfileMin 
                class="user_profile_min"
                :showDetails=false
            />
        </div>
        <div class="review_details">
            <div class="name">{{ review.name }}</div>
            <div class="stars">
                <FontAwesomeIcon 
                    v-for="index in review.ratings"
                    :key=index
                    :icon="['fas', 'star']"
                />
                <div class="date">
                    2 weeks ago 
                </div>
            </div>
            <div class="content">
                {{ review.content }}
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import UserProfileMin from "@/components/UserProfileMin.vue";

export default defineComponent({
    name: 'review-card',
    components: { UserProfileMin },
    props: ['review']
});
</script>

<style scoped>
    .review_card {
        padding: 2% 0;
        display: flex;
        align-items: flex-start;
        border-bottom: 1px solid lightgrey;
    }
    .review_card:last-child {
        border: none;
    }
    .user_profile_wrapper {
    }
    .review_details {
        width: 91%;
        margin-left: auto;
    }
    .review_details > div {
        margin-bottom: 1%;
    }
    .name {
        font-weight: 600;
        text-transform: capitalize;
        font-size: 120%;
    }
    .stars {
        display: flex;
    }
    .date {
        font-weight: 500;
        margin-left: 2%;
        color: grey;
    }
    .review_details .content {
        font-size: 110%;
    }
</style>