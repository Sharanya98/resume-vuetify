<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>



                    <v-col cols="8" sm="8">
                        <v-sheet height="100vh" rounded="lg">
                            <v-form v-model="skill.valid">
                                <v-container>
                                    <v-row class="mb-n10">

                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Programming Language</v-label>
                                            <v-combobox v-model="programming_lanuage" :items="itemslang" multiple chips
                                                variant="outlined" v-on:keyup="addlanguages"></v-combobox>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Health status</v-label>
                                            <v-radio-group v-model="health_status" inline>
                                                <v-radio label="Disabled" value="Disabled"></v-radio>
                                                <v-radio label="Non-Disabled" value="Non-Disabled"></v-radio>
                                            </v-radio-group>
                                        </v-col>


                                    </v-row>


                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Skills/Hobbies</v-label>
                                            <v-combobox v-model="special_skills_and_hobbies.skillName" :items="skillitems"
                                                clearable chips variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-text-field v-model="special_skills_and_hobbies.totalYear" variant="outlined"
                                                clearable label="Ex. 1,5" required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Add More</v-label>

                                            <v-col cols="auto">
                                                <v-btn @click="addSkill" icon="mdi-plus" size="small"></v-btn>
                                            </v-col>
                                        </v-col>



                                    </v-row>
                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Extra Curricular</v-label>
                                            <v-combobox class="" v-model="extra_curricular_activities.activityName"
                                            clearable :items="skillitems" chips variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-text-field v-model="extra_curricular_activities.totalYear" variant="outlined"
                                                clearable label="Ex. 1" required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Add More</v-label>

                                            <v-col cols="auto">
                                                <v-btn @click="addActivity" icon="mdi-plus" size="small"></v-btn>
                                            </v-col>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Sports</v-label>
                                            <v-combobox class="" v-model="sports.sportName" :items="sportsitems" chips
                                            clearable variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-text-field v-model="sports.totalYear" variant="outlined" clearable
                                                label="Ex. 1,5" required></v-text-field>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Add More</v-label>

                                            <v-col cols="auto">
                                                <v-btn @click="addSport" icon="mdi-plus" size="small"></v-btn>
                                            </v-col>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Certification</v-label>
                                            <v-combobox v-model="licenses_certification.licenseName"
                                            clearable :items="licenceitems" chips variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="3" md="3">
                                            <v-label class="label pb-2 font-weight-bold">Start Year</v-label>
                                            <v-text-field v-model="licenses_certification.licenseDateYear"
                                                variant="outlined" clearable label="YYYY" required></v-text-field>
                                        </v-col>
                                        <v-col cols="2" md="2">
                                            <v-label class="label pb-2 font-weight-bold">Start Month</v-label>
                                            <v-text-field v-model="licenses_certification.licenseDateMonth"
                                                variant="outlined" clearable label="MM" required></v-text-field>
                                        </v-col>
                                        <v-col cols="2" md="2">
                                            <v-label class="label pb-2 font-weight-bold">Add More</v-label>

                                            <v-col cols="auto">
                                                <v-btn @click="addCertificate" icon="mdi-plus" size="small"></v-btn>
                                            </v-col>
                                        </v-col>



                                    </v-row>


                                    <v-row class="flex justify-start pa-4">

                                        <!-- <v-btn @click="submit" color="deep-purple-accent-2" size="large">Add
                                            Data</v-btn> -->
                                    </v-row>



                                </v-container>
                            </v-form>

                        </v-sheet>

                    </v-col>

                    <v-col cols="4" sm="4">

                        <v-container v-show="showSkill">
                            <v-card class="mx-auto mb-4" max-width="344">
                                <div class="text-center text-uppercase text-h6">skills/hobbies</div>
                                <v-card-item>
                                    <v-row justify="space-between" class="mx-2"
                                        v-for="(item, index) in special_skills_and_hobbies" :key="index">
                                        <v-col cols="12" sm="4">
                                            {{ item.skillName }}
                                        </v-col>
                                        <v-col cols="12" sm="4">
                                            {{ item.totalYear }} years
                                        </v-col>
                                        <v-col cols="12" sm="4">
                                            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete"
                                                @click="deleteSkill"></v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-card>
                        </v-container>
                        <v-container v-show="showActivity">
                            <v-card class="mx-auto mb-4" max-width="344">
                                <div class="text-center text-uppercase text-h6">Extra Curricular</div>
                                <v-card-item>
                                    <v-row justify="space-between" class="mx-2"
                                        v-for="(item, index) in extra_curricular_activities" :key="index">
                                        <v-col cols="12" sm="4">
                                            {{ item.activityName }}
                                        </v-col>
                                        <v-col cols="12" sm="4">
                                            {{ item.totalYear }} years
                                        </v-col>
                                        <v-col cols="12" sm="4">
                                            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete"
                                                @click="deleteActivity"></v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-card>
                        </v-container>
                        <v-container v-show="showSport">
                            <v-card class="mx-auto mb-4" max-width="344">
                                <div class="text-center text-uppercase text-h6">Sports</div>
                                <v-card-item>
                                    <v-row justify="space-between" class="mx-2"
                                        v-for="(item, index) in sports" :key="index">
                                        <v-col cols="12" sm="4">
                                            {{ item.sportName }}
                                        </v-col>
                                        <v-col cols="12" sm="4">
                                            {{ item.totalYear }} years
                                        </v-col>
                                        <v-col cols="12" sm="4">
                                            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete"
                                                @click="deleteSport"></v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-card>
                        </v-container>
                        <v-container v-show="showCertificate">
                            <v-card class="mx-auto mb-4" max-width="344">
                                <div class="text-center text-uppercase text-h6">Certificate</div>
                                <v-card-item>
                                    <v-row justify="space-between" class="mx-2"
                                        v-for="(item, index) in licenses_certification" :key="index">
                                        <v-col cols="12" sm="3">
                                            {{ item.licenseName }}
                                        </v-col>
                                        <v-col cols="12" sm="3">
                                            {{ item.licenseDateYear }} 
                                        </v-col>
                                        <v-col cols="12" sm="3">
                                            {{ item.licenseDateMonth }}
                                        </v-col>
                                        <v-col cols="12" sm="3">
                                            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete"
                                                @click="deleteCertificate"></v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-card>
                        </v-container>


                    </v-col>


                </v-row>

            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { SUBMIT } from '../store/action-types';

