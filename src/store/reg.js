import apiRequest from "/utils/apiRequest";
import router from "@/router";


export default {
    namespaced: true,
    state: {
        status: false,
        key: null,
    },
    getters: {
        getStatuss: state => {
            return state.status;
        },
    },
    mutations: {
        SET_STATUS(state, status) {
            state.status = status;
        },

    },
    actions: {
        registration({commit}, data) {
            return new Promise((resolve, reject) => {
                this.state.key = Date.now() + data.username + data.password
                apiRequest
                    .post('/registration/', {username: data.username, password: data.password, key: this.state.key})
                    .then(response => {
                        console.log(response)
                        if (response.data.status === 'success') {
                            commit('SET_STATUS', true)
                            resolve();
                        }
                        if (response.data.status === 'fail') {
                            alert(response.data.data.username)
                            reject(response.data.data.username);
                        }
                    })
                    .catch((error) => {
                        alert("Что то пошло не так!!!")
                        reject(error);
                    });
            });
        },

        confirm({commit}, data) {
            return new Promise((resolve, reject) => {
                apiRequest
                    .post('/registration/confirm/', {code: data.code, key: this.state.key})
                    .then(response => {
                        console.log(response)
                        if (response.data.status === 'success') {
                            const data = response.data.data;
                            commit('auth/SET_TOKEN', data, {root: true});
                            commit('auth/SET_AUTHORIZED_STATUS', true, {root: true});
                            commit('SET_STATUS', false)
                            router.push({name: 'user'})
                            alert('Вы зарегистрированны!')
                            resolve();
                        }
                    })
                    .catch((error) => {
                        alert("Что то пошло не так!!!")
                        reject(error);
                    });
            });
        },

        resetPassword({commit}, data) {
            return new Promise((resolve, reject) => {
                this.state.key = Date.now() + data.username + data.password
                apiRequest
                    .post('/reset/password/', {username: data.username, password: data.password, key: this.state.key})
                    .then(response => {
                        console.log(response)
                        if (response.data.status === 'success') {
                            commit('SET_STATUS', true)
                            resolve();
                        }
                        if (response.data.status === 'fail') {
                            alert(response.data.data.username)
                            reject(response.data.data.username);
                        }
                    })
                    .catch((error) => {
                        alert("Что то пошло не так!!!")
                        reject(error);
                    });
            });
        },

        resetConfirm({commit}, data) {
            return new Promise((resolve, reject) => {
                apiRequest
                    .post('/reset/password/confirm/', {code: data.code, key: this.state.key})
                    .then(response => {
                        console.log(response)
                        if (response.data.status === 'success') {
                            commit('SET_STATUS', false)
                            router.push({name: 'user'})
                            alert('Вы сменили пароль!')
                            resolve();
                        }
                    })
                    .catch((error) => {
                        alert("Что то пошло не так!!!")
                        reject(error);
                    });
            });
        },

    },
};