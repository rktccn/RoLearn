<template>
  <v-app
    ><v-navigation-drawer app light class="sidebar-nav elevation-3"
      ><side-bar></side-bar
    ></v-navigation-drawer>
    <v-main class="grey lighten-3">
      <v-container fluid :style="{ height: '100%' }"
        ><router-view></router-view> </v-container></v-main
  ></v-app>
</template>

<script>
import sideBar from "./components/sideBar.vue";

export default {
  name: "App",
  components: {
    sideBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./styles/variables.scss";
</style>
