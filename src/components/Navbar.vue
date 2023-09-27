<template>
    <nav>
        <v-toolbar :elevation="6">
            <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"> </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span> 
            <span class="font-weight-dark">Wave</span>
        </v-toolbar-title>
        <v-space></v-space>
        <v-btn flat-color="grey">
            <span>Sign out</span>
            <v-icon right class="mdi mdi-exit-to-app"></v-icon>
        </v-btn>
       </v-toolbar> 
       <v-navigation-drawer app temporary v-model="drawer" class="bg-indigo">
    </v-navigation-drawer>   
    </nav>
</template>

<script>
export default{
    name:'NavBar',
    data(){
        return{
            drawer: false,
        }
    }
}
</script>
