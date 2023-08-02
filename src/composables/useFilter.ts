import { ref, computed } from 'vue';

import { useNotes } from './useNotes.js';

import { GridMode } from '@/types.ts';

import { useTags } from './useTags.js';

const { notes } = useNotes();

const { tags } = useTags();

let viewMode = ref<keyof typeof GridMode>(GridMode.Grid);

const search = ref('');

const SelectedTeg = ref('');

const allTags = ref('Все теги')

export function useFilter() {
  
  function setTag(tag: string) {
    SelectedTeg.value = tag;
  }

  const notesFilter = computed(() => {
    let array = notes.value;

    if (!search.value) return array;

    let valueOfSearch = search.value.trim().toLowerCase();
    array = array.filter(function (note) {
      return (
        note.title.toLowerCase().includes(valueOfSearch) ||
        note.descr.toLowerCase().includes(valueOfSearch) ||
        note.date.toLowerCase().includes(valueOfSearch) ||
        note.teg.some((teg: string) =>
          teg.toLowerCase().includes(valueOfSearch)
        )
      );
    });

    return array;
  });

  const notesFilterByTag = computed(() => {
    if (!SelectedTeg.value) return notesFilter.value;
    if (SelectedTeg.value === 'Все теги') return notesFilter.value;
    return notesFilter.value.filter((note: any) =>
      note.teg.find((item: string) => item === SelectedTeg.value)
    );
  });

  function changeGrid(newMode: keyof typeof GridMode) {
    console.log(newMode);
    viewMode.value = newMode;
  }

  return { notesFilter, changeGrid, search, viewMode, setTag, SelectedTeg, notesFilterByTag };
}
