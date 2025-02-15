const App = {
    data() {
        return {
            entr:'Ввод',
            inValue: '',
            inPoto: 'Введите название фото',
            
            images: ['svadba.jpg', 'свадьба 2.jpg', 'свадьба 3.jpg', 'свадьба 4.jpg', 'свадьба 5.jpg', 'свадьба 6.jpg', 'свадьба 7.jpg', 'свадьба 8.jpg', 'свадьба 9.jpg', 'свадьба 10.jpg', 'свадьба 11.jpg', 'свадьба 12.jpg', 'свадьба 13.jpg','свадьба 14.jpg', 'свадьба 15.jpg', 'свадьба 16.jpg','свадьба 17.jpg','свадьба 18.jpg','свадьба 19.jpg'],
        };
    },
    methods: {
       /* pastePoto(event) {
            this.inValue = event.target.value
        },*/
        entrPoto(){
           this.images.push(this.inValue)
        }
    }
}

Vue.createApp(App).mount('#app')


