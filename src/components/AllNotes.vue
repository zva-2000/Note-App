<template>

<ul class="notes">
    <li
    class="note-unit"
    v-for="(note, index) in store.notes"
    :key="index"
    >
    {{ note }}
</li>
</ul>
  
</template>

<script setup lang="ts">

import { store } from '../composables/useNotes.js'

</script>

<style>

/* .note-unit {
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
} */

.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}

</style>