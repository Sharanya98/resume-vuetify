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
                                            <v-label class="label pb-2 font-weight-bold">Company Name</v-label>
                                            <v-text-field v-model="companyName" variant="outlined" clearable
                                                label="Company Name" required></v-text-field>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold ">Position</v-label>
                                            <v-text-field v-model="position" variant="outlined" clearable label="Position"
                                                required></v-text-field>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Year</v-label>
                                            <v-text-field v-model="startYear" variant="outlined" clearable label="YYYY"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Month </v-label>
                                            <v-text-field v-model="startMonth" variant="outlined" clearable label="MM"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="">
                                        <v-col cols="1" md="1">

                                            <v-btn @click="addWork">add</v-btn>
                                            
                                        </v-col>

                                    </v-row>



                                </v-container>
                            </v-form>
                        </v-sheet>
                    </v-col>
                    <v-col cols="4" sm="4">
                        <WorkList :workProp="work" />
                    </v-col>


                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import WorkList from './WorkList.vue'
import { mapState, mapActions } from 'vuex';

export default {
    data: () => ({

        workfield: {
            companyName: '',
            position: '',
            startdate: '',
            enddate: ''
        }
    }),
    components: {
        WorkList
    },
    computed: {
        ...mapState(['work']),
        WorkData() {
            return {
                value: {
                    companyName: this.companyName,
                    position: this.position,
                    startYear: this.startYear,
                    startMonth: this.startMonth
                }
            }
        }
    },
    created(){
        this.getWork()
    },
    methods:{
        addWork(){
            this.$store.dispatch('addWork',this.WorkData)
            console.log("work value", this.workData)
        },
        ...mapActions(['getWork'])
    }
}
</script>
