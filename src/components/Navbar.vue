<template>
    <nav> 
        <v-app-bar flat class="bg-purple-darken-3">
            <v-app-bar-nav-icon class="text-white" @click="drawer=!drawer"> </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light">Todo</span> 
            <span class="white">Wave</span>
        </v-toolbar-title>
        <v-space></v-space>
        <v-btn flat-color="white">
            <span>Sign out</span>
            <v-icon right class="mdi mdi-exit-to-app"></v-icon>
        </v-btn>
       </v-app-bar> 
       <v-navigation-drawer app temporary v-model="drawer" class="bg-purple-darken-3" clipped>
        <v-row>
            <v-col class="mt-5 text-center">
                <v-avatar size="100">
                    <img src="./assets/avatar1.png">
                </v-avatar>
                <p class="text-white text-h6 mt-1">Amith</p>
            </v-col>
        </v-row>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <template v-slot:prepend>
            <v-icon color="white">{{ link.icon }}</v-icon>
            </template>
            <v-list-item-title class="text-white">{{ link.text }}</v-list-item-title>
        </v-list-item>
        </v-list>
        </v-navigation-drawer>   
    </nav>
</template>

<script>
export default{
    name:'NavBar',
    data(){
        return{
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' },
            ]
        }
    }
}
</script>
