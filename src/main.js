import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "virtual:windi.css"; //Css导入
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; //小图标
import { router } from "./router";
const app = createApp(App);
//小图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(router);
app.mount("#app");
