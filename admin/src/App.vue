<template>
  <v-app id="inspire">
    <v-app-bar app color="black" flat>
      <v-tabs centered class="ml-n9">
        <v-tab v-for="(item,index) in items" :key="index" :to="item.link" class="text-decoration-none text-white" >
          {{ item.title}}
        </v-tab>
      </v-tabs>
      <div v-if="admin!=null" class="text-end">
        <v-btn class="ma-2 text-decoration-none text-danger" small outlined @click="logOut()">Đăng Xuất</v-btn>
      </div>
      <v-btn v-if="admin==null" class="ma-2 text-decoration-none text-white" outlined to="/login">Đăng Nhập</v-btn>
      <v-avatar class="hidden-sm-and-down " color="grey darken-1 shrink" size="32">
        <img src="https://avatars.githubusercontent.com/u/106596859?v=4" alt="" v-if="admin!=null">
      </v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="9">
            <v-sheet min-height="100vh" rounded="lg">
              <router-view></router-view> <!--main content-->
            </v-sheet>
          </v-col>
          <!--dashboard-->
          <v-col cols="12" md="3">
            <v-sheet rounded="lg" min-height="268">
              <v-card class="mx-auto text-center" dark max-width="300" v-if="admin!=null"> <!--Neu co admin-->
                <v-card-text>
                  <p class="font-weight-bold">Doanh thu bán vé sau 24h <i class="fas fa-clock"></i></p>
                  <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline :value="value" :gradient="['#f72047', '#ffd200', '#1feaea']"
                      height="200"  smooth>
                      <template v-slot:label="item">
                        {{ item.value }}
                      </template>
                    </v-sparkline>
                  </v-sheet>
                </v-card-text>
                <v-card-text>
                  <div class="text-start">
                    Chú thích <br>
                  <v-chip class="text-dark m-1" color="#1feaea" small label></v-chip>Thấp <br>
                  <v-chip class="text-dark m-1" color='#ffd200' small label></v-chip>Trung bình <br>
                  <v-chip class="text-dark m-1" color='#f72047' small label></v-chip>Cao <br>
                  </div>
                  </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-center">
                  <v-btn block text>
                    Lập báo cáo
                  </v-btn>
                </v-card-actions>
              </v-card>
              <div v-if="admin==null"><!--Neu khong co admin-->
              <v-card class="mx-auto text-center" dark max-width="300">
                  <p>THÔNG BÁO</p>
              </v-card>
              <div class="px-2">
                <small>1. Chạy dịch vụ quảng cáo cho đối tác FKM</small><br>
                <small>2. Thông báo lịch update hệ thống</small><br>
                <small>3. Lịch trình cập nhật phim tháng 12</small><br>
                <small>4. Sửa lỗi hệ thống đặt ghế</small><br>
                <small>5. Tạo mã voucher cho chương trình khuyến mãi tháng 12</small><br>
                <small>6. Thêm các gói hỗ trợ thành viên mới</small><br>
                <small>7. Xếp sắp phòng hội nghị cho đối tác HiChunBank</small><br>
              </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase';
  export default {
    data: () => ({
      admin: null,
      items: [
        {title: 'TRANG CHỦ', link:'/homepage'},
        {title: 'QUẢN LÝ PHIM', link:'/film-manager'},
        {title: 'QUẢN LÝ BLOG', link:'/blog-manager'},
        {title: 'QUẢN LÝ SỰ KIỆN', link:'/event-manager'},
        {title: 'QUẢN LÝ ĐẶT VÉ', link:'/ticket-manager'}
      ],
      value: [
        11,8,3,7,17,1,9,4,8,20,5,6,
        15,2,6,1,7,2,8,3,9,24,13,50
      ],
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
    methods: {
      logOut() {
        firebase.auth().signOut().then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push('/login')
          })
        })
      }
    }
    
  }
</script>