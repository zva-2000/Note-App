<template>
  <ul class="notes" :class="viewMode">
    <li class="note" v-for="(note, index) in notesFilter" :key="index">
      <div class="note-header" :class="viewMode">
        <h1>{{ note.title }}</h1>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <p>{{ note.impr }}</p>
        <p class="note-date">{{ note.date }}</p>
        <SelectedTegs class="note-teg" :items="note.teg" />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
// import { notesArray } from '../composables/useNotes.js'

import { notesFilter, useFilter } from '../composables/useFilter.js';

import SelectedTegs from './SelectedTegs.vue';

const { notesFilter, viewMode } = useFilter();
</script>

<style lang="scss">
.note-unit {
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.note-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}

.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}

.note-teg {
  margin-top: 0px;
}

// .note-date {
//   margin: 10px 0;
// }
</style>
