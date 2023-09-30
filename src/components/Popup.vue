<template>
    <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ props}">
      <v-btn color="transparent bg-deep-purple-lighten-1" v-bind=" props " >Add a new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2 class="text-h6">Add a new project</h2>
        <v-card-text>
          <v-form  class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="md mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="md mdi-pencil" :rules="inputRules"></v-textarea>
            <v-text-field :rules="inputRules" v-model="due" label="Due date" prepend-icon="mdi-calendar-range" type="Date"></v-text-field>

            <v-btn class="mx-10 mt-3 bg-deep-purple-lighten-1" @click="submit" :loading="loading">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '@/fb';
import moment from 'moment';

export default {
    name: 'PopupPage',
    data(){
      return{
        title: '',
        content: '',
        due: null,
        inputRules: [
          v => v&&v.length >= 3 || 'Minimum length is 3 characters'
        ],
        loading: false,
        dialog: false
      }
    },
    methods:{
      submit(){
        if(this.$refs.form.validate()){
          this.loading = true;
          const formattedDueDate = moment(this.due).format('Do MMM YYYY');

            const project = {
              title: this.title,
              content: this.content,
              due: formattedDueDate,
              person: 'Amith',
              status: 'ongoing'
            }
            db.collection('projects').add(project).then(() =>{
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          })
        }
      }
    },
}
</script>
