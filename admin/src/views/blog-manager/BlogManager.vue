<template>
    <div class="container">
        <h4 class="mt-3 text-cinema text-center">QUẢN LÝ BlOG ĐIỆN ẢNH</h4>
            <div>
                <router-link :to="{name: 'add-blog'}">
                    <button class="btn hover-btn rounded-circle btn-add"><i class="fas fa-plus-circle"></i></button>
                </router-link>
            </div>
            <div v-for="blog in blogs" :key="blog._id" class="p-md-3">
                <div class="row mb-3 shadow-content">
                    <div class="col-4">
                        <img :src="`${blog.image}`"  width="230" height="150">
                    </div>
                    <div class="col-8">
                        <h5 class="text-dark text-decoration-none">{{blog.title}}</h5>
                        <small>{{blog.maincontent}}</small>
                        <div class="mt-4">
                            <router-link :to="{name: 'edit-blog', params: {id: blog._id}}">
                                <button class="btn btn-cinema mr-2">Cập Nhật Blog</button>   
                            </router-link>
                            <button @click="deleteBlog(blog._id)" class="btn btn-cinema">Xóa Blog</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import APIBlog from '../../api/api_blog';
export default{
    data() {
        return {
            blogs:[]
        }
    },
    async created() {
        this.blogs = await APIBlog.findAll();
    },
    methods: {
        async deleteBlog(id){
                try{
                    await APIBlog.delete(id);
                    this.$router.push('/blog-manager')
                    alert('Đã xóa thành công!!!');
                }catch(e){
                    console.log(e);
                }
            },
    }
}
</script>