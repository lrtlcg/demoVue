import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/HelloWorld.vue";
import NotFound from "@/components/NotFound.vue";

//2.定义路由
const routes = [
  { path: "/", component: Home },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
//3.创建路由实例，并抛出
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
