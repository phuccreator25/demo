<template>
      <TheHeader />
      <div class="container-fluid mt-3">
            <div class="row">
                  <!-- sm-3 là hiển thị trên màn hinhd máy tinhs là 3 phầnn -->
                  <div class="col-sm-3 d-none d-sm-flex">
                        <a-list bordered style="width: 100%;">
                              <template #header>
                                    <div>Cài đặt</div>
                              </template>
                              <TheMenu/>
                        </a-list>
                  </div>
                  <div class="col-sm-9">
                        <router-view></router-view>
                  </div>
            </div>
      </div>
      <!-- <router-view></router-view> -->
</template>
<script>
import TheHeader from "../components/TheHeader.vue" // 2 dấu chấm -> đi ra khỏi layouts và truy xuất vào components
import TheMenu from "../components/TheMenu.vue"
export default {
      components: {
            TheHeader,
            TheMenu
      }
}
//chuứa tất cả các component luôn luôn hiển thị trong admin như header menu hoặc footer
</script>
