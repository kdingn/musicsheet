<template>
  <v-toolbar color="blue-grey darken-3" flat>
    <v-img src="@/assets/favicon.png" max-width="22" class="mr-1" />
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