import store from '../store';

import {
    profile,
    mapSkillFields,
    mapOtherFields,
    mapActivityFields,
    mapSportFields,
    mapCertificateFields

} from '../store/modules/build';

if (!store.state.profile) store.registerModule(`profile`, profile);

const {
    mapActions: mapProfileActions,
    mapState: mapProfileState,
} = createNamespacedHelpers(`profile`);

export default {
    data: () => ({
        itemslang: [

        ],
        selectedskill: ['Management'],
        selectedlicence: ['AWS Devloper Certificate'],
        skillitems: [

        ],
        sportsitems: [

        ],
        licenceitems: [

        ],
        
        valid: false,
        activate: false,
        special_skills_and_hobbies: [
            {
                skillName: "",
                totalYear: "",
            },
        ],
        extra_curricular_activities: [
            {
                activityName: "",
                totalYear: "",
            },
        ],
        licenses_certification: [{
            licenseName: "",
            licenseDateYear: "",
            licenseDateMonth: "",
        }],
        sports: [
            {
                sportName: "",
                totalYear: "",
            },
        ],
        showSkill: false,
        showActivity: false,
        showSport :false,
        showCertificate :false
        
      


    }),
    computed: {

        ...mapOtherFields([`rows[0].programming_lanuage`, `rows[0].health_status`]),
        ...mapProfileState([`error`, `success`]),
        ...mapSkillFields({ skill: `rows` }),
        ...mapActivityFields({ activity: `rows` }),
        ...mapSportFields({ sport: `rows` }),
        ...mapCertificateFields({ certificate: `rows` }),

        SkillData() {
            return {
                value: {
                    skillName: this.special_skills_and_hobbies.skillName,
                    totalYear: this.special_skills_and_hobbies.totalYear
                }
            }
        },
        ActivityData() {
            return {
                value: {
                    activityName: this.extra_curricular_activities.activityName,
                    totalYear: this.extra_curricular_activities.totalYear
                }
            }
        },
        SportData() {
            return {
                value: {
                    sportName: this.sports.sportName,
                    totalYear: this.sports.totalYear
                }
            }
        },
        CertificateData() {
            return {
                value: {
                    licenseName: this.licenses_certification.licenseName,
                    licenseDateYear: this.licenses_certification.licenseDateYear,
                    licenseDateMonth:this.licenses_certification.licenseDateMonth
                }
            }
        },

    },
    methods: {
        ...mapProfileActions({
            submit: SUBMIT,
        }),
        addSkill() {
            this.showSkill = true
            this.special_skills_and_hobbies.push({
                skillName: this.SkillData.value.skillName,
                totalYear: this.SkillData.value.totalYear

            })
            console.log("skillfield", this.special_skills_and_hobbies)
            this.$store.commit('profile/skill/addskill', this.special_skills_and_hobbies)
        },
        addActivity() {
            this.showActivity = true
            this.extra_curricular_activities.push({
                activityName: this.ActivityData.value.activityName,
                totalYear: this.ActivityData.value.totalYear

            })
            console.log("activity field", this.extra_curricular_activities)
            this.$store.commit('profile/activity/addactivity', this.extra_curricular_activities);
        },
        addSport() {
            this.showSport = true
            this.sports.push({
                sportName: this.SportData.value.sportName,
                totalYear: this.SportData.value.totalYear

            })
            console.log("sports field", this.sports)
            this.$store.commit('profile/sport/addsport', this.sports);
        },
        addCertificate() {
            this.showCertificate = true
            this.licenses_certification.push({
                licenseName: this.CertificateData.value.licenseName,
                licenseDateYear: this.CertificateData.value.licenseDateYear,
                licenseDateMonth: this.CertificateData.value.licenseDateMonth

            })
            console.log("certificate field", this.licenses_certification)
            this.$store.commit('profile/certificate/addcertificate', this.licenses_certification);
        },
        addlanguages() {

            this.$store.dispatch('setLang', this.programming_lanuage)
            console.log("added lang", this.programming_lanuage)
        },

        deleteSkill(index) {
            this.special_skills_and_hobbies.splice(index, 1)
            console.log("index", index)
        },
        deleteActivity(index) {
            this.extra_curricular_activities.splice(index, 1)
            console.log("index", index)
        },
        deleteSport(index) {
            this.sports.splice(index, 1)
            console.log("index", index)
        },
        deleteCertificate(index) {
            this.licenses_certification.splice(index, 1)
            console.log("index", index)
        },


    }
}
</script>
