import store from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=> import('../views/Auth/Register.vue'),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: ()=> import('../views/Auth/Signin.vue'),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/signout',
    name: 'SignOut',
    component: ()=> import('../views/Auth/Signout.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: ()=> import('../views/Course.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: ()=> import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    },
    children: [

      // STUDENT ROUTES
      // {
      //   path: 'categories', alias: '', name: 'Categories',
      //   component: ()=> import('../views/Home.vue')
      // },
      {
        path: 'analytics', alias: '', name: 'Analytics',
        component: ()=> import('../views/Student/Analytics.vue'),
        children: [
          {
            path: 'summary', alias: '', name: 'Summary',
            component: ()=> import('../components/Analytics/AnalyticsSummary.vue'),
          },
          {
            path: 'overall-statistics', name: 'Overall Statistics',
            component: ()=> import('../components/Analytics/OverallStatistics.vue'),
          },
          {
            path: 'advanced-analytics', name: 'Student Advanced Analytics',
            component: ()=> import('../components/Analytics/StudentAdvancedAnalytics.vue'),
          }
        ]
      },
      {
        path: 'compete-up',
        name: 'Compete Up',
        component: ()=> import('../views/Student/CompeteUp.vue'),
        children: [
          {
            path: '1-on-1', alias: '', name: '1On1',
            component: ()=> import('../components/CompeteUp/OneOnOne.vue'),
          },
          {
            path: 'advanced-analytics', name: 'CompeteUp Advanced Analytics',
            component: ()=> import('../components/Analytics/StudentAdvancedAnalytics.vue'),
          }
        ]
      },
      {
        path: 'contests',
        name: 'Contests',
        component: ()=> import('../views/Student/Contests.vue'),
        children: [
          {
            path: 'future-contests', alias: '', name: 'Future Contests',
            component: ()=> import('../components/Contests/FutureContests.vue'),
          },
          {
            path: 'past-contests', name: 'Past Contests',
            component: ()=> import('../components/Contests/PastContests.vue'),
          },
          {
            path: 'advanced-analytics', name: 'Contests Advanced Analytics',
            component: ()=> import('../components/Analytics/StudentAdvancedAnalytics.vue'),
          }
        ]
      },
      {
        path: 'wallet', name: 'Wallet',
        component: ()=> import('../views/Student/Wallet.vue'),
      },
      {
        path: 'store', name: 'Store',
        component: ()=> import('../views/Student/Store.vue')
      },
      {
        path: 'bulletin-board', name: 'Bulletin Board',
        component: ()=> import('../views/Student/BulletinBoard.vue')
      },

      // TEACHER ROUTES
      {
        path: 'create', name: 'Create',
        component: ()=> import('../views/Teacher/Create.vue'),
        children: [
          {
            path: 'general', alias: '', name: 'General',
            component: ()=> import('../components/Form/CreateNewTestForm.vue'),
          },
          {
            path: 'instructions', name: 'Instructions',
            component: ()=> import('../components/Form/InstructionsForm.vue'),
          },
          {
            path: 'add-questions', name: 'Add Questions',
            component: ()=> import('../components/Form/AddQuestions.vue'),
          },
          {
            path: 'review', name: 'Review',
            component: ()=> import('../components/Form/ReviewForm.vue'),
          },
          {
            path: 'publish', name: 'Publish',
            component: ()=> import('../components/Form/PublishForm.vue'),
          },
          {
            path: 'success', name: 'Publish Success',
            component: ()=> import('../components/messages/PublishSuccess.vue'),
          }
        ]
      },
      {
        path: 'analyse', name: 'Analyse',
        component: ()=> import('../views/Teacher/Analyse.vue'),
        children: [
          {
            path: 'select-test', alias: '', name: 'Select Test',
            component: ()=> import('../views/Teacher/analyse/SelectTest.vue'),
          },
          {
            path: 'overall-statistics', name: 'Analyse Statistics',
            component: ()=> import('../views/Teacher/analyse/OverallStatistics.vue'),
          },
          {
            path: 'student-level-statistics', name: 'Studeent Level Statistics',
            component: ()=> import('../views/Teacher/analyse/StudentLevelStatistics.vue'),
          }
        ]
      },
      {
        path: 'reports', name: 'Reports',
        component: ()=> import('../views/Teacher/Reports.vue'),
      },
      {
        path: 'wallet', name: 'Teacher Wallet',
        component: ()=> import('../views/Teacher/Wallet.vue'),
      },
      {
        path: 'student-list', name: 'Student List',
        component: ()=> import('../views/Teacher/StudentList.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.API_BASE_URL),
  routes
});

router.beforeEach((to, from, next)=> {
  if(to.matched.some(record=> record.meta.requiresAuth)) {
    if(store.getters.token != '') next();
    else next('/signin');
  }

  if(to.matched.some(record => record.meta.authRoute)) {
    if(store.getters.token != undefined) {
      console.log(store.getters.token);
      next('/dashboard');
    }
    else { 
      next();
    }
  }

  else next();
});

export default router
