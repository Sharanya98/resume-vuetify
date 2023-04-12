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
                                            <v-text-field v-model="experience.companyName" variant="outlined" clearable
                                                label="Company Name" required></v-text-field>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold ">Position</v-label>
                                            <v-text-field v-model="experience.position" variant="outlined" clearable
                                                label="Position" required></v-text-field>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Year</v-label>
                                            <v-text-field v-model="experience.startYear" variant="outlined" clearable
                                                label="YYYY" required></v-text-field>
                                        </v-col>
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Month </v-label>
                                            <v-text-field v-model="experience.startMonth" variant="outlined" clearable
                                                label="MM" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="">
                                        <v-col cols="1" md="1">

                                            <v-btn @click="addWork">add</v-btn>

                                        </v-col>

                                    </v-row>
                                    <v-row class="flex justify-start pa-4">

                                        <v-btn @click="addPersonalData" color="deep-purple-accent-2" size="large">Add
                                            Data</v-btn>
                                    </v-row>



                                </v-container>
                            </v-form>
                        </v-sheet>
                    </v-col>
                    <v-col cols="4" sm="4">
                        <div v-if="activate">
                            <v-container>
                                <v-card class="mx-auto mb-4" max-width="344" v-for="(item, index) in experience"
                                    :key="index">

                                    <v-card-item>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete"
                                                @click="deleteWork"></v-btn>


                                        </v-card-actions>
                                        <v-list>

                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Company Name :</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.companyName }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Position :</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.position }}</v-list-item-subtitle>
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
import WorkList from './WorkList.vue'
import { mapState, mapActions } from 'vuex';

export default {
    data: () => ({
        valid: false,
        experience: [{
            companyName: '',
            position: '',
            startYear: '',
            startMonth: ''
        }],
        activate: false
    }),
    components: {
        WorkList
    },
    computed: {
        ...mapState(['experience']),
        WorkData() {
            return {
                value: {
                    companyName: this.experience.companyName,
                    position: this.experience.position,
                    startYear: this.experience.startYear,
                    startMonth: this.experience.startMonth
                }
            }
        }
    },

    methods: {
        addWork() {
            this.activate = true
            this.experience.push({

                companyName: this.WorkData.value.companyName,
                position: this.WorkData.value.position,
                startYear: this.WorkData.value.startYear,
                startMonth: this.WorkData.value.startMonth
            })
            console.log("experience", this.experience)
            console.log("experience", this.WorkData)
        },
        deleteWork(index) {
            this.experience.splice(index, 1)
            console.log("index", index)
        },
        addPersonalData() {
            this.$store.dispatch('setPersonalData', this.experience)
            console.log("experience  added", this.experience)
        }
       
    }
}
</script>
