<template>
    <div class="container font-weight-light">
        <div class="my-md-2 p-md-5">
           <form class="shadow-content p-4 font-label" @submit.prevent="createFilm()">
                <div>
                    <h4 class="text-cinema text-center mt-md-1 font-weight-light">THÊM PHIM MỚI - PHIM ĐANG CHIẾU</h4>
                    <div class="d-flex justify-content-center">
                        <img class="" src="https://pngimg.com/uploads/christmas/christmas_PNG17215.png" alt="" width="200px">
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Tiêu đề phim</label>
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
                <div class="mb-5">
                    <div class="dropdown">
                        <button type="button" class="hover-btn btn border-dark dropdown-toggle w-50" data-toggle="dropdown">
                          Thời gian chiếu
                        </button>
                        <div class="dropdown-menu w-50">
                            <div>
                                <input class="w-100 hover-btn" type="text" placeholder="1">
                                <input class="w-100 hover-btn" type="text" placeholder="2">
                                <input class="w-100 hover-btn" type="text" placeholder="3">
                                <input class="w-100 hover-btn" type="text" placeholder="4">
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-cinema">Thêm mới</button>
            </form> 
        </div>
        
    </div>
</template>
<script>
    import API from '../../api/api_film'
    export default {
        data: () => (
            {
            film:{
                name: '',title: '',image: '', plot: '', actors:'',
                director:'', type: '', country: '', year: '', date: '', duration:'' , hours:[]   
            }
            
        }),
        methods: {
            async createFilm(){
            try{
                await API.create(this.film);
                this.film = "";
                alert('Đã thêm 1 bộ phim vào hệ thống');
            }catch(e){
                console.log(e);
            }
        }
        }
    }
</script>
<style>
</style>