<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>




                    <v-col cols="8" sm="8">
                        <v-sheet min-height="100vh" rounded="lg">
                            <v-form v-model="valid">
                                <v-container>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Institute Name</v-label>
                                            <v-text-field v-model="educationField.schoolName" variant="outlined" clearable
                                                label="Institute Name" required></v-text-field>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="8" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Degree</v-label>
                                            <v-combobox v-model="educationField.degreevalues" :items="degree"
                                                label="Please Select" clearable></v-combobox>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Year</v-label>
                                            <v-text-field v-model="educationField.startYear" variant="outlined" clearable
                                                label="YYYY" required></v-text-field>
                                        </v-col>
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Month</v-label>
                                            <v-text-field v-model="educationField.startMonth" variant="outlined" clearable
                                                label="MM" required></v-text-field>
                                        </v-col>

                                    </v-row>
                                  
                                    <v-row class="">
                                        <v-col cols="1" md="1">

                                            <v-btn @click="addEducation">add</v-btn>


                                        </v-col>

                                    </v-row>
                                    <v-row class="flex justify-start pa-4">
                                        
                                        <v-btn @click="addPersonalData" color="deep-purple-accent-2" size="large">Add Data</v-btn>
                                    </v-row>


                                </v-container>
                            </v-form>


                        </v-sheet>

                    </v-col>
                    <v-col cols="4" sm="4">
                        <div v-if="activate">
                            <v-container>
                                <v-card class="mx-auto mb-4" max-width="344" v-for="(item, index) in educationField"
                                    :key="index">

                                    <v-card-item>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>

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
import EducationList from './EducationList.vue'
import { mapState, mapActions } from 'vuex';

export default {
    data: () => ({

        valid: false,
        degree: [
            'Graduate(Phd)', 'Graduate(Ms)', 'Vocational School', 'University'
        ],

        educationField: [{
            schoolName: '',
            degreevalues: '',
            startYear: '',
            startMonth: ''
        }],
        activate: false



    }),

    components: {
        EducationList
    },
    computed: {
        ...mapState(['education']),

        EducationData() {
            return {
                value: {
                    schoolName: this.educationField.schoolName,
                    degree: this.educationField.degreevalues,
                    startYear: this.educationField.startYear,
                    startMonth: this.educationField.startMonth
                }



            }
        },

    },
  
    methods: {
        // addEducation() {

        //     this.$store.dispatch('addEducation',this.EducationData)

        //     console.log("edu value", this.EducationData)

        // },
        addEducation() {
            this.activate = true
            ///code to filter empty string
            // const filterEmptyData = this.educationField.reduce((a, b) => {
            //     const filteredObject = Object.fromEntries(
            //         Object.entries(b).filter(([_, value]) => value !== "")
            //     );
            //     if (Object.keys(filteredObject).length > 0) {
            //         a.push(filteredObject);
            //     }
            //     console.log("a",a)
            //     return a;
            // }, []);
            // console.log("filterEmptyData",filterEmptyData)
            this.educationField.push({

                schoolName: this.EducationData.value.schoolName,
                degree: this.EducationData.value.degree,
                startYear: this.EducationData.value.startYear,
                startMonth: this.EducationData.value.startMonth
            })
            console.log("educationfield", this.educationField)
            console.log("educationdata", this.EducationData)
        },
        deleteEducation(index) {
            this.educationField.splice(index, 1)
            console.log("index", index)
        },
        addPersonalData() {
            this.$store.dispatch('setPersonalData', this.educationField)
            console.log("education  added", this.educationField)
        }




    }
}
</script>
