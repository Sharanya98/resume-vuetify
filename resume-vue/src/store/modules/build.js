import { createHelpers } from "vuex-map-fields";

// The API util is used to send the
// data the user enters to our server.
import api from "../../utils/api";

import { createProfile } from "../../models/Profile";
import { createRequest } from "../../models/Request";
import { SUBMIT } from "../action-types";
import { ERROR, SUCCESS } from "../mutation-types";
import { getField, updateField } from 'vuex-map-fields';

import address from "./form-fields/address";

import name from "./form-fields/name";

import other from "./form-fields/other";
import education from "./form-fields/education";

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const profileData = createProfile({
        // We take only the first row here
        // because the user is not allowed
        // to enter more than one address
        // (or name).
        address: state.address.rows[0],
        // Because we allow the user to enter
        // multiple contacts, we're sending
        // all rows to the API.

        name: state.name.rows[0],
        sex: state.other.rows[0].sex,
        birthday: state.other.rows[0].birthday,
        nationality: state.other.rows[0].nationality,
        email: state.other.rows[0].email,
        phone: state.other.rows[0].phone,
        bio: state.other.rows[0].bio,
        your_motive: state.other.rows[0].your_motive,
        self_PR: state.other.rows[0].self_PR,
        health_status: state.other.rows[0].health_status,
        education : state.education.rows
      });
      const requestData = createRequest(profileData);

      await api(requestData);

      commit(SUCCESS);
    } catch (error) {
      commit(ERROR, error.message);
    }
  },
};

const mutations = {
  [ERROR](state, error) {
    // eslint-disable-next-line no-param-reassign
    state.error = error;
    // eslint-disable-next-line no-param-reassign
    state.success = false;
  },
  [SUCCESS](state) {
    // eslint-disable-next-line no-param-reassign
    state.error = false;
    // eslint-disable-next-line no-param-reassign
    state.success = true;
  },
 
  
};

const state = () => ({
  error: false,
  success: false,
  education :[]
  
 
});
const getters = {
 
};
const modules = {
  address,
//   contact,
  name,
  other,
  education
};

export const { mapFields: mapAddressFields } = createHelpers({
  getterType: `profile/address/getField`,
  mutationType: `profile/address/updateField`,
});
export const { mapFields: mapNameFields } = createHelpers({
  getterType: `profile/name/getField`,
  mutationType: `profile/name/updateField`,
});
export const { mapFields: mapOtherFields } = createHelpers({
  getterType:  `profile/other/getField`,
  mutationType: `profile/other/updateField`,
});
export const { mapMultiRowFields: mapEducationFields } = createHelpers({
  getterType: `profile/education/getField`,
  mutationType: `profile/education/updateField`,
});


export const profile = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
  getters
};
