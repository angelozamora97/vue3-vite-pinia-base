import HomeView from "@/modules/pokemon/views/HomeView.vue";

export default {
  component: () =>
    import(
      /* webpackChunkName: "pokemon-layout" */ "@/modules/pokemon/layouts/PokemonLayout.vue"
    ),
  children: [
    {
      path: "home",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
        layout: "page-layout",
      },
    },
    {
      path: "",
      redirect: { name: "home" },
    },
  ],
};
