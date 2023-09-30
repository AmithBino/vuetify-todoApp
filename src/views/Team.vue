<template>
    <div class="team">
        <h1 class="text-h6 text-grey">Team</h1>

        <v-container class="my-12">
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                <v-card class="text-center ma-3" >
                    <v-responsive class="pt-4">
                        <v-avatar size="70">
                            <img :src="person.avatar" style="width: 100%;">
                        </v-avatar>
                    </v-responsive>
                <v-card-text>
                    <div class=" text-subtitle-1 ">{{person.name}}</div>
                    <div class="grey--text">{{person.role}}</div>
                </v-card-text>
                <v-card-action>
                    <v-btn flat class="text-grey-darken-1" >
                    <v-icon small left class="mr-2 mt-1"> mdi-message-text </v-icon>
                    <span >Message</span>
                    </v-btn>
                </v-card-action>
                </v-card>
                </v-col>
            </v-row>
           
        </v-container>
    </div>
</template>

<script>

export default{
    name: 'TeamPage',
    data() {
    return {
      team: [
        { name: 'Amith', role: 'Web developer', avatar: require("@/assets/avatar1.png") },
        { name: 'Ria', role: 'Graphic designer', avatar: require("@/assets/avatar2.png") },
        { name: 'Liam', role: 'Web developer', avatar: require("@/assets/avatar3.png")  },
        { name: 'Olivia', role: 'Social media maverick', avatar:require("@/assets/avatar4.png")  },
        { name: 'Ethan', role: 'Sales guru', avatar:require("@/assets/avatar5.png") }

      ]
    }
  }
}
</script>
