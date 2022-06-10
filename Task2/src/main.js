import { createApp } from "vue";

import Header from "./components/headerComponent.vue";
import router from "./routers/routers";

createApp(Header).use(router).mount("#app");
