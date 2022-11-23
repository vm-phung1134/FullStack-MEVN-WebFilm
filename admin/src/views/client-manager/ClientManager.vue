<template>
    <div class="container">
        <h4 class="mt-3 text-cinema text-center font-weight-light">QUẢN LÝ THÀNH VIÊN</h4>
        <div class="text-end my-4">          
            <input id="searchForm" type="text" v-model="searchValue" class="border border-dark p-2" placeholder="Tìm thành viên">
            <label for="" class="p-2 border border-dark"><i class="fas fa-search"></i></label>
        </div>
        <p class="text-danger">{{message}}</p>
        <table class="table  font-weight-light">
            <thead>
              <tr>
                <th scope="col">Client ID</th>
                <th scope="col">Tên Thành viên</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Thiết lập</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(client, index) in searchClient" :key="index">
                <td>{{client._id}}</td>
                <td>{{client.username}}</td>
                <td>{{client.email}}</td>
                <td>{{client.password}}</td>
                <td class="text-center">
                    <button class="text-danger hover-btn"><i class="fas fa-trash-alt" @click="onDelete(client._id, index)"></i></button>
                </td>

              </tr>
            </tbody>
          </table>
    </div>
</template>
<script>
import APIClient from '../../api/api_client'
    export default{
        data(){
            return{
                clients:[],
                searchValue:'',
                message:''
            }
        },
        async created() {
        this.clients = await APIClient.findAll();
        },
        methods:{
            async onDelete(id, index){
                try{
                    await APIClient.delete(id);
                    this.clients.splice(index, 1);
                    this.message="Đã thực hiện xóa thành công 1 thành viên"
                }catch(e){
                    alert(e);
                }
            },

        },
        computed: {
            searchClient(){
                if(this.searchValue){
                return this.clients.filter((item)=>{
                    return this.searchValue.toLowerCase().split(' ').every(v => item.username.toLowerCase().includes(v))
                })
                }else{
                    return this.clients;
                }
            },
        }
    }

</script>

<style>

</style>