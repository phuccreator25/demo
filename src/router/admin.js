//quản  lý tất cả route của admin
const admin = [
    {

        path: "/admin",
        component: () => import("../layouts/admin.vue"),
    // thẻ router-view sẽ hiển thị cac URL con 
        children : [
            //Quản ly User
            {
                path: "user",
                name: "admin-user",
                component: () => import("../pages/Admin/user/index.vue")
            },
            {
                path: "user/create",
                name: "admin-user-create",
                component: () => import("../pages/Admin/user/create.vue")
            },
            {
                //bên btn click thì phải truyền id = params
                path: "user/:id/edit",
                name: "admin-user-update",
                component: () => import("../pages/Admin/user/edit.vue")
            },
            //Quản lý roles
            {
                path: "roles",
                name: "admin-roles",
                component: () => import("../pages/Admin/roles/index.vue")
            },
            //Quản lý Setting
            {
                path: "setting",
                name: "admin-setting",
                component: () => import("../pages/Admin/Setting/index.vue")
            },

            {
                path: "upload",
                name: "admin-upload",
                component: () => import("../components/Upload.vue")
            },
        ]
    }
]

export default admin;