<template>
    <div class="container font-weight-light">
        <div>
            <h4 class="text-center text-cinema mt-md-3 font-weight-light">QUẢN LÝ SỰ KIỆN</h4>
            <div>
                <router-link :to="{name: 'add-event'}">
                    <button class="btn hover-btn rounded-circle btn-add"><i class="fas fa-plus-circle"></i></button>
                </router-link>
            </div>
            <div class="row">
                <div class="col" v-for="event in events" :key="event._id">
                    <router-link :to="{name: 'edit-event', params: {id: event._id}}">
                    <img class="shadow-content" height="380" :src="`${event.img}`">
                    </router-link>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
    import APIEvent from '../../api/api_event'
    export default {
        data: () => (
            {
            events: [],
        }),
        async created() {
            this.events = await APIEvent.findAll()
        },
        methods:{
            
        },
    }
</script>
