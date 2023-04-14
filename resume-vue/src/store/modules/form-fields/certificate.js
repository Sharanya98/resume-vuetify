import { getField, updateField } from 'vuex-map-fields';


import { Certificate } from '../../../models/Certificates';

const mutations = {
  updateField,
  addcertificate(state,payload){
    state.rows.push(payload)
  }
};

const getters = {
  getField,

};

const state = () => ({
  rows: [new Certificate()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};