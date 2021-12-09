<template>
    <router-link to="/account">
        <div class="user_profile_min">
            <div 
                :class="{
                    profile_image: true,
                    max_size: (size==null) ?true :false 
                }"
                :style="{
                    height: size + 'px',
                    width: size + 'px'
                }"
            >
                <img :src=source >
            </div>
            <div 
                :class="{ 
                    dets: true,
                    flex_label: !showRatings
                } " 
                v-if="showDetails"
            >
                <div class="name"> {{ userName }} </div>
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
    props: ['showDetails', 'showRatings', 'size', 'details'],
    data() {
        var userName = '';

        if(this.details == '')
            userName = (this.$store.getters.userData) ?this.$store.getters.userData.fullname :'';
        else userName = this.details;
        
        return {
            isSignedIn: this.$store.getters.isSignedIn || '',
            userRole: this.$store.getters.role || '',
            userName,
            source: "https://res.cloudinary.com/labilawal/image/upload/v1634448089/f4sxdfzfyvvwgnalozbm.jpg"
        }
    },
});
</script>

<style scoped>
    .user_profile_min {
        height: 100%;
        width: max-content;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .user_profile_min .profile_image {
        border-radius: 50%;
        overflow: hidden;
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
    .dets {
        margin-left: 5px;
    }
    .flex_label {
        display: flex;
        justify-content: flex-end;
    }
    .name {
        margin-bottom: 2%;
        text-transform: capitalize;
    }
    .ratings {
        font-size: 90%;
    }
</style>