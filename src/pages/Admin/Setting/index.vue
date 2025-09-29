<template>
   Đây là trang setting
</template>
<script>
import {MenuLocal} from "../../../store/MenuLocal.js";
export default {
setup() {
MenuLocal().onselectedKeys(["admin-setting"]);
// khi cline truy caapjvaof URL cua Product
//thì store sẽ kích hoạt phương thức này với giá trị 
// là name của URL trong MenuLocal
 
},
}

</script>