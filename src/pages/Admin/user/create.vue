<template>
    <a-card title="Tạo mới tài khoản" style="width: 100%;">
        <div class="row">
            <div class="col-12 col-sm-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <a-avatar shape="square" :size="170">
                            <template #icon>
                                <img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/427867686_1372752096945385_1659626141759685045_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OzqAm-2jG7AQ7kNvgG2SiPM&_nc_ht=scontent.fsgn5-13.fna&oh=00_AYBuWaX_IuPMYtcKA8bUHNloUf9k81on8bYMYv9maWxCeA&oe=667DF8C7"
                                    alt="Avatar">
                            </template>
                        </a-avatar>
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
                        <a-select 
                        v-model:value="create.status_id" 
                        show-search 
                        placeholder="Tình trạng"
                        style="width: 100%" 
                        :options="Status_data" 
                        :filter-option="filterOption">
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
                        <a-input v-model:value="create.username" placeholder="Tên tài khoản" allow-clear />
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
                        <a-input v-model:value="create.name" placeholder="Họ và tên" allow-clear />
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
                        <a-input v-model:value="create.email" placeholder="Email" allow-clear />
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
                    <div class="col-12 col-sm-5">
                        <!-- <select class="form-control">
                            <option v-for="v in Department_data" :key="v.id" value="">{{ v.name }}</option>
                        </select> -->
                        <a-select v-model:value="create.department_id" show-search placeholder="Phòng ban"
                            style="width: 100%" :options="Department_data" :filter-option="filterOption">
                        </a-select>
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span class="text-nowrap">Mật khẩu:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password v-model:value="create.password" placeholder="Mật khẩu" />
                    </div>
                </div>
                <div class="row mt-2">
                    <!-- mobi col-12 còn destop 3 -->
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Xác nhận mật khẩu:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password v-model:value="create.re_password" placeholder="Xác nhận mật khẩu" />
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
                <button @click="onCreate" class="btn btn-primary ms-0 ms-sm-2 mt-2 mt-sm-0">Lưu</button>
            </div>
        </div>
    </a-card>
</template>
<script>

import { defineComponent, ref, reactive, toRefs } from 'vue';
import { MenuLocal } from "../../../store/MenuLocal.js";
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
// import { message } from 'ant-design-vue';
export default defineComponent({
    setup() {
        MenuLocal().onselectedKeys(["admin-user"]);
        
        //dùng ref trong trương hợp data đơn giản (load data ra client)
        const Status_data = ref([]);
        const Department_data = ref([]);
        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        const toast = useToast();
        const create = reactive({});
        const router = useRouter();
        const data = () => {
            axios
                .get("http://127.0.0.1:8000/api/users/create")
                .then((res) => {
                    Status_data.value = res.data.status;
                    Department_data.value = res.data.departments;
                }).catch((error) => {
                    console.log('1');
                    
                });
        };
        // const errors = ref({});
        const onCreate = () => {
            axios.post("http://127.0.0.1:8000/api/user", create)
            .then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message, 'Success');
                    //cần import userRouter để điều hướng
                    router.push({name: "admin-user"});
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
        //hàm chạy tự động
        data();
        //dùng toRefs khi muốn truy trập đến nhiều đối tượng trong reactive
        //ở trên hkoong có đối tượng trong create = reactive => không dùng

        return {
            Status_data,
            Department_data,
            filterOption,
            onCreate,
            toast,
            create
        }
    },

});

</script>
