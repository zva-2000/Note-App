import { ref, computed } from 'vue';

import { useNotes } from './useNotes.js';

import { GridMode } from '@/types.ts';

import { useTags } from './useTags.js'

const { notes } = useNotes();

const { tags } = useTags();

let viewMode = ref<keyof typeof GridMode>(GridMode.Grid);

const search = ref('')

export function useFilter() {

  const notesFilter = computed(() => {
    let array = notes.value;

    if (!search.value) return array;

    let valueOfSearch = search.value.trim().toLowerCase();
    array = array.filter(function(note) {
      return (
        note.title.toLowerCase().includes(valueOfSearch) ||
        note.descr.toLowerCase().includes(valueOfSearch) ||
        note.date.toLowerCase().includes(valueOfSearch) ||
        note.teg.some((teg: string) => teg.toLowerCase().includes(valueOfSearch))
      );
    });

    return array;
  });

  function changeGrid(newMode: keyof typeof GridMode) {
    console.log(newMode);
    viewMode.value = newMode;
  }

  return { notesFilter, changeGrid, search };
}
