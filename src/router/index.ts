import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import PokemonRouter from "@/modules/pokemon/router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/pokemon",
    ...PokemonRouter,
  },
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(
        /* webpackChunkName: "not-page-found"*/ "@/common/views/NotFoundPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_NAME),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { left: 0, top: 0, behavior: "smooth" };
  },
  routes,
});

router.afterEach((to) => {
  document.title = to.meta?.title + "" || "VueApp";
});

export default router;
