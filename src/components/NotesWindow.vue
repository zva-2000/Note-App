<template>
  <MovedButtons />

  <SelectedTegs class="tags" :items="store.tags" />

  <AllNotes />
</template>

<script setup lang="ts">
import MovedButtons from './MovedButtons.vue';

import { store } from '../composables/useTagsValue.js';

import SelectedTegs from './SelectedTegs.vue';

import AllNotes from './AllNotes.vue';
</script>

<style></style>
