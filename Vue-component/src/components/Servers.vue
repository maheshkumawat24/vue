<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <template v-for="server in servers">
                <app-server v-bind:key="server.id" :serverId="server"></app-server>
            </template>
        </ul>
    </div>
</template>
<script>
    import Server from './Server.vue';
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'down'}
                ]
            };
        },
        components: {
            'app-server': Server
        }
    }
</script>
