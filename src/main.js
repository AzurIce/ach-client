import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import 'remixicon/fonts/remixicon.css'
import router from './router'
import store from './store'

// createApp(App).mount("#app");

createApp(App)
    .use(router)
    .use(store)
    // .use(pinia)
    .mount('#app')