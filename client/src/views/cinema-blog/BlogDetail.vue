<template>
    <div class="container">
        <h5>BlOG ĐIỆN ẢNH</h5>
        <div class="under-text"></div>
        <div class="row">
            <div class="col-8">
                <h5 class="text-uppercase text-danger mb-3">{{blog.title}}</h5>
                <!--info-->
                <div class="row ">   
                    <div class="col-4 text-primary font-weight-light">
                        <p> <i class="fas fa-hand-point-right"></i> Thích {{blog.like}}</p>
                    </div>
                    <div class="col-4">
                        <p><i class="fas fa-eye"></i> Xem {{blog.seen}}</p>
                    </div>
                    <div class="col-4">
                        <p><i class="fas fa-share"></i> Chia sẽ</p>
                    </div>
                </div>
                <!--main content-->
                <div class="text-justify">
                    <p>{{blog.maincontent}}</p>
                </div>
                <div class="d-flex justify-content-center">
                    <img :src="`${blog.image}`" alt="">
                </div>
                <br>
                <!--content 1-->
                <div class="text-justify">
                    <p>{{blog.content1}}</p>
                </div>
                <div class="d-flex justify-content-center">
                    <img :src="`${blog.image2}`" alt="">
                </div>
                <br>
                <!--content 2-->
                <div>
                    <p class="text-justify">{{blog.content2}}</p>
                </div>
                <div class="font-weight-light">Tags :<router-link :to="{name: ''}">{{blog.tags}}</router-link></div>
            </div>
            <div class="col">
                <div class="bg-light px-4 pb-4 mr-2">
                <button class="bg-text p-2 text-white font-weight-light">MUA VÉ NHANH</button> 
                    <select class="form-select col border  border-dark my-1 font-weight-light" aria-label="Default select example">
                        <option selected disabled >Chọn phim</option>
                        <option :value="index" v-for="(film,index) in films" :key="index" class="pr-2">{{film.title}} - {{film.name}}</option>
                    </select>
                    <select class="form-select col border border-dark my-1 font-weight-light" aria-label="Default select example">
                        <option selected disabled >Chọn rạp</option>
                        <option :value="index" v-for="(cinema,index) in cinemas" :key="index" class="pr-2">{{cinema.item}}</option>                    
                    </select>
                    <select class="form-select col border border-dark my-1 font-weight-light" aria-label="Default select example">
                        <option selected>Ngày 20/10/2022</option>        
                    </select>
                    <select class="form-select col border border-dark my-1 font-weight-light" aria-label="Default select example">
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
                        <button @click="tabChange()" class="border-cinema font-weight-light" v-if="count==3">Xem Thêm &ensp; <i class="fas fa-long-arrow-alt-down"></i></button>
                    </div>
                </div>

            </div> 
        </div>
        <FooterView></FooterView>        
    </div>
</template>
<script>
    import API from '../../api/api_film';
    import APIBlog from '../../api/api_blog';
    import FooterView from '../../components/FooterView.vue'
    export default{
            name: "CinemaBlog",
        data() {
            return {
                films: [],
                blog: {},
                count: 3,
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
        // lay blog can xem chi tiet
        const response = await APIBlog.findOne(this.$route.params.id);
        this.blog = response;
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
    background-color: #f26B38;;
}

</style>