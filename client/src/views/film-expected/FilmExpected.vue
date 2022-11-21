<template>
  <v-container>
    <div class="row d-flex justify-content-between m-0">
      <div>
        <h5 class="">PHIM SẮP KHỞI CHIẾU</h5>
        <div class="under-text"></div>
      </div>
      <div>
        <input type="text" placeholder="Tìm phim sắp chiếu" v-model="searchValue" class="border border-dark p-2 rounded">
        <button class="p-2 color-text"><i class="fas fa-search"></i></button>
      </div>
    </div>
    <v-row>
      <v-col  sm="4" class="pa-3" v-for="film in searchFilm" :key="film._id">
        <v-card class="text-decoration-none bg-light " :to="{name: 'film-expected-detail', params: {id: film._id}}" link>
          <v-img height="380" :src="`${film.image}`"></v-img>
          <v-col>
              <p class="text-uppercase title-text"> {{film.title}}</p>
              <p class="font-weight-light">Dự kiến khởi chiếu: {{film.date}}</p>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <FooterView></FooterView>
  </v-container>
  
</template>

<script>

  import API from "../../api/api_film_ex"
  import FooterView from "../../components/FooterView.vue"
  export default {
    name: "HomeView",
    data() {
        return {
            films: [],
            searchValue:''
        };
    },
    components:{
      FooterView
    }
    ,
    async created() {
        this.films = await API.findAll();
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
    }
}
</script>
<style>
  .title-text{
    font-size: 18px;
    font-weight: 500;
  }
  .color-text{
    background-color: #f26B38;
    color:white;
    padding: 14px;
    text-align: center;
  }
  .color-text:hover{
    background-color: black;
    color: white;
  }
</style>
