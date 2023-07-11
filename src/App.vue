<script setup>

import { ref, computed } from 'vue';

import BaseInput from './components/BaseInput.vue';

import BaseTextarea from './components/BaseTextarea.vue';

// import baseList from "./components/BaseList.vue";

import BaseButton from './components/BaseButton.vue';

import MovedButtons from './components/MovedButtons.vue';

import BaseDeleteButton from './components/BaseDeleteButton.vue';

import SearchInput from './components/SearchInput.vue';

import ComponentWithDropdown from './components/ComponentWithDropdown.vue';

import AddTegComponent from './components/addTegComponent.vue';

// import newNote from "./components/TakeNewNote.vue";

const options = ref(['Очень важно', 'Важно', 'Не важно']);

const tegs = ref(['Учёба', 'Работа', 'Семья']);

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
  teg: '',
});

let notes = ref([
  {
    title: 'First note',
    descr: 'Description for first note',
    impr: 'Important',
    date: new Date(Date.now()).toLocaleString(),
    teg: 'Work',
  },
  {
    title: 'Second note',
    descr: 'Description for second note',
    impr: 'Normal',
    date: new Date(Date.now()).toLocaleString(),
    teg: 'Study',
  },
  {
    title: 'Third note',
    descr: 'Description for third note',
    impr: 'No matter',
    date: new Date(Date.now()).toLocaleString(),
    teg: 'Номе',
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

const notesFilter = computed(() => {
  let array = notes;

  if (!search.value) return array;

  search.value = search.value.trim().toLowerCase();
  array = array.filter(function (item) {
    if (item.title.toLowerCase().indexOf(search) !== -1) return item;
  });

  return array;
});

function AddNote() {
  let { title, descr, impr, teg } = note;
  if (title === '') {
    NewMessege = 'Wrong note';
    return false;
  }
  if (impr === '') {
    NewImr = 'Choose the importance of note';
    return false;
  }
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

const chooseTeg = (tegs) => {
  note.teg = tegs;
  isVisible = true;
  console.log('Button clicked!');
};

</script>

<template>
  title: {{ note.title }}
  search: {{ search }}
  date: {{ note.date }}
  descr: {{ note.descr }}
  impr: {{ note.impr }}
  teg: {{ note.teg }}

  <SearchInput :value="search" @search="search = $event"/>

  <AddTegComponent 
  v-model:note="note" 
  v-model:tegs="tegs" 
  @chooseTeg="teg = note.teg"/>

  <BaseInput
    placeholder="Введите текст"
    v-model:value="note.title"
    type="text"
  />

  <BaseTextarea
    placeholder="Введите текст"
    @update:modelValue="note.descr = $event"
    :modelValue="''"
  />

  <BaseInput
    v-model:value="note.date"
    type="date"
    placeholder="Введите дату"
  />

  <ComponentWithDropdown
    v-model:value="note.impr"
    v-model:options="options"
  />

  <MovedButtons @click="ChangeGrid" :grid="grid" />

  <BaseDeleteButton @onDeleteNote="removeNote" />

  <base-button @click="handleClick" class="btn btnPrimary">
    <span>Кнопка</span>
  </base-button>

  <base-button @click="showModalFunc" class="btn btnPrimary">
    <span>Добавить</span>
  </base-button>

  <base-button @click="AddNote" class="btn btnPrimary">
    <span>Сохранить</span>
  </base-button>

  <!-- <newNote @addNote="AddNote" 
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
</style>
