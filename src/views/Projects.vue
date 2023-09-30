<template>
    <div class="projects">
        <h1 class="text-h6 text-grey">Projects</h1>

        <v-container class="my-16">
            <v-expansion-panels>
                <v-expansion-panel v-for="project in myProjects" :key="project.title">
                    <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
                    <v-expansion-panel-text class="px-4 mt-1">
                        <div class="font-weight-bold text-blue-grey-darken-2">Due by {{ project.due }}</div>
                        <div class="text-blue-grey-darken-1">{{ project.content }}</div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>
import db from '@/fb';

export default{
    name: 'ProjectPage',
    data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Amith' && project.status != 'completed'
      })
    }
  },
  created(){
    db.collection('projects').onSnapshot(res =>{
      const changes = res.docChanges();

      changes.forEach(change=> {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id   
          })
        }
      })
    })
  }
}
</script>
