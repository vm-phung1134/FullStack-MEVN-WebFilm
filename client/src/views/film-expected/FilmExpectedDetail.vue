<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-12 col-md-6">
                <img class="shadow-content" :src="`${film.image}`" alt="" width="390" height="530"></div>
            <div class="col-lg-7 col-md-6">
                <div class="p-2 font-weight-light">
                    <h2 class="text-uppercase">{{film.title}}</h2>
                    <p class="text-uppercase" style="font-size:19px">{{film.name}}</p>
                    <p>Thời lượng: <a class="text-decoration-none" href="#">0 phút</a> </p>
                    <p>Diễn viên: <a class="text-decoration-none" href="#">{{film.actors}}</a></p>
                    <p>Quốc gia: <a class="text-decoration-none" href="#">{{film.country}}</a></p>
                    <p>Đạo diễn: <a class="text-decoration-none" href="#">{{film.director}}</a></p>
                    <p>Thể loại: <a class="text-decoration-none" href="#">{{film.type}}</a></p>
                    <p>Dự kiến ngày khởi chiếu: <a href="#" class="text-decoration-none text-danger">{{film.date}}</a></p>  
                </div>
                <div class="p-2">
                    <h4>NHẬN KHUYẾN MÃI</h4>
                    <div class="under-text"></div>
                    <input type="text" class="w-50 border border-dark font-weight-light rounded p-1" placeholder="Nhập code">
                    <button class="bg-cinema fs-text d-block my-4 font-weight-light">XÁC NHẬN</button>
                </div>
                
            </div>
        </div>
        <div class="blog-content my-3">
            <div>
               <h4>NỘI DUNG PHIM</h4>
               <div class="under-text"></div>
               <p class="text-justify">{{film.plot}}</p> 
            </div>
        </div>
        <div>
            <h4>XEM TRAILER PHIM</h4>
            <div class="under-text"></div>
          <iframe width="720" height="455"
            :src="`${film.trailer}`" class="mb-3">
            </iframe>  
        </div>
        
    <FooterView></FooterView>    
    </div>
    
</template>
<script>
    import API from '../../api/api_film_ex'
    import FooterView from '../../components/FooterView.vue'
    export default {
    data() {
        return {
            film: {},
        };
    },
    async created() {
        const response = await API.findOne(this.$route.params.id);
        this.film = response;
    },
    components: { 
        FooterView, 
    }
}
    
</script>
<style>
    .under-text{
        content: '';
        background-color: #f26B38;
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
        font-size: 19px;
    }
    .bg-text{
        background-color: #f26B38;
    }
</style>