<template>
    <div class="dashboard">
        <h1 class="text-h6 text-grey">Dashboard</h1>

        <v-container class="my-16">
          <v-row class="mb-6" >
            <v-btn variant="plain" @click="sortBy('title')">
              <v-icon left class="mdi mdi-folder-open mr-2"></v-icon>
              <span class="caption text-lowercase">By project name</span>
              <v-tooltip class="tooltips" activator="parent" location="top">Sort Projects by Project name</v-tooltip>
            </v-btn>
            <v-btn variant="plain" @click="sortBy('person')">
              <v-icon left class="mdi mdi-folder-open mr-2"></v-icon>
              <span class="caption text-lowercase">By person</span>
              <v-tooltip class="tooltips" activator="parent" location="top">Sort Projects by Project name</v-tooltip>
            </v-btn>
          </v-row>
            <v-card flat tile class="px-3" v-for="project in projects" :key="project.title" >
                <v-row row wrap class="mb-0 pt-2">
                    <v-col cols="12" md="6" :class="`pl-5 project ${project.status}`">
                        <div class="caption">Project Title</div>
                        <div>{{project.title}}</div>
                    </v-col>
                    <v-col xs="2">
                        <div class="caption">Person</div>
                        <div>{{project.person}}</div>
                    </v-col>
                    <v-col xs="2">
                        <div class="caption">Due Date</div>
                        <div>{{project.due}}</div>
                    </v-col>
                    <v-col xs="2">
                        <div class="text-right pr-6" >
                             <v-chip small class="ma-2" :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
                        </div>
                    </v-col>
                    <v-divider></v-divider>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>

export default{
    name: 'DashPage',
    data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'Amith', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Liam', due: '10th Jan 2019', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ria', due: '20th Dec 2018', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Olivia', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
    }
  }
}
</script>

<style>

.project.completed{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.completed{
  background: #3cd1c2;
  font-weight: bold;
}
.v-chip.ongoing{
  background: #ffaa2c;
  font-weight: bold;
}
.v-chip.overdue{
  background: tomato;
  font-weight: bold;
}
</style>