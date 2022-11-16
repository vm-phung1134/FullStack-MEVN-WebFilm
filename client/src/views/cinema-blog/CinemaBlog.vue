<template>
    <div class="container">
        <h5 class="mt-3">BlOG ĐIỆN ẢNH</h5>
        <div class="under-text"></div>
        <div class="row">
            <div class="col-8">
                <div class="row my-3" v-for="blog in blogs" :key="blog._id">
                    <div class="col-4">
                        <img :src="`${blog.image}`"  width="230" height="150">
                    </div>
                    <div class="col-8">
                        <h5> <router-link :to="{name: 'blog-detail', params: {id: blog._id}}" class="text-dark text-decoration-none">{{blog.title}}</router-link> </h5>
                        <div class="row mb-0">
                            <small class="col-4 text-primary"><i class="fas fa-hand-point-right"></i> Thích {{blog.like}}</small>
                            <small class="col-8"><i class="fas fa-eye"></i> Xem  {{blog.seen}}</small>
                        </div>
                        <small class="text-justify font-weight-light"> {{blog.maincontent}} </small>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="border-cinema font-weight-light">XEM THÊM&ensp;  <i class="fas fa-long-arrow-alt-down"></i> </button>
                </div>
            </div>
            <div class="col">
                <div class="bg-light px-4 pb-4 mr-2">
                <button class="bg-text p-2 text-white font-weight-light">MUA VÉ NHANH</button> 
                    <select class="form-select col  border border-dark my-1 font-weight-light" aria-label="Default select example">
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
                                MUA VÉ &ensp; <i class="far fa-check-circle"></i>
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
                    <div class="d-flex justify-content-center">
                        <button @click="tabChange()" class="border-cinema font-weight-light" v-if="count==3">XEM THÊM &ensp; <i class="fas fa-long-arrow-alt-down"></i> </button>
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
                blogs: [],
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
        this.films = await API.findAll();
        this.blogs = await APIBlog.findAll();
        },
        methods :{
            tabChange(){
                this.count = 1;
            }
        },
        components: { FooterView },
    }
</script>
<style>
.text-cinema{
    color: #f26B38;
}
</style>