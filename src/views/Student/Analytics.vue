<template>
    <section class="analytics_body">
        <router-view />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
      return {
        navlist: [
            {
                title: 'summary',
                link: '/analytics/summary'
            },
            {
                title: 'overall statistics',
                link: '/analytics/overall-statistics'
            },
            {
                title: 'advanced analytics',
                link: '/analytics/advanced-analytics'
            }
        ]
      }
    }
});
</script>

<style scoped>
.analytics_body {
    padding: 3%;
    width: 94%;
    margin: 0 auto;
}
</style>