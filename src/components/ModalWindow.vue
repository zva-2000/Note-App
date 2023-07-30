<template>

<div class="modal">
  <div class="modal-content">
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

        <addTegComponent
          :class-name="'teg-input'"
          @chooseTeg="chooseTeg"
          @update:error="error = $event"
          :selectedTegs="note.teg"
        />
      </div>

      <base-button @click="AddNote" class="save-button">
        <span>Сохранить</span>
      </base-button>
  </div>
</div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import BaseButton from './BaseButton.vue';

import ComponentWithDropdown from './ComponentWithDropdown.vue'

import addTegComponent from './addTegComponent.vue';

import { useNotes } from '../composables/useNotes.js'

import { useTags } from '../composables/useTags.js'

const { note, notes } = useNotes();

const { chooseTeg } = useTags();

const options = ref(['Очень важно', 'Важно', 'Не важно']);

let error = ref('');

</script>

<style>

.container {
  flex-grow: 1;
  display: flex;
  width: 70%;
  gap: 11px;
  max-width: 1000px;
  margin-bottom: 50px;
}

.input-container {
  width: 100%;
  margin: auto;
  gap: 100px;
  margin-bottom: 10px;
}

.date-input {
  width: 310px;
  position: relative;
}

.title-input {
  margin-top: 105px;
}

.teg-input {
  width: 310px;
  gap: 0px;
}

.impr-input {
  width: 310px;
}

.base-input {
  margin-bottom: 10px;
}

.save-button {
  margin: auto;
}

.modal {
    /* display: none;  */
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;
    background-color: rgba(0,0,0,0.4); 
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
    border-radius: 5px;
}

</style>