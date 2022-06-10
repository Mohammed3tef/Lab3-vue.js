import { createRouter, createWebHistory } from "vue-router";

import Main from "../mainComponent.vue";
import Student from "../App.vue";
import Modal from "../components/modalComponent.vue";
import About from "../components/aboutComponent.vue";
import Error from "../components/error.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/student", component: Student },
  { path: "/modal", component: Modal },
  { path: "/about", component: About },
  { path: "/:catchAll(.*)", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
