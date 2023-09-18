<template>
  <p style="color: rgb(78, 78, 78)">Заголовок:</p>

  <BaseInput
    placeholder="Введите текст"
    v-model:value="note.title"
    type="text"
    class="header-input"
    :isReadonly="false"
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
      :isReadonly="false"
    />
  </div>

  <p class="modal-p">Важность:</p>

  <ComponentWithDropdown
    class="impr-input-note"
    v-model:value="note.impr"
    v-model:options="chooseImportance"
  />

  <p class="error">{{ emptyTagError }}</p>

  <p class="modal-p">Теги:</p>
  <addTegComponent
    :class-name="'teg-input-note'"
    @chooseTeg="addTagToNote"
    :selectedTegs="note.teg"
    @deleteTag="deleteTagInChangeNote"
    @update:error="emitSameTagError"
  />

  <!-- <SaveButton @click="editNote" class="save-btn"/> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import ComponentWithDropdown from './ComponentWithDropdown.vue';

import addTegComponent from './addTegComponent.vue';

const props = defineProps<{
  note: {
    title: string;
    descr: string;
    impr: string;
    date: string;
    teg: string[];
  };
  index: number;
  emptyTagError: string;
  chooseImportanceTags: string;
}>();

const emit = defineEmits<{
  [x: string]: any;
  (e: 'editNote', editOne: boolean): void;
  (e: 'update:error', sameTagError: string): void;
  (e: 'addTagToNote', newTag: string): void;
  (e: 'update:impr', impr: string): void;
  (e: 'delete-tag', index: number): void;
}>();

const addTagToNote = (newTag: string) => {
  emit('addTagToNote', newTag);
  console.log(2222, newTag);
};

const deleteTagInChangeNote = (index: number) => {
  emit('delete-tag', index);
};

const editNote = (editOne: boolean) => {
  emit('editNote', editOne);
};

const chooseImportance = computed({
  get() {
    return props.chooseImportanceTags ?? '';
  },
  set(impr: string) {
    emit('update:impr', impr);
  },
});

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
</style>
