<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
              <!-- <p v-if="success" class="success">
                            SUCCESS!
                        </p>
                        <p v-if="error" class="error">
                            ERROR: {{ error }}
                        </p>  -->
            <v-container>
                <v-row>
                    <v-col cols="8" sm="8">
                        <v-sheet min-height="100vh" rounded="lg">
                            <v-form v-model="valid">
                                <v-container>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Institute Name</v-label>
                                            <v-text-field v-model="education.schoolName" variant="outlined" clearable
                                                label="Institute Name" required></v-text-field>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="8" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Degree</v-label>
                                            <v-combobox v-model="education.degree" :items="degree" label="Please Select"
                                                clearable></v-combobox>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Year</v-label>
                                            <v-text-field v-model="education.startYear" variant="outlined" clearable label="YYYY"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Month</v-label>
                                            <v-text-field v-model="education.startMonth" variant="outlined" clearable label="MM"
                                                required></v-text-field>
                                        </v-col>

                                    </v-row>

                                    <v-row class="">
                                        <v-col cols="1" md="1">

                                            <v-btn @click="addMore">add</v-btn>


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
                <v-col cols="4" sm="4">
                        <div v-if="activate">
                            <v-container>
                                <v-card class="mx-auto mb-4" max-width="344" v-for="(item, index) in education"
                                    :key="index">

                                    <v-card-item>
                                        <v-card-actions>
                                            <v-spacer class="text-uppercase text-center text-h6 font-weight-black" >Education Details</v-spacer>

                                            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete"
                                                @click="deleteEducation"></v-btn>


                                        </v-card-actions>
                                        <v-list>

                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">School Name :</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.schoolName }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Degree :</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.degree }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Start Year :</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.startYear }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Start Month :</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.startMonth }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>



                                        </v-list>

                                    </v-card-item>

                                </v-card>



                            </v-container>
                        </div>

                    </v-col> 


                </v-row>




            </v-container>
        </v-main>
    </v-app>
</template>

<script>

import { createNamespacedHelpers } from 'vuex';
import { SUBMIT } from '../store/action-types';
import store from '../store';
import { profile, mapEducationFields} from '../store/modules/build'





if (!store.state.profile) store.registerModule(`profile`, profile);

const {
    mapActions: mapProfileActions,
    mapState: mapProfileState,
} = createNamespacedHelpers(`profile`);

const {
  mapMutations: mapEducationMutations,
} = createNamespacedHelpers(`profile/education`);


export default {
    data: () => ({

        valid: false,
        degree: [
            'Graduate(Phd)', 'Graduate(Ms)', 'Vocational School', 'University'
        ],

        education: [],
        activate: false



    }),

    computed: {

        ...mapProfileState([`error`, `success`]),
        ...mapEducationFields({education : `rows`}),
        
        
        

        EducationData() {
            return {
                value: {
                    schoolName: this.education.schoolName,
                    degree: this.education.degree,
                    startYear: this.education.startYear,
                    startMonth: this.education.startMonth
                }



            }
        },

    },

    methods: {
        ...mapProfileActions({
            submit: SUBMIT,
        }),
         
       addMore() {
            this.activate = true
            
            this.education.push({

                schoolName:this.EducationData.value.schoolName,
                degree: this.EducationData.value.degree,
                startYear: this.EducationData.value.startYear,
                startMonth: this.EducationData.value.startMonth
            })
            console.log("educationfield", this.education)
            console.log("educationdata", this.EducationData)
            this.$store.commit('profile/education/addmore', this.education)
            
           
            
        },
        deleteEducation(index) {
            this.education.splice(index, 1)
            console.log("index", index)
        },
       



    }
}
</script>
