import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Index',
  //   component: () => import("../components/index/index.vue")
  // },
  {
    path: '/',
    name: 'Layout',
    component: () => import("../views/Layout.vue"),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import("../components/index/index.vue")
      },
      {
        path: '/login',
        name: 'login',
        component: () => import("../components/login/login.vue")
      },
      {
        path: '/register',
        name: 'register',
        component: () => import("../components/register/register.vue")
      },
      {
        path: '/challenges/category/:id',
        name: 'challenges',
        component: () => import("../views/challenges/challenges.vue")
      },
      {
        path: '/announcements',
        name: 'announcements',
        component: () => import("../components/Announcements/announcements.vue")
      },
      {
        path: '/users',
        name: 'users',
        component: () => import("../views/user/userList")
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import("../views/user/profile")
      },
      {
        path: '/team',
        name: 'team',
        component: () => import("../views/team/teamList")
      },
      {
        path: '/teams',
        name: 'teams',
        component: () => import("../views/team/teamInfo")
      },
      {
        path: '/leaderboard',
        name: 'leaderboard',
        component: () => import("../views/leaderboard/leaderboard.vue")
      },
      {
        path: '/userDetail/:id',
        name: 'userDetail',
        component: () => import("../views/user/userDetail")
      },
      {
        path: '/teamDetail/:id',
        name: 'teamDetail',
        component: () => import("../views/team/teamDetail")
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import("../views/logout")

      }
    ]

  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next) => {

  if (to.path == '/login' || to.path == '/register' || to.path == '/users' || to.path == '/team' || to.path == '/') {
    return next();
  }

  const tokenStr = window.sessionStorage.getItem('ISLOGIN');

  if (!tokenStr) {

    return next('/login')

  }
  next();

});

export default router
