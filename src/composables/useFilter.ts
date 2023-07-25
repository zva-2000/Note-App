import { ref, computed } from 'vue';

import { notesArray } from './useNotes.js';

import { searchValue } from './SearcheValue.js';

import { GridMode } from '@/types.ts';

let viewMode = ref<keyof typeof GridMode>(GridMode.Grid);

export function useFilter() {
  const notesFilter = computed(() => {
    let array = notesArray.notes;

    let search = searchValue.search;

    if (!search) return array;

    let valueOfSearch = search.trim().toLowerCase();
    array = array.filter(function (note) {
      return (
        note.title.toLowerCase().includes(valueOfSearch) ||
        note.descr.toLowerCase().includes(valueOfSearch) ||
        note.date.toLowerCase().includes(valueOfSearch) ||
        note.teg.some((teg) => teg.toLowerCase().includes(valueOfSearch))
      );
    });

    return array;
  });

  // let viewMode = ref('Grid');

  function changeGrid(newMode: keyof typeof GridMode) {
    // if (GridMode) {
    //   mode.LIST;
    // }
    console.log(newMode);

    viewMode.value = newMode;
    //   } else if (mode.LIST) {
    //     return mode.GRID
    //   }
  }

  return { notesFilter, changeGrid, viewMode };
}
