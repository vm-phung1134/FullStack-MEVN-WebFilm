<template>
  <v-container>
    <v-row>
      <v-col  sm="4" class="pa-3" v-for="film in films" :key="film._id">
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
            searchText: "",
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
      filmStrings(){
        return this.films.map((film)=>{
          const {title,name} = film;
          return [title,name].join("");
        });
      },
      filteredFilms(){
        if(!this.searchText){
          return this.films;
        } 
        return this.films.filter((_film, index) => 
        this.filmStrings[index].includes(this.searchText)
        );
      },
      activeFilm(){
        if(this.activeIndex<0) return null;
        return this.filteredFilms[this.activeIndex];
      },
      filteredFilmsCount(){
        return this.filteredFilms.length;
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
