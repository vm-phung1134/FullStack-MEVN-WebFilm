<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="bg-dark">
      <v-list>
        <v-list-item>
            <v-img src="https://www.galaxycine.vn/website/images/galaxy-logo.png"></v-img>
        </v-list-item>
        <v-list-item >
          <v-list-item-content class="text-white">
            <v-list-item-title class="text-h5">Galaxy Cinema</v-list-item-title>
            <v-list-item-title class="text-h7">3/2 - Hưng Lợi - Cần Thơ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="bg-light"></v-divider> <!--Drawer divider-->
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i" :to="item.link" 
            class="text-decoration-none"
          >
            <v-list-item-icon>
              <v-icon class="text-white" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-white text-uppercase" v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="bg-dark">
      <v-app-bar-nav-icon class="text-white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="text-white ">
        <button class=" p-2s" v-if="user!=null"> <!--neu khong ton tai user-->
          <i class="fas fa-address-book"></i>&ensp;Xin chào - {{user.displayName}}
          <button class="btn btn-outline-danger ml-3" @click="logOut()">Đăng xuất</button>
        </button>
        <button class=" p-2s" v-else-if="user==null"><!--neu co ton tai user-->
          <router-link :to="{ name: 'login'}" class="text-white text-decoration-none" link>
            <i class="fas fa-address-book"></i> &ensp;Đăng nhập 
          </router-link> 
        </button>
      </div>
      <div class="text-white ml-5">
        <button><small>VN&ensp;</small></button>/<button><small>&ensp;EN</small></button>
      </div>
      <div class="text-end">
        
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: "app",
    data: () => ({ 
      drawer: null ,
      user: null,
      items: [
        { title: 'TRANG CHỦ', icon: 'mdi-home-circle', link: '/' },
        { title: 'PHIM DỰ KIẾN', icon: 'mdi-format-list-bulleted', link: '/film-expected' },
        { title: 'Đặt vé', icon: 'mdi-cash-100', link: '/pay-ticket' },
        { title: 'góc điện ảnh', icon: 'mdi-library',link: '/cinema-blog'},
        { title: 'sự kiện', icon: 'mdi-link-variant' ,link: '/event'},
        { title: 'hỗ trợ', icon: 'mdi-headset' , link: '/help'},
      ],
    }),
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
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
  body{
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
  }
</style>