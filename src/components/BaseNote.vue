<template>
  <div class="note-btns">
    <ChangeNoteButton @click="funcEdition" class="change-btn" v-show="!edit" />

    <BaseDeleteButton class="delete-button" @click="removeNote" />
  </div>

  <h1 class="note-header">{{ note.title }}</h1>
  <div class="note-body">
    <p class="note-descr" :title="note.descr">{{ note.descr }}</p>
    <p class="note-date">Дата создания: {{ formatedNoteDateBegin }}</p>
    <p class="note-date">Сделать до: {{ formatedNoteDate }}</p>
    <BaseTag
      :tagsText="note.impr"
      :tagsStyle="{
        [TagStyledMode.danger]: note.impr === 'Очень важно',
        [TagStyledMode.success]: note.impr === 'Не важно',
        [TagStyledMode.warning]: note.impr === 'Важно',
      }"
    />
    <ul class="selected-tags">
      <BaseTag
        v-for="teg in note.teg"
        :tagsText="teg"
        :tagsStyle="TagStyledMode.base"
        class="tags-in-note"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  note: {
    id: number;
    title: string;
    descr: string;
    impr: string;
    date: number;
    beginDate: number;
    teg: string[];
  };
  edit: boolean;
  importanceStyle?: string;
}>();

import ChangeNoteButton from './ChangeNoteButton.vue';

import BaseDeleteButton from './BaseDeleteButton.vue';

import BaseTag from './BaseTag.vue';

import { TagStyledMode } from '@/types.ts';

const formatedNoteDate = computed(() =>
  new Date(props.note.date).toLocaleDateString()
);

const formatedNoteDateBegin = computed(() =>
  new Date(props.note.beginDate).toLocaleDateString()
);

const emit = defineEmits<{
  [x: string]: any;
  (e: 'funcEdition', edit: boolean): void;
  (e: 'removeNote', id: number): void;
}>();

const removeNote = (id: number) => {
  emit('removeNote', props.note.id);
};

const funcEdition = (edit: boolean) => {
  emit('funcEdition', edit);
};
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
.note-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 32px;
  max-width: 410px;
  flex-wrap: wrap;
  p {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.note-descr {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  max-height: 65px;
  text-overflow: ellipsis;
}

.note-descr:after {
  content: '';
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 1.2em;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0));
  pointer-events: none;
}

.selected-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.note-body {
  max-width: 410px;
  flex-wrap: wrap;
  p {
    margin: 20px 0;
  }
}

.delete-button,
.change-btn {
  position: absolute;
  right: 0;
  left: auto;
}

.delete-button {
  right: 34px;
}

.note-btns {
  position: relative;
}

.tags-in-note {
  margin-top: 5px;
}
</style>
