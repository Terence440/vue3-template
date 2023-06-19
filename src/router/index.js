import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "@/views/TestView.vue";
import GuideView from "@/views/GuideView.vue";
import AIView from "@/views/AIView.vue";
import DrugsView from "@/views/DrugView.vue";
import AllDrugsView from "@/views/AllDrugView.vue";

const routes = [
  {
    path: "/",
    name: "test",
    component: TestView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/guide",
    name: "guide",
    component: GuideView,
  },
  {
    path: "/drugs",
    name: "drugs",
    component: DrugsView,
  },
  {
    path: "/all",
    name: "all",
    component: AllDrugsView,
  },
  {
    path: "/ai",
    name: "ai",
    component: AIView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
