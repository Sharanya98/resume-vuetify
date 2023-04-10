<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>


                    <v-col cols="3" sm="2">

                    </v-col>

                    <v-col cols="6" sm="8">
                        <v-sheet height="100vh" rounded="lg">
                            <v-form v-model="valid">
                                <v-container>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Programming Language</v-label>
                                            <v-combobox v-model="selectedLang" :items="langitems" multiple
                                                chips  variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Health status</v-label>
                                            <v-radio-group v-model="health" inline>
                                                <v-radio label="Disabled" value="Disabled"></v-radio>
                                                <v-radio label="Non-Disabled" value="Non-Disabled"></v-radio>
                                            </v-radio-group>
                                        </v-col>


                                    </v-row>
                                   

                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Skills/Hobbies</v-label>
                                            <v-combobox class="" v-model="skillName" :items="skillitems"
                                                chips  variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-range-slider v-model="totalYear" strict :max="5" :min="0" thumb-label="always"
                                                :step="1"></v-range-slider>
                                        </v-col>
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold block">Add more</v-label>
                                            <v-btn size="large" color="#5865f2" variant="text" icon="mdi-plus"  @click=""></v-btn>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Sports</v-label>
                                            <v-combobox class="" v-model="sportsName" :items="skillitems"
                                                chips  variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-range-slider v-model="totalYears" strict :max="5" :min="0" thumb-label="always"
                                                :step="1"></v-range-slider>
                                        </v-col>
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold block">Add more</v-label>
                                            <v-btn size="large" color="#5865f2" variant="text" icon="mdi-plus"  @click=""></v-btn>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Certification</v-label>
                                            <v-combobox v-model="licenseName" :items="licenceitems" chips  variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="2" md="2">
                                            <v-label class="label pb-2 font-weight-bold">Date Year</v-label>
                                            <v-text-field v-model="licenseDateYear" variant="outlined" clearable label="YYYY"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="2" md="2">
                                            <v-label class="label pb-2 font-weight-bold">Date Month</v-label>
                                            <v-text-field v-model="licenseDateMonth" variant="outlined" clearable label="MM"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="2" md="2">
                                            <v-label class="label pb-2 font-weight-bold">Add More</v-label>
                                            <v-btn size="large" color="#5865f2" variant="text" icon="mdi-plus"  @click=""></v-btn>
                                        </v-col>


                                    </v-row>
                                    
                                    <v-row class="mb-n10">

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

export default {
    data: () => ({
        selectedLang: ['Java'],
        itemslang: [

        ],
        selectedskill: ['Management'],
        selectedlicence: ['AWS Devloper Certificate'],
        skillitems: [

        ],
        licenceitems: [

        ],
        valid: false,

        degree: [
            'Graduate(Phd)', 'Graduate(Ms)', 'Vocational School', 'University'
        ],
        values: '',
        value: null,
        health: '',
        startYear: '',
        endd: '',
        skillName:'',
        totalYear :''

    }),
}
</script>
