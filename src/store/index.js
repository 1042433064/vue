import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const strict=true;
const state = {
    data:[],
};
const localStoragePlugin = store => {
    store.subscribe((mutation, { todos }) => {
        //state.data=todos;
    })
};

const mutations = {
    setData (state,{data}) {
        state.data = data
    },
    pop(state){
        state.data.pop()
    },
};

export default new Vuex.Store({
    state,
    mutations,
    //plugins: [localStoragePlugin],
    strict
})
