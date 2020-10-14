import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BookApp from '@/views/BookApp.vue'
import BookDetails from '@/views/BookDetails.vue'
import AboutMe from '@/cmps/AboutMe.vue'
import BookAdd from '@/cmps/BookAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: About,
    children:[
      {
        path: '/about/aboutMe',
        component: AboutMe
      },
    ]
  },
  {
    path: '/book',
    component: BookApp,
    children:[
      {
        path: '/book/add',
        component: BookAdd
      },
    ]
  },
  {
    path: '/book/:id',
    component: BookDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
