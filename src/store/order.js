import apiRequest from "/utils/apiRequest";

const WS_URL = process.env.VUE_APP_WS_URL;

export default {
    namespaced: true,
    state: {
        websocket: '',
        allFreeOrders: '',
        ordersHistory: '',
        statistic: '',
        order: ""
    },

    getters: {
        getAllFreeOrders: state => {
            return state.allFreeOrders;
        },
        getOrdersHistory: state => {
            return state.ordersHistory;
        },
        getStatistic: state => {
            return state.statistic;
        },
        getOrder: state => {
            return state.order;
        },

    },

    mutations: {
        SET_ALL_FREE_ORDERS(state, allFreeOrders) {
            state.allFreeOrders = allFreeOrders
        },
        SET_NEW_ORDERS(state, order) {
            state.allFreeOrders.push(order)
        },
        REMOVE_SOME_ORDERS(state, allFreeOrders) {
            state.allFreeOrders = allFreeOrders
        },
        SET_HISTORY(state, ordersHistory) {
            state.ordersHistory = ordersHistory
        },
        SET_STATISTIC(state, statistic) {
            state.statistic = statistic
        },
        SET_ORDER(state, statistic) {
            state.statistic = statistic
        },

    },

    actions: {
        webSocket({state}) {
            state.websocket = new WebSocket(`${WS_URL}`);
            state.websocket.onopen = (e) => {
                console.log(e)
                console.log(state.websocket);

            };
            state.websocket.onmessage = (e) => {
                console.log(e)
                console.log(state.websocket);
            }
        },

        sendOrder({state}, order) {
            let orderJson = JSON.stringify(order)
            console.log(state.websocket);
            state.websocket.send(orderJson);
        },

        async getFreeOrders({commit}) {
            await new Promise((resolve) => {
                apiRequest
                    .get('/free/order/')
                    .then(res => {
                        commit('SET_ALL_FREE_ORDERS', res.data)
                        resolve()
                    })
            })
        },


        async getStatistic({commit}) {
            await new Promise((resolve) => {
                apiRequest
                    .get('/report/')
                    .then(res => {
                        commit('SET_STATISTIC', res.data)
                        resolve()
                    })
            })
        },

        async getHistory({commit}) {
            await new Promise((resolve) => {
                apiRequest
                    .get('/driver/history/')
                    .then(res => {
                        commit('SET_HISTORY', res.data)
                        resolve()
                    })
            })
        },

        async getCars({commit}) {
            await new Promise((resolve) => {
                apiRequest
                    .get('/admin/car/')
                    .then(res => {
                        commit('SET_ALL_CARS', res.data)
                        resolve()
                    })
            })
        },
    },

};