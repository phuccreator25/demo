<template>
  <!--1 trong 2 biến thay đổi thì component con thay đỏi thì conponents cha cũng thay đổi 
  v-model:openKeys="openKeys"
  v-model:selectedKeys="selectedKeys" -->
  <a-menu 
  v-model:openKeys="openKeys" 
  v-model:selectedKeys="selectedKeys" mode="inline">
    <a-menu-item key="admin-user">
      <router-link :to="{ name: 'admin-user' }" style="text-decoration: none;">
        <font-awesome-icon :icon="['far', 'user']" class="me-2" />
        <span>Tài khoản</span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-roles">
      <router-link :to="{ name: 'admin-roles' }" style="text-decoration: none;">
        <font-awesome-icon :icon="['fas', 'layer-group']" class="me-2" />
        <span>Roles</span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="admin-setting">
      <router-link :to="{ name: 'admin-setting' }" style="text-decoration: none;">
        <font-awesome-icon :icon="['fas', 'gear']" class="me-2" />
        <span>Cài đặt</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { defineComponent } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import { MenuLocal } from '../store/MenuLocal.js';
import { storeToRefs } from 'pinia';

export default defineComponent({
  //bắt buộc phải có setup để dùng composision API
  setup() {
    //dùng recative để tham chiếu đến các biến mà không cần phải load lại trang
    const store = MenuLocal();
    // console.log(store);
    
    return {
      ...storeToRefs(store)
      // 1 thư viện trong pinia có thể tham chiếu đến tất cả các đối tượng trong store ( selectedKeys: [],
      // openKeys: [],)
      //để cps thể sử dụng và đồng bộ các các component(mobile và Destop) mà không càn load
    };
  },
});
</script>