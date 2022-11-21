<template>
  <v-app id="inspire">
    <v-app-bar app color="black" flat>
      <v-tabs centered class="ml-n9">
        <v-tab v-for="(item,index) in items" :key="index" :to="item.link" class="text-decoration-none text-white" >
          {{ item.title}}
        </v-tab>
      </v-tabs>
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
              <v-card class="mx-auto text-center " max-width="300" v-if="admin!=null"> <!--Neu co admin-->
                <v-card-text>
                  <h6>Xin Chào</h6>
                  <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="35">
                    <img src="https://avatars.githubusercontent.com/u/106596859?v=4" alt="" v-if="admin!=null">
                  </v-avatar>
                  <h6>{{admin.email}}</h6>
                  <v-divider></v-divider>
                  <div class="text-start">
                    <p>Liên hệ mạng xã hội</p>
                    <i class="fs-17 fab fa-facebook text-primary"></i>
                    <i class="fs-17 fas fa-mail-bulk ml-2 text-dark"></i>
                    <i class="fs-17 fab fa-instagram ml-2 text-danger"></i>
                  </div>
                  <div class="text-start mt-2">
                    <p>Quản lý hồ sơ admin</p>
                    <button class="btn text-primary border font-weight-light">Thay đổi mật khẩu</button>
                    <button class="btn text-primary border font-weight-light my-1">Lập báo cáo</button>
                    <button class="btn text-primary border font-weight-light ml-1">Thông báo <span class="badge badge-danger">4</span></button>
                    <button class="btn text-primary border font-weight-light mt-1">Lịch công tác - họp <span class="badge badge-danger">1</span></button>
                  </div>
                </v-card-text>
                <v-card-text>
                  
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-center">
                  <div v-if="admin!=null" class="text-end">
                    <v-btn class="ma-2 text-decoration-none text-danger" outlined @click="logOut()">Đăng Xuất </v-btn>
                  </div>
                  <v-btn v-if="admin==null" class="ma-2 text-decoration-none text-white" outlined to="/login">Đăng Nhập</v-btn>
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
        {title: 'QUẢN LÝ KHÁCH HÀNG', link:'/client-manager'}
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
<style>
.fs-17{
  font-size: 25px;
}
</style>