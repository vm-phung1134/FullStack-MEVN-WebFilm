<template>
    <div class="container font-weight-light">
        <div class="my-md-2 p-md-5">
           <form class="shadow-content p-4 font-label" @submit.prevent="createEvent()">
                <div>
                    <h4 class="text-cinema text-center mt-md-1 font-weight-light">THÊM MỚI SỰ KIỆN</h4>
                    <div class="d-flex justify-content-center">
                        <img class="" src="https://pngimg.com/uploads/christmas/christmas_PNG17215.png" alt="" width="200px">
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Tiêu đề sự kiện</label>
                    <input v-model="event.title" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Hình ảnh poster</label>
                    <input v-model="event.img" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Hình ảnh nội dung</label>
                    <input v-model="event.img2" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Nội dung chính</label>
                    <textarea v-model="event.maincontent" class="form-control" style="height: 150px"></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Nội dung thứ 1</label>
                    <textarea v-model="event.content1" class="form-control" style="height: 150px"></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Nội dung thứ 2</label>
                    <textarea v-model="event.content2" class="form-control" style="height: 150px"></textarea>
                </div>

                <button type="submit" class="btn btn-cinema">Thêm mới sự kiện</button>
            </form> 
        </div>
        
    </div>
</template>
<script>
    import APIEvent from '../../api/api_event'
    export default {
        data: () => (
            {
            event:{
                title: '',
                img: '',
                maincontent:'',
                content1:'',
                content2: '',
                img2: '',
            },
            
        }),
        methods: {
            async createEvent(){
            try{
                await APIEvent.create(this.event);
                this.event = "";
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