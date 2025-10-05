const App = {
    data() {
        return {
            entr:'Ввод',
            inValue: '',
            inPoto: 'Введите название фото',
            
            images: ['свадьба 4.JPG','свадьба 5.JPG','свадьба 6.JPG','свадьба 7.JPG',],
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


