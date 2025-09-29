import { defineStore } from "pinia";
//Mỗi store có 1 id duy nhất
export const MenuLocal = defineStore("MenuId", {
  state: () => ({  
    selectedKeys: [],
    openKeys: [],
  }),
  actions: {  
    //on là funtion cái này tự quy định theo chuẩn cho dễ phân biệt
    onselectedKeys(data) {
      this.selectedKeys = data;
    },
    // 2 data hoàn toàn riêng biệt nhau
    onopenKeys(data) {
        this.openKeys = data;
    },
  },
});
