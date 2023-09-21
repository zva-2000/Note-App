<template>

    <div class="note-btns">

      <ChangeNoteButton @click="funcEdition" class="change-btn" v-show="!edit" />

      <BaseDeleteButton class="delete-button" @click="removeNote" />
    </div>
  
  <h1 class="note-header">{{ note.title }}</h1>
  <div class="note-body">
    <p>{{ note.descr }}</p>
    <p class="note-date">Дата создания: {{ formatedNoteDateBegin }}</p>
    <p class="note-date">Сделать до: {{ formatedNoteDate }}</p>
    <p class="impr" :style="{ backgroundColor: importanceColor }">
      {{ note.impr }}
    </p>
    <BaseTag :tagsText="note.impr" tagsStyle="importance-style"></BaseTag>
    <ul class="selected-tags"><BaseTag v-for="teg in note.teg" :tagsText="teg" tagsStyle="tags-style"></BaseTag></ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

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
}>();

import ChangeNoteButton from './buttons/ChangeNoteButton.vue';

import BaseDeleteButton from './BaseDeleteButton.vue';

import BaseTag from './BaseTag.vue';

const formatedNoteDate = computed(() => new Date(props.note.date).toLocaleDateString());

const formatedNoteDateBegin = computed(() =>
  new Date(props.note.beginDate).toLocaleDateString()
);

const emit = defineEmits<{
  [x: string]: any;
  (e: 'funcEdition', edit: boolean): void;
  (e: 'removeNote', id: number): void;
}>();

const importanceColors = ref({
  'Очень важно': '#ee9191',
  'Важно': '#ffd261',
  'Не важно': '#a7be8e',
});

const importanceColor = computed(() => {
  return importanceColors.value[props.note.impr];
});

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
  p {
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

.delete-button,
.change-btn {
  position: absolute;
  right: 0;
  left: auto;
}

.change-btn {
  left: calc(100% - 100px);
}

.note-btns {
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  position: relative;
}


</style>
