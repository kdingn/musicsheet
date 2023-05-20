<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-text-field
          label="title"
          outlined
          dense
          v-model="title"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-select
          label="key"
          outlined
          dense
          v-model="key"
          :items="Object.keys(rootAll)"
        ></v-select>
      </v-col>
    </v-row>

    <v-row class="mt-n6">
      <v-spacer></v-spacer>
      <span class="mt-1">Transpose : </span>
      <v-btn icon>
        <v-icon size="20"> mdi-plus </v-icon>
      </v-btn>
      <v-btn icon class="ml-n2 mr-2">
        <v-icon size="20"> mdi-minus </v-icon>
      </v-btn>
    </v-row>

    <div class="mb-2">
      01.
      <v-contrainer>
        <v-row no-gutters>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">F</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">Bb</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">F</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">F</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
        </v-row>
      </v-contrainer>
    </div>
    <div class="mb-2">
      02.
      <v-contrainer>
        <v-row no-gutters>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">Bb</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">Bb</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">F</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">A</span>
              <span class="text-body-1">φ</span>
              <span class="text-center">
                <span class="text-body-1">D</span>
                <span class="text-body-1">7</span>
              </span>
            </v-card>
          </v-col>
        </v-row>
      </v-contrainer>
    </div>
    <div class="mb-2">
      03.
      <v-contrainer>
        <v-row no-gutters>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">G</span>
              <span class="text-body-1">m7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">C</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">F</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <span class="text-body-1">C</span>
              <span class="text-body-1">7</span>
            </v-card>
          </v-col>
        </v-row>
      </v-contrainer>
    </div>
  </v-container>
</template>

<script>
import chord from "@/assets/chord";

export default {
  data: () => ({
    rootAll: chord.rootAll,
    chordAll: chord.chordAll,
    title: "Now's the time",
    key: "F",
  }),
};
</script>
