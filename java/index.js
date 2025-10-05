const App = {
    data() {
        return {
            entr: 'Ввод',
            inValue: '',
            inDesc: '',
            inPoto: 'Введите название фото',
            desc: 'Введите описание фото',
            entrTu: 'Ввод',
            inValueTu: '',
            inDescTu: '',
            inPoto: 'Введите название фото',
            desc: 'Введите описание фото',
            images: [
                { fileName: 'DSCN0745.JPG', fileDesc: 'Серебряный ключ,Голубое озеро' }, { fileName: 'DSCN0665.JPG', fileDesc: 'Святой источник 2015' },
                { fileName: 'DSCN0664.JPG', fileDesc: 'Святой источник 2015' }, { fileName: 'DSCN0667.JPG', fileDesc: 'Святой источник,колокол желаний' },
                { fileName: 'DSCN0668.JPG', fileDesc: 'Святой источник,колокол желаний' }, { fileName: 'IMG_20150607_193425.jpg', fileDesc: 'Ляличи 2015' },
                { fileName: '20180922_143911.jpg', fileDesc: 'Ляличи 2018' }, { fileName: '20180922_143920.jpg', fileDesc: 'Ляличи 2018 Насте 6 лет' },
                { fileName: 'Изображение 044.jpg', fileDesc: 'Природа, шашлыки, Добрик' }, { fileName: 'IMG_20160105_162018.jpg', fileDesc: 'Зима 2016' },
                { fileName: '20180208_135307.jpg', fileDesc: 'Зима 2018' }, { fileName: '20180422_210826.jpg', fileDesc: 'Кафе <<Весна>> 2018' },
                { fileName: '20181020_113523.jpg', fileDesc: 'Мисс, осень 2018' }, { fileName: '20181020_132123.jpg', fileDesc: 'Мисс и Миссис, осень 2018 ' },
                { fileName: '20180408_170427.jpg', fileDesc: 'Весна 2018' }, { fileName: '20190622_000630.jpg', fileDesc: 'Криница 2019' },
                { fileName: 'IMG_20200308_111327.jpg', fileDesc: 'Восьмое мартa' }, { fileName: 'IMG_20210117_140740.jpg', fileDesc: 'Зима 2021 София' }


            ],
            imagesTu: [
                { fileName: 'свадьба 7.JPG', fileDesc: 'ЗАГС Унеча' }, { fileName: 'свадьба 11.JPG', fileDesc: 'ЗАГС Унеча' },
                { fileName: 'свадьба 10.JPG', fileDesc: 'ЗАГС Унеча' }, { fileName: 'свадьба 9.JPG', fileDesc: 'ЗАГС Унеча' },
                { fileName: '20160624_123319.jpg', fileDesc: 'Венчание, церьковь в Белогорщи' },{ fileName: '20160624_123332.jpg', fileDesc: 'Венчание, церьковь в Белогорщи' },
                { fileName: '20160624_123402.JPG', fileDesc: 'Венчание, церьковь в Белогорщи' }, { fileName: '20160624_123437.jpg', fileDesc: 'Ольга,Диана и Арсений.' },
                 { fileName: '20160624_123447.jpg', fileDesc: 'Венчание, церьковь в Белогорщи' },
                { fileName: '20160624_124950.jpg', fileDesc: 'Венчание, церьковь в Белогорщи' }, { fileName: '20160624_124924.jpg', fileDesc: 'Венчание, церьковь в Белогорщи' },
                { fileName: '20160624_132852.jpg', fileDesc: 'Венчание в Белогорщи' }, { fileName: '20160624_133015.jpg', fileDesc: 'Венчание в Белогорщи' },
                { fileName: '20160624_133044.jpg', fileDesc: 'Венчание в Белогорщи' }, { fileName: '20160624_133115.jpg', fileDesc: 'Венчание в Белогорщи' }


            ],
            imagesThree: [
                { fileName: 'DSCF3611.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3618.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3683.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3686.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3688.jpg', fileDesc: 'Сочи 2025' },{ fileName: 'DSCF3690.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3700.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3701.jpg', fileDesc: 'Сочи 2025' },
                 { fileName: 'DSCF3725.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3728.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3735.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3736.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3746.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3749.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3799.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3566.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3866.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3867.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3868.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4001.jpg', fileDesc: 'Сочи 2025' },{ fileName: 'DSCF4044.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4097.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4098.jpg', fileDesc: 'Сочи 2025' },
                 { fileName: 'DSCF4100.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4109.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4113.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4148.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4156.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4174.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4180.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3805.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3808.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3811.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3826.jpg', fileDesc: 'Сочи 2025' }


            ],
            imagesFour: [
                { fileName: 'DSCF3611.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3618.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3683.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3686.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3688.jpg', fileDesc: 'Сочи 2025' },{ fileName: 'DSCF3690.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3700.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3701.jpg', fileDesc: 'Сочи 2025' },
                 { fileName: 'DSCF3725.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3728.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3735.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3736.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3746.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3749.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3799.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3566.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3866.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3867.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3868.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4001.jpg', fileDesc: 'Сочи 2025' },{ fileName: 'DSCF4044.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4097.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4098.jpg', fileDesc: 'Сочи 2025' },
                 { fileName: 'DSCF4100.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4109.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4113.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4148.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4156.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4174.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4180.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3805.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3808.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3811.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3826.jpg', fileDesc: 'Сочи 2025' }


            ]
            ,
            imagesFive: [
                 { fileName: '2.mp4', fileDesc: 'концерт щерс' },
                { fileName: 'DSCF3683.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3686.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3688.jpg', fileDesc: 'Сочи 2025' },{ fileName: 'DSCF3690.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3700.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3701.jpg', fileDesc: 'Сочи 2025' },
                 { fileName: 'DSCF3725.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3728.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3735.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3736.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3746.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3749.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3799.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3566.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3866.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3867.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3868.JPG', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4001.jpg', fileDesc: 'Сочи 2025' },{ fileName: 'DSCF4044.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4097.JPG', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4098.jpg', fileDesc: 'Сочи 2025' },
                 { fileName: 'DSCF4100.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4109.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4113.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4148.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4156.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF4174.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF4180.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3805.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3808.jpg', fileDesc: 'Сочи 2025' },
                { fileName: 'DSCF3811.jpg', fileDesc: 'Сочи 2025' }, { fileName: 'DSCF3826.jpg', fileDesc: 'Сочи 2025' }


            ]

        };
    },
    methods: {
        pastePoto(event) {
            this.inValue = event.target.value

        },
        pastePotoDesc(event) {
            this.inDesc = event.target.value

        },
        entrPoto() {
            this.images.push({ fileName: this.inValue, fileDesc: this.inDesc })
        },
        pastePotoTu(event) {
            this.inValueTu = event.target.files[0].name

        },
        pastePotoDescTu(event) {
            this.inDescTu = event.target.value

        },
        entrPotoTu() {
            this.imagesTu.push({ fileName: this.inValueTu, fileDesc: this.inDescTu })
        },

    }
}

Vue.createApp(App).mount('#app')


