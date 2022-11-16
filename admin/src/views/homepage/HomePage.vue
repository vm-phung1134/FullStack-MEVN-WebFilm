<template>
    <div class="p-3">
        <div class="mb-5 text-center">            
            <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" width="300px">
            <h4 class="mt-5">WEBSITE QUẢN TRỊ VIÊN</h4>
            <h5 class="mb-5">({{admin.email}})</h5>
        </div>
        <div class="row mb-5 d-flex justify-content-center">
            <div class="card col-lg col-sm-12 mx-md-1 text-center bg-cinema d-flex"  v-for="(card,index) in cards" :key="index">
                <div class="card-body">
                <h6 class="card-title">{{card.title}}</h6>
                <p class="card-text">{{card.count}}</p>
                </div>
            </div>   
        </div>
        
        
        <v-card class="mx-auto text-center" white max-width="100%">
            <v-card-text>
              <p class="font-weight-bold">Doanh thu bán vé sau 12 tháng <i class="fas fa-calendar-alt"></i></p>
              <v-sheet color="white">
                <v-sparkline :value="value" :gradient="['#CD18D8', '#D8185C', '#DB1414']"
                  height="100">
                  <template v-slot:label="item">
                    {{ item.value}}Tr
                  </template>

                </v-sparkline>
              </v-sheet>
            </v-card-text>
            <v-card-text>
            <div class="text-start">
                <p>Biều đồ mức danh thu bán vé theo 12 tháng trong năm 2021-2022</p>
                <p>Đánh giá mức độ:</p>
                <v-chip color="#DB1414" class="text-white" label>Cao hơn doanh thu dự kiến</v-chip>
            </div>
              </v-card-text>
        
            <v-divider></v-divider>
          </v-card>
    </div>
</template>
<script>
import firebase from 'firebase';
  export default {
    data: () => ({
        value: [
        15,8,3,7,45,10,9,34,8,20,5,59,
      ],
      months: [
        15,8,3,7,45,10,9,34,8,20,5,59,
      ],
      cards: [
        {title: 'VÉ ĐÃ BÁN TRONG NGÀY', count:109},
        {title: 'PHIM ĐANG CHIẾU', count:9},
        {title: 'SỐ THÀNH VIÊN',count: 4006.031},
        {title: 'PHIM SẮP KHỞI CHIẾU',count:8},
    
      ],
      admin:null
    }),
    created() {
      firebase.auth().onAuthStateChanged((admin) => {
        if (admin) {
          this.admin = admin;
        } else {
          this.admin = null;
        }
      });
    },
  }
</script>
<style>
.bg-cinema{
    background-color: #f26B38;
    color: white;
}
</style>