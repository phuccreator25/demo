import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";

const routes =[...admin];

const router = createRouter({
    history : createWebHistory(), //sư rudnjg lịch sử của web  để quản lý điều hướng của trang web,
    routes
});

export default router;