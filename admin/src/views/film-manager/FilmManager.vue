<template>
    <div class="container">
        <div class="row d-flex justify-content-center mt-md-3">
            <button class="btn hover-btn btn-cinema mx-1" @click="changeTabs1">PHIM ĐANG CHIẾU</button>
            <button class="btn hover-btn btn-cinema mx-1"  @click="changeTabs2">PHIM SẮP CHIẾU</button>
        </div>
        <div v-if="selected=='currently'">
            <div>
                <router-link :to="{name: 'add-film'}">
                    <button class="btn hover-btn rounded-circle btn-add"><i class="fas fa-plus-circle"></i></button>
                </router-link>
            </div>
            <div class="row">
                <div class="col" v-for="film in films" :key="film._id">
                    <router-link :to="{name: 'edit-film', params: {id: film._id}}">
                    <img class="shadow-content" height="380" :src="`${film.image}`">
                    </router-link>
                </div>
            </div> 
        </div>
        <div v-if="selected=='expected'">
            <div>
                <router-link :to="{name: 'add-film-ex'}">
                    <button class="btn hover-btn rounded-circle btn-add"><i class="fas fa-plus-circle"></i></button>
                </router-link>
            </div>
            <div class="row">
                <div class="col" v-for="film in films_ex" :key="film._id">
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
        }),
        methods:{
            changeTabs1(){
                this.selected = 'currently'
            },
            changeTabs2(){
                this.selected = 'expected'
            }
        },
        async created() {
            this.films = await API.findAll()
            this.films_ex = await API_Ex.findAll()
        },
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