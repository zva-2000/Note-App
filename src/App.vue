<script setup lang="ts">
import { ref, computed } from "vue";

import baseInput from "./components/BaseInput.vue";

import baseTextarea from "./components/BaseTextarea.vue";

// import baseList from "./components/BaseList.vue";

import BaseButton from "./components/BaseButton.vue";

import MovedButtons from "./components/MovedButtons.vue";

import searchInput from "./components/SearchInput.vue";

import dropdownComp from "./components/InputForDropdow.vue";

// import newNote from "./components/TakeNewNote.vue";

import InputForDropdow from "./components/InputForDropdow.vue";

const typeText = "text";

const typeDate = "date";

const placeholderText = "Введите текст";

const placeholderTeg = "Введите группу";

const placeholderDate = "Введите дату окончания действия:";

const options = ref(["Very important", "Important", "Less"]);

const listOpen = ref(false);

let showModal = ref(false);

let isOpen = ref(true);

let NewMessege = ref("");

let NewImr = ref("");

let grid = ref(true);

let note = ref({
  title: "",
  descr: "",
  impr: "",
  date: "",
  teg: "",
});

let notes = ref([
  {
    title: "First note",
    descr: "Description for first note",
    impr: "Important",
    date: new Date(Date.now()).toLocaleString(),
    teg: "Work",
  },
  {
    title: "Second note",
    descr: "Description for second note",
    impr: "Normal",
    date: new Date(Date.now()).toLocaleString(),
    teg: "Study",
  },
  {
    title: "Third note",
    descr: "Description for third note",
    impr: "No matter",
    date: new Date(Date.now()).toLocaleString(),
    teg: "Номе",
  },
]);

function handleClick() {
  console.log("Button clicked!");
}

function ChangeGrid() {
  grid.value = !grid.value;
}

function showModalFunc() {
  showModal.value = !showModal.value;
}

function OpenDrop() {
  isOpen.value = !isOpen.value;
  console.log("Button clicked!");
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
  if (title === "") {
    NewMessege = "Wrong note";
    return false;
  }
  if (impr === "") {
    NewImr = "Choose the importance of note";
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
  note.title = "";
  note.descr = "";
  note.impr = "";
  note.teg = "";
}
</script>

<template>
  <dropdownComp
    v-model:note="note"
    v-model:options="options"
    :isOpen="isOpen"
  ></dropdownComp>

  <searchInput :value="search" @search="search = $event"></searchInput>

  <baseInput
    :placeholder="placeholderText"
    @update:modelValue="note.title = $event"
    type="typeText"
  ></baseInput>

  <baseTextarea
    :placeholder="placeholderText"
    @update:modelValue="note.descr = $event"
  ></baseTextarea>

  <p>{{ placeholderDate }}</p>
  <baseInput
    @update:modelValue="note.date = $event"
    type="typeDate"
  ></baseInput>

  <baseInput
    :placeholder="placeholderTeg"
    @update:modelValue="note.teg = $event"
    type="typeText"
  ></baseInput>

  <baseInput
    type="typeText"
    @update:modelValue="note.impr"
    :placeholder="placeholderText"
    @click="listOpen"
  ></baseInput>

  <!-- <baseList @update:important="note.impr" :listOpen="listOpen"></baseList> -->

  <BaseButton @click="handleClick" class="btn btnPrimary">
    <span>Кнопка</span>
  </BaseButton>

  <MovedButtons @click="ChangeGrid" :grid="grid"></MovedButtons>

  <BaseButton @click="showModalFunc" class="btn btnPrimary">
    <span>Добавить</span>
  </BaseButton>

  <BaseButton @click="AddNote" class="btn btnPrimary">
    <span>Сохранить</span>
  </BaseButton>

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
