import axios  from "axios";

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
                        resolve();
                    })
                    .catch(() => {
                        console.log('문제가 있습니다')
                        reject()

                    })
            })
        },
        searchProducts(context, productId) {

            return new Promise((resolve, reject) => {

                axios
                    
                    .get('http://localhost:9701/api/products?outdate=' + productId)
                    .then((response) => {
                       console.log('날짜 찾았습니다')
                        console.log(response)
                        let productSearchName = {
                                models: response.data['hydra:member'],
                                totalItems: response.data['hydra:totalItems']
                        }


                        context.commit('updateProductSearch', productSearchName)
                        resolve()
                    })
                    .catch(() => {
                        console.log('문제가 있습니다')
                        reject()

                    })
            })
        },
        searchCarInfo(context, sun_mi_carId) {

            return new Promise((resolve, reject) => {

                axios

                    .get('http://localhost:9701/api/sun_mi_cars?driverday=' + sun_mi_carId)
                    .then((response) => {
                       console.log('날짜 찾았습니다')
                        console.log(response) ;

                        let sun_mi_carSearch = {
                                models: response.data['hydra:member'],
                                totalItems: response.data['hydra:totalItems']
                        }


                        context.commit('updateHistorySearch', sun_mi_carSearch)
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
        pushProductCategory(context, data) {

            return new Promise((resolve, reject) => {

                axios
                    .post('http://localhost:9701/api/product_categories', data)
                    .then((response) => {
                        console.log('등록되었습니다')
                        console.log(response)

                        context.commit('updateProductCategory', response)
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
        fetchProductCategory(context) {

            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:9701/api/product_categories')
                    .then((response) => {
                        console.log('저장된 내용 가져왔습니다')
                        console.log(response)
                        let product_categories = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems'],
                        }
                        context.commit('updateProductCategory', product_categories)
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
        updateHistoryEdit(state, sun_mi_cars) {
            state.sun_mi_car = sun_mi_cars
        },
        updateProduct(state, products) {
            state.product = products
        },
        updateProductSearch(state, searchProduct) {
            state.searchProduct = searchProduct
        },
        updateCategory(state, categories) {
            state.category = categories
        },
        updateProductCategory(state, product_categories) {
            state.product_category = product_categories
        },
        updateHistorySearch(state, sun_mi_cars) {
            state.sun_mi_car = sun_mi_cars
        },




    },
    state: {
        sun_mi_car: {
            models: [],
            totalItems: 0
        },
        products: {
          models: [],
            totalItems: 0


        },
        category: {
            models: [],
            totalItems: 0
        },
        product_category: {
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
        product_categories: {
            name: null,
        },
        product: {
            byperson: null,
            producttype: null,
            kg: null,
            indate: null,
            outdate: null,
            boxin: null,
            productin: null,
            goodday: null
        },
        searchProduct: {
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
            name: null
          },


    },
    getters: {
        getHistorySearch(state) {
            return state.sun_mi_car.models
        },
        getHistory(state) {
            return state.sun_mi_car.models
        },
        getProduct(state) {
            return state.product.models
        },
        getProductSearch(state) {
            return state.searchProduct.models
        },
        getCategory(state) {
            return state.category.models
        },
        getProductCategory(state) {
            return state.product_category.models
        },


    },

}