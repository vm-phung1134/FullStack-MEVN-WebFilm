<template>
  <v-container>
    <v-row>
      <v-col  sm="4" class="pa-3" v-for="film in films" :key="film._id">
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
        };
    },
    components:{
      FooterView
    }
    ,
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
  .color-text{
    background-color: #f26B38;
    color:white;
    padding: 8px 14px;
    text-align: center;
    border-radius: 5px;
  }
  .color-text:hover{
    background-color: black;
    color: white;
  }
</style>
