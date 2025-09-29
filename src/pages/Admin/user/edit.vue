<template>
    <!-- <form @submit.prevent="update()"> -->
    <a-card title="Cập nhật tài khoản" style="width: 100%;">
        <div class="row">
            <div class="col-12 col-sm-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <!-- <a-avatar shape="square" :size="170">
                            <template #icon>
                                <img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/427867686_1372752096945385_1659626141759685045_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OzqAm-2jG7AQ7kNvgG2SiPM&_nc_ht=scontent.fsgn5-13.fna&oh=00_AYBuWaX_IuPMYtcKA8bUHNloUf9k81on8bYMYv9maWxCeA&oe=667DF8C7"
                                    alt="Avatar">
                            </template>
                        </a-avatar> -->
                        <Upload />
                        
                    </div>
                    <div class="col-12 mt-2 d-flex justify-content-center">
                        <button class="btn btn-primary">
                            <!-- me-2 là cách ra 2 đơn vị -->
                            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />
                            <span>Chọn ảnh</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8">
                <div class="row">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Tình trạng:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <!-- <select class="form-control">
                            <option v-for="v in Status_data" :key="v.id" value="">{{ v.name }}</option>
                        </select> -->
                        <a-select show-search placeholder="Tình trạng" v-model:value="status_id" :options="user_status"
                            :filter-option="filterOption" style="width: 100%">
                        </a-select>
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span class="text-nowrap">Tên tài khoản:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input v-model:value="username" placeholder="Tên tài khoản" allow-clear />
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span class="text-nowrap">Họ và tên:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input v-model:value="name" placeholder="Họ và tên" allow-clear />
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span class="text-nowrap">Email:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input v-model:value="email" placeholder="Email" allow-clear />
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Phòng ban:</span>
                        </label>
                    </div>
                    <div class="col-10 col-sm-4">
                        <!-- <select class="form-control">
                            <option v-for="v in Department_data" :key="v.id" value="">{{ v.name }}</option>
                        </select> -->
                        <a-select show-search placeholder="Phòng ban" v-model:value="department_id"
                            :options="department" :filter-option="filterOption" style="width: 100%">
                        </a-select>
                    </div>
                    <div class="col-2 col-sm-1">
                        <a-button @click="showModal" type="primary" shape="circle">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </a-button>
                        <a-modal v-model:visible="visible" title="Phòng ban" :footer="null" @ok="hideModal">
                            <hr>
                            <span class="mb-2 me-2 d-inline-block">
                                <div class="row">
                                    <div class="col-8 col-sm-7">
                                        <a-input-search class="me-2" v-model:value="value" placeholder="Tìm kiếm..."
                                            style="width: 200px" @search="onSearch" />
                                    </div>
                                    <div class="col-2 col-sm-2">
                                        <a-button @click="getDepartment()" type="primary">
                                            <font-awesome-icon :icon="['fas', 'repeat']" />
                                        </a-button>
                                    </div>
                                    <div class="col-2 col-sm-3">
                                        <a-button type="primary" style="width: 100%;">
                                            <font-awesome-icon :icon="['fas', 'add']" />
                                        </a-button>
                                    </div>
                                </div>

                            </span>

                            <span>
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <!-- nếu muốn 1 cột hiển thị trên destop ẩn trên mobile thì d-sm-flex d-none -->
                                                <th class="text-center align-middle">#</th>
                                                <th class="text-center align-middle">Phòng ban</th>
                                                <th class="text-center align-middle">Công cụ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(v, k) in getdepartment" :key="v.id">
                                                <td class="text-center align-middle">{{ k + 1 }}</td>
                                                <td class="text-center align-middle">{{ v.name }}</td>
                                                <td class="text-center align-middle">
                                                    <a-button class="me-2" type="primary">
                                                        <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                                                    </a-button>
                                                    <a-button @click="destroy(v.id)" type="primary" danger>
                                                        <font-awesome-icon :icon="['fas', 'trash']" />
                                                    </a-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </span>
                            <hr>
                        </a-modal>
                    </div>
                </div>

                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">

                    </div>
                    <div class="col-12 col-sm-5">
                        <a-checkbox v-model:checked="change_pass">
                            Đổi mật khẩu
                        </a-checkbox>
                    </div>
                </div>

                <div class="row mt-2" v-if="change_pass == true">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span class="text-nowrap">Mật khẩu:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password v-model:value="password" placeholder="Mật khẩu" />
                    </div>
                </div>
                <div class="row mt-2" v-if="change_pass == true">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Xác nhận mật khẩu:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password v-model:value="re_password" placeholder="Xác nhận mật khẩu" />
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end ">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Lần đăng nhập gần đây:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5 ">
                        <span>
                            <b>{{ login_at }}</b>
                        </span>
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Lần đổi mật khẩu gần đây:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <span>
                            <b>{{ change_password_at }}</b>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                <router-link :to="{ name: 'admin-user' }">
                    <button class="btn btn-outline-secondary me-0 me-sm-2" style="width: 100%;">
                        <span>
                            Hủy
                        </span>
                    </button>
                </router-link>
                <button @click="update()" class="btn btn-primary ms-0 ms-sm-2 mt-2 mt-sm-0">Lưu</button>
            </div>
        </div>
    </a-card>


    <!-- </form> -->
