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

    <div class="text-center">
      <v-dialog v-model="editMode" width="300">
        <v-card>
          <v-card-title
            class="mt-n1 blue-grey darken-3 white--text text-body-1"
          >
            Edit Chord
            <v-spacer />
            <div v-if="!(editRowId === 0) || !(editChordId === 0)">
              <v-btn icon @click="deleteChord()">
                <v-icon color="red"> mdi-delete </v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text class="mt-2">
            <v-row>
              <v-col>
                <v-select
                  label="root"
                  v-model="rows[editRowId].chords[editChordId].root"
                  :items="Object.keys(rootAll)"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  label="type"
                  v-model="rows[editRowId].chords[editChordId].ctype"
                  :items="Object.keys(ctypeAll)"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import chord from "@/assets/chord";

export default {
  data: () => ({
    editMode: false,
    editRowId: 0,
    editChordId: 0,
    rootAll: chord.rootAll,
    rootAllInverse: chord.rootAllInverse,
    chordAll: chord.chordAll,
    ctypeAll: chord.ctypeAll,
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
    deleteChord() {
      this.rows[this.editRowId].chords.splice(this.editChordId, 1);
      this.editMode = false;
      this.editChordId = 0;
      this.editRowId = 0;
    },
    startEdit(rowid, chordid) {
      this.editMode = true;
      this.editRowId = rowid;
      this.editChordId = chordid;
    },
  },
};
</script>
