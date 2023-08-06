import { createApp } from "vue";
// import { createPinia } from "pinia";
// import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router/index";
import "./style.css";
const app = createApp(App);

// app.use(createPinia());
app.use(router);
// app.use(VueI18n);
app.mount("#app");
