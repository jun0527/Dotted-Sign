import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "DottedSign_Index",
      component: () => import("@/views/DottedSign_Index.vue"),
    },
  ],
});

export default router;
