<template>
  
  <SaveButton @click="editNote" class="change"/>

  <p style="color: rgb(78, 78, 78)">Заголовок:</p>

  <BaseInput
    placeholder="Введите текст"
    v-model:value="copiedNote.title"
    type="text"
    class="header-input"
    :isReadonly="false"
  />

  <p class="modal-p">Содержимое:</p>

  <BaseTextarea
    placeholder="Введите текст"
    v-model:value="copiedNote.descr"
    class="note-textarea"
  />
  <div class="date-note">
    <p class="modal-p">Сделать до:</p>

    <BaseInput
      class="date-note-input"
      v-model:value="copiedNote.date"
      type="date"
      placeholder="Введите дату"
      :isReadonly="false"
    />
  </div>

  <p class="modal-p">Важность:</p>

  <ComponentWithDropdown
    class="impr-input-note"
    v-model:value="copiedNote.impr"
    :options="props.chooseImportanceTags"
    :isReadonly="true"
  />

  <p class="error">{{ emptyTagError }}</p>

  <p class="modal-p">Теги:</p>
  <addTegComponent
    :class-name="'teg-input-note'"
    @chooseTeg="addTagToNote"
    :selectedTegs="copiedNote.teg"
    @deleteTag="deleteTagInChangeNote"
    @update:error="emitSameTagError"
  />

  <!-- <SaveButton @click="editNote" class="save-btn"/> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import SaveButton from './buttons/SaveButton.vue';

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import ComponentWithDropdown from './ComponentWithDropdown.vue';

import addTegComponent from './addTegComponent.vue';

const props = defineProps<{
  note: {
    id: number,
    title: string;
    descr: string;
    impr: string;
    date: number;
    teg: string[];
  };
  index: number;
  emptyTagError: string;
  chooseImportanceTags: string[];
  edit: boolean;
}>();

const copiedNote = ref(props.note)

const emit = defineEmits<{
  [x: string]: any;
  (e: 'editNote', state: any): void;
  (e: 'update:error', sameTagError: string): void;
  (e: 'addTagToNote', state:string): void;
  (e: 'update:impr', impr: string): void;
  (e: 'delete-tag', index: number): void;
}>();

const addTagToNote = (state:string) => {
  emit('addTagToNote', state);
  console.log(2222, state);
};

const deleteTagInChangeNote = (index: number) => {
  emit('delete-tag', index);
};

const editNote = (state:any) => {
console.log(1, copiedNote.value.teg)
emit('editNote', {
id: props.note.id,
teg: copiedNote.value.teg,
impr: copiedNote.value.impr,
title: copiedNote.value.title,
descr: copiedNote.value.descr,
date: copiedNote.value.date,
})};

// const chooseImportance = computed({
//   get() {
//     return props.chooseImportanceTags ?? '';
//   },
//   set(impr: string) {
//     emit('update:impr', impr);
//   },
// });

const emitSameTagError = (errorMessage: string) => {
  emit('update:error', errorMessage);
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

.save-btn {
  margin-left: 93%;
}

.change {
  float: right;
}
</style>
