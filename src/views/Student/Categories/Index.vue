<template>
    <div class="categories_page">
        
        <div class="page_head">
            <div class="bread_crumbs"> Home > Student > Categories </div>
            <div class="page_title"> Your Categories </div>
        </div>

        <div class="page_body">
          <div class="sub_nav">
            <router-link 
                v-for="(subNavItem, index) in subNav"
                :key="index"
                :to="'/student/categories/' + subNavItem.link"
                :class="{
                    inner: true,
                    active_route: (this.currentRouteIndex == index) ?true :false
                }"
                @click="routeClicked(subNavItem, index)"
            >
                {{ subNavItem.display }}
            </router-link>
          </div>
          <div class="page_body_content">
            <router-view />
          </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return { 
            subNav: [
                {
                    display: 'Courses',
                    link: 'courses'
                },
                {
                    display: 'Tests',
                    link: 'tests'
                },
                {
                    display: 'Contests',
                    link: 'contests'
                }
            ]
        }
    },
}
</script>

<style scoped>
.categories_page {
    margin-bottom: 5%;
}
.page_head {
    padding: 1% 0;
}
.bread_crumbs {
    font-size: 90%;
    color: var(--paper-grey-700);
}
.page_title {
    margin-top: 3%;
    font-size: 250%;
}
.sub_nav {
    display: flex;
    align-items: center;
    height: 30px;
    width: min-content;
}
.sub_nav * {
  padding-right: 20px;
  margin-right: 10px;
  color: var(--paper-grey-500);
}
.sub_nav *.router-link-active {
    border-bottom: 2px solid var(--blue-100);
    color: var(--blue-100);
    font-weight: 500;
}

.page_body_content {
  margin-top: 5%;
}
</style>