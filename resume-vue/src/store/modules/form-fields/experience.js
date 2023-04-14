import { getField, updateField } from 'vuex-map-fields';


import { Experience } from '../../../models/Experience';

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
  rows: [new Experience()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};