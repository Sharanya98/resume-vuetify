<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">


      <div class=" text-h3 font-weight-bold mb-n1">Oyester Resume Builder</div>

      

      <div class="py-4" ></div>


      <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
          <v-tab :value="1">Personal</v-tab>
          <v-tab :value="2">Education</v-tab>
          <v-tab :value="3">Work</v-tab>
          <v-tab :value="4">Skills</v-tab>
          <v-tab :value="5">Build</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item v-for="n in tab" :key="n" :value="n">
            <v-container fluid>
              <v-card v-if="n==1">
                <Personal />
              </v-card>
              <v-card v-if="n==2">
                <Education />
              </v-card>
              <v-card v-if="n==3">
                <Work />
              </v-card>
              <v-card v-if="n==4">
                <Skills />
              </v-card>
              <v-card v-if="n==5">
                <Build />
              </v-card>
            
            </v-container>
          </v-window-item>
        </v-window>
      </v-card>



    </v-responsive>
  </v-container>
</template>
  
<script >
import Personal from './Personal.vue';
import Skills from './Skills.vue';
import Education from './Education.vue';
import Build from './Build.vue';
import Work from './Work.vue';
export default {
  data: () => ({
    tab: null,
  }),
  components : {
    Personal,
    Skills,
    Education,
    Work,
    Build
  }
}
</script>
  