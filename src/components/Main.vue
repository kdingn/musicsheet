<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-text-field
          label="title"
          outlined
          dense
          v-model="title"
        ></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field
          label="composer"
          outlined
          dense
          v-model="composer"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-select
          class="mt-n8"
          label="key"
          outlined
          dense
          v-model="key"
          :items="Object.keys(rootAll)"
        ></v-select>
      </v-col>
      <v-col cols="8">
        <v-card flat outlined class="mt-n9 mb-2">
          <v-row class="ma-1">
            <span class="mt-1 mr-2 ml-2">Transpose</span>
            <span class="mt-1">:</span>
            <v-btn
              icon
              @click="
                transposeKey(1);
                transposeChords(1);
              "
            >
              <v-icon size="18"> mdi-plus </v-icon>
            </v-btn>
            <v-btn
              icon
              @click="
                transposeKey(11);
                transposeChords(11);
              "
              class="ml-n2"
            >
              <v-icon size="18"> mdi-minus </v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <div v-for="(row, rowid) in rows" :key="rowid" class="mb-3">
      <v-row class="ml-3">
        <span class="text-body-2">{{ row.title }}</span>
        <v-spacer></v-spacer>
        <v-btn icon x-small class="mr-4" @click="addChord(rowid)">
          <v-icon>mdi-plus-box-outline</v-icon>
        </v-btn>
      </v-row>
      <v-container>
        <v-row no-gutters>
          <v-col
            v-for="(chord, chordid) in row.chords"
            :key="String(rowid) + '-' + String(chordid)"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              @click="startEdit(rowid, chordid)"
            >
              <span class="text-body-2">{{ chord.root }}{{ chord.ctype }}</span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import chord from "@/assets/chord";

export default {
  data: () => ({
    rootAll: chord.rootAll,
    rootAllInverse: chord.rootAllInverse,
    chordAll: chord.chordAll,
    title: "Now's the time",
    composer: "Charlie Parker",
    key: "F",
    rows: [
      {
        title: "01",
        chords: [
          { root: "F", ctype: "7" },
          { root: "Bb", ctype: "7" },
          { root: "F", ctype: "7" },
          { root: "F", ctype: "7" },
        ],
      },
      {
        title: "02",
        chords: [
          { root: "Bb", ctype: "7" },
          { root: "Bb", ctype: "7" },
          { root: "F", ctype: "7" },
          { root: "A", ctype: "φ" },
        ],
      },
      {
        title: "03",
        chords: [
          { root: "G", ctype: "m7" },
          { root: "C", ctype: "7" },
          { root: "F", ctype: "7" },
          { root: "C", ctype: "7" },
        ],
      },
    ],
  }),
  methods: {
    changeRoot(root, n) {
      return chord.rootAllInverse[(chord.rootAll[root] + n) % 12];
    },
    transposeKey(n) {
      this.key = this.changeRoot(this.key, n);
    },
    transposeChords(n) {
      for (const row of this.rows) {
        for (const chord of row.chords) {
          chord.root = this.changeRoot(chord.root, n);
        }
      }
    },
    addChord(rowid) {
      this.rows[rowid].chords.push({ root: this.key, ctype: "" });
    },
    startEdit(rowid, chordid) {
      this.rows[rowid].chords[chordid].root = "C#";
      this.rows[rowid].chords[chordid].ctype = "M7";
    },
  },
};
</script>
