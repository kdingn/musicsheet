<template>
  <v-container>
    <v-text-field v-model="message" label="v-text-field"></v-text-field>
    <v-card color="primary">
      <v-card-subtitle>
        <span class="white--text">v-card</span>
      </v-card-subtitle>
      <v-card-text>
        <span class="white--text">{{ message }}</span>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    message: "メッセージです",
  }),
};
</script>
