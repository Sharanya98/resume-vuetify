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
                                            <v-text-field v-model="personal.name.first_name" :rules="nameRules"
                                                variant="outlined" clearable label="First name" required></v-text-field>
                                        </v-col>

                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Last Name</v-label>
                                            <v-text-field v-model="personal.name.last_name" :rules="nameRules"
                                                variant="outlined" clearable label="Last name" required></v-text-field>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">First Name(Kana)</v-label>
                                            <v-text-field v-model="personal.name.first_name_kana" :rules="nameRules"
                                                variant="outlined" clearable label="First name" required></v-text-field>
                                        </v-col>

                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Last Name(Kana)</v-label>
                                            <v-text-field v-model="personal.name.last_name_kana" :rules="nameRules"
                                                variant="outlined" clearable label="Last name" required></v-text-field>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="4">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Gender</v-label>
                                            <v-radio-group v-model="personal.sex" inline>
                                                <v-radio label="Male" value="Male"></v-radio>
                                                <v-radio label="Female" value="Female"></v-radio>
                                            </v-radio-group>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">BirthDate</v-label>
                                            <v-text-field v-model="personal.birthday" variant="outlined" clearable
                                                label="YYYY/MM/DD" required></v-text-field>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Nationality</v-label>
                                            <v-text-field v-model="personal.nationality" variant="outlined" clearable
                                                label="Nationality" required></v-text-field>
                                        </v-col>

                                    </v-row>
      
                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Email</v-label>
                                            <v-text-field v-model="personal.email" variant="outlined" clearable
                                                label="Email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Phone</v-label>
                                            <v-text-field v-model="personal.phone" variant="outlined" clearable
                                                label="Phone" required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    
                                    <v-row class="mb-n10">

                                        <v-col cols="4" md="4">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">Full_Address</v-label>
                                            <v-text-field v-model="personal.address.full_address" variant="outlined"
                                                clearable label="Full_Address" required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label
                                                class="text-uppercase pb-2 font-weight-bold">Full_Address_kana</v-label>
                                            <v-text-field v-model="personal.address.full_address_kana" variant="outlined"
                                                clearable label="Full_Address_kana" required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="text-uppercase pb-2 font-weight-bold">ZIP/Postal code</v-label>
                                            <v-text-field v-model="personal.address.postal_code" variant="outlined"
                                                clearable label="ZIP/Postal code" required></v-text-field>
                                        </v-col>
                                       
                                    </v-row>
                                    <v-row class="flex justify-start pa-4">
                                        
                                        <v-btn @click="addPersonalData" color="deep-purple-accent-2" size="large">Add Data</v-btn>
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
export default {
    data: () => ({
        valid: false,
        personal: {
            name: {
                first_name: "",
                last_name: "",
                first_name_kana: "",
                last_name_kana: "",
            },
            sex: '',
            birthday: "",
            nationality: "",
            email: "",
            address: {
                postal_code: "",
                full_address: "",
                full_address_kana: "",
            },
            phone: ""

        },
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
       
        personalData() {
            return {
                first_name: this.personal.name.first_name,
                last_name: this.personal.name.last_name,
                first_name_kana: this.personal.name.first_name_kana,
                last_name_kana: this.personal.name.last_name_kana,

                sex: this.personal.sex,
                birthday: this.personal.birthday,
                nationality: this.personal.nationality,
                email: this.personal.email,

                postal_code: this.personal.address.postal_code,
                full_address: this.personal.address.full_address,
                full_address_kana: this.personal.address.full_address_kana,

                phone: this.personal.phone

            }


        }
    },
    methods: {
       
        addPersonalData() {
            this.$store.dispatch('setPersonalData', this.personalData)
            console.log("user  added", this.personalData)
        }
    }
}
</script>
