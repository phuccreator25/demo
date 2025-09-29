<template>
  <div class="card">
    <div class="card-header">
      Tài khoản
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12 mb-2 d-flex justify-content-end">
          <router-link :to="{ name: 'admin-user-create' }">
            <button class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
          </router-link>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="text-center align-middle">#</th>
              <th class="text-center align-middle">Tài khoản</th>
              <th class="text-center align-middle">Họ tên</th>
              <th class="text-center align-middle">Phòng ban</th>
              <th class="text-center align-middle">Vai trò</th>
              <th class="text-center align-middle">Tình trạng</th>
              <th class="text-center align-middle">Công cụ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v, k) in Listuser" :key="v.id">
              <td class="text-center align-middle">{{ k + 1 }}</td>
              <td class="text-center align-middle">{{ v.username }}</td>
              <td class="text-center align-middle">{{ v.name }}</td>
              <td class="text-center align-middle">{{ v.department }}</td>
              <td class="text-center align-middle">{{ v.other }}</td>
              <td v-if="v.status_id == 1" class=" text-primary text-center align-middle">{{ v.status }}</td>
              <td v-else class="text-danger text-center align-middle">{{ v.status }}</td>
              <td class="text-center align-middle">
                <router-link :to="{ name: 'admin-user-update', params: { id: v.id } }">
                  <button class="btn btn-primary me-sm-2 me-none" @click="update = v">
                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                  </button>
                </router-link>
                <button @click="destroy(v.id)" class="btn btn-danger">
                  <font-awesome-icon :icon="['fas', 'trash-can-arrow-up']" />
                </button>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer text-end">
      <a-pagination
      v-model:current="currentPage"
      @change="handlePageChange"
      simple :total="totalPages"
    />
    </div>
  </div>


</template>
<script>
import { createVNode, defineComponent, reactive, ref, onMounted } from "vue";
import axios from "axios";
import { MenuLocal } from "../../../store/MenuLocal.js";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { useToast } from "vue-toastification";

export default defineComponent({
  setup() {
    MenuLocal().onselectedKeys(["admin-user"]);

    
        

    const Listuser = ref([{
          id: 1,
          username: "johndoe",
          name: "John Doe",
          department: "IT",
          other: "Admin",
          status_id: 1,
          status: "Active"
        },
        {
          id: 2,
          username: "janesmith",
          name: "Jane Smith",
          department: "HR",
          other: "Staff",
          status_id: 0,
          status: "Inactive"
        },
        {
          id: 3,
          username: "phucnguyen",
          name: "Phúc Nguyễn",
          department: "Finance",
          other: "Manager",
          status_id: 1,
          status: "Active"
        }]);
    const update = reactive({});
    const toast = useToast();
    const currentPage = ref(1);
    //giá trị thay đổi thì dungg let
    let totalPages = ref();

    const getUser = () => {
      axios
        .get("http://127.0.0.1:8000/api/users", {
          //làm cho khi truy cập vào thì sẽ mặc đinh là trang số currentPage.value này
          //khi truy cập api thì sẽ gửi tham số page lên 
          //dưới đây có giá trị laf 1 và server sẽ hiển thị gioa diện  current tương ứng
          params: {
            page: currentPage.value
          }
        })
        .then((res) => {
          Listuser.value = res.data.data; // Assuming data is stored in `data` property
          totalPages.value = res.data.last_page * 10; //lấy ố trang cuối cùng  *10 vì antdv quy định *10
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const destroy = (id) => {
      Modal.confirm({
        title: 'Xóa',
        icon: createVNode(ExclamationCircleOutlined),
        content: `Bạn có chắc chắn muốn xóa không ?`,
        okText: 'Xóa',
        onOk() {
          axios
            .delete(`http://127.0.0.1:8000/api/user/${id}`)
            .then((res) => {
              if (res.data.status) {
                toast.success(res.data.message, 'Success');
                totalPages.value = res.data.last_page;
                getUser();
              } else {
                toast.error("Vui lòng thử lại", 'Error');
              }
            })
            .catch((error) => {
              console.log('Lỗi:', error);
            });
        },
        onCancel() {}
      });
    };

    const handlePageChange = (newPage) => {
      currentPage.value = newPage; //mặc định sẽ là trang số 1
      getUser();//khi click vào thì giá tri currentPage sẽ tăng lên và sẽ load data trong curentPage tiếp theo ra
    };

    onMounted(() => {
      getUser();
    });
    // getUser();

    return {
      Listuser,
      update,
      destroy,
      toast,
      currentPage,
      totalPages,
      handlePageChange
    };
  }
});
</script>
