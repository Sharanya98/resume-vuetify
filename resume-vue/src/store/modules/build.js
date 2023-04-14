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
import experience from "./form-fields/experience";
import skill from "./form-fields/skill";
import activity from "./form-fields/activity";
import sport from "./form-fields/sport";
import certificate from "./form-fields/certificate";

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
        programming_lanuage : state.other.rows[0].programming_lanuage,
        education : state.education.rows[1],
        experience : state.experience.rows[1],
        skill : state.skill.rows[1],
        activity : state.activity.rows[1],
        sports : state.sport.rows[1],
        certificate : state.certificate.rows[1],
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
 
  
 
});
const getters = {
 
};
const modules = {
  address,
  name,
  other,
  education,
  experience,
  skill,
  activity,
  sport,
  certificate
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
export const { mapMultiRowFields: mapExperienceFields } = createHelpers({
  getterType: `profile/experience/getField`,
  mutationType: `profile/experience/updateField`, 
});
export const { mapMultiRowFields: mapSkillFields } = createHelpers({
  getterType: `profile/skill/getField`,
  mutationType: `profile/skill/updateField`, 
});
export const { mapMultiRowFields: mapActivityFields } = createHelpers({
  getterType: `profile/activity/getField`,
  mutationType: `profile/activity/updateField`, 
});
export const { mapMultiRowFields: mapSportFields } = createHelpers({
  getterType: `profile/sport/getField`,
  mutationType: `profile/sport/updateField`, 
});
export const { mapMultiRowFields: mapCertificateFields } = createHelpers({
  getterType: `profile/certificate/getField`,
  mutationType: `profile/certificate/updateField`, 
});



export const profile = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
  getters
};
