<template>
  <div class="note">
    <BaseNote
      :note="note"
      v-if="!edit"
      :edit="edit"
      @funcEdition="funcEdition"
      @removeNote="removeNote"
      :importance-style="importanceStyle"
    />

    <InputsForNote
      :note="note"
      :edit="edit"
      v-if="edit"
      @editNote="editNote"
      @addTagToNote="addTagToNote"
      @delete-tag="handleDeleteTag"
      @update:impr="(value) => $emit('update:impr', value)"
      :chooseImportanceTags="chooseImportanceTags"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
  importanceStyle?: string;
  chooseImportanceTags: string[];
}>();

const edit = ref(false);

import BaseNote from './BaseNote.vue';

import InputsForNote from './InputsForNote.vue';

const emit = defineEmits<{
  [x: string]: any;
  (e: 'addTagToNote', id: number, teg: string): void;
  (e: 'delete-tag-double', id: number, index: number): void;
  (e: 'chooseImportanceAgain', impr: string): void;
  (e: 'editNote', editOne: string): void;
  (e: 'removeNote', index: number): void;
}>();

const addTagToNote = (id: number, teg: string) => {
  emit('addTagToNote', id, teg);
};

const handleDeleteTag = (id: number, index: number) => {
  emit('delete-tag-double', id, index);
};

const removeNote = (id: number) => {
  emit('removeNote', id);
};

const funcEdition = () => (edit.value = !edit.value);

const editNote = (editOne: any) => {
  funcEdition();
  emit('editNote', editOne);
};
</script>

<style lang="scss">
.note {
  border-radius: 20px;
  padding: 25px 25px 34px 34px;
  background-color: #ffffff;
  position: relative;
}

.note-teg {
  margin-top: 0px;
}

.change-btn {
  margin-left: auto;
}
</style>
