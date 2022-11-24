<template>
<div class="container font-weight-light">
    <h4 class="mt-3 ">QUẢN LÝ VÉ XEM PHIM</h4>
    <div class="under-text"></div>
    <button type="button" class="color-text-title my-3 p-3">
        <router-link :to="{ name: 'pay-ticket'}" class="text-white text-decoration-none" link>
            TIẾP TỤC ĐẶT VÉ &ensp; <i class="fas fa-backspace"></i>
        </router-link>
    </button>
    <div class="row">
        <div class="col-7">
            <div  class="row border ml-0 my-2"  v-for="(ticket, index) in tickets" :key="index">
                <div class="col-4" v-if="user.displayName==ticket.username">
                    <img src="https://ak.jogurucdn.com/media/image/p25/place-2018-01-10-10-bf61e21d99dec06ee6db2c823f26dae0.jpg" alt="" width="200px" height="210px">
                </div>
                <div class="col-8 pl-4" v-if="user.displayName==ticket.username">
                    <p>Tên khách hàng: <span>{{ticket.username}}</span></p>
                    <h6 class="text-uppercase text-cinema">Tên Phim: {{ticket.title}}</h6>
                    <p>Tại Rạp: <span>{{ticket.cinema}}</span> | {{ticket.room}}</p>
                    <p>Thời Gian: {{ticket.date}} | {{ticket.hour}}</p>
                    <p>Vị trí ghế: {{ticket.seat}}</p>
                    <p>Gói Combo: {{ticket.combo}} </p>
                    <p>Số tiền đã thanh toán: <span>{{ticket.subtotal}}.000 VNĐ</span></p>
                    <button  class="border-cinema font-weight-light" data-toggle="modal" data-target="#exampleModal">HỦY ĐẶT VÉ</button>
                </div>  <!--@click="deleteTicket(ticket._id)"-->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                            <div class="d-flex justify-content-center mb-5">
                                <h5>Thông báo từ hệ thống</h5>
                            </div>
                            <div class="d-flex justify-content-center mb-2">
                                <img src="https://cdn.pixabay.com/photo/2021/02/24/20/38/cat-6047457_960_720.png" class="rounded-circle" width="100px">
                            </div>
                            <p class="text-center">Bạn có chắc muốn hủy vé không?</p>
                        </div>
                        <div class="p-3">
                            <button data-toggle="modal" data-target="#exampleModal" type="button" class="bg-cinema rounded font-weight-light w-100" @click="deleteTicket(ticket._id, index)">
                                Chấp Nhận
                            </button>                        
                        </div>
                      </div>
                    </div>
                </div>  
            </div>
        </div>
        <div class="col-5 ">
            <h5>SỰ KIỆN MỚI</h5>
            <div class="under-text"></div>
            <div class="d-flex justify-content-center" v-for="(event,index) in events" :key="index">
                <router-link :to="{name: 'event-detail', params: {id: event._id}}">
                    <img class="shadow-content mb-2" :src="`${event.img}`"  height="380px" v-if="index < events.length/count">
                </router-link>
            </div>
            <div class="d-flex justify-content-center">
                <button  class="border-cinema font-weight-light">XEM THÊM <i class="fas fa-long-arrow-alt-down"></i> </button>
            </div>
        </div>
    </div>
    <FooterView></FooterView> 
</div>
    
</template>
<script>
    import APITicket from "../../api/api_ticket"
    import APIEvent from "../../api/api_event"
    import firebase from 'firebase'
    import FooterView from '../../components/FooterView.vue'
    export default{     
        name: "TicketManager",
    data() {
        return {
            tickets: [],
            events: [],
            count: 3,
            user: null
        } 
    },
    methods: {
        tabId(e){
            this.id = e.target.value;
        }
        ,
        async deleteTicket(id, index){
            try{
                await APITicket.delete(id);
                this.tickets.splice(index, 1);
            }catch(e){
                console.log(e);
            }
        }
    },
    async created() {
        this.tickets = await APITicket.findAll();
        this.events = await APIEvent.findAll();
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
    components: { FooterView },
    }

</script>
<style>
.text-cinema{
    color: #f26B38;
}
</style>
