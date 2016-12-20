import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const strict=true;
const state = {
    data:[],
    left:[],
    top:[]
};
const localStoragePlugin = store => {
    store.subscribe((mutation, { todos }) => {
        //state.data=todos;
    })
};

const mutations = {
    changeLeft(state, id) {
        state.left=state.data.filter(v=>v.id===id)
    },

    changeTop (state, id) {
        state.top=state.data.filter(v=>v.id===id);
    },

    setData (state,{data}) {
        state.data = data
    },

    pop(state){
        state.data.pop()
    }
}

export default new Vuex.Store({
    state,
    mutations,
    //plugins: [localStoragePlugin],
    strict
})
