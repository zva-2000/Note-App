<script setup>

import NotesWindow from './components/NotesWindow.vue';

</script>

<template>

  <NotesWindow class="main"/>

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

</style>
