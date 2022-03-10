import apiRequest from "/utils/apiRequest";



export default {
    namespaced: true,
    state: {
        driver: '',
        cars: '',
        colors: '',
        location: ''
    },

    getters: {
        getDriverInfo: state => {
            return state.driver;
        },
        getAllCars: state => {
            return state.cars;
        },
        getAllColors: state => {
            return state.colors;
        },
        getDriverLocation: state => {
            return state.location;
        },
    },

    mutations: {
        SET_DRIVER_INFO(state, driver) {
            state.driver = driver
        },
        SET_ALL_CARS(state, cars) {
            state.cars = cars
        },
        SET_ALL_COLORS(state, allFreeOrders) {
            state.colors = allFreeOrders
        },
        SET_LOCATION(state, location) {
            state.location = location
        },
    },

    actions: {

        async getDriver({commit}) {
            await new Promise((resolve) => {
                apiRequest
                    .get('/driver/info/')
                    .then(res => {
                        console.log(res)
                        commit('SET_DRIVER_INFO', res.data)
                        resolve()
                    })
            })
        },

        async putDriverinfo({dispatch}, newDriverinfo) {
            await new Promise((resolve) => {
                apiRequest
                    .put(`/driver/info/`, newDriverinfo)
                    .then(res => {
                        console.log(res)
                        if (res.data.status === 'success') {
                            dispatch('getDriver')
                            alert("Данные были отредактированы !!! ")
                            resolve()
                        }
                    })
            })
        },

        async getColors({commit}) {
            await new Promise((resolve) => {
                apiRequest
                    .get('/colors/')
                    .then(res => {
                        console.log(res)
                        commit('SET_ALL_COLORS', res.data.data)
                        resolve()
                    })
            })
        },

        async getCars({commit}) {
            await new Promise((resolve) => {
                apiRequest
                    .get('/cars/')
                    .then(res => {
                        console.log(res)
                        commit('SET_ALL_CARS', res.data.data)
                        resolve()
                    })
            })
        },
    },

};