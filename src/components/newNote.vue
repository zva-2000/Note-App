<template>

<div class="new-note">

    <label>Title</label> 
    <input type="text" v-model="note.title"> 

    <label>Importance</label>
    <select v-model="note.impr">
          <option v-for="important in importants" :key="important.index">{{ important }}</option>
      </select>

    <label>Description</label> 
    <textarea v-model="note.descr"></textarea>

    <button class="btn btnPrimary" @click="addNote">New note</button>

</div>

</template>

<script setup>

// import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  importants: {
      type: Array,
      required: true
    },
  note: {
      type: String,
      required: true
    }
  })

const emit = defineEmits(['addNote'])

const addNote = () => {
  emit('addNote', props.note)
}

</script>

<style scoped>

.new-note {
  text-align: center;
}

</style>