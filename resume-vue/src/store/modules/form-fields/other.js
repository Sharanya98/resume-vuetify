import { getField, updateField } from 'vuex-map-fields';

import { Other } from '../../../models/Other';

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
    rows : [new Other()],
    
   
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};