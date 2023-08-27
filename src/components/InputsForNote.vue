<template>

  <p style="color: rgb(78, 78, 78)">Заголовок:</p>
        
  <BaseInput
    placeholder="Введите текст"
    v-model:value="note.title"
    type="text"
    class="header-input"
  />

  <p class="modal-p">Содержимое:</p>

  <BaseTextarea
    placeholder="Введите текст"
    v-model:value="note.descr"
    class="note-textarea"
  />
  <div class="date-note">

    <p class="modal-p">Сделать до:</p>

    <BaseInput
      class="date-note-input"
      v-model:value="note.date"
      type="date"
      placeholder="Введите дату"
    />
  </div>

  <p class="modal-p">Важность:</p>

  <ComponentWithDropdown
    class="impr-input-note"
    v-model:value="note.impr"
    v-model:options="options"
  />

  <!-- <p class="error">{{ error }}</p> -->

  <p class="modal-p">Теги:</p>
  <addTegComponent
    :class-name="'teg-input-note'"
    @chooseTeg="addTagToNote"
    :selectedTegs="note.teg"
    @deleteTag="deleteTagInChangeNote(index)"
  />

  <!-- <SelectedTegs class="note-teg" :items="note.teg"/> -->
</template>

<script setup lang="ts">
const props = defineProps<{
  note: {
    title: string;
    descr: string;
    impr: string;
    date: string;
    teg: string[];
  };
  index: number;
}>();

import { useNotes } from '../composables/useNotes.js';

const { notes, removeNote, visibleModal, openModal, closeModal } = useNotes();

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import ComponentWithDropdown from './ComponentWithDropdown.vue';

import addTegComponent from './addTegComponent.vue';

import SelectedTegs from './SelectedTegs.vue';

import { useTags } from '../composables/useTags.js';

const { chooseTeg, options } = useTags();

const addTagToNote = (newTag: string) => {
  props.note.teg.push(newTag);
};

const deleteTagInChangeNote = (index) => {
  props.note.teg.splice(index, 1);
};
</script>

<style>

.teg-input-note,
.impr-input-note,
.note-textarea,
.date-note,
.header-input {
  width: 92%;
}

.date-note-input {
  width: 100%;
}
</style>
