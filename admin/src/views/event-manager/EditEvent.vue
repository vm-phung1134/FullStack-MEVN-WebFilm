<template>
    <div class="container">
        <div class="my-md-2 p-md-5">
           <form class="shadow-content p-4" @submit.prevent="updateEvent()">
                <div>
                    <h4 class="text-cinema text-center mt-md-1">CẬP NHẬT SỰ KIỆN</h4>
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

                <button type="submit" class="btn btn-cinema mr-2">Cập nhật sự kiện</button>
                <button type="submit" class="btn btn-cinema" @click="deleteEvent()">Xóa sự kiện</button>
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
        async created() {
            const response = await APIEvent.findOne(this.$route.params.id);
            this.event = response;
        },
        methods: {
            async updateEvent(){
                try{
                    await APIEvent.update(this.$route.params.id, this.event);
                    this.$router.push('/event-manager')
                    alert('Đã cập nhật thành công!!!');
                }catch(e){
                    console.log(e);
                }
            },
            async deleteEvent(){
                try{
                    await APIEvent.delete(this.$route.params.id);
                    this.$router.push('/event-manager')
                    alert('Đã xóa thành công!!!');
                }catch(e){
                    console.log(e);
                }
            },
        }
    }
</script>
<style>
</style>