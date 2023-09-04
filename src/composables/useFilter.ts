import { ref, computed } from 'vue';

import { useNotes } from './useNotes.js';

import { GridMode } from '@/types.ts';

import { useTags } from './useTags.js';

const { notes } = useNotes();

const { tags, options } = useTags();

let viewMode = ref<keyof typeof GridMode>(GridMode.Grid);

const search = ref('');

const SelectedTeg = ref('');

const Importance = ref('');

// const allTags = ref('Все теги')

export function useFilter() {
  function setTag(tag: string) {
    SelectedTeg.value = tag;
  }

  function setImpr(impr: string) {
    Importance.value = impr;
    console.log(Importance.value);
  }

  const notesFilter = computed(() => {
    let array = notes.value;

    if (!search.value) return array;

    let valueOfSearch = search.value.trim().toLowerCase();
    array = array.filter(function (note: {
      title: string;
      descr: string;
      date: string;
      teg: string[];
    }) {
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
    if (!SelectedTeg.value && !Importance.value) return notesFilter.value;
    if (SelectedTeg.value === 'Сбросить фильтр тегов') return notesFilter.value;
    if (Importance.value === 'Сбросить фильтр тегов') return notesFilter.value;
    // return notesFilter.value.filter((note: any) =>
    //   note.teg.find((item: string) => item === SelectedTeg.value) && note.impr.includes(Importance.value)
    // );
    return notesFilter.value.filter((note: any) => {
      const tagMatch = SelectedTeg.value ? note.teg.find((item: string) => item === SelectedTeg.value) : true;
      const importanceMatch = Importance.value ? note.impr.includes(Importance.value) : true;
  
      return tagMatch && importanceMatch;
    });
  });


  function changeGrid(newMode: keyof typeof GridMode) {
    console.log(newMode);
    viewMode.value = newMode;
  }

  return {
    notesFilter,
    changeGrid,
    search,
    viewMode,
    setTag,
    setImpr,
    SelectedTeg,
    Importance,
    notesFilterByTag,
  };
}
