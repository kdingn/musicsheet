<template>
  <v-toolbar color="primary">
    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    title: "Title",
  }),
};
</script>
