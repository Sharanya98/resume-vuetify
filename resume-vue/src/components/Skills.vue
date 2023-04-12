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
                                            <v-combobox v-model="skill.programming_lanuage" :items="itemslang" multiple
                                                chips variant="outlined" v-on:keyup="addlanguages"></v-combobox>
                                        </v-col>
                                        <v-col cols="6" md="6">
                                            <v-label class="label pb-2 font-weight-bold">Health status</v-label>
                                            <v-radio-group v-model="skill.health_status" inline>
                                                <v-radio label="Disabled" value="Disabled"></v-radio>
                                                <v-radio label="Non-Disabled" value="Non-Disabled"></v-radio>
                                            </v-radio-group>
                                        </v-col>


                                    </v-row>


                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Skills/Hobbies</v-label>
                                            <v-combobox v-model="skill.special_skills_and_hobbies.skillName"
                                                :items="skillitems" chips variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-text-field v-model="skill.special_skills_and_hobbies.totalYear"
                                                variant="outlined" clearable label="Ex. 1,5" required></v-text-field>
                                        </v-col>



                                    </v-row>
                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Extra Curricular</v-label>
                                            <v-combobox class="" v-model="skill.extra_curricular_activities.activityName"
                                                :items="skillitems" chips variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-text-field v-model="skill.extra_curricular_activities.totalYear"
                                                variant="outlined" clearable label="Ex. 1,5" required></v-text-field>
                                        </v-col>



                                    </v-row>
                                    <v-row class="mb-n10 pr-24">
                                        <v-col cols="6" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Sports</v-label>
                                            <v-combobox class="" v-model="skill.sports.sportsName" :items="skillitems" chips
                                                variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Years</v-label>
                                            <v-text-field v-model="skill.sports.totalYear" variant="outlined" clearable
                                                label="Ex. 1,5" required></v-text-field>
                                        </v-col>


                                    </v-row>

                                    <v-row class="mb-n10">
                                        <v-col cols="4" md="4">
                                            <v-label class="label pb-2 font-weight-bold">Certification</v-label>
                                            <v-combobox v-model="skill.licenses_certification.licenseName"
                                                :items="licenceitems" chips variant="outlined"></v-combobox>
                                        </v-col>
                                        <v-col cols="2" md="2">
                                            <v-label class="label pb-2 font-weight-bold">Start Year</v-label>
                                            <v-text-field v-model="skill.licenses_certification.licenseDateYear"
                                                variant="outlined" clearable label="YYYY" required></v-text-field>
                                        </v-col>
                                        <v-col cols="2" md="2">
                                            <v-label class="label pb-2 font-weight-bold">Start Month</v-label>
                                            <v-text-field v-model="skill.licenses_certification.licenseDateMonth"
                                                variant="outlined" clearable label="MM" required></v-text-field>
                                        </v-col>



                                    </v-row>
                                    <v-row class="">
                                        <v-col cols="1" md="1">

                                            <v-btn @click="addSkill">add</v-btn>


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
                                <v-card class="mx-auto mb-4" max-width="344" v-for="(item, index) in addskill" :key="index">

                                    <v-card-item>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete"
                                                @click="deleteSkill"></v-btn>


                                        </v-card-actions>
                                        <v-list>

                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Programming
                                                        Language:</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.programming_lanuage
                                                    }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Health Status</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.health_status }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">skills/hobbies-Year</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.special_skills_and_hobbies.skillName }}-{{
                                                        item.special_skills_and_hobbies.totalYear }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">extra curricular</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.extra_curricular_activities.activityName
                                                    }}-{{ item.extra_curricular_activities.totalYear
}}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">Certifications</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.licenses_certification.licenseName }}-{{
                                                        item.licenses_certification.licenseDateYear }}-{{
        item.licenses_certification.licenseDateMonth
    }}</v-list-item-subtitle>
                                                </template>
                                            </v-list-item>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-list-item-title class="mr-2">sports</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.sports.sportName }}--{{
                                                        item.sports.totalYear }}</v-list-item-subtitle>
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

export default {
    data: () => ({
        itemslang: [

        ],
        selectedskill: ['Management'],
        selectedlicence: ['AWS Devloper Certificate'],
        skillitems: [

        ],
        licenceitems: [

        ],
        valid: false,

        activate: false,
        skill: {
            programming_lanuage: ['Java'],


            health_status: '',

            licenses_certification: [{
                licenseName: "",
                licenseDateYear: "",
                licenseDateMonth: "",
            }],
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
            sports: [
                {
                    sportName: "",
                    totalYear: "",
                },
            ],
        },
        addskill: []


    }),
    computed: {
        SkillData() {
            return {
                value: {
                    programming_lanuage: this.skill.programming_lanuage,
                    health_status: this.health_status,
                    licenses_certification: {
                        licenseName: this.skill.licenses_certification.licenseName,
                        licenseDateYear: this.skill.licenses_certification.licenseDateMonth,
                        licenseDateMonth: this.skill.licenses_certification.licenseDateMonth,
                    },
                    special_skills_and_hobbies:
                    {
                        skillName: this.skill.special_skills_and_hobbies.skillName,
                        totalYear: this.skill.special_skills_and_hobbies.totalYear,
                    },

                    extra_curricular_activities:
                    {
                        activityName: this.skill.extra_curricular_activities.activityName,
                        totalYear: this.skill.extra_curricular_activities.totalYear,
                    },

                    sports:

                    {
                        sportName: this.skill.sports.sportName,
                        totalYear: this.skill.sports.totalYear
                    },



                }



            }
        },
    },
    methods: {
        addSkill() {
            this.activate = true
            this.addskill.push({

                programming_lanuage: this.SkillData.value.programming_lanuage,
                health_status: this.SkillData.value.health_status,
                licenses_certification: {
                    licenseName: this.SkillData.value.licenses_certification.licenseName,
                    licenseDateYear: this.SkillData.value.licenses_certification.licenseDateMonth,
                    licenseDateMonth: this.SkillData.value.licenses_certification.licenseDateMonth,
                },
                special_skills_and_hobbies:
                {
                    skillName: this.SkillData.value.special_skills_and_hobbies.skillName,
                    totalYear: this.SkillData.value.special_skills_and_hobbies.totalYear,
                },

                extra_curricular_activities:
                {
                    activityName: this.SkillData.value.extra_curricular_activities.activityName,
                    totalYear: this.SkillData.value.extra_curricular_activities.totalYear,
                },

                sports:

                {
                    sportName: this.SkillData.value.sports.sportName,
                    totalYear: this.SkillData.value.sports.totalYear
                },
            })
            //console.log("experience", this.skill)
            console.log("experience", this.WorkData)
        },
        addlanguages() {

            this.$store.dispatch('setLang', this.programming_lanuage)
            console.log("added lang", this.programming_lanuage)
        },

        deleteSkill(index) {
            this.addskill.splice(index, 1)
            console.log("index", index)
        },
        addPersonalData() {
            this.$store.dispatch('setPersonalData', this.addskill)
            console.log("skill  added", this.addskill)
        }

    }
}
</script>
