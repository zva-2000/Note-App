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

const filterDateOne = ref('');

const filterDateTwo = ref('');

const timestampDateOne = computed(() => {
  return new Date(filterDateOne.value).getTime();
});

const timestampDateTwo = computed(() => {
  return new Date(filterDateTwo.value).getTime();
});

// const timestampNoteDate = computed((note: any) => {
//   return new Date(note.date.value).getTime();
// });


export function useFilter() {
  function setTag(tag: string) {
    SelectedTeg.value = tag;
    console.log(timestampNoteDate.value);
    console.log(timestampDateOne.value);
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
      beginDate: string;
      teg: string[];
    }) {
      return (
        note.title.toLowerCase().includes(valueOfSearch) ||
        note.descr.toLowerCase().includes(valueOfSearch) ||
        note.date.toLowerCase().includes(valueOfSearch) ||
        note.beginDate.toLowerCase().includes(valueOfSearch) ||        
        note.teg.some((teg: string) =>
          teg.toLowerCase().includes(valueOfSearch)
        )
      );
    });

    return array;
  });

  function takeOffFilter() {  
    SelectedTeg.value = '';
    Importance.value = '';
    filterDateOne.value = '';
    filterDateTwo.value = '';
  }

  const notesFilterByTagandDate = computed(() => {
    if (!SelectedTeg.value && !Importance.value) return notesFilter.value;
    if (!filterDateOne.value && !filterDateTwo.value) return notesFilter.value;

    let notesFilterByTag = notesFilter.value;
    if (SelectedTeg.value || Importance.value) {
      notesFilterByTag = notesFilter.value.filter((note: any) => {
          const tagMatch = SelectedTeg.value ? note.teg.includes(SelectedTeg.value) : true;
          const importanceMatch = Importance.value ? note.impr.includes(Importance.value) : true;
          return tagMatch && importanceMatch;
      });

    let notesFilterByDate = notesFilterByTag
    if (filterDateOne.value || filterDateTwo.value) {
      notesFilterByDate = notesFilterByTag.filter((note: any) => {
          if (timestampDateOne.value && timestampDateTwo.value) {
              return (timestampDateOne.value <= note.beginDate && timestampDateTwo.value >= note.beginDate);
          } else if (timestampDateOne.value) {
              return timestampDateOne.value <= note.beginDate;
          } else if (timestampDateTwo.value) {
              return timestampDateTwo.value >= note.beginDate;
          }
          return true; 
      });
  }
  return notesFilterByDate;
 }});


  function changeGrid(newMode: keyof typeof GridMode) {
    console.log(newMode);
    viewMode.value = newMode;
  }

  return {
    takeOffFilter,
    notesFilter,
    changeGrid,
    search,
    viewMode,
    setTag,
    setImpr,
    SelectedTeg,
    Importance,
    filterDateOne,
    filterDateTwo,
    notesFilterByTagandDate
  };
}
