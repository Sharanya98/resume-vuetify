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
                                            <v-combobox v-model="educationField.degreevalues" :items="degree" label="Please Select"
                                                clearable></v-combobox>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Year</v-label>
                                            <v-text-field v-model="educationField.startYear" variant="outlined" clearable label="YYYY"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Month</v-label>
                                            <v-text-field v-model="educationField.startMonth" variant="outlined" clearable label="MM"
                                                required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row class="">
                                        <v-col cols="1" md="1">

                                            <v-btn @click="addEducation">add</v-btn>
                                            
                                        </v-col>

                                    </v-row>



                                </v-container>
                            </v-form>

                        </v-sheet>

                    </v-col>
                    <v-col cols="4" sm="4">
                        <EducationList :eduProp="education" />
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
       

        degree: [
            'Graduate(Phd)', 'Graduate(Ms)', 'Vocational School', 'University'
        ],
        
        educationField: {
            schoolName: '',
            degreevalues: '',
            startYear: '',
            startMonth: ''
        }



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
    created() {
        this.getEdu();
    },
    methods: {
        addEducation() {

            this.$store.dispatch('addEducation',this.EducationData)
            
            console.log("edu value", this.EducationData)

        },
        ...mapActions(['getEdu'])
       
        

    }
}
</script>
