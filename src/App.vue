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

// import newNote from "./components/TakeNewNote.vue";

const options = ref(['Очень важно', 'Важно', 'Не важно']);

const tegs = ref(['Учеба', 'Работа', 'Семья']);

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

let notes = ref([
  {
    title: 'First note',
    descr: 'Description for first note',
    impr: 'Important',
    date: new Date(Date.now()).toLocaleString(),
    teg: ['Work'],
  },
  {
    title: 'Second note',
    descr: 'Description for second note',
    impr: 'Normal',
    date: new Date(Date.now()).toLocaleString(),
    teg: ['Study'],
  },
  {
    title: 'Third note',
    descr: 'Description for third note',
    impr: 'No matter',
    date: new Date(Date.now()).toLocaleString(),
    teg: ['Номе'],
  },
]);

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

let search = ref('');

const notesFilter = computed(() => {
  console.log('Button input!111');
  let array = notes.value;

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
  notes.push({
    title,
    descr,
    impr,
    date: new Date(Date.now()).toLocaleString(),
    teg,
  });
  NewMessege = null;
  NewImr = null;
  note.title = '';
  note.descr = '';
  note.impr = '';
  note.teg = '';
}

const removeNote = (index) => {
  notes.splice(index, 1);
  console.log('Button clicked!');
};

// const chooseTeg = (tegOne) => {
//   note.value.teg = tegOne;
//   console.log('Button clicked!1');
// };

let error = ref('');

const addTegFunction = () => {
  tegs.value.push(note.value.teg);
  error.value = '';
};
</script>

<template>
  <p>title: {{ note.title }}</p>

  <p>search: {{ search }}</p>

  <p>date: {{ note.date }}</p>
  <p>descr: {{ note.descr }}</p>
  <p>impr: {{ note.impr }}</p>
  <p>teg: {{ note.teg }}</p>

  <SearchInput v-model:value="search" />

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
      class="content"
      v-model:value="note.impr"
      v-model:options="options"
    />

    <AddTegComponent
      class="teg-input"
      v-model:note="note"
      v-model:tegs="tegs"
      @chooseTeg="(tegOne) => (note.teg = tegOne)"
      @addTegFunction="addTegFunction"
      @update:error="error = $event"
    />
  </div>

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
  gap: 35px;
  max-width: 1000px;
}

.input-container {
  width: 1000px;
  margin: auto;
  gap: 100px;
}

/* .base-textarea {
  margin-top: 1px;
}

.base-input {
  margin-bottom: 1px; */
/* } */

.date-input {
  width: 310px;
  position: relative;
}

.title-input {
  margin-top: 105px;
}

.teg-input {
  width: 310px;
}

.error {
  text-align: center;
  color: red;
}
</style>
