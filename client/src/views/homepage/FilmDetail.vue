<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-12 col-md-6">
                <img class="shadow-content" :src="`${film.image}`" alt="" width="390" height="530">            </div>
            <div class="col-lg-7 col-md-6">
                <div class="p-2 fw-normal font-weight-light">
                    <h2 class="text-uppercase">{{film.title}}</h2>
                    <p class="text-uppercase" style="font-size:19px">{{film.name}}</p>
                    <div class="row ml-0 mb-2">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14">
                        </v-rating>
                        <div class="grey--text ms-4">
                            8.5 (537)
                        </div>
                    </div>
                    
                    <p>Thời lượng: <a class="text-decoration-none" href="#">{{film.duration}}</a> </p>
                    <p>Diễn viên: <a class="text-decoration-none" href="#">{{film.actors}}</a></p>
                    <p>Quốc gia: <a class="text-decoration-none" href="#">{{film.country}}</a></p>
                    <p>Đạo diễn: <a class="text-decoration-none" href="#">{{film.director}}</a></p>
                    <p>Thể loại: <a class="text-decoration-none" href="#">{{film.type}}</a></p>
                    <p>Ngày khởi chiếu: <a href="#" class="text-decoration-none">{{film.date}}</a></p>  
                </div>
                <div class="p-2">
                    <h4>NHẬN KHUYẾN MÃI</h4>
                    <div class="under-text"></div>
                    <input type="text" class="w-50 border border-dark rounded p-1 font-weight-light" placeholder="Nhập code">
                    <button class="bg-cinema fs-text d-block my-4 font-weight-light">XÁC NHẬN</button>
                </div>
                
            </div>
        </div>
        <div class="blog-content mt-3">
            <div>
               <h4>NỘI DUNG PHIM</h4>
               <div class="under-text"></div>
               <p class="text-justify">{{film.plot}}</p> 
            </div>
            <div class="mt-5 font-weight-light">
                <h4 class="text-uppercase ">Lịch chiếu</h4>
                <div class="under-text"></div>
                <div class="my-5">
                    <h6>NGÀY CHIẾU</h6>
                    <input type="date" value="08/10/2022" class=" p-3 border boder-dark text-center">
                </div>
                <h6 class="pb-3 font-weight-light">Xem ngay rạp chiếu gần nhất để trãi nghiệm của hệ thống Galaxy !!!</h6>
                <div class="row mb-2">
                    <select v-model="selected_1" class="form-select col border border-dark mx-3" aria-label="Default select example">
                        <option selected disabled>Khu Vực</option>
                        <option value="HCM">Hồ Chí Minh</option>
                        <option value="CT">Cần Thơ</option>
                        <option value="DN">Đà Nẵng</option>
                    </select>
                    <select v-model="selected_2" class="form-select col border border-dark mx-3" aria-label="Default select example">
                        <option selected disabled>Rạp Chiếu</option>
                        <option v-if="selected_1=='HCM'" value="Nguyễn Du">Galaxy Nguyễn Du</option>
                        <option v-if="selected_1=='CT'" value="Hưng Lợi">Galaxy Hưng Lợi</option>
                        <option v-if="selected_1=='HCM'" value="Tân Bình">Galaxy Tân Bình</option>
                        <option v-if="selected_1=='CT'" value="CMT8">Galaxy CMT8</option>
                        <option v-if="selected_1=='HCM'" value="Quang Trung">Galaxy Quang Trung</option>
                        <option v-if="selected_1=='CT'" value="Ninh Kiều">Galaxy Ninh Kiều</option>
                    </select>   
                </div>
                <!------------- cum rap HO CHI MINH---------------->
                <div v-if="selected_1 == 'HCM' && selected_2=='Nguyễn Du'">
                    <p class="bg-cinema fs-text text-white mb-3">Galaxy {{selected_2}}</p>
                    <div class="row border border-dark mx-0 p-3">
                        <div class="col">
                            <p>2D - Phụ đề</p>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-dark mx-1">17:30</button>
                            <button class="btn btn-outline-dark mx-1">19:10</button>
                            <button class="btn btn-outline-dark mx-1">20:05</button>
                            <button class="btn btn-outline-dark mx-1">21:20</button>
                            <button class="btn btn-outline-dark mx-1">22:00</button>
                        </div>
                    </div>
                </div>
                <div v-if="selected_1 == 'HCM' && selected_2=='Tân Bình'">
                    <p class="bg-cinema fs-text text-white mb-3">Galaxy {{selected_2}}</p>
                    <div class="row border border-dark mx-0 p-3">
                        <div class="col">
                            <p>2D - Phụ đề</p>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-dark mx-1">17:30</button>
                            <button class="btn btn-outline-dark mx-1">18:00</button>
                            <button class="btn btn-outline-dark mx-1">19:00</button>
                            <button class="btn btn-outline-dark mx-1">19:20</button>
                            <button class="btn btn-outline-dark mx-1">20:00</button>
                        </div>
                    </div>
                </div>
                <div v-if="selected_1 == 'HCM' && selected_2=='Quang Trung'">
                    <p class="bg-cinema fs-text text-white mb-3">Galaxy {{selected_2}}</p>
                    <div class="row border border-dark mx-0 p-3">
                        <div class="col">
                            <p>2D - Phụ đề</p>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-dark mx-1">15:30</button>
                            <button class="btn btn-outline-dark mx-1">16:00</button>
                            <button class="btn btn-outline-dark mx-1">16:50</button>
                            <button class="btn btn-outline-dark mx-1">18:20</button>
                            <button class="btn btn-outline-dark mx-1">21:00</button>
                        </div>
                    </div>
                </div>
                <!-----------------Cum rap Can Tho-------------->
                <div v-if="selected_1 == 'CT' && selected_2 == 'Hưng Lợi'">
                    <p class="bg-cinema text-white fs-text mb-3">Galaxy {{selected_2}} </p>
                    <div class="row border border-dark mx-0 p-3">
                        <div class="col">
                            <p>2D - Phụ đề</p>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-dark mx-1">18:30</button>
                            <button class="btn btn-outline-dark mx-1">19:00</button>
                            <button class="btn btn-outline-dark mx-1">19:15</button>
                            <button class="btn btn-outline-dark mx-1">20:00</button>
                            <button class="btn btn-outline-dark mx-1">21:45</button>
                        </div>
                    </div>
                </div>
                <div v-if="selected_1 == 'CT' && selected_2 == 'CMT8'">
                    <p class="bg-cinema text-white fs-text mb-3">Galaxy {{selected_2}} </p>
                    <div class="row border border-dark mx-0 p-3">
                        <div class="col">
                            <p>2D - Phụ đề</p>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-dark mx-1">14:30</button>
                            <button class="btn btn-outline-dark mx-1">15:00</button>
                            <button class="btn btn-outline-dark mx-1">16:15</button>
                            <button class="btn btn-outline-dark mx-1">21:00</button>
                            <button class="btn btn-outline-dark mx-1">21:45</button>
                        </div>
                    </div>
                </div>
                <div v-if="selected_1 == 'CT' && selected_2 == 'Ninh Kiều'">
                    <p class="bg-cinema text-white fs-text mb-3">Galaxy {{selected_2}}</p>
                    <div class="row border border-dark mx-0 p-3">
                        <div class="col">
                            <p>2D - Phụ đề</p>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-dark mx-1">13:30</button>
                            <button class="btn btn-outline-dark mx-1">14:00</button>
                            <button class="btn btn-outline-dark mx-1">16:15</button>
                            <button class="btn btn-outline-dark mx-1">17:00</button>
                            <button class="btn btn-outline-dark mx-1">20:45</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    <FooterView></FooterView>    
    </div>
    
</template>
<script>
    import API from "../../api/api_film"
    import FooterView from '../../components/FooterView.vue'
    export default {
    data() {
        return {
            film: {},
            selected_1: "",
            selected_2: "",
        };
    },
    async created() {
        const response = await API.findOne(this.$route.params.id);
        this.film = response;
    },
    methods: {
    },
    components: { FooterView },

}
    
</script>
<style>
    .under-text{
        content: '';
        background-color: #f26B38;;
        width: 100px;
        height: 3px;
        margin-bottom: 20px;
    }
    .shadow-content{
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .bg-cinema{
        background-color: #f26B38;
        width: 300px;
        padding: 10px;
        margin-top: 20px;
        color: rgb(255, 255, 255);
    }
    .fs-text{
        font-size: 18px;
    }
    .bg-text{
        background-color: #f26B38;
    }
</style>