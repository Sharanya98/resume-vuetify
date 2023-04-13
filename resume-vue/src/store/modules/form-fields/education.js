import { getField, updateField } from 'vuex-map-fields';


import { Education } from '../../../models/Education';

const mutations = {
  updateField,
  addmore(state){
    state.rows.push(new Education())
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