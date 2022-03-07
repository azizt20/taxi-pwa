import apiRequest from "/utils/apiRequest";
import auth from "@/store/auth";


export default {
    namespaced: true,
    state: {
        status: false,
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
                apiRequest
                    .post('/registration/', {username: data.username, password: data.password, key: "qweqwe"})
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

        confirm(store, data) {
            return new Promise((resolve, reject) => {
                apiRequest
                    .post('/registration/confirm/', {code: data.code, key: "qweqwe"})
                    .then(response => {
                        console.log(response)
                        if (response.data.status === 'success') {
                            const data = response.data.data;
                            auth.commit('auth/SET_TOKEN', data);
                            auth.commit('auth/SET_AUTHORIZED_STATUS', true);
                            alert('Вы зарегистрированны!')
                            resolve();
                        }
                        else {
                            alert('Ошибка')
                            reject()
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