<template>
    <div class="user_profile_min">
        <div class="profile_image">
            <img :src=source >
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'user-profile-min',
    props: ['authenticated'],
    data() {
        return {
            source: "https://res.cloudinary.com/labilawal/image/upload/v1634448089/f4sxdfzfyvvwgnalozbm.jpg"
        }
    }
});
</script>

<style>
    .user_profile_min {
        height: 100%;
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
</style>