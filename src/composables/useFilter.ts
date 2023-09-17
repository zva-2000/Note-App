import { ref, computed } from 'vue';

import { useNotes } from './useNotes.js';

import { GridMode } from '@/types.ts';

let viewMode = ref<keyof typeof GridMode>(GridMode.Grid);

const search = ref('');

const selectedTeg = ref('');

const importance = ref('');

const filterDateOne = ref('');

const filterDateTwo = ref('');

const timestampDateOne = computed(() => {
  return filterDateOne.value
    ? new Date(filterDateOne.value).getTime()
    : undefined;
});

const timestampDateTwo = computed(() => {
  return filterDateTwo.value
    ? new Date(filterDateTwo.value).getTime()
    : undefined;
});

export function useFilter() {

  function setTag(tag: string) {
    selectedTeg.value = tag;
    console.log(timestampDateOne.value);
  }

  function setImpr(impr: string) {
    importance.value = impr;
    console.log(importance.value);
  }

  function changeGrid(newMode: keyof typeof GridMode) {
    console.log(newMode);
    viewMode.value = newMode;
  }

  function takeOffFilter() {
    selectedTeg.value = '';
    importance.value = '';
    filterDateOne.value = '';
    filterDateTwo.value = '';
  }

  return {
    timestampDateOne,
    timestampDateTwo,
    takeOffFilter,
    changeGrid,
    search,
    viewMode,
    setTag,
    setImpr,
    selectedTeg,
    importance,
    filterDateOne,
    filterDateTwo,
  };
}
