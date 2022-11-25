<template>
<div class="container font-weight-light">
    <h5 class="mt-3">ĐẶT VÉ XEM PHIM</h5>
    <div class="under-text"></div>
    <button type="button" class="color-text-title my-3 p-3" v-if="user!=null">
        <router-link :to="{ name: 'ticket-manager'}" class="text-white text-decoration-none" link>
            QUẢN LÝ ĐẶT VÉ &ensp; <i class="fas fa-wallet"></i>
        </router-link>
    </button>
    <form @submit.prevent="submit()">
        <div class="row">
            <div class="col">
                <p class="p-2 color-text-title text-center mb-0">LỰA CHỌN TÊN PHIM &ensp; <i class="fas fa-caret-down"></i></p>
                        <!--changtabs1 nhan lay gia tri thay doi -->
                <select @change="changeTabs1"  class="form-select col border border-dark" aria-label="Default select example">
                    <option selected disabled class="text-center">_______________________________________</option>
                    <option  :value="film.name" v-for="(film,index) in films" :key="index">{{film.title}} - {{film.name}}</option>
                </select>
            </div>
            <!-- lang nghe khi nao changTabs1 thay doi thi render ra -->
            <div class="col" v-if="tabSelect1!='null'">
                <p class="p-2 color-text-title text-center mb-0">LỰA CHỌN RẠP CHIẾU &ensp; <i class="fas fa-caret-down"></i></p>
                    <!--changtabs2 nhan lay gia tri thay doi -->
                <select  @change="changeTabs2" class="form-select col border border-dark" aria-label="Default select example">
                    <option selected disabled class="text-center">_______________________________________</option>
                    <option :value="cinema.name" v-for="(cinema,index) in cinemas" :key="index">{{cinema.name}}</option>
                </select>
            </div>
        </div>
        <!---------------------------------lấy suất chiếu-------------------->
    <div v-for="(cinema,index0) in cinemas" :key="index0">
        <div v-if="tabSelect2==cinema.name"> <!--truong hop tu uong voi changtabs2 thay doi -->
            <p class="bg-cinema text-white mb-3">CHỌN SUẤT CHIẾU</p>
            <div class="row border border-dark mx-0 p-3 mb-2">
                <div class="col">
                    <div class="mx-4">
                    <p class="p-1 color-text-title text-center mb-0 ">CHỌN NGÀY CHIẾU &ensp; <i class="fas fa-caret-down"></i></p>
                    <select @change="changeDate" class="form-select col border border-dark" aria-label="Default select example">
                        <option selected disabled class="text-center">_______________________________________</option>
                        <option  :value="session.date" v-for="(session,index1) in sessions" :key="index1" >{{session.date}}</option>
                    </select>  
                    </div>
                    
                </div>
                <div class="col" >
                    <p>Suất Chiếu Tại Rạp:</p>
                    <div v-for="(film,index3) in films" :key="index3" >
                        <div v-if="tabSelect1==film.name && tabDate!='null'"><!--in danh sach phien hours bi rang buoc boi khi chon phim-->
                           <div class="form-check-inline"  @change="changeTabs3" v-for="(hour,index4) in film.hours" :key="index4">
                                <label class="form-check-label  btn btn-outline-dark mx-1" @click="$event.target.classList.toggle('active')">
                                <input type="radio" class="form-check-input" :value="hour.hrs" name="optradio" hidden>{{hour.hrs}}               
                                </label>
                            </div>  
                        </div>                      
                    </div>  
                </div>
            </div>
        </div>
    </div>
        <!--dat cho-->
        <div v-if="tabSelect3!='null'"> 
            <p class="bg-cinema text-white mb-3">CHỌN VỊ TRÍ GHẾ</p>
            <div class="row border border-dark mx-0 p-3 mb-2 w-50 d-flex justify-content-center">
                <div class="form-check-inline mb-1" v-for="seat in seats" :key="seat._id">
                    <div v-if="seat.status=='còn chỗ'">
                        <label class="form-check-label  btn btn-outline-dark" @click="$event.target.classList.toggle('active')">
                        <input type="radio" class="form-check-input" name="optradio" :value="seat.name" v-model="getSeat" hidden>{{seat.name}}               
                        </label>        
                    </div>
                </div>
            </div>
        </div>
        <!--Combo-->
    <div class="row mt-2" v-if="tabSelect3!='null'">
        <div class="col-md-7 col-12">
            <h5>GÓI COMBO ĐỒ ĂN - THỨC UỐNG</h5>
            <div @change="changeTabs4" v-for="combo in combos" :key="combo._id">
                <label class="form-check-label border border-dark btn btn-light col" >
                    <input :value="combo.title" type="radio" class="form-check-input" name="optradio" hidden>
                        <h6 class="mt-5">{{combo.title}}</h6>
                        <div class="mb-1">
                            <img :src="`${combo.image}`" alt="" width="100">
                        </div>
                        <p >{{combo.name}}</p>
                        <p class="text-danger">Giá: {{combo.price}}.000 VNĐ</p>
                </label>
            </div>      
        </div>
        <!--Vé-->
        <div class="col-12 col-md-5">
            <div class="bg-light shadow-content p-4 mx-lg-5">
                <p><span>Tên khách hàng: </span>{{user.displayName}} </p>
                <h6 class="text-uppercase"><span>Tên Phim: </span> {{tabSelect1}}</h6>
                <small class="text-danger mb-1">(*) Phim dành cho khán giả từ 13 tuổi trở lên</small>
                <p><span>Suất Chiếu: </span> {{tabSelect3}} <small>AM | PM</small></p>
                <div v-for="(cinema, index) in cinemas" :key="index">
                  <p v-if="tabSelect2==cinema.name"><span>Tại Rạp: </span>{{cinema.name}} | {{ rm = rooms[random()].name}}</p>  
                </div>
                <p><span>Ngày chiếu: </span>{{tabDate}}</p>
                <p class="mt-3"><span>Giá Vé: </span>  {{price}}.000 VNĐ</p>
                <p><span>Combo: </span>{{tabSelect4}}  </p>
                <p><span>Vị Trí Ghế:</span> {{getSeat}}</p>
                <h5 class="text-primary">Tổng Phí: {{subtotal = price + comBo()}}.000 VNĐ</h5>

                <div class="d-flex row justify-content-end" v-if="user!=null">
                    <div class="col-8">
                        <p>Chọn hình thức thanh toán</p>
                        <select v-model="getCheckout" class="form-control text-dark focus-btn border border-dark">
                        <option v-for="(checkout,index) in checkouts" :key="index">{{checkout.name}}</option>
                        </select>
                    </div>
                    <div class="col" v-if="getCheckout!=''">
                       <button  class="border-cinema-router text-white" data-toggle="modal" data-target="#exampleModal">
                        ĐẶT VÉ
                        </button>  
                    </div>
                    
                </div>
                <!--@click="createdTicket"-->
                <div class="d-flex justify-content-end" v-else-if="user==null">
                    <button @click="logInUser()"  class="border-cinema-router text-white" data-toggle="modal" data-target="#exampleModal">
                        ĐĂNG NHẬP
                    </button> 
                </div>
            </div>
            <!--Model-->
            <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-body p-5">
                        <div class="row" v-for="(checkout,index) in checkouts" :key="index">
                            <div class="col-7" v-if="checkout.name == getCheckout">
                                <div class="mb-4">
                                    <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" width="100px">
                                    <h4>Thanh toán trực tuyến - {{checkout.name}}</h4>   
                                </div>
                                <form>
                                    <div class="form-group row d-flex align-items-center">
                                        <label class="col-sm-4  col-form-label">Mã Thẻ</label>
                                        <div class="col-sm-8">
                                          <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="form-group row d-flex align-items-center">
                                        <label class="col-sm-4  col-form-label">Số tài khoản</label>
                                        <div class="col-sm-8">
                                          <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="form-group row d-flex align-items-center">
                                      <label class="col-sm-4  col-form-label">Tên Tài Khoản</label>
                                      <div class="col-sm-8">
                                        <input type="text" class="form-control" >
                                    </div>
                                    </div>
                                    <div class="form-group row d-flex align-items-center">
                                        <label  class="col-sm-3  col-form-label ">Gia Hạn</label>
                                        <div class="col-sm-4">
                                        <input type="text" class="form-control" placeholder="MM/YYYY">
                                        </div>
                                        <label  class="col-sm-2 text-center col-form-label">CVC</label>
                                        <div class="col-sm-3">
                                            <input type="text" class="form-control" placeholder="123">
                                        </div>
                                    </div>
                                    <div class="form-group row d-flex align-items-center">
                                        <label class="col-sm-4  col-form-label">Mã xác nhận</label>
                                        <div class="col-sm-8">
                                          <input type="text" class="form-control" >
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <button class="text-white bg-cinema btn w-100"  data-toggle="modal" data-target="#exampleModal" @click="createdTicket()">Thanh toán</button>
                                    </div>
                                </form>  
                            </div>
                            <div class="col"  v-if="checkout.name == getCheckout">
                                <div class="d-flex justify-content-center">
                                    <img :src="`${checkout.image}`" width="260px">
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </form>
</div>
</template>

