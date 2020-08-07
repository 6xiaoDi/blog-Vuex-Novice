import Vue from 'vue';
import Vuex from 'vuex';
import * as apis from '@/apis';

Vue.use(Vuex);

let items = [];

let store = new Vuex.Store({
    state: {
        n: 10,
        items
    },

    getters: {
        // 派生数据
        than500(state) {
            return function(price = 0) {
                return state.items.filter( item => item.price > price );
            }
        }
    },

    mutations: {
        changeN(state, payload) {
            // state.n = payload;
            setTimeout(() => {
                state.n = payload;
            }, 1000);
        },

        // mutations 中的函数不对异步代码进行处理
        addItem(state, payload) {
            state.items.unshift(payload);
        },

        async updateItems(state, payload) {
            let rs = await apis.getItems(payload);
            state.items = rs.data;
        },
    },

    actions: {
        async addItem(store, payload) {
            let rs = await apis.postItem(payload);
            if (!rs.data.code) {
                // action 里面不能直接处理state
                // state.items.unshift(rs.data.data);
                store.commit('addItem', rs.data.data);
            }
            return rs;
        }
    }
});


export default store;