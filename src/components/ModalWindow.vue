<template>

  <div class="modal">

    <div class="modal-content">

      <BaseCanselButton class="delete-button" @click="closeModal" />

      <div class="input-container">

        <p class="error">{{ emptyTitleError }}</p>


        <p style="color: rgb(78, 78, 78)">Заголовок:</p>
        
        <BaseInput
          placeholder=""
          v-model:value="note.title"
          type="text"
          class="base-input"
          :isReadonly="false"
        />

        <p class="modal-p">Содержимое:</p>

        <BaseTextarea
          placeholder=""
          v-model:value="note.descr"
          class="base-textarea"
        />

        <p class="modal-p">Сделать до:</p>

        <BaseInput
          placeholder=""
          v-model:value="note.date"
          type="date"
          class="base-input"
          :isReadonly="false"
        />

        <p class="modal-p">Важность:</p>
        <ComponentWithDropdown
          class="impr-input"
          v-model:value="note.impr"
          v-model:options="chooseImportance"
          :isReadonly="true"
        />

        <p class="error">{{ emptyTagError }}</p>
        
        <p class="modal-p">Теги:</p>
        <addTegComponent
          class="teg-input"
          @chooseTeg="chooseTegTwo"
          :selectedTegs="props.note.teg"
          @update:error = "emitSameTagError"
          @deleteTag="deleteTagInModalWindow"
        />
        
      </div>

      <base-button @click="addNote" class="save-button">
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
  note: {
    title: string;
    descr: string;
    impr: string;
    date: number;
    teg: string[];
  };
  chooseImportanceTags: string[];
  emptyTitleError: string;
  emptyTagError: string;
}>();

const emit = defineEmits<{
  (e: 'closeModal', visibleModal: boolean): void;
  (e: 'update:error', sameTagError: string): void;
  (e: 'addNote', emitedNote: string): void;
  (e: 'chooseTegTwo', emitedTag: string): void;
  (e: 'update:impr', impr: string[]): void; 
  (e: 'deleteTag', index: number): void;   
}>();

const closeModal = (visibleModal: boolean) => {
  emit('closeModal', visibleModal);
};

const addNote = (emitedNote: string) => {
  emit('addNote', emitedNote);
};

const chooseTegTwo = (emitedTag: string) => {
  emit('chooseTegTwo', emitedTag);
};

const deleteTagInModalWindow = (index: number) => {
  emit('deleteTag', index);
};

const chooseImportance = computed({
  get() {
    return props.chooseImportanceTags ?? '';
  },
  set(impr: string[]) {
    emit('update:impr', impr);
  },
});

const emitSameTagError = (errorMessage:string) => {emit('update:error', errorMessage)};

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

.teg-input{
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

.modal-p {
  margin-top: 10px;
  color: rgb(78, 78, 78);
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

.error {
  text-align: center;
  color: red;
}
</style>
