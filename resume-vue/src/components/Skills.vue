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


                                    </v-row>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Health status</v-label>
                                            <v-radio-group v-model="health" inline>
                                                <v-radio label="Disabled" value="Disabled"></v-radio>
                                                <v-radio label="Non-Disabled" value="Non-Disabled"></v-radio>
                                            </v-radio-group>
                                        </v-col>





                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Skills/Hobbies</v-label>
                                            <v-combobox class="" v-model="selectedskill" :items="skillitems"
                                                chips  variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-range-slider v-model="value" strict :max="5" :min="0" thumb-label="always"
                                                :step="1"></v-range-slider>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Certification</v-label>
                                            <v-combobox v-model="selectedlicence" :items="licenceitems" chips  variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Start Date</v-label>
                                            <v-text-field v-model="startdate" variant="outlined" clearable label="YYYY/MM"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">End Date</v-label>
                                            <v-text-field v-model="enddate" variant="outlined" clearable label="YYYY/MM"
                                                required></v-text-field>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="12" md="12">
                                            <v-label class="label pb-2 font-weight-bold">Your Motive</v-label>
                                            <v-textarea clearable clear-icon="mdi-close-circle" label="Motive"
                                                model-value="Please Enter here"  variant="outlined" rows="3"></v-textarea>
                                        </v-col>                                     


                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="12" md="12">
                                            <v-label class="label pb-2 font-weight-bold">Self PR</v-label>
                                            <v-textarea clearable clear-icon="mdi-close-circle" label="PR"
                                                model-value="Please Enter here"  variant="outlined" rows="3"></v-textarea>
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
        startdate: '',
        enddate: ''

    }),
}
</script>
