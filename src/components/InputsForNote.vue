<template>
  <BaseInput
    placeholder="Введите текст"
    v-model:value="note.title"
    type="text"
    class="header-input"
  />

  <BaseTextarea
    placeholder="Введите текст"
    v-model:value="note.descr"
    class="note-textarea"
  />
  <div class="date-note">
    <!-- <p class="date-text">Дедлайн:</p> -->
    <BaseInput
      class="date-note-input"
      v-model:value="note.date"
      type="date"
      placeholder="Введите дату"
    />
  </div>

  <ComponentWithDropdown
    class="impr-input-note"
    v-model:value="note.impr"
    v-model:options="options"
  />

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
.header-input {
  position: relative;
  bottom: 28px;
  width: 405px;
}

.note-textarea {
  position: relative;
  bottom: 21px;
  width: 405px;
}

.date-note {
  display: flex;
  position: relative;
  bottom: 15px;
  width: 405px;
  gap: 10px;
}

.date-note-input {
  width: 405px;
}
/* //320 */
.date-text {
  width: 77px;
  position: relative;
  top: 10px;
}

.impr-input-note {
  position: relative;
  bottom: 8px;
  width: 405px;
}

.teg-input-note {
  position: relative;
  bottom: 8px;
  width: 405px;
}
</style>
