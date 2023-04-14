import { getField, updateField } from 'vuex-map-fields';


import { Activity } from '../../../models/Activitys';

const mutations = {
  updateField,
  addactivity(state,payload){
    state.rows.push(payload)
  }
};

const getters = {
  getField,

};

const state = () => ({
  rows: [new Activity()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};