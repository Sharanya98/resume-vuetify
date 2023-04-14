import { getField, updateField } from 'vuex-map-fields';


import { Education } from '../../../models/Education';

const mutations = {
  updateField,
  addmore(state,payload){
    state.rows.push(payload)
  }
};

const getters = {
  getField,

};

const state = () => ({
  rows: [new Education()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};