<template>

<div class="input-container">
    <p class="error">{{ error }}</p>

    <BaseInput
      placeholder="Введите текст"
      v-model:value="note.title"
      type="text"
      class="base-input"
    />

    <BaseTextarea
      placeholder="Введите текст"
      v-model:value="note.descr"
      class="base-textarea"
    />
  </div>

  <div class="container">
    <BaseInput
      class="date-input"
      v-model:value="note.date"
      type="date"
      placeholder="Введите дату"
    />

    <ComponentWithDropdown
      class="impr-input"
      v-model:value="note.impr"
      v-model:options="options"
    />

    <AddTegComponent
      :class-name="'teg-input'"
      @chooseTeg="chooseTeg"
      @update:error="error = $event"
      :selectedTegs="note.teg"
    />
  </div>
  
</template>

<script setup lang="ts">

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import BaseButton from './BaseButton.vue';

import { useNotes } from '../composables/useNotes.js'

const { note } = useNotes();

</script>

<style>

</style>