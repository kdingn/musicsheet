<template>
  <v-toolbar color="primary" flat>
    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon href="https://github.com/kdingn/publicpage">
      <v-icon color="white" size="x-large">mdi-github</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    title: "Musicsheet",
  }),
};
</script>
