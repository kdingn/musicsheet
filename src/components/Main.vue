<template>
  <v-container color="blue">
    <!-- info area -->
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

    <!-- key area -->
    <v-row class="mb-n5">
      <v-col cols="4">
        <v-select
          class="mt-n8"
          label="absolute key"
          outlined
          dense
          v-model="abskey"
          :items="Object.keys(rootAll)"
          @change="key = abskey"
        ></v-select>
      </v-col>
      <v-col cols="5">
        <v-card flat outlined class="mt-n8 mb-2 py-2 pl-3">
          <span>
            relative key :
            {{ key }}
          </span>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card flat outlined class="mt-n9 mb-2">
          <v-row class="ma-1">
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

    <!-- chord area -->
    <v-card color="teal lighten-4" class="mb-16">
      <div v-for="(row, rowid) in rows" :key="rowid">
        <v-row class="ml-3 mr-0">
          <v-text-field
            v-model="row.title"
            dense
            style="font-size: 14px"
            class="mt-4"
          ></v-text-field>
          <v-spacer />
          <div class="mt-5">
            <v-btn icon x-small class="mr-3" @click="addChord(rowid)">
              <v-icon>mdi-shape-square-plus</v-icon>
            </v-btn>
            <v-btn icon x-small class="mr-3" @click="addRow(rowid)">
              <v-icon>mdi-arrow-left-bottom</v-icon>
            </v-btn>
            <v-btn
              color="red"
              icon
              x-small
              class="mr-3"
              @click="deleteRow(rowid)"
            >
              <v-icon>mdi-delete-empty-outline</v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-container class="mt-n6">
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
                <v-row class="my-n3">
                  <v-col class="ml-1 mr-n8">
                    <span class="text-body-2">
                      {{ chord[0].root }}{{ chord[0].ctype }}
                    </span>
                  </v-col>
                  <v-col>
                    <span class="text-body-2">
                      {{ chord[1].root }}{{ chord[1].ctype }}
                    </span>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>

    <!-- edit area -->
    <div class="text-center">
      <v-dialog v-model="editMode" width="300">
        <v-card>
          <v-card-title
            class="ml-n2 mr-n3 mt-n1 blue-grey darken-3 white--text text-body-1"
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
            <span>main chord</span>
            <v-row>
              <v-col>
                <v-select
                  label="root"
                  v-model="rows[editRowId].chords[editChordId][0].root"
                  :items="Object.keys(rootAll)"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  label="type"
                  v-model="rows[editRowId].chords[editChordId][0].ctype"
                  :items="Object.keys(ctypeAll)"
                ></v-select>
              </v-col>
            </v-row>
            <v-row class="mb-n8 ml-0">
              <span>sub chord</span>
              <v-spacer />
              <v-btn icon class="mt-n1 mr-0" @click="resetChord()">
                <v-icon small color="red">mdi-close-box-outline</v-icon>
              </v-btn>
            </v-row>
            <v-row>
              <v-col>
                <v-select
                  label="root"
                  v-model="rows[editRowId].chords[editChordId][1].root"
                  :items="Object.keys(rootAll)"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  label="type"
                  v-model="rows[editRowId].chords[editChordId][1].ctype"
                  :items="Object.keys(ctypeAll)"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <!-- bottom menu -->
    <v-btn
      @click="bottomMenu = !bottomMenu"
      fab
      fixed
      bottom
      right
      color="amber darken-2"
      dark
      class="mb-n1 br-n1"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-bottom-sheet v-model="bottomMenu">
      <v-sheet
        class="text-left px-4 pt-2"
        height="100px"
        color="blue-grey lighten-4"
      >
        <span class="font-weight-bold"> Menu </span>
        <v-divider class="mt-1" />
        <div class="text-center mt-1">
          <v-btn class="mt-2 mx-1" depressed color="blue-grey" dark
            >open folder</v-btn
          >
          <v-btn class="mt-2 mx-1" depressed color="primary" dark>import</v-btn>
          <v-btn class="mt-2 mx-1" depressed color="teal" dark>export</v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import chord from "@/assets/chord";

export default {
  data: () => ({
    editMode: false,
    editRowId: 0,
    editChordId: 0,
    bottomMenu: false,
    rootAll: chord.rootAll,
    rootAllInverse: chord.rootAllInverse,
    chordAll: chord.chordAll,
    ctypeAll: chord.ctypeAll,
    title: "Now's the time",
    composer: "Charlie Parker",
    abskey: "F",
    key: "F",
    rows: [
      {
        title: "01",
        chords: [
          [
            { root: "F", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "Bb", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "F", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "F", ctype: "7" },
            { root: "", ctype: "" },
          ],
        ],
      },
      {
        title: "02",
        chords: [
          [
            { root: "Bb", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "Bb", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "F", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "A", ctype: "φ" },
            { root: "D", ctype: "m7" },
          ],
        ],
      },
      {
        title: "03",
        chords: [
          [
            { root: "Bb", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "C", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "F", ctype: "7" },
            { root: "", ctype: "" },
          ],
          [
            { root: "C", ctype: "7" },
            { root: "", ctype: "" },
          ],
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
          chord[0].root = this.changeRoot(chord[0].root, n);
          chord[1].root = this.changeRoot(chord[1].root, n);
        }
      }
    },
    addChord(rowid) {
      this.rows[rowid].chords.push([
        { root: this.key, ctype: "" },
        { root: "", ctype: "" },
      ]);
    },
    deleteChord() {
      this.rows[this.editRowId].chords.splice(this.editChordId, 1);
      this.editMode = false;
      this.editChordId = 0;
      this.editRowId = 0;
    },
    resetChord() {
      this.rows[this.editRowId].chords[this.editChordId][1].root = "";
      this.rows[this.editRowId].chords[this.editChordId][1].ctype = "";
    },
    startEdit(rowid, chordid) {
      this.editMode = true;
      this.editRowId = rowid;
      this.editChordId = chordid;
    },
    addRow(rowid) {
      var add = JSON.parse(JSON.stringify(this.rows[rowid]));
      var pre = this.rows.slice(0, rowid + 1);
      var pst = this.rows.slice(rowid + 1);
      this.rows = pre;
      this.rows.push(add);
      this.rows = this.rows.concat(pst);
    },
    deleteRow(rowid) {
      this.rows.splice(rowid, 1);
    },
  },
};
</script>
