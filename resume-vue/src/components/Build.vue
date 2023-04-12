<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>


                    <v-col cols="3" sm="2">

                    </v-col>

                    <v-col cols="6" sm="8">
                        <v-sheet min-height="100vh" rounded="lg">
                            <v-row class="mb-n10">
                                <v-col cols="2" md="2">

                                </v-col>
                                <v-col cols="8" md="8">
                                    <v-label class="label pb-2 font-weight-bold">Your Motive</v-label>
                                    <v-textarea clearable clear-icon="mdi-close-circle" label="Motive" v-model="your_motive"
                                        variant="outlined" rows="3"></v-textarea>
                                </v-col>
                                <v-col cols="2" md="2">

                                </v-col>


                            </v-row>
                            <v-row class="mb-n10">
                                <v-col cols="2" md="2">

                                </v-col>
                                <v-col cols="8" md="8">
                                    <v-label class="label pb-2 font-weight-bold">Self PR</v-label>
                                    <v-textarea clearable clear-icon="mdi-close-circle" label="PR" v-model="self_PR"
                                        variant="outlined" rows="3"></v-textarea>
                                </v-col>
                                <v-col cols="2" md="2">

                                </v-col>


                            </v-row>
                            <v-row class="mb-n10">
                                <v-col cols="2" md="2">

                                </v-col>
                                <v-col cols="8" md="8">
                                    <v-label class="label pb-2 font-weight-bold">BIO</v-label>
                                    <v-textarea clearable clear-icon="mdi-close-circle" label="Bio" v-model="bio"
                                        variant="outlined" rows="3"></v-textarea>
                                </v-col>
                                <v-col cols="2" md="2">

                                </v-col>


                            </v-row>
                            <v-row class="flex justify-center pa-4">

                                <v-btn @click="addPersonalData" color="deep-purple-accent-2" size="large">Add
                                    Data</v-btn>
                            </v-row>

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
export default {
    data: () => ({
        your_motive :'',
        self_PR:'',
        bio:''
    }),
    computed:{
        descpData(){
            return{
                your_motive:this.your_motive,
                self_PR:this.self_PR,
                bio:this.bio
            }
        }
    },
    methods:{
        addPersonalData() {
            this.$store.dispatch('setPersonalData', this.descpData)
            console.log("descp added", this.descpData)
        }
    }
}
</script>