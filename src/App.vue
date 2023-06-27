<script setup>

import { ref, computed } from 'vue'

import baseInput from './components/BaseInput.vue'

const typeText = "text"

const typeData = "date"

const placeholder = 'Введите текст'

const placeholderData = 'Введите дату окончания действия'

let note = ref({
      title:'',
      descr:'',
      impr: '',
      date: ''
})

let notes = ref([
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
      }
])
  
</script>

<template>

<baseInput :placeholder="placeholder" @update:modelValue="note.title = $event" :type="typeText"></baseInput>

<baseInput :placeholder="placeholderData" @update:modelValue="note.date = $event" type="date"></baseInput>


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
