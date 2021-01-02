import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'
import Question from '../views/Question.vue'
import Consultation from '../views/Consultation.vue'
import Confirm from '../views/Confirm.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Information',
    component: Information
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: Consultation
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
