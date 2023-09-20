<template>
  <SaveButton @click="editNote" class="change" />

  <BaseInput
    v-model:value="copiedNote.title"
    type="text"
    class="header-input"
    label="Заголовок:"
  />

  <BaseTextarea
    v-model:value="copiedNote.descr"
    class="note-textarea"
    label="Содержимое:"
  />
  <div class="date-note">
    <BaseInput
      class="date-note-input"
      v-model:numberValue="copiedNote.date"
      type="date"
      label="Сделать до:"
    />
  </div>

  <ComponentWithDropdown
    class="impr-input-note"
    v-model:value="copiedNote.impr"
    :options="props.chooseImportanceTags"
    label="Важность:"
  />

  <p class="error">{{ emptyTagError }}</p>

  <addTegComponent
    :class-name="'teg-input-note'"
    @chooseTeg="addTagToNote"
    :selectedTegs="copiedNote.teg"
    @deleteTag="deleteTagInChangeNote"
    @update:error="emitSameTagError"
  />
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
    id: number;
    title: string;
    descr: string;
    impr: string;
    date: number;
    beginDate: number;
    teg: string[];
  };
  emptyTagError: string;
  chooseImportanceTags: string[];
  edit: boolean;
}>();

const copiedNote = ref(props.note);

const emit = defineEmits<{
  [x: string]: any;
  (e: 'editNote', state: any): void;
  (e: 'update:error', sameTagError: string): void;
  (e: 'addTagToNote', id: number, teg: string): void;
  (e: 'update:impr', impr: string): void;
  (e: 'delete-tag', id: number, index: number): void;
}>();

const addTagToNote = (teg: string) => {
  emit('addTagToNote', props.note.id, teg);
  console.log(2222, teg);
};

const deleteTagInChangeNote = (index: number) => {
  emit('delete-tag', props.note.id, index);
  console.log(222, index);
};

const editNote = () => {
  console.log(1, copiedNote.value.teg);
  emit('editNote', {
    id: props.note.id,
    teg: copiedNote.value.teg,
    impr: copiedNote.value.impr,
    title: copiedNote.value.title,
    descr: copiedNote.value.descr,
    date: copiedNote.value.date,
    beginDate: copiedNote.value.beginDate,
  });
};

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
  box-sizing: border-box;
  padding: 0px 38px 0px 0px;
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

.teg-input-note {
  box-sizing: border-box;
  padding: 0px 38px 0px 0px;
}
</style>
