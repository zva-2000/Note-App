<script setup>
import { ref, computed } from "vue";

import baseInput from "./components/BaseInput.vue";

import baseTextarea from "./components/BaseTextarea.vue";

import baseList from "./components/BaseList.vue";

const typeText = "text";

const typeDate = "date";

const placeholder = "Введите текст";

const placeholderTeg = "Введите группу";

const placeholderDate = "Введите дату окончания действия:";

const listOpen = ref(false);

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
</script>

<template>
  <baseInput
    :placeholder="placeholder"
    @update:modelValue="note.title = $event"
    :type="typeText"
  ></baseInput>

  <baseTextarea
    :placeholder="placeholder"
    @update:modelValue="note.descr = $event"
  ></baseTextarea>

  <p>{{ placeholderDate }}</p>
  <baseInput
    @update:modelValue="note.date = $event"
    :type="typeDate"
  ></baseInput>

  <baseInput
    :placeholder="placeholderTeg"
    @update:modelValue="note.teg = $event"
    :type="typeText"
  ></baseInput>

  <baseInput
    :type="typeText"
    @update:modelValue="note.impr"
    :placeholder="placeholder"
    @click="listOpen"
  ></baseInput>
  <baseList @update:important="note.impr" :listOpen="listOpen"></baseList>
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
