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
                                            <v-label class="label pb-2 font-weight-bold">First Name</v-label>
                                            <v-text-field v-model="firstname" :rules="nameRules" variant="outlined"
                                                clearable label="First name" required></v-text-field>
                                        </v-col>

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Last Name</v-label>
                                            <v-text-field v-model="lastname" :rules="nameRules" variant="outlined" clearable
                                                label="Last name" required></v-text-field>
                                        </v-col>


                                    </v-row>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Gender</v-label>
                                            <v-radio-group v-model="gender" inline>
                                                <v-radio label="Male" value="Male"></v-radio>
                                                <v-radio label="Female" value="Female"></v-radio>
                                            </v-radio-group>
                                        </v-col>





                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="5">
                                            <v-label class="label pb-2 font-weight-bold">BirthDate</v-label>
                                            <v-text-field v-model="birthdate" variant="outlined" clearable
                                                label="YYYY/MM/DD" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="6" md="5">
                                            <v-label class="label pb-2 font-weight-bold">Nationality</v-label>
                                            <v-text-field v-model="nationality" variant="outlined" clearable
                                                label="Nationality" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="12" md="8">
                                            <v-label class="label pb-2 font-weight-bold">Email</v-label>
                                            <v-text-field v-model="email" variant="outlined" clearable label="Email"
                                                required class="w-75"></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row class="mb-n10">
                                        <v-col cols="8" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Country</v-label>
                                            <v-combobox v-model="values" :items="country"
                                                label="Please Select" clearable></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Phone</v-label>
                                            <v-text-field v-model="phone" variant="outlined" clearable label="Phone"
                                                required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row class="mb-n10">
                                        
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">City</v-label>
                                            <v-text-field v-model="city" variant="outlined" clearable label="City"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">State/Province</v-label>
                                            <v-text-field v-model="state" variant="outlined" clearable label="State/Province"
                                                required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">ZIP/Postal code</v-label>
                                            <v-text-field v-model="postal" variant="outlined" clearable label="ZIP/Postal code"
                                                required></v-text-field>
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
import Education from './Education.vue'
export default {
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
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
        email: '',
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
        gender: '',
        country: [
            "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the Congo", "Cook Islands", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, the Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.s.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
        ],
        values: 'Japan',
        value: null,
        edu(){
            
        }
    }),
}
</script>
<style>
.label {

    text-transform: uppercase;
    margin-left: -100px;

}
</style>