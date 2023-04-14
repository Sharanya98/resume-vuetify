import { getField, updateField } from 'vuex-map-fields';


import { Sport } from '../../../models/Sports';

const mutations = {
  updateField,
  addsport(state,payload){
    state.rows.push(payload)
  }
};

const getters = {
  getField,

};

const state = () => ({
  rows: [new Sport()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};