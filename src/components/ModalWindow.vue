<template>
  <div class="modal">
    <div class="modal-content">
      <BaseCanselButton class="delete-button" @click="closeModal" />

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
          v-model:numberValue="note.date"
          type="date"
          class="base-input"
          label="Сделать до:"
        />

        <ComponentWithDropdown
          class="impr-input"
          :value="note.impr"
          @update:value="updateImpr"
          :options="props.chooseImportanceTags"
          label="Важность:"
        />

        <addTegComponent
          class="teg-input"
          @chooseTeg="chooseTeg"
          :selectedTegs="note.teg"
          @update:error="emitSameTagError"
          @deleteTag="deleteTag"
        />
      </div>

      <base-button @click="() => emit('add-note', note)" class="save-button">
        <span>Сохранить</span>
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import BaseCanselButton from './buttons/BaseCanselButton.vue';

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import BaseButton from './BaseButton.vue';

import ComponentWithDropdown from './ComponentWithDropdown.vue';

import addTegComponent from './addTegComponent.vue';

const props = defineProps<{
  chooseImportanceTags: string[];
  emptyTitleError: string;
  emptyTagError: string;
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

const emitSameTagError = (errorMessage: string) => {
  emit('update:error', errorMessage);
};
</script>

<style>
.container {
  flex-grow: 1;
  /* display: flex; */
  width: 70%;
  gap: 11px;
  max-width: 1000px;
  margin-bottom: 50px;
}

.input-container {
  display: flex;
  width: 85%;
  margin-left: 48px;
  /* gap: 100px; */
  margin-bottom: 1.5rem;
  /* align-items: center; */
  flex-direction: column;
}

.title-input {
  margin-top: 105px;
}

.teg-input {
  width: 106%;
}
.impr-input,
.date-input,
.base-textarea,
.base-input {
  margin-top: 5px;
  margin-bottom: 10px;
  /* width: 95%; */
}

.save-button {
  font-size: 85%;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
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
  width: 40%;
  border-radius: 5px;
}
</style>
