import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import CarPage from '../views/CarPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import DealerPage from '../views/DealerPage.vue'
import Manufacturer from '../views/Manufacturer.vue'


const routes = [
    {
        path: "/",
        name: "home",
        component: Home 
    },
    {
         path: "/about",
         name: "about",
         component: About
    },
    {
        path: "/car/:id",
        name: "car",
        component: CarPage,
        children: [
            {
                path: "dealer",
                component: DealerPage
            },
            {
                path: "manufacturer",
                component: Manufacturer
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        bane: "notFound",
        component: NotFoundPage
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router;
