import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("./pages/home.vue")
    },
    {
        path: "/shop",
        name: "Shop",
        component: () => import("./pages/shop.vue")
    },
    {
        path: "/view",
        name: "View",
        component: () => import("./pages/view.vue")
    },
    {
        path: "/buy",
        name: "Buy",
        component: () => import("./pages/buy.vue")
    },
];

export default createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            // top: 0,
            behavior: 'smooth'
        }
    },
});
