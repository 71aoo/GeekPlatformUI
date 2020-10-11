import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import("../views/Layout.vue")
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import("../views/Layout.vue"),
    children: [
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
        path: '/userDetail',
        name: 'userDetail',
        component: () => import("../views/user/userDetail")
      },
      {
        path: '/teamDetail/:id',
        name: 'teamDetail',
        component: () => import("../views/team/teamDetail")
      },
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
