import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/todolist",
    name: "todolist",
    component: () => import(/* webpackChunkName: "todolist" */ "../views/todolistView.vue"),
  },
] 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;