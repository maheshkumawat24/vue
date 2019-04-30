new Vue({
    el: "#exercise",
    data: {
        name : 'Mahesh kumar kumawat',
        age: 25,
        imageLink: "https://picsum.photos/id/299/200/300"
    },
    methods: {
        generateRandomNo: function() {
            return Math.random()*10;
        }
    }
})