import axios from "axios";

export default {
    actions: {
        pushHistory(context, data) {

            return new Promise((resolve, reject) => {

                axios
                    .post('http://localhost:9701/api/sun_mi_cars', data)
                    .then((response) => {
                        console.log('체줄되었습니다')
                        console.log(response)

                        context.commit('updateHistory', response)
                        resolve()
                    })
                    .catch(() => {
                        console.log('문제가 있습니다')
                        reject()

                    })
            })
        },

       pushProduct(context, data) {

            return new Promise((resolve, reject) => {

                axios
                    .post('http://localhost:9701/api/products', data)
                    .then((response) => {
                        console.log('등록되었습니다')
                        console.log(response)

                        context.commit('updateProduct', response)
                        resolve()
                    })
                    .catch(() => {
                        console.log('문제가 있습니다')
                        reject()

                    })
            })
        },
        pushCategory(context, data) {

            return new Promise((resolve, reject) => {

                axios
                    .post('http://localhost:9701/api/categories', data)
                    .then((response) => {
                        console.log('등록되었습니다')
                        console.log(response)

                        context.commit('updateCategory', response)
                        resolve()
                    })
                    .catch(() => {
                        console.log('문제가 있습니다')
                        reject()

                    })
            })
        },
        fetchHistory(context) {


            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:9701/api/sun_mi_cars')
                    .then((response) => {
                        console.log('저장된 내용 가져왔습니다')
                        console.log(response)
                        let sun_mi_cars = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }
                        context.commit('updateHistory', sun_mi_cars)
                        resolve()
                    })
                    .catch(() => {
                        console.log('내용 가져오지 못했습니다')

                        reject()
                    })
            })
        },
        fetchProduct(context, categoryId = null) {
            let categoryUrl = ''
            if (categoryUrl !==null) {
                categoryUrl = '?category=' + categoryId
            }

            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:9701/api/products' + categoryUrl)
                    .then((response) => {
                        console.log('저장된 내용 가져왔습니다')
                        console.log(response)
                        let products = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }
                        context.commit('updateProduct', products)
                        resolve()
                    })
                    .catch(() => {
                        console.log('내용 가져오지 못했습니다')

                        reject()
                    })
            })
        },
        fetchCategory(context) {

            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:9701/api/categories')
                    .then((response) => {
                        console.log('저장된 내용 가져왔습니다')
                        console.log(response)
                        let categories = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }
                        context.commit('updateCategory', categories)
                        resolve()
                    })
                    .catch(() => {
                        console.log('내용 가져오지 못했습니다')

                        reject()
                    })
            })
        },

    },


    mutations: {
        updateHistory(state, sun_mi_cars) {
            state.sun_mi_car = sun_mi_cars
        },
        updateProduct(state, products) {
            state.product = products
        }, updateCategory(state, categories) {
            state.category = categories
        },

    },
    state: {
        sun_mi_car: {
            models: [],
            totalItems: 0
        },
        product: {
          models: [],
            totalItems: 0
        },
        category: {
            models: [],
            totalItems: 0
        },
        sun_mi_cars: {
            driverday: null,
            start: null,
            finish: null,
            driverplan: null,
            lastkm: null,
            nextkm: null,
            disel: null,
            fulldrivertime: null,
            drivergoodday: null

        },
        products: {
            byperson: null,
            producttype: null,
            kg: null,
            indate: null,
            outdate: null,
            boxin: null,
            productin: null,
            goodday: null
        },
        categories: {
            name: null,
          },

    },
    getters: {
        getHistory(state) {
            return state.sun_mi_car.models
        },
        getProduct(state) {
            return state.product.models
        },
        getCategory(state) {
            return state.category.models
        },

    }
}