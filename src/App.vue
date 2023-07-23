<script setup>
import { ref, computed } from 'vue';

import BaseInput from './components/BaseInput.vue';

import BaseTextarea from './components/BaseTextarea.vue';

import BaseButton from './components/BaseButton.vue';

import MovedButtons from './components/MovedButtons.vue';

import BaseDeleteButton from './components/BaseDeleteButton.vue';

import SearchInput from './components/SearchInput.vue';

import ComponentWithDropdown from './components/ComponentWithDropdown.vue';

import AddTegComponent from './components/AddTegComponent.vue';

import AllNotes from './components/AllNotes.vue'

import { useTags } from './composables/useTags.js'

import { store } from './composables/useTagsValue.js'

import { notesArray } from './composables/useNotes.js'

import { searchValue } from './composables/SearcheValue.js'

import NotesWindow from './components/NotesWindow.vue'

// const { search } = useFilter()

// import newNote from "./components/TakeNewNote.vue";

const options = ref(['Очень важно', 'Важно', 'Не важно']);

const { addTegFunctionForCompose, newTag } = useTags();

// const tegs = ref(['Учеба', 'Работа', 'Семья']);

const listOpen = ref(false);

let showModal = ref(false);

let isOpen = ref(true);

let NewMessege = ref('');

let NewImr = ref('');

let grid = ref(true);

let note = ref({
  title: '',
  descr: '',
  impr: '',
  date: '',
  teg: [],
});

function handleClick() {
  console.log('Button clicked!');
}

function ChangeGrid() {
  grid.value = !grid.value;
}

function showModalFunc() {
  showModal.value = !showModal.value;
}

function OpenDrop() {
  isOpen.value = !isOpen.value;
  console.log('Button clicked!');
}

const notesFilter = computed(() => {
  console.log('Button input!111');
  let array =  notesArray.notes;

  if (!search.value) return array;

  let searchValue = search.value.trim().toLowerCase();
  array = array.filter(function (note) {
    return note.title.toLowerCase().includes(searchValue);
  });

  return array;
});

function AddNote() {
  let { title, descr, impr, teg } = note;
  // if (title === '') {
  //   NewMessege = 'Wrong note';
  //   return false;
  // }
  // if (impr === '') {
  //   NewImr = 'Choose the importance of note';
  //   return false;
  // }
  notesArray.notes.push({
    title,
    descr,
    impr,
    date: new Date(Date.now()).toLocaleString(),
    teg,
  });
  // NewMessege = null;
  // NewImr = null;
  note.title = '';
  note.descr = '';
  note.impr = '';
  note.teg = [];
}

const removeNote = (index) => {
  notes.splice(index, 1);
  console.log('Button clicked!');
};

let selectedTegs = ref([]);

const chooseTeg = (newTag) => {
  if (!note.value.teg.includes(newTag)) {
    selectedTegs.value.push(newTag);
    note.value.teg.push(newTag);
  }
};

let error = ref('');

</script>

<template>
  <p>title: {{ note.title }}</p>

  <p>search: {{ searchValue.search }}</p>

  <p>date: {{ note.date }}</p>
  <p>descr: {{ note.descr }}</p>
  <p>impr: {{ note.impr }}</p>
  <p>teg: {{ note.teg }}, {{ newTag }}</p>

  <SearchInput v-model:value="searchValue.search" />

  <!-- <p v-for="note in notes" :key="note.title" @input="notesFilter">{{ note }}</p> -->

  <div class="input-container">
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

  </div>

  <!-- {{ notesFilter }} -->

  <NotesWindow/>

  <!-- @addTegFunction="addTegFunction" -->
  <!-- v-model:inputTeg="newTag" -->
  <!-- v-model:tegs="tegs" -->

  <MovedButtons @onChangeGrid="ChangeGrid" :grid="grid" />

  <BaseDeleteButton @onDeleteNote="removeNote" />

  <base-button @click="handleClick">
    <span>Кнопка</span>
  </base-button>

  <base-button @click="showModalFunc">
    <span>Добавить</span>
  </base-button>

  <base-button @click="AddNote">
    <span>Сохранить</span>
  </base-button>

  <!-- <newNote
    @addNote="AddNote"
    :swowValue="showModal"
    :placeholderTeg="placeholderTeg"
    :placeholderText="placeholderText"
    :typeText="typeText"
  ></newNote> -->
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

.container {
  flex-grow: 1;
  display: flex;
  width: 1000px;
  gap: 11px;
  max-width: 1000px;
  margin-bottom: 50px;
}

.input-container {
  width: 1000px;
  margin: auto;
  gap: 100px;
  margin-bottom: 10px;
}

.date-input {
  width: 310px;
  position: relative;
}

.title-input {
  margin-top: 105px;
}

.teg-input {
  width: 310px;
  gap: 0px;
}

.impr-input {
  width: 310px;
}

.base-input {
  margin-bottom: 10px;
}

.error {
  text-align: center;
  color: red;
}
</style>
