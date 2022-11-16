<template>
        <div class="container font-weight-light">
            <h5>CHI TIẾT SỰ KIỆN</h5>
            <div class="under-text"></div>
            <div class="row">
                <div class="col-8">
                    <h5 class="text-uppercase text-danger mb-3">{{event.title}}</h5>
                    <!--main content-->
                    <div class="text-justify">
                        <p>{{event.maincontent}}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <img :src="`${event.img2}`" alt="" width="700px">
                    </div>
                    <br>
                    <!--content 1-->
                    <div class="text-justify">
                        <p>{{event.content1}}</p>
                    </div>
                    <!--content 2-->
                    <div>
                        <p class="text-justify">{{event.content2}}</p>
                    </div>
                    <div class="mt-5">
                        <h5>KHUYẾN MÃI KHÁC</h5>
                        <div class="under-text"></div>
                        <div class="row d-flex justify-content-center">
                            <div class="col " v-for="(event, index) in events" :key="index">
                                <router-link :to="{name: 'event-detail', params: {id: event._id}}">
                                    <img class="shadow-content" :src="`${event.img}`"  height="230px" v-if="index < 4">
                                </router-link>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mt-5">
                            <button class="border-cinema" >Xem Thêm&ensp;  <i class="fas fa-long-arrow-alt-down"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="bg-light px-4 pb-4 mr-2">
                    <button class="bg-text p-2 text-white">MUA VÉ NHANH</button> 
                        <select class="form-select col border border-dark my-1" aria-label="Default select example">
                            <option selected disabled >Chọn phim</option>
                            <option :value="index" v-for="(film,index) in films" :key="index" class="pr-2">{{film.title}} - {{film.name}}</option>
                        </select>
                        <select class="form-select col border border-dark my-1" aria-label="Default select example">
                            <option selected disabled >Chọn rạp</option>
                            <option :value="index" v-for="(cinema,index) in cinemas" :key="index" class="pr-2">{{cinema.item}}</option>                    
                        </select>
                        <select class="form-select col border border-dark my-1" aria-label="Default select example">
                            <option selected>Ngày 20/10/2022</option>        
                        </select>
                        <select class="form-select col border border-dark my-1" aria-label="Default select example">
                            <option selected disabled >Chọn xuất chiếu</option>
                            <option :value="index" v-for="(hour,index) in hours" :key="index" class="pr-2">{{hour.item}}</option>                    
                        </select>
                        <div class="d-flex justify-content-end">
                            <button  type="button" class="bg-cinema">
                                <router-link :to="{ name: 'pay-ticket'}" class="text-white text-decoration-none">
                                    MUA VÉ&ensp;  <i class="far fa-check-circle"></i>
                                </router-link>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h6 class="my-2">PHIM ĐANG CHIẾU</h6>
                        <div class="under-text"></div>
                        <div  v-for="(film, index) in films" :key="index">
                            <div class="d-flex justify-content-center">
                                <img height="300" :src="`${film.image}`" class="mb-2 shadow-content" v-if="index < films.length/count">
                            </div>
                              
                        </div>
                        <!--khi click goi ham tabchang de thay doi gia tri bien count-->
                        <div class="d-flex justify-content-center">
                            <button class="border-cinema" >Xem Thêm &ensp; <i class="fas fa-long-arrow-alt-down"></i></button>
                        </div>
                    </div>
    
                </div> 
            </div>
            <FooterView></FooterView>        
        </div>
</template>
<script>
        import API from '../../api/api_film';
        import APIEvent from '../../api/api_event';
        import FooterView from '../../components/FooterView.vue'
        export default{
                name: "CinemaBlog",
            data() {
                return {
                    films: [],
                    events: [],
                    event: {},
                    count: 2,
                    cinemas: [
                        {item: 'Galaxy CMT8 - Cần Thơ'},
                        {item: 'Galaxy Nguyễn Trãi - Cần Thơ'},
                        {item: 'Galaxy Hưng Lợi - Cần Thơ'},
                    ],
                    hours: [
                        {item: '18:30'},
                        {item: '19:10'},
                        {item: '20:25'},
                        {item: '22:00'},
                    ],
                }
            },
            async created() {
            // lay tat ca nhung bo phim
            this.films = await API.findAll();
            this.events = await APIEvent.findAll();
            // lay blog can xem chi tiet
            const response = await APIEvent.findOne(this.$route.params.id);
            this.event = response;
            },
            methods :{
                //thay doi count de xem them phim
                tabChange(){
                    this.count = 1;
                }
            },
            components: { FooterView },
        }
</script>
    <style>
    .border-cinema{
        border: 1px solid #f26B38;;
        color: #f26B38;;
        padding: 7px 10px;
    }
    .border-cinema:hover{
        color: #ffffff;
        background-color: #f26B38;
    }
    
</style>