<script>
    import firebase from "firebase"
    import API from "../../api/api_film"
    import APITicket from "../../api/api_ticket"
    import APISeat from "../../api/api_seat"
    import APICinema from "../../api/api_cinema"
    import APISession from "../../api/api_session"
    import APIRoom from "../../api/api_room"
    import APICombo from "../../api/api_combo"
    import APICheckout from "../../api/api_checkout"
    //import {required} from '@vuelidate/validators'
    export default{     
        name: "PayTicketView",
    data() {
        return {
            films: [],
            cinemas: [],
            //phien chieu rap thu 1
            sessions: [],
            rooms:[],
            combos:[],
            //phien chieu rap thu 2
            seats:[],
            checkouts:[],
            getSeat: '',
            getCheckout: '',
            tabSelect1: "null", // lay ten phim
            tabSelect2: "null", // lay suat chieu cua rap
            tabSelect3: "null", // lay gio 
            tabSelect4: "", // lay combo
            tabDate: "null", // lay ngay
            price: 79, // gan gia tri gia ve
            combo: 0,
            message:"", // in thong bao
            subtotal: 0,
            rm:'',
            user: null
        };
    },
    async created() {
        this.films = await API.findAll();
        this.seats = await APISeat.findAll();
        this.cinemas = await APICinema.findAll();
        this.sessions= await APISession.findAll();
        this.rooms= await APIRoom.findAll();
        this.combos= await APICombo.findAll();
        this.checkouts= await APICheckout.findAll();
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
    methods: {
        // cac ham lay gia tri
        changeTabs1(tab1) {
            this.tabSelect1 = tab1.target.value;
        },
        changeTabs2(tab2) {
            this.tabSelect2 = tab2.target.value;
        },
        changeTabs3(tab3) {
            this.tabSelect3 = tab3.target.value;
        },
        changeTabs4(tab4) {
            this.tabSelect4 = tab4.target.value;
        },
        changeDate(e) {
            this.tabDate = e.target.value;
        },
        comBo(){
            if(this.tabSelect4 =='ICOMBO Friends 2Big'){
                return this.combo=150;
            }else if(this.tabSelect4 =='E-COMBO Alone'){
                return this.combo=75;
            }else if(this.tabSelect4 ==''){
                return this.combo=0;
            }else{
                return this.combo = 180;
            }
        },
        async createdTicket(){
            let data = {// luu gia tri de post qua backend xu ly
                title: this.tabSelect1,
                cinema: this.tabSelect2,
                hour: this.tabSelect3,
                date: this.tabDate,
                seat: this.getSeat,
                subtotal: this.subtotal,
                combo: this.tabSelect4,
                username: this.user.displayName,
                room: this.rm
            };
            try{
                await alert('Bạn đã đặt vé thành công!!!');
                APITicket.create(data);    
            }catch(e){
                alert(e)
            }
        },
        random(){
            return Math.floor(Math.random()*3);
        }
    },
    
    }
</script>

<style>
    .color-text-title{
        background-color: #f26B38;;
        color: white;
    }
    .fontsize-text{
        font-size: 15px;
    }
    span{
        font-weight: bold;
    }
    .border-cinema-router{
        border: 2px solid #f26B38;
        padding: 7px 15px;
        background-color: #f26B38;
    }
    .active{
        background-color: #f15821;
    }
    .focus-btn:focus{
        box-shadow: none;
        outline: none;
    }
</style>