</template>
<script>
import { defineComponent, reactive, ref, toRefs, createVNode } from 'vue';
import { MenuLocal } from "../../../store/MenuLocal.js";
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { Modal, Input } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import Upload from '../../../components/Upload.vue';
export default defineComponent({
    components: {
            Upload
        },
    setup() {
        MenuLocal().onselectedKeys(['admin-user']);
        const toast = useToast();
        const route = useRoute();
        const router = useRouter();
        // trong ractive không thể gán biến trực tiếp như vue2 edit = res.data.data
        const edit = reactive({
            username: "",
            name: "",
            email: "",
            password: "",
            re_password: "",
            department_id: [],
            status_id: [],
            change_pass: false,
            login_at: "",
            change_password_at: "",
        });
       

        const user_status = ref([]);
        const department = ref([]);
        const getIDUSER = () => {
            axios
                // có biến phải dùng dấu ``
                .get(`http://127.0.0.1:8000/api/user/${route.params.id}/edit`)
                .then((res) => {
                    // console.log(res.data.edit);

                    edit.username = res.data.edit.username;
                    edit.name = res.data.edit.name;
                    edit.email = res.data.edit.email;
                    edit.department_id = res.data.edit.department_id;
                    edit.status_id = res.data.edit.status_id;
                    user_status.value = res.data.user_status;
                    department.value = res.data.department;

                    res.data.edit.login_at ? (edit.login_at = dayjs(res.data.edit.login_at).format('DD/MM/YY - HH:mm')) : edit.login_at = "Chưa có lượt đăng nhập";
                    res.data.edit.change_password_at ? (edit.change_password_at = dayjs(res.data.edit.change_password_at).format('DD/MM/YY - HH:mm:ss')) : edit.change_password_at = "Chưa có lượt đổi mật khẩu";

                    
                })
                .catch((res) => {
                    console.log('lỗi')
                });
        };
        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };

        //update
        const update = () => {
            axios
                .put(`http://127.0.0.1:8000/api/user/${route.params.id}`, edit)
                .then((res) => {
                    if (res.data.status) {
                        toast.success(res.data.message, 'Success');
                        router.push({ name: "admin-user" })
                    } else {
                        toast.error("Vui lòng thử lại", 'Error');
                    }

                })
                .catch((error) => {
                    console.log(error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        //lấy object errors trong log error.response.data
                        const { errors } = error.response.data;
                        //trích xuất {} errors =>1 mảng giá trị các message
                        //forech sẽ lặp và tách mảng đó thành nhiều mảng con
                        //mỗi mnagr con chứa 1 giá trị của request
                        Object.values(errors).forEach((errorMessages) => {
                            //các mảng con đó sẽ đuocjw foreach 1 lần nữa để lấy
                            //lấy các giá trị bên trong ra để đưa vào toast
                            errorMessages.forEach((errorMessage) => {
                                toast.error(errorMessage, 'Error');
                            });
                        });
                    } else {
                        console.error('Server error:', error);
                    }
                });
        };
        //modal phongban
        const visible = ref(false);
        const showModal = () => {
            visible.value = true;
        };
        const hideModal = () => {
            visible.value = false;
        };
        const getdepartment = ref([]);
        const value = ref(''); // chứa giá trị tìm kiếm
        const getDepartment = () => {
            axios
                .get('http://127.0.0.1:8000/api/department')
                .then((res) => {
                    getdepartment.value = res.data.data;
                    value.value = null; //xóa bỏ giá trị ở thẻ inp người dùng nhập
                });
        };
        getDepartment();
        //search

        const onSearch = searchValue => {
            value.value = searchValue;  // cập nhật giá trị tìm kiếm vào searchValue

            const filteredDepartments = getdepartment.value.filter(dept =>
                dept.name.toLowerCase().includes(value.value.toLowerCase())
            );
            //dept.name.toLowerCase()  (dept là tham số đại diện cho mỗi đối tuonưgj trong mảng getdepartment.value )
            // và chuyển nó thành chữ thường thông qua toLowerCase
            // và Kiểm rea xem chuỗi dept.name đã chuyển thành chữ thuongfw có chưa từ khóa tìm kiếm value.value trong 
            //includes(value.value.toLowerCase())
            //và sau đó gán getdepartment.value = filteredDepartments;
            getdepartment.value = filteredDepartments;
        };
        //destroy phòng ban 
        const destroy = (id) => {
      Modal.confirm({
        title: 'Xóa',
        icon: createVNode(ExclamationCircleOutlined),
        content: `Bạn có chắc chắn muốn xóa không ?`,
        okText: 'Xóa',
        onOk() {
          axios
            .delete(`http://127.0.0.1:8000/api/department/${id}`)
            .then((res) => {
                if(res.data.status) {
                    toastr.success(res.data.message, 'Success');
                    getDepartment();
                } else {
                    toastr.error("lỗi", 'Error');
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 500) {
            // Nếu là lỗi ràng buộc dữ liệu (Internal Server Error)
            toast.error('Dữ liệu đang được sử dụng', 'Error');
          } else {
            // Xử lý các trường hợp lỗi khác
            console.error('Lỗi:', error);
          }
            });
        },
        onCancel() {}
      });
        };

            getIDUSER();

            return {
                //dùng toRefs có thể truy cập thẳng vào câc đối tượng = value không cần edit.name,.. ...
                ...toRefs(edit, getdepartment),
                getIDUSER,
                user_status,
                department,
                filterOption,
                update,
                toast,
                router,
                visible,
                hideModal,
                confirm,
                showModal,
                value,
                onSearch,
                getDepartment,
                getdepartment,
                destroy,
              
            }
        }

    })
</script>