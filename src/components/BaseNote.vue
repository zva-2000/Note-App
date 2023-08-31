<template>
  <div class="note-header" :class="viewMode">
    <h1>{{ note.title }}</h1>
    <!-- <BaseDeleteButton class="delete-button" @click="removeNote(index)" /> -->
  </div>
  <div class="note-body">
    <p>{{ note.descr }}</p>
    <p class="note-date">Дата создания: {{ note.beginDate }}</p>
    <p class="note-date">Сделать до: {{ note.date }}</p>
    <p class="impr" :style="{ backgroundColor: importanceColor }">
      {{ note.impr }}
    </p>
    <SelectedTegs class="note-teg" :items="note.teg" :showButton="false" />
  </div>

  <ChangeNoteButton @click="editor" class="change-btn" />
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

const props = defineProps<{
  note: {
    title: string;
    descr: string;
    impr: string;
    date: string;
    beginDate: string;
    teg: string[];
  };
  index: number;
}>();

import SelectedTegs from './SelectedTegs.vue';

import ChangeNoteButton from './buttons/ChangeNoteButton.vue';

import { useNotes } from '../composables/useNotes.js';

import { useVisible } from '../composables/useVisible.ts'

import { useFilter } from '../composables/useFilter.ts';

const { editor } = useVisible();

const { notes, removeNote } = useNotes();

const { notesFilter, viewMode, notesFilterByTag } = useFilter();

const importanceColors = ref({
  'Очень важно': '#ee9191',
  'Важно': '#ffd261',
  'Не важно': '#a7be8e',
});

const importanceColor = computed(() => {
  return importanceColors.value[props.note.impr];
});
</script>

<style lang="scss">
.impr {
  padding: 2px 6px 2px 8px;
    line-height: #eaf1ff;
    border-radius: 15px;
    color: rgb(0, 0, 0);
    max-width: 140px;
    text-align: center;
}
.note-header .Grid {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #af2c2c;
  }
}
.note-header .List {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    justify-content: center;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
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
}
.note-header .List {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    justify-content: center;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.change-btn {
  margin-left: 93%;
}
</style>
