<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>


                    <v-col cols="3" sm="2">
                        
                    </v-col>

                    <v-col cols="6" sm="8">
                        <v-sheet min-height="100vh"  rounded="lg">
                            <v-form v-model="valid">
                                <v-container>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Institute Name</v-label>
                                            <v-text-field v-model="institutename" :rules="nameRules" variant="outlined"
                                                clearable label="Institute Name" required></v-text-field>
                                        </v-col>                                  


                                    </v-row>                              
                                    
                                    <v-row class="mb-n10">
                                        <v-col cols="8" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Degree</v-label>
                                            <v-combobox v-model="values" :items="degree"
                                                label="Please Select" clearable></v-combobox>
                                        </v-col>
                                        

                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Start Date</v-label>
                                            <v-text-field v-model="startdate" variant="outlined" clearable
                                                label="YYYY/MM" required></v-text-field>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">End Date</v-label>
                                            <v-text-field v-model="enddate" variant="outlined" clearable
                                                label="YYYY/MM" required></v-text-field>
                                        </v-col>
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
        valid: false,
        
        degree: [
           'Graduate(Phd)','Graduate(Ms)','Vocational School','University'
        ],
        values: '',
        value: null,
        institutename:'',
        startdate :'',
        enddate :''
        
    }),
}
</script>
