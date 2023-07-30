<template>

<BaseInput
placeholder="Введите текст"
v-model:value="note.title"
type="text"
/>

<BaseTextarea
placeholder="Введите текст"
v-model:value="note.descr"
/>
  
</template>

<script setup lang="ts">

import BaseInput from './BaseInput.vue'

import BaseTextarea from './BaseTextarea.vue';

import { useNotes } from '../composables/useNotes.js';

const { notes, note } = useNotes();

</script>

<style>

</style>