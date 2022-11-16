<template>
    <div class="ml-5 bg-white rounded">
        <input class="input-outline p-2" 
            v-model="searchValue"
            @keyup.enter="submit" 
            type="text" 
            placeholder="Nhập tên phim">
            <router-link :to="{name: 'search-view',params: {title: searchValue}}">
                <button class="btn" @click="submit">
                <i class="fas fa-search"></i></button>
            </router-link>
        
    </div>
</template>
<script>
    export default{
        data: ()=>{
            return{
                searchValue: '',
            }
        },
        methods:{
    
            submit(){
                console.log(this.searchValue);
            }
        }
    }
</script>

