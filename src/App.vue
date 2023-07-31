<script setup>
import { ref, computed } from 'vue';

import BaseInput from './components/BaseInput.vue';

import BaseTextarea from './components/BaseTextarea.vue';

import BaseButton from './components/BaseButton.vue';

import MovedButtons from './components/MovedButtons.vue';

// import BaseDeleteButton from './components/BaseDeleteButton.vue';

import SearchInput from './components/SearchInput.vue';

import ComponentWithDropdown from './components/ComponentWithDropdown.vue';

import AddTegComponent from './components/AddTegComponent.vue';

import AllNotes from './components/AllNotes.vue';

import ModalWindow from './components/ModalWindow.vue'

import { useTags } from './composables/useTags.js';

import { useNotes } from './composables/useNotes.js';

import { useFilter } from './composables/useFilter.ts';

import NotesWindow from './components/NotesWindow.vue';

// const options = ref(['Очень важно', 'Важно', 'Не важно']);

const { addTegFunctionForCompose, newTag, choosenTegs } = useTags();

const { notes, note, isVisible } = useNotes();

const { search } = useFilter();

const listOpen = ref(false);

let showModal = ref(false);

let isOpen = ref(true);

let NewMessege = ref('');

let NewImr = ref('');

let grid = ref(true);

function handleClick() {
  console.log('Button clicked!');
}

function showModalFunc() {
  showModal.value = !showModal.value;
}

function OpenDrop() {
  isOpen.value = !isOpen.value;
  console.log('Button clicked!');
}

</script>

<template>
  <p>title: {{ note.title }}</p>

  <p>search: {{ search }}</p>

  <p>date: {{ note.date }}</p>
  <p>descr: {{ note.descr }}</p>
  <p>impr: {{ note.impr }}</p>
  <p>teg: {{ note.teg }}, {{ newTag }}</p>

  <SearchInput v-model:value="search" />

  <!-- <p v-for="note in notes" :key="note.title" @input="notesFilter">{{ note }}</p> -->

  <!-- <div class="input-container">
    <p class="error">{{ error }}</p>

    <BaseInput
      placeholder="Введите текст"
      v-model:value="note.title"
      type="text"
      class="base-input"
    />

    <BaseTextarea
      placeholder="Введите текст"
      v-model:value="note.descr"
      class="base-textarea"
    />
  </div>

  <div class="container">
    <BaseInput
      class="date-input"
      v-model:value="note.date"
      type="date"
      placeholder="Введите дату"
    />

    <ComponentWithDropdown
      class="impr-input"
      v-model:value="note.impr"
      v-model:options="options"
    />

    <AddTegComponent
      :class-name="'teg-input'"
      @chooseTeg="chooseTeg"
      @update:error="error = $event"
      :selectedTegs="note.teg"
    />
  </div> -->

  <ModalWindow v-if="isVisible"/>

  <NotesWindow/>

  <base-button @click="handleClick">
    <span>Кнопка</span>
  </base-button>

  <base-button @click="showModalFunc">
    <span>Добавить</span>
  </base-button>

  <!-- <base-button @click="AddNote">
    <span>Сохранить</span>
  </base-button> -->

</template>

<style scoped>
.tegs {
  width: 1000px;
  margin: auto;
  background-color: var(#165ae3c5);
  line-height: var(#eaf1ff);
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: default;
  gap: 4px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.error {
  text-align: center;
  color: red;
}
</style>
