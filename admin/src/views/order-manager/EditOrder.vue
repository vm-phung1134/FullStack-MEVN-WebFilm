<template>
    <div class="container font-weight-light">
        <div class="my-md-2 p-md-5">
           <form class="shadow-content p-4 font-label" @submit.prevent="updateOrder()">
                <div>
                    <h4 class="text-cinema text-center mt-md-1">CẬP NHẬT VÉ KHÁCH HÀNG</h4>
                    <div class="d-flex justify-content-center">
                        <img class="" src="https://pngimg.com/uploads/christmas/christmas_PNG17215.png" alt="" width="200px">
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Tên khách hàng</label>
                    <input v-model="order.username" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Tên phim</label>
                    <input v-model="order.title" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Rạp phim</label>
                    <input v-model="order.cinema" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Ngày đặt</label>
                    <input v-model="order.date" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Giờ đặt</label>
                    <input v-model="order.hour" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Gói combo</label>
                    <input v-model="order.combo" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Vị trí ghế</label>
                    <input v-model="order.seat" type="text" class="form-control">
                </div>
                <button type="submit" class="btn btn-cinema">Cập nhật order</button>
            </form> 
        </div>
        
    </div>
</template>
<script>
import APITicket from '../../api/api_ticket';
    export default {
        data: () => (
            {
                order:{
                    title: '',
                    cinema: '',
                    date: '',
                    hour: '',
                    combo: '',
                    seat: '',
                    subtotal: '',
                    username: ''
                }
            
        }),
        async created() {
            const response = await APITicket.findOne(this.$route.params.id);
            this.order = response;
        },
        methods: {
            async updateOrder(){
                try{
                    await APITicket.update(this.$route.params.id, this.order);
                    this.$router.push('/order-manager')
                    alert('Đã cập nhật thành công!!!');
                }catch(e){
                    console.log(e);
                }
            },
        }
    }
</script>
<style>
</style>