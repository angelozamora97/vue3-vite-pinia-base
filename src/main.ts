import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import RestClient from "./services/axiosClient";
import router from "./router";

import PageLayout from "@/layouts/PageLayout.vue";
import SimpleLayout from "@/layouts/SimpleLayout.vue";
import "@/assets/css/style.css";

// Starting Service Base
new RestClient(import.meta.env.VITE_BASE_URL).createClient();

createApp(App)
  .use(createPinia())
  .use(router)
  .component("page-layout", PageLayout)
  .component("simple-layout", SimpleLayout)
  .mount("#app");
