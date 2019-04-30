new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function() {
                alert('Hey alert here');
            },
            inputHandler: function(event) {
                this.value = event.target.value;
            }
        }
    });