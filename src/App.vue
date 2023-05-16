<template>
  <v-app>
    <v-main>
      <Header />
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
