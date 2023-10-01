<template>
  <SaveButton @click="editNote" class="change" />

  <div class="inputs-in-changed-note">

    <BaseInput
      v-model:value="copiedNote.title"
      type="text"
      label="Заголовок:"
      :error="emptyTitleError"
    />

    <BaseTextarea
      v-model:value="copiedNote.descr"
      label="Содержимое:"
    />
    <div class="date-note">
      <BaseInput
        v-model:value="formatedNoteDate"
        type="date"
        label="Сделать до:"
      />
    </div>

    <ComponentWithDropdown
      v-model:value="copiedNote.impr"
      :options="props.chooseImportanceTags"
      label="Важность:"
    />

    <addTegComponent
      class="teg-note"
      @chooseTeg="addTagToNote"
      :selectedTegs="copiedNote.teg"
      @deleteTag="deleteTagInChangeNote"
    />
  </div>    
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
  chooseImportanceTags: string[];
  edit: boolean;
  emptyTitleError: string;
}>();

const copiedNote = ref(props.note);

const formatedNoteDate = computed({
  get: () => {
    const date = new Date(copiedNote.value.date);
    return date.toISOString().split('T')[0];
  },
  set: (newValue) => {
    copiedNote.value.date = new Date(newValue).getTime();
  }
});

const emit = defineEmits<{
  [x: string]: any;
  (e: 'editNote', state: any): void;
  (e: 'addTagToNote', id: number, teg: string): void;
  (e: 'update:impr', impr: string): void;
  (e: 'delete-tag', id: number, index: number): void;
}>();

const addTagToNote = (teg: string) => {
  emit('addTagToNote', props.note.id, teg);
};

const deleteTagInChangeNote = (index: number) => {
  emit('delete-tag', props.note.id, index);
};

const editNote = () => {
  emit('editNote', {
    id: props.note.id,
    teg: copiedNote.value.teg,
    impr: copiedNote.value.impr,
    title: copiedNote.value.title,
    descr: copiedNote.value.descr,
    date: formatedNoteDate.value,
    beginDate: copiedNote.value.beginDate,
  });
};

</script>

<style>

.inputs-in-changed-note {
  box-sizing: border-box;
  padding: 0px 38px 0px 0px;
}

.teg-input-note {
  padding-right: 38px;
}
.change {
  position: absolute;
    right: 17px;
    left: auto;
}

</style>
