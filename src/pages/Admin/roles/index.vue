<template>
    Đây là trang Roles
 </template>
 <script>
 import {MenuLocal} from "../../../store/MenuLocal.js";
 export default {
    //khi tủy cập vao view thif setup sẽ tự động chạy
 setup() {
 MenuLocal().onselectedKeys(["admin-roles"]); // onselectedKeys(data) ở trong store
 // khi cline truy caapjvaof URL cua Product
 //thì store sẽ kích hoạt phương thức này với giá trị 
 // là name của URL trong MenuLocal
  
 },
 }
 
 </script>