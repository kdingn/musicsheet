<template>
  <v-container>
    <v-contrainer>
      <v-spacer></v-spacer>
      aaa
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n">
          <v-card class="pa-2" outlined tile> なかみ </v-card>
        </v-col>
      </v-row>
    </v-contrainer>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
