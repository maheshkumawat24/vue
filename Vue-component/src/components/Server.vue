<template>
    <li class="list-group-item" @click="onServerClick">
        Server id is {{serverId.id}} click to view details
    </li>
</template>
<script>
    import {eventBus} from '../main.js';
    export default {
        props: ['serverId'],
        methods: {
            onServerClick() {
                console.log('server clicked');
                eventBus.serverClicked(this.serverId);
            }
        }
    }
</script>
