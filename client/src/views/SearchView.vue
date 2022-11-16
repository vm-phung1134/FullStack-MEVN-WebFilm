<template>
    <div class="container">
        <div>
            <h4 class="">KẾT QUẢ TÌM KIẾM</h4>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col">
                <img :src="`${film.image}`" alt="" width="280px">
            </div>
        </div>
    </div>
</template>
<script>
import API from '../api/api_film'
    export default {
    data() {
        return {
            film: {},
            selected_1: "",
            selected_2: "",
        };
    },
    async created() {
        const response = await API.findName(this.$route.params.name);
        console.log(this.$route.params.name)
        this.film = response;
    }
}
    
</script>