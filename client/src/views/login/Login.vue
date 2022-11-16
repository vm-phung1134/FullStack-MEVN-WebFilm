<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container d-flex justify-content-center">
        <div class="mt-5">
            <div class="row d-flex justify-content-center my-4">
              <button class="hover-btn btn text-cinema font-weight-light" @click="ChangeTabs1">ĐĂNG NHẬP</button>&ensp; / &ensp;
              <button class="hover-btn btn text-cinema font-weight-light" @click="ChangeTabs2">ĐĂNG KÝ</button>
            </div>
            <form class="border p-4 w-100 shadow-content" v-if="Tabselected=='login'" @submit.prevent="userLogin">
                <div class="form-group">
                <div class="text-justify d-flex my-4">
                    <small>Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận <br> thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</small>
                </div>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="user.email">
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập mật khẩu" v-model="user.password">
                </div>
                <div class="text-end">
                    <a href="#" class="text-decoration-none text-dark">Quên mật khẩu?</a>
                </div>
                <button type="submit" class="bg-cinema w-100">Đăng Nhập</button>
            
                    <div class="">
                        <button class="border p-2 mt-2 text-login-gg w-100 rounded" data-success="onSignIn">
                       <i class="fab fa-google"></i> Đăng nhập với Google</button>
                    </div>
                    <div >
                        <button class="border p-2 mt-2 text-login-face w-100 rounded"> 
                            
                        <i class="fab fa-facebook"></i> Đăng nhập với Facebook</button>
                    </div>
    
            </form>
            <form class="border p-4 w-100 shadow-content" v-if="Tabselected=='register'" @submit.prevent="userRegistration"> 
                <div class="text-justify d-flex my-4">
                    <small>Vui lòng đăng ký để trở thành thành viên và có cơ hội nhận <br> thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</small>
                </div>
                <div class="form-group">
                    <input type="text" v-model="user.name" class="form-control" id="exampleInputPassword1" placeholder="Họ và tên">
                </div>
                <div class="form-group">
                  <input type="email" v-model="user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>

                <div class="form-group">
                  <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1" placeholder="Nhập mật khẩu">
                </div>
                <div class="text-end">
                    <small class="text-decoration-none text-dark">Tôi đã đọc và đồng ý các CHÍNH SÁCH của chương trình</small>
                </div>
                <button type="submit" class="bg-cinema w-100">Đăng Ký</button>
                
            </form>
        </div>
        
    </div>
</template>
<script>
    import firebase from 'firebase'
    export default{
        data(){
            return {
                Tabselected: 'login',
                user:{
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ChangeTabs1 (){
                this.Tabselected='login'
            },
            ChangeTabs2 (){
                this.Tabselected='register'
            },
            userRegistration() {
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then((res) => {
                    res.user
                    .updateProfile({
                        displayName: this.user.name
                    })
                    .then(() => {
                        this.Tabselected="login"
                    });
                })
                .catch((error) => {
                    alert(error.message);
                });
            },
            userLogin() {
                firebase
                .auth()
                .signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => {
                    this.$router.push('/')
                })
                .catch((error) => {
                    alert(error.message);
                });
            }
        }
    }
</script>
<style>
.text-cinema{
    color: #000000;
}
.hover-btn{
    font-size: 25px;
}
.hover-btn:hover{
    color: #f26B38;
}
.hover-btn:focus{
    box-shadow: none;
    outline: none;
}
.text-login-gg{
    font-size: 15px;
}
.text-login-gg:hover{
    background-color: #e6e6e6;
}
.text-login-face{
    font-size: 15px;
}
.text-login-face:hover{
    background-color: #022c85;
    color: #ffffff;
}
</style>