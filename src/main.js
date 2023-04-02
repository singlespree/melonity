import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/assets/styles.css"; // Подключение глобальных стилей, если они есть

const app = createApp(App);
app.mount("#app");
