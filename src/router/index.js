import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetail from "../views/EventDetail.vue"
import EventCreate from "../views/EventCreate.vue"

import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Events",
    component: EventList,
  },
  {
    path: "/events/:id",
    name: "EventDetail",
    component: EventDetail,
    props: true
  },
  {
    path: "/events/create",
    name: "EventCreate",
    component: EventCreate,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
