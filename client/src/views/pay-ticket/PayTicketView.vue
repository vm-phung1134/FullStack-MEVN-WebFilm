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
                <select @change="changeTabs2" class="form-select col border border-dark" aria-label="Default select example">
                    <option selected disabled class="text-center">_______________________________________</option>
                    <option  :value="cinema.item" v-for="(cinema,index) in cinemas" :key="index">{{cinema.item}}</option>
                </select>
            </div>
        </div>
        <!---------------------------------phien 1-------------------->
        <div v-if="tabSelect2==='Galaxy CMT8 - Cần Thơ'"> <!--truong hop tu uong voi changtabs2 thay doi -->
            <p class="bg-cinema text-white mb-3">CHỌN SUẤT CHIẾU</p>
            <div class="row border border-dark mx-0 p-3 mb-2" v-for="(session,index1) in sessions" :key="index1">
                <div class="col">
                    <div class="mx-4">
                    <p class="p-1 color-text-title text-center mb-0 ">CHỌN NGÀY CHIẾU &ensp; <i class="fas fa-caret-down"></i></p>
                    <select @change="changeDate" class="form-select col border border-dark" aria-label="Default select example">
                        <option selected disabled class="text-center">_______________________________________</option>
                        <option  :value="index2" v-for="(date,index2) in session.dates" :key="index2">{{date.dt}}</option>
                    </select>  
                    </div>
                    
                </div>
                <div class="col" >
                    <p>Suất Chiếu Tại Rạp:</p>
                    <div v-for="(hour,index3) in session.hours" :key="index3">
                        <div v-if="tabDate == index3"><!--in danh sach phien hours bi rang buoc boi khi chon ngay-->
                           <div class="form-check-inline"  @change="changeTabs3" v-for="(hr,index4) in hour.hrs" :key="index4" >
                                <label class="form-check-label  btn btn-outline-dark mx-1">
                                <input type="radio" class="form-check-input" :value="hr.item" name="optradio">{{hr.item}}               
                                </label>
                            </div>  
                        </div>                      
                    </div>  
                </div>
            </div>
        </div>
        <!---------------------------------phien 2-------------------->
        <div v-if="tabSelect2==='Galaxy Nguyễn Trãi - Cần Thơ'"> <!--truong hop tu uong voi changtabs2 thay doi -->
            <p class="bg-cinema text-white mb-3">CHỌN SUẤT CHIẾU</p>
            <div class="row border border-dark mx-0 p-3 mb-2" v-for="(session,index1) in sessions2" :key="index1">
                <div class="col">
                    <p class="p-2 color-text-title text-center mb-0">CHỌN NGÀY <i class="fas fa-caret-down"></i></p>
                    <select @change="changeDate" class="form-select col border border-dark" aria-label="Default select example">
                        <option selected disabled class="text-center">_______________________________________</option>
                        <option  :value="index2" v-for="(date,index2) in session.dates" :key="index2">{{date.dt}}</option>
                    </select>
                </div>
                <div class="col" >
                    <p>Suất Chiếu Tại Rạp:</p>
                    <div v-for="(hour,index3) in session.hours" :key="index3">
                        <div v-if="tabDate == index3"><!--in danh sach phien hours bi rang buoc boi khi chon ngay-->
                           <div class="form-check-inline"  @change="changeTabs3" v-for="(hr,index4) in hour.hrs" :key="index4" >
                                <label class="form-check-label  btn btn-outline-dark mx-1">
                                <input type="radio" class="form-check-input" :value="hr.item" name="optradio">{{hr.item}}               
                                </label>
                            </div>  
                        </div>                      
                    </div>  
                </div>
            </div>
        </div>
        <!---------------------------------phien 3-------------------->
        <div v-if="tabSelect2==='Galaxy Hưng Lợi - Cần Thơ'"> <!--truong hop tu uong voi changtabs2 thay doi -->
            <p class="bg-cinema text-white mb-3">CHỌN SUẤT CHIẾU</p>
            <div class="row border border-dark mx-0 p-3 mb-2" v-for="(session,index1) in sessions3" :key="index1">
                <div class="col">
                    <p class="p-2 color-text-title text-center mb-0">CHỌN NGÀY <i class="fas fa-caret-down"></i></p>
                    <select @change="changeDate" class="form-select col border border-dark" aria-label="Default select example">
                        <option selected disabled class="text-center">_______________________________________</option>
                        <option  :value="index2" v-for="(date,index2) in session.dates" :key="index2">{{date.dt}}</option>
                    </select>
                </div>
                <div class="col" >
                    <p>Suất Chiếu Tại Rạp:</p>
                    <div v-for="(hour,index3) in session.hours" :key="index3">
                        <div v-if="tabDate == index3"><!--in danh sach phien hours bi rang buoc boi khi chon ngay-->
                           <div class="form-check-inline"  @change="changeTabs3" v-for="(hr,index4) in hour.hrs" :key="index4" >
                                <label class="form-check-label  btn btn-outline-dark mx-1">
                                <input type="radio" class="form-check-input" :value="hr.item" name="optradio">{{hr.item}}               
                                </label>
                            </div>  
                        </div>                      
                    </div>  
                </div>
            </div>
        </div>
        
    <div class="row mt-2" v-if="tabSelect3!='null'">
        <div class="col-7">
            <h5>GÓI COMBO ĐỒ ĂN - THỨC UỐNG</h5>
            <div @change="changeTabs4">
                <label class="form-check-label border border-dark btn btn-light col">
                    <input value="ICOMBO Friends 2Big" type="radio" class="form-check-input" name="optradio">
                        <h6 class="mt-5">ICOMBO Friends 2Big</h6>
                        <div class="mb-1">
                            <img src="https://www.galaxycine.vn/media/2022/8/19/friendscombofamilycombo2_1660896643423.jpg" alt="" width="100">
                        </div>
                        <p>2 Bắp Size S + 2 Nước 32 Oz (LipTon/Suối/Pepsi/Coca) + 2 Snack</p>
                        <p class="text-danger">Giá: 150.000 VNĐ</p>
                </label>
                <label class="form-check-label border border-dark btn btn-light col mt-1">
                    <input value="L-COMBO Lovers 2Big" type="radio" class="form-check-input" name="optradio">
                        <h6 class="mt-5">L-COMBO Lovers 2Big</h6>
                        <div class="mb-1">
                            <img src="https://www.galaxycine.vn/media/2022/8/19/combo22022_1660884682886.jpg" alt="" width="100">
                        </div>
                        <p>1 Bắp Size L + 2 Nước 33 Oz (LipTon/Suối/Pepsi/Coca) + 1 Snack Lớn</p>
                        <p class="text-danger">Giá: 180.000 VNĐ</p>
                </label>
                <label class="form-check-label border border-dark btn btn-light col mt-1">
                    <input value="E-COMBO Alone" type="radio" class="form-check-input" name="optradio">
                        <h6 class="mt-5">E-COMBO Alone</h6>
                        <div class="mb-1">
                            <img src="https://www.galaxycine.vn/media/2022/8/22/combo122082022_1661161050442.png" alt="" width="100">
                        </div>
                        <p>1 Bắp Size S + 1 Nước 22 Oz (LipTon/Suối/Pepsi/Coca) + 1 Snack XS</p>
                        <p class="text-danger">Giá: 75.000 VNĐ</p>
                </label>
            </div>      
        </div>
        <div class="col-5">
            <div class="bg-light shadow-content p-4 mx-lg-5">
                <p><span>Tên khách hàng: </span>{{user.displayName}} </p>
                <h6 class="text-uppercase"><span>Tên Phim: </span> {{tabSelect1}}</h6>
                <small class="text-danger mb-1">(*) Phim dành cho khán giả từ 13 tuổi trở lên</small>
                <p><span>Suất Chiếu: </span> {{tabSelect3}} <small>AM | PM</small></p>
                <div v-for="(cinema, index) in cinemas" :key="index">
                  <p v-if="tabSelect2==index"><span>Tại Rạp: </span>{{cinema.item}} | Rạp 3</p>  
                </div>
                <span v-if="tabDate==0">Thứ 7 - Ngày 08/10/2022</span>
                <span v-else-if="tabDate==1">Chủ Nhật - Ngày 09/10/2022</span>
                <span v-else>Thứ 2 - Ngày 10/10/2022</span>
                <p class="mt-3"><span>Giá Vé: </span>  {{price}}.000 VNĐ</p>
                <p><span>Combo: </span>{{tabSelect4}}  </p>
                <p v-if="tabSelect4!=''"><span>Vị Trí Ghế:</span> {{seat=seats[random()].name}}</p>
                <h5 class="text-primary">Tổng Phí: {{subtotal = price + comBo()}}.000 VNĐ</h5>

                <div class="d-flex justify-content-end" v-if="user!=null">
                    <button  class="border-cinema-router text-white" data-toggle="modal" data-target="#exampleModal">
                        ĐẶT VÉ
                    </button> 
                </div>
                <!--@click="createdTicket"-->
                <div class="d-flex justify-content-end" v-else-if="user==null">
                    <button @click="logInUser()"  class="border-cinema-router text-white" data-toggle="modal" data-target="#exampleModal">
                        ĐĂNG NHẬP
                    </button> 
                </div>
            </div>
            <!--Model-->
            <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-body p-5">
                        <div class="row">
                            <div class="col-7">
                                <div class="mb-4">
                                    <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" width="100px">
                                    <h4>Thanh toán trực tuyến - MOMO</h4>   
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
                                        <button class="text-white bg-cinema btn w-100"  @click="createdTicket">Thanh toán</button>
                                    </div>
                                </form>  
                            </div>
                            <div class="col">
                                <div class="d-flex justify-content-center">
                                    <img src="https://dl.memuplay.com/new_market/img/com.mservice.momotransfer.sc0.2022-06-30-00-37-38.jpg" width="260px">
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
    //import {required} from '@vuelidate/validators'
    export default{     
        name: "PayTicketView",
    data() {
        return {
            films: [],
            cinemas: [
                {item: 'Galaxy CMT8 - Cần Thơ'},
                {item: 'Galaxy Nguyễn Trãi - Cần Thơ'},
                {item: 'Galaxy Hưng Lợi - Cần Thơ'},
            ],
            //phien chieu rap thu 1
            sessions: [
                {
                    dates: [{dt:'Thứ 7 - 08/10/2022'},{dt:'Chủ Nhật - 09/10/2022'}], title: '2D - Phụ Đề', 
                    hours: [
                        {
                            hrs: [{item: '18:30'},{item: '19:10'},{item: '20:25'},{item: '22:00'}]
                        },
                        {
                            hrs: [{item: '13:00'},{item: '14:20'},{item: '16:25'},{item: '17:45'}]
                        }

                    ]
                },
            ],
            //phien chieu rap thu 2
            sessions2: [
                {
                    dates: [{dt:'Thứ 7 - 08/10/2022'},{dt:'Chủ Nhật - 09/10/2022'},{dt:'Thứ 2 - 10/10/2022'}], title: '2D - Phụ Đề', 
                    hours: [
                        {
                            hrs: [{item: '09:30'},{item: '11:10'},{item: '22:25'},{item: '23:00'}]
                        },
                        {
                            hrs: [{item: '12:25'},{item: '14:20'},{item: '18:25'},{item: '20:15'}]
                        },
                        {
                            hrs: [{item: '6:25'},{item: '8:20'},{item: '15:25'},{item: '23:15'}]
                        }
                    ]
                },
            ],
            //phien chieu rap thu 3
            sessions3: [
                {
                    dates: [{dt:'Thứ 7 - 08/10/2022'},{dt:'Chủ Nhật - 09/10/2022'},{dt:'Thứ 2 - 10/10/2022'}], title: '2D - Phụ Đề', 
                    hours: [
                        {
                            hrs: [{item: '09:30'},{item: '11:10'},{item: '22:25'},{item: '23:00'}]
                        },
                        {
                            hrs: [{item: '11:30'},{item: '12:10'},{item: '15:25'},{item: '16:05'}]
                        },
                        {
                            hrs: [{item: '12:25'},{item: '14:20'},{item: '18:25'},{item: '20:15'}]
                        }

                    ]
                },
            ],
            seats: [{name: 'B7'}, {name: 'A2'}, {name: 'B5'}, {name: 'G7'},{name:'H4'},{name:'K9'}],
            tabSelect1: "null", // lay ten phim
            tabSelect2: "null", // lay suat chieu cua rap
            tabSelect3: "null", // lay gio 
            tabSelect4: "", // lay combo
            tabDate: "null", // lay ngay
            price: 79, // gan gia tri gia ve
            combo: 0,
            message:"", // in thong bao
            subtotal: 0,
            seat:"",
            user: null
        };
    },
    async created() {
        this.films = await API.findAll();
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
        random: function() {
            return Math.floor(Math.random()*6);
        },
        async createdTicket(){
            let data = {// luu gia tri de post qua backend xu ly
                title: this.tabSelect1,
                cinema: this.tabSelect2,
                hour: this.tabSelect3,
                date: this.tabDate,
                seat: this.seat,
                subtotal: this.subtotal,
                combo: this.tabSelect4,
                username: this.user.displayName
            };
            try{
                await this.$router.push('/ticket-manager')
                APITicket.create(data);
                
            }catch(e){
                alert(e)
            }
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
        border: 2px solid #f26B38;;
        padding: 7px 15px;
        background-color: #f26B38;;
    }
</style>