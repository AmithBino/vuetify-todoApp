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

export default{
    name: 'ProjectPage',
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
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Amith' && project.status != 'completed'
      })
    }
  }
}
</script>
