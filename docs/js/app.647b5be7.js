(function(t){function o(o){for(var r,a,i=o[0],c=o[1],n=o[2],d=0,h=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(o);while(h.length)h.shift()();return A.push.apply(A,n||[]),e()}function e(){for(var t,o=0;o<A.length;o++){for(var e=A[o],r=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(r=!1)}r&&(A.splice(o--,1),t=a(a.s=e[0]))}return t}var r={},s={app:0},A=[];function a(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,o,e){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)a.d(e,r,function(o){return t[o]}.bind(null,r));return e},a.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=o,i=i.slice();for(var n=0;n<i.length;n++)o(i[n]);var l=c;A.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"56d7":function(t,o,e){"use strict";e.r(o);var r=e("2b0e"),s=e("7496"),A=e("f6c4"),a=function(){var t=this,o=t._self._c;return o(s["a"],[o(A["a"],[o("Header"),o("Main")],1)],1)},i=[],c=e("8336"),n=e("132d"),l=e("adda"),d=e("2fa4"),h=e("71d9"),p=e("2a7f"),u=function(){var t=this,o=t._self._c;return o(h["a"],{attrs:{color:"blue-grey darken-3",flat:""}},[o(l["a"],{staticClass:"mr-1",attrs:{src:e("99dd"),"max-width":"22"}}),o(p["a"],{staticClass:"white--text"},[t._v(t._s(t.title))]),o(d["a"]),o(c["a"],{attrs:{icon:"",href:"https://github.com/kdingn/publicpage"}},[o(n["a"],{attrs:{color:"white",size:"x-large"}},[t._v("mdi-github")])],1)],1)},C=[],w={data:()=>({title:"Musicsheet"})},f=w,y=e("2877"),g=Object(y["a"])(f,u,C,!1,null,null,null),I=g.exports,v=e("b0af"),m=e("99d9"),b=e("62ad"),B=e("a523"),Q=e("169a"),D=e("0fd9"),k=e("b974"),R=e("8654"),E=function(){var t=this,o=t._self._c;return o(B["a"],[o(D["a"],[o(b["a"],{attrs:{cols:"7"}},[o(R["a"],{attrs:{label:"title",outlined:"",dense:""},model:{value:t.title,callback:function(o){t.title=o},expression:"title"}})],1),o(b["a"],{attrs:{cols:"5"}},[o(R["a"],{attrs:{label:"composer",outlined:"",dense:""},model:{value:t.composer,callback:function(o){t.composer=o},expression:"composer"}})],1)],1),o(D["a"],{staticClass:"mb-n5"},[o(b["a"],{attrs:{cols:"4"}},[o(k["a"],{staticClass:"mt-n8",attrs:{label:"absolute key",outlined:"",dense:"",items:Object.keys(t.rootAll)},on:{change:function(o){t.key=t.abskey}},model:{value:t.abskey,callback:function(o){t.abskey=o},expression:"abskey"}})],1),o(b["a"],{attrs:{cols:"5"}},[o(v["a"],{staticClass:"mt-n8 mb-2 py-2 pl-3",attrs:{flat:"",outlined:""}},[o("span",[t._v(" relative key : "+t._s(t.key)+" ")])])],1),o(b["a"],{attrs:{cols:"3"}},[o(v["a"],{staticClass:"mt-n9 mb-2",attrs:{flat:"",outlined:""}},[o(D["a"],{staticClass:"ma-1"},[o(c["a"],{attrs:{icon:""},on:{click:function(o){t.transposeKey(1),t.transposeChords(1)}}},[o(n["a"],{attrs:{size:"18"}},[t._v(" mdi-plus ")])],1),o(c["a"],{staticClass:"ml-n2",attrs:{icon:""},on:{click:function(o){t.transposeKey(11),t.transposeChords(11)}}},[o(n["a"],{attrs:{size:"18"}},[t._v(" mdi-minus ")])],1)],1)],1)],1)],1),o(v["a"],{attrs:{color:"teal lighten-4"}},t._l(t.rows,(function(e,r){return o("div",{key:r},[o(D["a"],{staticClass:"ml-3 mr-0"},[o(R["a"],{staticClass:"mt-4",staticStyle:{"font-size":"14px"},attrs:{dense:""},model:{value:e.title,callback:function(o){t.$set(e,"title",o)},expression:"row.title"}}),o(d["a"]),o("div",{staticClass:"mt-5"},[o(c["a"],{staticClass:"mr-3",attrs:{icon:"","x-small":""},on:{click:function(o){return t.addChord(r)}}},[o(n["a"],[t._v("mdi-shape-square-plus")])],1),o(c["a"],{staticClass:"mr-3",attrs:{icon:"","x-small":""},on:{click:function(o){return t.addRow(r)}}},[o(n["a"],[t._v("mdi-arrow-left-bottom")])],1),o(c["a"],{staticClass:"mr-3",attrs:{color:"red",icon:"","x-small":""},on:{click:function(o){return t.deleteRow(r)}}},[o(n["a"],[t._v("mdi-delete-empty-outline")])],1)],1)],1),o(B["a"],{staticClass:"mt-n6"},[o(D["a"],{attrs:{"no-gutters":""}},t._l(e.chords,(function(e,s){return o(b["a"],{key:String(r)+"-"+String(s)},[o(v["a"],{staticClass:"pa-2",attrs:{outlined:"",tile:""},on:{click:function(o){return t.startEdit(r,s)}}},[o(D["a"],{staticClass:"my-n3"},[o(b["a"],{staticClass:"ml-1 mr-n8"},[o("span",{staticClass:"text-body-2"},[t._v(" "+t._s(e[0].root)+t._s(e[0].ctype)+" ")])]),o(b["a"],[o("span",{staticClass:"text-body-2"},[t._v(" "+t._s(e[1].root)+t._s(e[1].ctype)+" ")])])],1)],1)],1)})),1)],1)],1)})),0),o("div",{staticClass:"text-center"},[o(Q["a"],{attrs:{width:"300"},model:{value:t.editMode,callback:function(o){t.editMode=o},expression:"editMode"}},[o(v["a"],[o(m["b"],{staticClass:"ml-n2 mr-n3 mt-n1 blue-grey darken-3 white--text text-body-1"},[t._v(" Edit Chord "),o(d["a"]),0!==t.editRowId||0!==t.editChordId?o("div",[o(c["a"],{attrs:{icon:""},on:{click:function(o){return t.deleteChord()}}},[o(n["a"],{attrs:{color:"red"}},[t._v(" mdi-delete ")])],1)],1):t._e()],1),o(m["a"],{staticClass:"mt-2"},[o("span",[t._v("main chord")]),o(D["a"],[o(b["a"],[o(k["a"],{attrs:{label:"root",items:Object.keys(t.rootAll)},model:{value:t.rows[t.editRowId].chords[t.editChordId][0].root,callback:function(o){t.$set(t.rows[t.editRowId].chords[t.editChordId][0],"root",o)},expression:"rows[editRowId].chords[editChordId][0].root"}})],1),o(b["a"],[o(k["a"],{attrs:{label:"type",items:Object.keys(t.ctypeAll)},model:{value:t.rows[t.editRowId].chords[t.editChordId][0].ctype,callback:function(o){t.$set(t.rows[t.editRowId].chords[t.editChordId][0],"ctype",o)},expression:"rows[editRowId].chords[editChordId][0].ctype"}})],1)],1),o(D["a"],{staticClass:"mb-n8 ml-0"},[o("span",[t._v("sub chord")]),o(d["a"]),o(c["a"],{staticClass:"mt-n1 mr-0",attrs:{icon:""},on:{click:function(o){return t.resetChord()}}},[o(n["a"],{attrs:{small:"",color:"red"}},[t._v("mdi-close-box-outline")])],1)],1),o(D["a"],[o(b["a"],[o(k["a"],{attrs:{label:"root",items:Object.keys(t.rootAll)},model:{value:t.rows[t.editRowId].chords[t.editChordId][1].root,callback:function(o){t.$set(t.rows[t.editRowId].chords[t.editChordId][1],"root",o)},expression:"rows[editRowId].chords[editChordId][1].root"}})],1),o(b["a"],[o(k["a"],{attrs:{label:"type",items:Object.keys(t.ctypeAll)},model:{value:t.rows[t.editRowId].chords[t.editChordId][1].ctype,callback:function(o){t.$set(t.rows[t.editRowId].chords[t.editChordId][1],"ctype",o)},expression:"rows[editRowId].chords[editChordId][1].ctype"}})],1)],1)],1)],1)],1)],1)],1)},H=[];e("14d9");const M=[{C:1},{"C#":2},{Db:2},{D:3},{"D#":4},{Eb:4},{E:5},{F:6},{"F#":7},{Gb:7},{G:8},{"G#":9},{Ab:9},{A:10},{"A#":11},{Bb:11},{B:0}],x=[{"":[1,5,8]},{m:[1,4,8]},{dim:[1,4,7]},{aug:[1,5,9]},{sus4:[1,4,8]},{7:[1,5,8,11]},{m7:[1,4,8,11]},{"△7":[1,5,8,12]},{69:[1,5,10,15]},{m69:[1,4,10,15]},{"φ":[1,4,7,11]}];let F=[];for(let V of M)for(let t of x){let o=[];for(let e of t[Object.keys(t)])o.push((V[Object.keys(V)]+e-1)%12);F.push({root:String(Object.keys(V)),ctype:String(Object.keys(t)),notes:o})}const P={C:1,"C#":2,D:3,Eb:4,E:5,F:6,"F#":7,G:8,Ab:9,A:10,Bb:11,B:0},j={"":[1,5,8],m:[1,4,8],dim:[1,4,7],aug:[1,5,9],sus4:[1,4,8],add9:[1,5,8,15],7:[1,5,8,11],m7:[1,4,8,11],"△7":[1,5,8,12],69:[1,5,10,15],m69:[1,4,10,15],"φ":[1,4,7,11]},K=Object.fromEntries(Object.entries(P).map((function(t){return[t[1],t[0]]})));var X={chordAll:F,rootAll:P,rootAllInverse:K,ctypeAll:j},U={data:()=>({editMode:!1,editRowId:0,editChordId:0,rootAll:X.rootAll,rootAllInverse:X.rootAllInverse,chordAll:X.chordAll,ctypeAll:X.ctypeAll,title:"Now's the time",composer:"Charlie Parker",abskey:"F",key:"F",rows:[{title:"01",chords:[[{root:"F",ctype:"7"},{root:"",ctype:""}],[{root:"Bb",ctype:"7"},{root:"",ctype:""}],[{root:"F",ctype:"7"},{root:"",ctype:""}],[{root:"F",ctype:"7"},{root:"",ctype:""}]]},{title:"02",chords:[[{root:"Bb",ctype:"7"},{root:"",ctype:""}],[{root:"Bb",ctype:"7"},{root:"",ctype:""}],[{root:"F",ctype:"7"},{root:"",ctype:""}],[{root:"A",ctype:"φ"},{root:"D",ctype:"m7"}]]},{title:"03",chords:[[{root:"Bb",ctype:"7"},{root:"",ctype:""}],[{root:"C",ctype:"7"},{root:"",ctype:""}],[{root:"F",ctype:"7"},{root:"",ctype:""}],[{root:"C",ctype:"7"},{root:"",ctype:""}]]}]}),methods:{changeRoot(t,o){return X.rootAllInverse[(X.rootAll[t]+o)%12]},transposeKey(t){this.key=this.changeRoot(this.key,t)},transposeChords(t){for(const o of this.rows)for(const e of o.chords)e[0].root=this.changeRoot(e[0].root,t),e[1].root=this.changeRoot(e[1].root,t)},addChord(t){this.rows[t].chords.push([{root:this.key,ctype:""},{root:"",ctype:""}])},deleteChord(){this.rows[this.editRowId].chords.splice(this.editChordId,1),this.editMode=!1,this.editChordId=0,this.editRowId=0},resetChord(){this.rows[this.editRowId].chords[this.editChordId][1].root="",this.rows[this.editRowId].chords[this.editChordId][1].ctype=""},startEdit(t,o){this.editMode=!0,this.editRowId=t,this.editChordId=o},addRow(t){var o=this.rows[t],e=this.rows.slice(0,t+1),r=this.rows.slice(t+1);this.rows=e,this.rows.push(o),this.rows=this.rows.concat(r)},deleteRow(t){this.rows.splice(t,1)}}},O=U,G=Object(y["a"])(O,E,H,!1,null,null,null),L=G.exports,S={name:"App",components:{Main:L,Header:I},data:()=>({})},Y=S,N=Object(y["a"])(Y,a,i,!1,null,null,null),T=N.exports,z=e("f309");r["a"].use(z["a"]);var J=new z["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:J,render:t=>t(T)}).$mount("#app")},"99dd":function(t,o){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.647b5be7.js.map