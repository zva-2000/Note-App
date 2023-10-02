<template>
  <div class="modal">
    <div class="modal-content">
      <BaseCanselButton class="close-modal-button" @click="closeModal" />

      <div class="input-container">
        <BaseInput
          label="Заголовок:"
          v-model:value="note.title"
          type="text"
          class="base-input"
          :error="emptyTitleError"
        />

        <BaseTextarea
          v-model:value="note.descr"
          class="base-textarea"
          label="Содержимое:"
        />

        <BaseInput
          :value="dateSelected ? formatedNoteDate : ''"
          :placeholder="dateSelected ? '' : 'дд.мм.гггг'"
          type="date"
          class="base-input"
          label="Сделать до:"
          @update:value = "value => (note.date = value)"
        />

        <ComponentWithDropdown
          class="impr-input"
          :value="note.impr"
          @update:value="updateImpr"
          :options="props.chooseImportanceTags"
          label="Важность:"
        />

        <addTegComponent
          @chooseTeg="chooseTeg"
          :selectedTegs="note.teg"
          @deleteTag="deleteTag"
          :valueTag = "newTagModal"
          @update:modelValue="addNewTag"
          @clearValueTag = "clearValueTag"
        />
      </div>

      <base-button @click="() => emit('add-note', {id: note.id, teg: note.teg, impr: note.impr, title: note.title, descr: note.descr, date: formatedNoteDate, beginDate: note.beginDate})" class="save-button">
        <span>Сохранить</span>
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import BaseCanselButton from './buttons/BaseCanselButton.vue';

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import BaseButton from './BaseButton.vue';

import ComponentWithDropdown from './ComponentWithDropdown.vue';

import addTegComponent from './addTegComponent.vue';

const props = defineProps<{
  chooseImportanceTags: string[];
  emptyTitleError: string;
}>();

let note = ref({
  id: 0,
  title: '',
  descr: '',
  impr: '',
  beginDate: 0,
  date: 0,
  teg: [] as string[],
});

const emit = defineEmits<{
  (e: 'closeModal', visibleModal: boolean): void;
  (e: 'update:error', sameTagError: string): void;
  (e: 'add-note', note: any): void;
  (e: 'update:impr', impr: string): void;
}>();

const closeModal = (visibleModal: boolean) => {
  emit('closeModal', visibleModal);
};

const chooseTeg = (teg: string) => {
  note.value.teg.push(teg);
};

const deleteTag = (index: any) => {
  note.value.teg.splice(index, 1);
};

const updateImpr = (value: string) => {
  note.value.impr = value;
};

const newTagModal = ref('');

const addNewTag = (value: string) => {
  newTagModal.value = value;
}

const clearValueTag = () => {
  newTagModal.value = '';
}

const dateSelected = ref(false);

const formatedNoteDate = computed({
  get: () => {
    const date = new Date(note.value.date);
    return date.toISOString().split('T')[0];
  },
  set: (newValue) => {
    note.value.date = new Date(newValue).getTime();
    dateSelected.value = true; 
  }
});
</script>

<style>

.input-container {
  display: flex;
  box-sizing: border-box;
  padding: 25px 25px 25px 25px;
  flex-direction: column;
}

.title-input {
  margin-top: 105px;
}

.impr-input,
.date-input,
.base-textarea,
.base-input {
  margin-top: 5px;
  margin-bottom: 10px;
}

.save-button {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
}

.modal {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: relative;
  justify-content: center;
  background-color: #fefefe;
  margin: 20% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 625px;
  border-radius: 5px;
}

.close-modal-button {
  position: absolute;
  top: 28px;
  right: 20px;
}
</style>
