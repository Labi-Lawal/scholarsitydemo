<template>
    <div 
        class="test_card" 
        @click="$emit('button-action', index)"
    >
        <div class="top">
            <div class="course_title_wrapper">
                <FontAwesomeIcon :icon="['fas', 'book-open']" class="icon" />
                <div class="course_title">{{ course }}</div>
            </div>
            <div 
                class="menu_option"
                @click="$emit('show-option-action', index)"
            >
                <FontAwesomeIcon :icon="['fas', 'ellipsis-v']" />
            </div>
        </div>

        <div class="test_title">{{ title }}</div>
        
        <div class="duration_wrapper">
            <FontAwesomeIcon :icon="['fas', 'clock']" class="icon" />
            <div class="duration_dets_wrapper">
                <div class="label">Duration</div>
                <div class="time">{{ duration }}</div>
            </div>
        </div>
        
        <div class="bottom">
            <div class="progress_indicator_wrapper">
                <ProgressIndicator
                    :showBar=true
                    :showPercentage=true
                    :percentage=progress
                />
            </div>
            <div class="test_metrics">
                <div class="student_images">
                    <div 
                        class="user_profile_wrapper"
                    >
                        <UserProfileMin :showDetails=false class="user_im" :size=30 />
                    </div>
                    <div class="user_profile_wrapper">
                        <UserProfileMin :showDetails=false :size=33 />
                    </div>
                </div>
                <div class="dets">
                    2 of 10 Students
                </div>
            </div>
        </div>
        
        <div 
            class="option_menu"
            v-if="isMenuVisible"
        >   
            <FontAwesomeIcon 
                :icon="['fas', 'times']" 
                class="cancel_icon" 
                @click="$emit('hide-option-action', index)"
            />

            <button class="edit_button">
                EDIT
            </button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ProgressIndicator from "@/components/ProgressIndicator.vue";
import UserProfileMin from "@/components/UserProfileMin.vue";

export default defineComponent ({
    name: 'test-card',
    props: ['index', 'title', 'course', 'duration', 'progress', 'isMenuVisible'],
    components: { ProgressIndicator, UserProfileMin },
    data(){
        return {  }
    }
});
</script>

<style scoped>
    .test_card {
        box-shadow: var(--shadow-200);
        padding: 4%;
        border-radius: 5px;
        height: 250px;
        position: relative;
        background: white;
    }
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10%;
    }
    .course_title_wrapper {
        display: flex;
    }
    .course_title_wrapper .icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        border-radius: 50%;
        color: var(--blue-100);
        background: #3079ee43;
    }
    .course_title {
        margin: auto 0;
        width: 85%;
        font-size: 90%;
        font-weight: 500;
        color: var(--paper-grey-600);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-clamp: 1;
    }
    .menu_option {
        display: flex;  
        align-items: center;
        width: 15%;
        height: 100%;
        color: var(--paper-grey-400);
        cursor: pointer;
        border-radius: 5px;
        justify-content: center;
    }

    .test_title {
        height: 28%;
        margin-top: 1%;
        color: var(--paper-grey-700); 
        font-weight: 500;
        font-size: 120%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .duration_wrapper {
        display: flex;
        align-items: center;
        height: 50px;
        margin-top: 1%;
    }
    .duration_wrapper .icon {
        color: var(--paper-grey-400);
        font-size: 90%;
    }
    .duration_wrapper .label {
        font-size: 80%;
        font-weight: 500;
        color: var(--paper-grey-600);
    }
    .duration_dets_wrapper {
        margin-left: 5px;
        height: 80%;
    }
    .duration_dets_wrapper .time {
        color: var(--paper-grey-800);
    }

    .bottom {
        position: absolute;
        background: rgb(244, 253, 245);
        bottom: 5%;
        height: 20%;
        width: 85%;
        padding: 6% 3.5%;
        border-radius: 15px;
    }
    .progress_indicator_wrapper {
        width: 100%;
        height: 60%;
    }
    .test_metrics {
        display: flex;
        align-items: center;
        /* margin-top: 5%; */
    }
    .test_metrics .student_images {
        display: flex;
    }
    .student_images .user_profile_wrapper {
        margin-right: -15%;
    }
    .user_profile_wrapper:deep .profile_image {
        border: 2px solid white !important;
    }
    .dets {
        color: var(--paper-grey-600);
        font-weight: 400;
        font-size: 95%;
    }
    .option_menu {
        position: absolute;
        background: white;
        opacity: 0.9;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .edit_button {
        width: 40%;
        height: 30px;
        border-radius: 25px;
        border: 1px solid var(--blue-100);
        background: var(--blue-100);
        color: white;
        font-weight: 600;
        cursor: pointer;
    }
    .cancel_icon {
        position: absolute;
        top: 5%;
        right: 5%;
        font-size: 130%;
        /* color: var(--paper-fe); */
    }
</style>