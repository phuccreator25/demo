import { createApp } from 'vue'
import { Drawer, 
    Button, 
    message, 
    List, 
    Menu,
    Card,
    Table,
    Avatar,
    Input,
    Select,
    Checkbox,
    Pagination,
    Modal,
    Upload
} 
from 'ant-design-vue';

import { createPinia } from 'pinia';

import App from './App.vue';
import 'ant-design-vue/dist/reset.css';

import router from './router/index.js';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
//cần phải import thêm 2 file dưới để sử dụng nhiều hơn các attribute của bostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import axios from 'axios'
window.axios = axios; // cho nó sử dụng toàn bộ trong project
// có thể gọi ở tất cả mọi ơi trong project

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { fab} from '@fortawesome/free-brands-svg-icons';
import { far} from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
const pinia = createPinia();

app.use(router);
app.use(Button);
app.use(Toast);
app.use(Select);
app.use(Pagination);
app.use(Drawer);
app.use(Avatar);
app.use(List);
app.use(Menu);
app.use(Modal);
app.use(Card);
app.use(Table);
app.use(Input);
app.use(Checkbox);
app.use(pinia);
app.use(Upload);

app.mount("#app");
app.config.globalProperties.$message = message;
