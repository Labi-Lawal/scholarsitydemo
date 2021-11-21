<template>
    <router-link to="/dashboard">
        <div class="user_profile_min">
            <div class="profile_image">
                <img :src=source >
            </div>
            <div 
                :class="{ 
                    dets: true,
                    flex_label: !showRatings
                } " 
                v-if="showDetails"
            >
                <div class="name"> Jason Ma </div>
                <div class="ratings" v-if="showRatings">
                    <FontAwesomeIcon 
                        :icon="['fas', 'star']" 
                        v-for="index in 5" 
                        :key="index" 
                    />
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'user-profile-min',
    props: ['showDetails', 'showRatings'],
    data() {
        return {
            isSignedIn: this.$store.getters.isSignedIn,
            userRole: this.$store.getters.role,
            source: "https://res.cloudinary.com/labilawal/image/upload/v1634448089/f4sxdfzfyvvwgnalozbm.jpg"
        }
    }
});
</script>

<style scoped>
    .user_profile_min {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .user_profile_min .profile_image {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        overflow: hidden;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
    .dets {
        margin-left: 3%;
    }
    .flex_label {
        display: flex;
        justify-content: flex-end;
    }
    .name {
        margin-bottom: 2%;
    }
    .ratings {
        font-size: 90%;
    }
</style>