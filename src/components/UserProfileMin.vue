<template>
    <div class="user_profile_min">
        <div class="profile_image">
            <img :src=source >
        </div>
        <div class="dets" v-if="showDetails">
            <div class="name"> Jason Ma </div>
            <div class="ratings">
                <FontAwesomeIcon 
                    :icon="['fas', 'star']" 
                    v-for="index in 5" 
                    :key="index" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'user-profile-min',
    props: ['showDetails'],
    data() {
        return {
            isSignedIn: false,
            source: "https://res.cloudinary.com/labilawal/image/upload/v1634448089/f4sxdfzfyvvwgnalozbm.jpg"
        }
    },
    created() {
        this.isSignedIn = this.$store.getters.isSignedIn;
    },
});
</script>

<style>
    .user_profile_min {
        height: 100%;
        display: flex;
        align-items: center;
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
    .name {
        margin-bottom: 2%;
    }
    .ratings {
        font-size: 90%;
    }
</style>