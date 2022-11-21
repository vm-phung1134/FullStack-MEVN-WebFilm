<template>
    <div class="container font-weight-light">
        <div class="my-md-2 p-md-5">
           <form class="shadow-content p-4" @submit.prevent="createBlog()">
                <div>
                    <h4 class="text-cinema text-center mt-md-1">THÊM BLOG ĐIỆN ẢNH</h4>
                    <div class="d-flex justify-content-center">
                        <img class="" src="https://pngimg.com/uploads/christmas/christmas_PNG17215.png" alt="" width="200px">
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Tiêu đề Blog</label>
                    <input v-model="blog.title" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Hình ảnh 1</label>
                    <input v-model="blog.image" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Hình ảnh 2</label>
                    <input v-model="blog.image2" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Nội dung chính</label>
                    <textarea v-model="blog.maincontent" type="text" class="form-control" style="height: 200px"></textarea>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Nội dung thứ 1</label>
                    <textarea v-model="blog.content1" type="text" class="form-control" style="height: 200px"></textarea>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Nội dung thứ 2</label>
                    <textarea v-model="blog.content2" type="text" class="form-control" style="height: 200px"></textarea>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Lượt like</label>
                    <input v-model="blog.like" type="number" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Lượt xem</label>
                    <input v-model="blog.seen" type="number" class="form-control">
                </div>
                <div class="mb-3">
                    <label  class="form-label">Tags</label>
                    <input v-model="blog.tags" type="text" class="form-control">
                </div>
                <button type="submit" class="btn btn-cinema">Thêm mới blog</button>
            </form> 
        </div>
        
    </div>
</template>
<script>
    import APIBlog from '../../api/api_blog'
    export default {
        data: () => (
            {
            blog:{
                title: '',
                image: '',
                image2: '',
                maincontent: '',
                content1: '',
                content2: '',
                like: '',
                seen: '',
                tags: '',
            }
            
        }),
        methods: {
            async createBlog(){
            try{
                await APIBlog.create(this.blog);
                this.blog = "";
                alert('Đã thêm 1 blog vào hệ thống');
            }catch(e){
                console.log(e);
            }
        }
        }
    }
</script>
<style>
</style>