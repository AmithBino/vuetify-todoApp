<template>
  <v-app class="bg-grey-lighten-5">
    <NavBar/>
    <v-main class="mx-16 my-10">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { NavBar },
  data: () => ({
    //
  }),
}
</script>
