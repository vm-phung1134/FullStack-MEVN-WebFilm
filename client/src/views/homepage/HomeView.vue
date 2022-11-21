<template>
  <v-container>
    <!--phim dang chieu-->
    <div class="row d-flex justify-content-between m-0">
      <div>
        <h5 class="">PHIM ĐANG CHIẾU</h5>
        <div class="under-text"></div>
      </div>
      <div>
        <input type="text" placeholder="Tìm phim đang chiếu" v-model="searchValue" class="border border-dark p-2 rounded">
        <button class="p-2 color-text"><i class="fas fa-search"></i></button>
      </div>
    </div>
    <v-row>
      <v-col  sm="4" class="pa-3" v-for="film in searchFilm" :key="film._id">
        <v-card class="text-decoration-none bg-light " :to="{name: 'film-detail', params: {id: film._id}}" link>
          <v-img height="380" :src="`${film.image}`"></v-img>
          <v-col>
            <v-row class="d-flex justify-content-between mt-1 mx-1">
              <p class="text-uppercase title-text "> {{film.title}} </p>
              <p> <i class="far fa-clock"></i>  {{film.duration}} </p>
            </v-row>
              <v-chip-group class="mb-1">
                <v-chip class="text-dark  bg-light border">15:00 PM</v-chip>
                <v-chip class="text-dark bg-light border">18:30 PM</v-chip>
                <v-chip class="text-dark bg-light border">21:00 PM</v-chip>
              </v-chip-group>
            <button class="border-cinema font-weight-light">MUA VÉ</button>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <FooterView></FooterView>
  </v-container>
</template>

<script>
  import API from "../../api/api_film"
  import FooterView from "../../components/FooterView.vue"
  export default {
    name: "HomeView",
    data() {
        return {
            films: [],
            activeIndex: -1,
            searchValue: '',
        };
    },
    components:{
      FooterView,
    },
    watch: {
      searchText(){
        this.activeIndex = -1;
      }
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
    },
    async created() {
        this.films = await API.findAll();
    },
  }
</script>
<style>
  .title-text{
    font-size: 18px;
    font-weight: 500;
  }
</style>
