<template>
    <section class="signout">
        <Header />
        <div class="signout_body">
            <div class="signout_body_inside">
                <div class="success_message_plain_text">
                    You've signed out successfully
                </div>
                <div class="download_text">
                    Download the app and compete on the go!
                </div>
                <div class="qr_code_scan_prompt">
                    <div class="message">
                        Scan the QR code to download the app 
                    </div>
                    <div class="code_frame">
                        <div class="code">

                        </div>
                        <div class="download_app_wrapper">
                            <DownloadApp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Header from '@/components/Header/Header.vue';
import DownloadApp from "@/components/DownloadApp.vue";
import Footer from '@/components/Footer/Footer.vue';

export default defineComponent({
    components: { Header, DownloadApp, Footer },
    data() {
        return { }
    },
    beforeCreate() {
        this.$store.dispatch('signuserout');
    }
});
</script>

<style scoped>
    .success_message_plain_text {
        color: green;
        font-weight: 500;
        font-size: 110%;
        padding: 5% 0 1%;
    }
    .download_text {
        font-weight: 700;
        font-size: 150%;
    }
    .signout_body {
        text-align: center;
    }
    .signout_body_inside {
    }
    .qr_code_scan_prompt {
        width: 25%;
        margin: 3% auto;
    }
    .qr_code_scan_prompt .message {
        color: var(--paper-grey-800);
        font-weight: 700;
        font-size: 110%;
    }
    .code_frame {
        border: 1px solid black;
        width: 70%;
        margin: 5% auto 0;
        text-align: center;
        padding: 4%;
    }
    .code {
        border: 1px solid var(--paper-grey-500);
        background: black;
        height: 200px;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 10%;
    }
    .download_app_wrapper {
        height: 40px;
        width: 80%;
        margin: 0 auto;
    }
</style>