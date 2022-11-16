<template>
    <div class="container font-weight-light">
        <h5 class="mt-3">KHUYẾN MÃI MỚI</h5>
        <div class="under-text"></div>
        <div class="row">
            <div class="col-8">
                <div class="row" >
                    <div class="col" v-for="event in events" :key="event._id">
                        <router-link :to="{name: 'event-detail', params: {id: event._id}}">
                            <img class="shadow-content" :src="`${event.img}`"  height="300px">
                        </router-link>
                    </div>
                   
                </div> 
                <div class="d-flex justify-content-center mt-4">   
                    <button class="border-cinema">
                        XEM THÊM&ensp;  <i class="fas fa-long-arrow-alt-down"></i>
                    </button>
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
                    <div class="d-flex justify-content-center">
                        <button @click="tabChange()" class="border-cinema" v-if="count==3">XEM THÊM&ensp;  <i class="fas fa-long-arrow-alt-down"></i> </button>
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
        this.events = await APIEvent.findAll();
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
</style>