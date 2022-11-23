<template>
    <div class="container">
        <h4 class="mt-3 text-cinema text-center font-weight-light">QUẢN LÝ ĐẶT VÉ</h4>
        <div class="text-end my-4">          
            <input id="searchForm" type="text" v-model="searchValue" class="border border-dark p-2" placeholder="Tìm vé">
            <label for="" class="p-2 border border-dark"><i class="fas fa-search"></i></label>
        </div>
        <p class="text-danger">{{message}}</p>
        <table class="table  font-weight-light">
            <thead>
              <tr>
                <th scope="col">Mã vé</th>
                <th scope="col">Ngày đặt</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Nội dung</th>
                <th scope="col">Thiết lập</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, index) in searchOrder" :key="index">
                <td>{{order._id}}</td>
                <td>{{order.date}}</td>
                <td>{{order.username}}</td>
                <td><button class="btn-cinema hover-btn">Chi tiết</button></td>
                <td> 
                    <router-link :to="{name: 'edit-order', params: {id: order._id}}">
                        <button class="mr-5 text-primary hover-btn"><i class="fas fa-pen-nib"></i></button>
                    </router-link>
                    <button class="text-danger hover-btn"><i class="fas fa-trash-alt" @click="onDelete(order._id, index)"></i></button>
                </td>
              </tr>
            </tbody>
        </table>
        
    </div>
</template>
<script>
import APITicket from '../../api/api_ticket'
    export default{
        data(){
            return{
                orders:[],
                order:{},
                searchValue:'',
                message:''
            }
        },
        async created() {
        this.orders = await APITicket.findAll();
        const response = await APITicket.findOne(this.id);
        this.order = response;
        },
        methods:{
            async onDelete(id, index){
                try{
                    await APITicket.delete(id);
                    this.orders.splice(index, 1);
                    this.message="Đã thực hiện xóa thành công một vé"
                }catch(e){
                    alert(e);
                }
            },

        },
        computed: {
            searchOrder(){
                if(this.searchValue){
                return this.orders.filter((item)=>{
                    return this.searchValue.toLowerCase().split(' ').every(v => item.username.toLowerCase().includes(v))
                })
                }else{
                    return this.orders;
                }
            },
        }
    }

</script>

<style>

</style>