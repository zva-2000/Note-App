<template>
  <base-button @click="openModal" class="open-modal-btn">
    <span>Добавить</span>
  </base-button>

  <div class="modal" v-if="visibleModal">

    <div class="modal-content">

      <BaseCanselButton class="delete-button" @click="closeModal" />

      <div class="input-container">

        <p class="error">{{ noneTitleMistake }}</p>


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
          class="date-input"
          v-model:value="note.date"
          type="date"
          placeholder=""
          :isReadonly="false"
        />

        <p class="modal-p">Важность:</p>
        <ComponentWithDropdown
          class="impr-input"
          v-model:value="note.impr"
          v-model:options="options"
          :isReadonly="true"
        />

        <p class="error">{{ error }}</p>

        <p class="modal-p">Теги:</p>
        <addTegComponent
          class="teg-input"
          @chooseTeg="chooseTeg"
          @update:error="error = $event"
          :selectedTegs="note.teg"
          @deleteTag="deleteTagInModalWindow"
        />
        
      </div>

      <base-button @click="AddNote" class="save-button">
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

import { useNotes } from '../composables/useNotes.js';

import { useTags } from '../composables/useTags.js';

const { note, AddNote, visibleModal, openModal, closeModal, noneTitleMistake } =
  useNotes();

const { chooseTeg, options, error } = useTags();

const deleteTagInModalWindow = (index: any) => {
  note.value.teg.splice(index, 1);
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

.open-modal-btn {
  margin-top: 15px;
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
