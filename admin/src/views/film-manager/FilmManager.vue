<template>
    <div class="container font-weight-light">
        <div class="row d-flex justify-content-center mt-md-3">
            <button class="btn hover-btn btn-cinema mx-1 font-weight-light" @click="changeTabs1">PHIM ĐANG CHIẾU</button>
            <button class="btn hover-btn btn-cinema mx-1 font-weight-light"  @click="changeTabs2">PHIM SẮP CHIẾU</button>
        </div>
        <!--PHIM ĐANG CHIẾU-->
        <div v-if="selected=='currently'">
            <div class="row mr-0">
                <div class="col ">
                    <router-link :to="{name: 'add-film'}">
                        <button class="btn hover-btn rounded-circle btn-add"><i class="fas fa-plus-circle"></i></button>
                    </router-link>
                </div>
                <div class="col text-end mt-4">          
                    <input id="searchForm" type="text" v-model="searchValue" class="border border-dark p-2" placeholder="Tìm phim">
                    <label for="" class="p-2 border border-dark"><i class="fas fa-search"></i></label>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center" v-for="film in searchFilm" :key="film._id">
                    <router-link :to="{name: 'edit-film', params: {id: film._id}}">
                    <img class="shadow-content" height="380" :src="`${film.image}`">
                    </router-link>
                </div>
            </div> 
        </div>
        <!--PHIM SẮP KHỞI CHIẾU-->
        <div v-if="selected=='expected'">
            <div class="row mr-0">
                <div class="col">
                    <router-link :to="{name: 'add-film-ex'}">
                        <button class="btn hover-btn rounded-circle btn-add"><i class="fas fa-plus-circle"></i></button>
                    </router-link>
                </div>
                <div class="col text-end mt-4">
                    <input type="text" class="border border-dark p-2" v-model="searchValue" placeholder="Tìm phim">
                    <label for="" class="p-2 border border-dark"><i class="fas fa-search"></i></label>
                </div>
            </div>
            <div class="row ">
                <div class="col d-flex justify-content-center" v-for="film in searchFilmEx" :key="film._id">
                    <router-link :to="{name: 'edit-film-ex', params: {id: film._id}}">
                        <img class="shadow-content" height="370" :src="`${film.image}`">
                    </router-link>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
    import API from '../../api/api_film'
    import API_Ex from '../../api/api_film_ex'
    export default {
        data: () => (
            {
            films: [],
            film: {},
            films_ex: [],
            selected: 'currently',
            searchValue: ''
        }),
        async created() {
            this.films = await API.findAll()
            this.films_ex = await API_Ex.findAll()
        },
        methods:{
            changeTabs1(){
                this.selected = 'currently'
            },
            changeTabs2(){
                this.selected = 'expected'
            },
            
        },
        computed:{
            searchFilm(){
                if(this.searchValue){
                return this.films.filter((item)=>{
                    return this.searchValue.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
                }else{
                    return this.films;
                }
            },
            searchFilmEx(){
                if(this.searchValue){
                return this.films_ex.filter((item)=>{
                    return this.searchValue.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
                }else{
                    return this.films_ex;
                }
            }
        }
        
    }
</script>
<style>
    .btn-cinema{
        padding: 10px;
        background-color: #f26B38;
        color: #ffffff;
    }
    .btn-add{
        font-size: 40px;
        color: #f26B38;
    }
    .hover-btn:focus{
        box-shadow: none;
        outline: none;
    }
</style>