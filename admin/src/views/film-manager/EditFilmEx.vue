<template>
    <div class="container font-weight-light">
        <div class="my-md-2 p-md-5">
           <form class="shadow-content p-4 font-label" @submit.prevent="updateFilm()">
                <div>
                    <h4 class="text-cinema text-center mt-md-1 font-weight-light">CẬP NHẬT PHIM - PHIM SẮP KHỞI CHIẾU</h4>
                    <div class="d-flex justify-content-center">
                        <img class="" src="https://pngimg.com/uploads/christmas/christmas_PNG17215.png" alt="" width="200px">
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label ">Tiêu đề phim</label> 
                    <input v-model="film.title" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Tên Phim</label>
                    <input v-model="film.name" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Đường dẫn hình ảnh</label>
                    <input v-model="film.image" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Diễn viên</label>
                    <input v-model="film.actors" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Đạo diễn</label>
                    <input v-model="film.director" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Thời lượng phim</label>
                    <input v-model="film.duration" type="number" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Quốc gia</label>
                    <input v-model="film.country" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Năm sản xuất</label>
                    <input v-model="film.year" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Ngày khởi chiếu</label>
                    <input v-model="film.date" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Thể loại</label>
                    <input v-model="film.type" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Tóm tắt phim</label>
                    <textarea v-model="film.plot" class="form-control" style="height: 100px"></textarea>
                </div>
                <button type="submit" class="btn btn-cinema mr-2">Cập Nhật</button>
                <button type="submit" class="btn btn-danger p-2 text-white" @click=" deleteFilm()">Xóa Phim</button>
            </form> 
        </div>
    </div>
</template>
<script>
    import API_Ex from '../../api/api_film_ex'
    export default {
        data: () => (
            {
            film:{
                name: '',title: '',image: '', plot: '', actors:'',
                director:'', type: '', country: '', year: '', date: '', duration:''    
            }
        }),
        async created() {
            const response = await API_Ex.findOne(this.$route.params.id);
            this.film = response;
        },
        methods: {
            async updateFilm(){
                try{
                    await API_Ex.update(this.$route.params.id, this.film);
                    this.$router.push('/film-manager')
                    alert('Đã cập nhật thành công!!!');
                }catch(e){
                    console.log(e);
                }
            },
            async deleteFilm(){
                try{
                    await API_Ex.delete(this.$route.params.id);
                    this.$router.push('/film-manager')
                    alert('Đã xóa thành công!!!');
                }catch(e){
                    console.log(e);
                }
            },
        }
    }
</script>
<style>
.font-label label{
    font-weight: 500;
}
</style>