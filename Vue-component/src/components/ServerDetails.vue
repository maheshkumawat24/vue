<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{status}}</p>
    </div>
</template>
<script>
    import {eventBus} from '../main.js';
    export default {
        data: function() {
            return {
                status: ''
            }
        },
        created() {
            eventBus.$on('serverClicked', (data)=> {
                this.status = data.status;
            })
        }
    }
</script>