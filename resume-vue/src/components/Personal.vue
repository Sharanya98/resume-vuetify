<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container class="">
                <v-row>
                    <v-col cols="3" sm="2">


                    </v-col>

                    <v-col cols="6" sm="8">
                        <v-sheet min-height="100vh" rounded="lg">
                            <v-form v-model="valid">
                                <v-container>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">First Name</v-label>
                                            <v-text-field v-model="first_name" :rules="nameRules" variant="outlined"
                                                clearable label="First name" required></v-text-field>
                                        </v-col>

                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Last Name</v-label>
                                            <v-text-field v-model="last_name" :rules="nameRules" variant="outlined"
                                                clearable label="Last name" required></v-text-field>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">First Name(Kana)</v-label>
                                            <v-text-field v-model="first_name_kana" :rules="nameRules" variant="outlined"
                                                clearable label="First name" required></v-text-field>
                                        </v-col>

                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Last Name(Kana)</v-label>
                                            <v-text-field v-model="last_name_kana" :rules="nameRules" variant="outlined"
                                                clearable label="Last name" required></v-text-field>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="4">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Gender</v-label>
                                            <v-radio-group v-model="sex" inline>
                                                <v-radio label="Male" value=1></v-radio>
                                                <v-radio label="Female" value=0></v-radio>
                                            </v-radio-group>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">BirthDate</v-label>
                                            <v-text-field v-model="birthday" variant="outlined" clearable label="YYYY-MM-DD"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Nationality</v-label>
                                            <v-text-field v-model="nationality" variant="outlined" clearable
                                                label="Nationality" required></v-text-field>
                                        </v-col>

                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Email</v-label>
                                            <v-text-field v-model="email" variant="outlined" clearable label="Email"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Phone</v-label>
                                            <v-text-field v-model="phone" variant="outlined" clearable label="Phone"
                                                required></v-text-field>
                                        </v-col>

                                    </v-row>

                                    <v-row class="mb-n10">

                                        <v-col cols="4" md="4">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Full_Address</v-label>
                                            <v-text-field v-model="full_address" variant="outlined" clearable
                                                label="Full_Address" required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label
                                                class="text-uppercase pb-2 font-weight-bold">Full_Address_kana</v-label>
                                            <v-text-field v-model="full_address_kana" variant="outlined" clearable
                                                label="Full_Address_kana" required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">ZIP/Postal code</v-label>
                                            <v-text-field v-model="postal_code" variant="outlined" clearable
                                                label="ZIP/Postal code" required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row class="flex justify-start pa-4">

                                        <!-- <v-btn @click="submit" color="deep-purple-accent-2" size="large">Add
                                            Data</v-btn> -->
                                    </v-row>



                                </v-container>
                            </v-form>
                        </v-sheet>
                    </v-col>
                    <v-col cols="3" sm="2">

                    </v-col>


                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
import { createNamespacedHelpers } from 'vuex';
import { SUBMIT } from '../store/action-types';

import store from '../store';

import {
    profile,
    mapAddressFields,
    mapOtherFields,
    mapNameFields,
} from '../store/modules/build';


if (!store.state.profile) store.registerModule(`profile`, profile);

const {
    mapActions: mapProfileActions,
    mapState: mapProfileState,
} = createNamespacedHelpers(`profile`);

// const {
//   mapMutations: mapContactMutations,
// } = createNamespacedHelpers(`customer/contact`);

export default {
    data: () => ({
        valid: false,

        nameRules: [
            value => {
                if (value) return true

                return 'Name is requred.'
            },
            value => {
                if (value?.length <= 10) return true

                return 'Name must be less than 10 characters.'
            },
        ],
        emailRules: [
            value => {
                if (value) return true

                return 'E-mail is requred.'
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true

                return 'E-mail must be valid.'
            },
        ],
    }),
    computed: {


        ...mapProfileState([`error`, `success`]),
        ...mapNameFields([`rows[0].first_name`, `rows[0].last_name`, `rows[0].first_name_kana`, `rows[0].last_name_kana`]),
        ...mapAddressFields([`rows[0].full_address`, `rows[0].full_address_kana`, `rows[0].postal_code`]),
        ...mapOtherFields([`rows[0].sex`, `rows[0].birthday`, `rows[0].nationality`, `rows[0].email`, `rows[0].phone`, `rows[0].bio`, `rows[0].your_motive`, `rows[0].self_PR`, `rows[0].health_status`])

    },
    methods: {

        ...mapProfileActions({
            submit: SUBMIT,
        }),
    }
}
</script>
