<template>
    <v-card class="mx-auto mb-4" max-width="344" v-for="item in datavalue" :key="item">
        
        <v-card-item>
            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn size="medium" color="surface-variant" variant="text" icon="mdi-delete" @click="$store.dispatch('deleteEducation',item.id)"></v-btn>

           
        </v-card-actions>
            <v-list>

                <v-list-item>
                    <template v-slot:prepend>
                        <v-list-item-title class="mr-2">School Name :</v-list-item-title>
                        <v-list-item-subtitle>{{ item.schoolName }}</v-list-item-subtitle>
                    </template>
                </v-list-item>
                <v-list-item>
                    <template v-slot:prepend>
                        <v-list-item-title class="mr-2">Degree :</v-list-item-title>
                        <v-list-item-subtitle>{{ item.degree}}</v-list-item-subtitle>
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
</template>

<script>


export default {
    props: {
        eduProp: {
            type: Object,
            required: true
        }
    },
    data: (props) => ({
       
            datavalue: Object.assign({}, props.eduProp)
       
        

    }),
    computed:{
        filterdata : function(){
            return this.datavalue    }
    },
    watch: {
        // eduProp() {
        //     this.datavalue = Object.assign({}, props.eduProp);
        // }

    }
}
</script>