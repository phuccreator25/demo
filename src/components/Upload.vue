<template>
    <span role="button" @click="selectFiles">Choose</span>
    <input type="file" name="file" class="file" multiple ref="fileInput" @change="onFileSelect" style="display: none;">
    <div class="image" v-for="(v, k) in images" :key="k">
        <img :src="v.url" alt="" style="width: 100px; height: 100px;">
    </div>
    <!-- khi click sẽ foreach mảng images ra để upload lên theo từng file -->
     <!-- image đại diện cho mỗi phần tử trong images -->
    <button @click="images.forEach(image => uploadFile(image.file))" class="btn btn-danger me-5">Upload</button>

    <div v-for ="(v, k) in data" :key="v.id">
      <img class="me-2" style="width: 100px; height: 100px;" v-bind:src="v.image" alt="">
      <button @click="del(v.id)" class="btn btn-danger">Delete</button>
      <button @click="upd(v.id)" class="btn btn-success">Update</button>
    </div>
</template>
<script>
import { defineComponent, ref, toRefs } from 'vue';
import { useToast } from 'vue-toastification';
export default defineComponent({
  setup() {
    const fileInput = ref(null);
    const images = ref([]);
    const data = ref([]);
    const toats = useToast();
    const selectFiles = () => {
      //khi click thẻ span thì sẻ kich hoạt thẻ input = fileInput truyền vào hàm onFileSelect
      fileInput.value.click();
    };
    
//khi dùng @change thì nó sẽ tự động truyền đầu vào onFileSelect = (event)
//trong trường hợp này đầu vào

    const onFileSelect = (event) => {
      const files = Array.from(event.target.files); // event dùng target tham chiếu đến thẻ input dùng files vì type là file và chuyển thành Aray
      files.forEach(file => { //file là tên biến tự đặt để đại diện có mỗi tệp trong files
        //Kiểm tra xem tệp có bắt đầu là imgae không file.type.startsWith("image")
        //!images.value.some(e => e.name === file.name) kiểm tra xem có file nào trùng tên không
        //Ban đầu images sẽ rỗng và file đầu tiên sẽ đucojw thêm vào
        //tiếp theo đó khi chọn file thứ 2 sẽ kiểm tra xem file 1 có trùng không 
        // dùng some để lặp qua từng phần tử trong mảng 
        //so sán v.nmae trong images với file.name hiện tại đang chọn
        if (file.type.startsWith("image") && !images.value.some(v => v.name === file.name)) {
          images.value.push({ // sau đó thêm vào imgaes dùng để show ra trước khi upload
            name: file.name,
            url: URL.createObjectURL(file), //dùng để tạo 1 URL tạm thời để hiển thị hình ảnh trước
            //mà không cần phải tải lên sever
            file // lưu trữ tệp gốc để upload lên sever
          });
        }
        console.log(images.value);
      });
    };


    const uploadFile = (file) => {
      const formData = new FormData(); // Dùng để xây dựng cặp k-value thôgn dụng trong build FILE
      // append trong formdata để thêm cặp khóa giá trị ( khóa file và value file)
      formData.append('file', file);

      console.log([...formData]); // Log để xem nội dung
      
      axios.post('http://127.0.0.1:8000/api/upload', formData)
      .then(response => {
        getdata();
          console.log(response.data);
      })
      .catch(error => {
          console.error(error);
      });
    };

    const getdata = () => {
      axios
        .get('http://127.0.0.1:8000/api/upload')
        .then((res) => {
          data.value = res.data.data;
          console.log(data.value);
        })
        .catch(error => {
          console.error(error);
      });;
    };

    const del = (id) => {
      axios
        .delete(`http://127.0.0.1:8000/api/upload/${id}`)
        .then((res) => {
        if(res.data.status) {
          toats.success('Dã xoa', 'Success');
          getdata();
        } else {
          toats.error('Chua xoa', 'Error');
        }
        })
    };


    //update
    const upd = (id) => {
      axios
        .put(`http://127.0.0.1:8000/api/upload/${id}`)
        .then((res) => {
          if(res.data.status) {
          toats.success('Dã cap nhat', 'Success');
          getdata();
        } else {
          toats.error('Chua update', 'Error');
        }
        })
        .catch((res) => {
          $.each(res.response.data.errors, function(k, v) {
            toastr.error(v[0], 'Error');
          });
        });
    }

  


    
    getdata();

    return {
      fileInput,
      images,
      selectFiles,
      onFileSelect,
      uploadFile,
      data,
      getdata,
      toats,
      del,
      upd,
     
    };
  },
});

</script>