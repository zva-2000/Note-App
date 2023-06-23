<script setup>

import { ref, computed } from 'vue'

import NewMessege from './components/NewMessege.vue'
// import NewImr from './components/NewImpr.vue'
// import notes from './components/ZametkiNovye.vue'
// import Search from './components/SearchNote.vue'
// import newNote from './components/newNote.vue'
// import icons from './components/IconsChange.vue'

const title = 'Notes App'

const NewMessegeConst = null

const NewImrConst = null

const grid = true

let search = ref('')

const importants = ['Important', 'Normal', 'No matter']

let note = {
      title:'',
      descr:'',
      impr: ''
    }

var notesArray = 
  [
      {
        title: 'First note',
        descr: 'Description for first note',
        impr: 'Important',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Second note',
        descr: 'Description for second note',
        impr: 'Normal',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Third note',
        descr: 'Description for third note',
        impr: 'No matter',
        date: new Date(Date.now()).toLocaleString()
      },
    ]

function AddNote () {
      let {title, descr, impr} = note

      if (title === '') {

        NewMessegeConst = 'Wrong note'
        return false

      } 
      if (impr === '') {

        NewImrConst = 'Choose the importance of note'
      return false

      }
      notesArray.push({
        title,
        descr,
        impr,
        date: new Date(Date.now()).toLocaleString()
      })
      NewMessegeConst = null
      NewImrConst = null
      note.title = ''
      note.descr = ''
      note.impr = ''
    }

function removeNote (index) {
  notesArray.splice(index, 1)
}

function СhangeNote () {
        let {title} = note

        notesArray.splice({
          title
        })
        note.title = ''
    }

function ChangeGrid () {
      grid = !grid
    }

const notesFilter = computed (() => {
      let array = notesArray

      if (!search.value) return array //Чтобы поиск не искал пустую строку, т.е. если search равно false
      search.value = search.value.trim().toLowerCase() //Избовляем то, что будем искать от пробелов (trim()) и приводим это к нижнему регистру (toLowerCase())

      array = array.filter (function (item) {if (item.title.toLowerCase().indexOf(search) !== -1) 
      return item})

      return array
})

</script>

<template>

<h1>Привет12</h1>

<div class="wrapper">
  <div class="wrapper-content">

    <section>

      <div class="container"> 
  
        <NewMessege v-if="true" :NewMessege="NewMessegeConst"/> 
        <!-- <NewImr v-if="NewImr" :NewImr="NewImrConst"/> -->

        <!-- <newNote v-model:note="note" v-model:importants="importants" @addNote="AddNote"/> -->

        <!-- <div class="note-header">

          <h1>{{ title }}</h1>

          <search :value="search"  placeholder="Find the note" @search="search = $event"/>

          <icons :grid="grid" @changeGrid="ChangeGrid"/>

        </div>

        <notes :notes="notesFilter" :grid="grid" @remove="removeNote"/> -->

      </div>

    </section>

  </div>

</div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
