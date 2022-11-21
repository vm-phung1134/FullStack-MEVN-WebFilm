<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container d-flex justify-content-center font-weight-light">
        <form class="w-50 mt-5 border p-3 shadow-content" @submit.prevent="adminLogin()">
            <!-- Email input -->
            <div class="text-center mb-lg-5">
                <h4 class="text-cinema">ĐĂNG NHẬP TRANG QUẢN TRỊ</h4>
                <p>(Dành cho người quản trị viên)</p>
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Email</label>
              <input v-model="admin.email" type="email" id="form2Example1" class="form-control" />
              
            </div>
          
            <!-- Password input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Mật khẩu</label>
              <input v-model="admin.password" type="password" id="form2Example2" class="form-control" />
            </div>
          
            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Ghi nhớ tài khoản</label>
                </div>
              </div>
          
              <div class="col">
                <!-- Simple link -->
                <a href="#" class="text-decoration-none">Quên mật khẩu?</a>
              </div>
            </div>
          
            <!-- Submit button -->
            <button type="submit" class="btn w-100 mb-4 text-white bg-cinema">Đăng Nhập</button>
            
          </form>
    </div>
</template>
<script>
    import firebase from 'firebase'
    export default{
        data(){
            return {
                admin:{
                    email: '',
                    password: ''
                },
                message: 'Tài khoản hoặc mật khẩu chưa đúng'
            }
        },
        methods: {
            adminLogin() {
                firebase
                .auth()
                .signInWithEmailAndPassword(this.admin.email, this.admin.password)
                .then(() => {
                    this.$router.push('/homepage')
                })
                .catch(() => {
                    alert(this.message);
                });
            }
        }
    }
</script>
<style>
.shadow-content{
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19);}
.form-control:focus{
    box-shadow: none;
    border-color: #000000;
}
.text-cinema{
    color: #f26B38;
}
</style>