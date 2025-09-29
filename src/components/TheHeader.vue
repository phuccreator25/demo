<template>
    <div class="container-fuild">
        <div class="row text-white" style="background-color: green; padding: 1rem;">
            <!-- d-flex : trên điện thoại thid hiển thị ; d-sm-none : trên máy tính tắt (sm: là máy tính) -->
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click ="showDrawer()">
                  <font-awesome-icon :icon="['fas', 'list']" />
                </span>
            </div>
            <!-- align : cawn theo t=chieeuf ngang, justigy cawn theo docj -->
            <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/427867686_1372752096945385_1659626141759685045_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OzqAm-2jG7AQ7kNvgG2SiPM&_nc_ht=scontent.fsgn5-13.fna&oh=00_AYBuWaX_IuPMYtcKA8bUHNloUf9k81on8bYMYv9maWxCeA&oe=667DF8C7"
                    alt="Logo" height="32px" width="32px" class="ms-3 me-3">
                <span class="d-none d-sm-flex">
                    QUẢN TRỊ
                </span>
            </div>

            <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
                <span>Admin</span>
            </div>
            <div class="col-1 d-flex d-sm-none align-item-center justify-content-center">
                <span @click="showDrawerProduct()"> 
                  <font-awesome-icon :icon="['fas', 'users']" />
                </span>
            </div>

        </div>
    </div>

    <a-drawer
    v-model:visible="visible"
    title="DANH MỤC"
    placement="left"
  >
   <TheMenu/>
  </a-drawer>
  <a-drawer
    v-model:visible="visibleProduct"
    title="PRODUCT"
    placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
//import menu để dung cho giao diện Điện thoại 
//gioa dineej máy tính đã import trong giao diện chính amdin
import TheMenu from "../components/TheMenu.vue";
import { defineComponent, ref } from 'vue';
export default defineComponent({

  components: {
    TheMenu, 
    //để xử dụng TheMenu phải đưa vào components
  },

  setup() {
    const visible = ref(false);
    const visibleProduct = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };
    const showDrawerProduct = () => {
      visibleProduct.value = true;
    };
    return {
      visible,
      visibleProduct,
      showDrawer,
      showDrawerProduct,
    };
  },
});
</script>
<!-- Các thành phần trong header của trang admin sau đó import vào layouts admin -->