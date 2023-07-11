<script setup>
import { ref, computed } from 'vue';

import baseInput from './components/BaseInput.vue';

import baseTextarea from './components/BaseTextarea.vue';

// import baseList from "./components/BaseList.vue";

import BaseButton from './components/BaseButton.vue';

import MovedButtons from './components/MovedButtons.vue';

import BaseDeleteButton from './components/BaseDeleteButton.vue';

import searchInput from './components/SearchInput.vue';

import dropdownComp from './components/DropdownComp.vue';

import addTegComponent from './components/addTegComponent.vue';

// import newNote from "./components/TakeNewNote.vue";

const placeholderDate = 'Введите дату окончания действия:';

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

const Test = ref('');
</script>

<template>
  tiutle: {{ note.title }}
  {{ search }}
  {{ note.date }}
  <searchInput :value="search" @search="search = $event"></searchInput>

  <add-teg-component v-model:note="note" v-model:tegs="tegs" />
  <base-input
    placeholder="Введите текст"
    v-model:value="note.title"
    type="text"
  />

  <base-textarea
    placeholder="Введите текст"
    @update:modelValue="note.descr = $event"
    :modelValue="''"
  ></base-textarea>

  {{ note.descr }}

  <p>{{ placeholderDate }}</p>
  <base-input
    @update:modelValue="note.date = $event"
    :modelValue="''"
    type="date"
    placeholder="Введите дату"
  ></base-input>

  <!-- <baseInput
    placeholder="Введите группу"
    type="text"
    @update:modelValue="note.teg = $event"
    :modelValue = "''"
  ></baseInput> -->

  <dropdown-comp
    v-model:value="note.impr"
    v-model:options="options"
  ></dropdown-comp>

  {{ note.impr }}

  <base-button @click="handleClick" class="btn btnPrimary">
    <span>Кнопка</span>
  </base-button>

  <MovedButtons @click="ChangeGrid" :grid="grid" />

  <base-button @click="showModalFunc" class="btn btnPrimary">
    <span>Добавить</span>
  </base-button>

  <base-button @click="AddNote" class="btn btnPrimary">
    <span>Сохранить</span>
  </base-button>

  <BaseDeleteButton @onDeleteNote="removeNote" />

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
