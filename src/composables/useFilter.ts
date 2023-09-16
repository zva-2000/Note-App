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
  return filterDateOne.value
    ? new Date(filterDateOne.value).getTime()
    : undefined;
});

const timestampDateTwo = computed(() => {
  return filterDateTwo.value
    ? new Date(filterDateTwo.value).getTime()
    : undefined;
});

// const timestampNoteDate = computed((note: any) => {
//   return new Date(note.date.value).getTime();
// });

export function useFilter() {
  function setTag(tag: string) {
    SelectedTeg.value = tag;
    console.log(timestampDateOne.value);
  }

  function setImpr(impr: string) {
    Importance.value = impr;
    console.log(Importance.value);
  }

  const notesFilter = computed(() => {
    console.log(0);

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
    console.log(1);
    return notesFilter.value.filter((note: any, index) => {
      let tagAndImportanceCheck = true;
      let dateCheck = true;

      if (SelectedTeg.value || Importance.value) {
        const tagMatch = SelectedTeg.value
          ? note.teg.includes(SelectedTeg.value)
          : true;
        console.log(tagMatch);
        const importanceMatch = Importance.value
          ? note.impr.includes(Importance.value)
          : true;
        console.log(importanceMatch);
        tagAndImportanceCheck = tagMatch && importanceMatch;
      }

      if (filterDateOne.value || filterDateTwo.value) {
        if (timestampDateOne.value && timestampDateTwo.value) {
          dateCheck =
            timestampDateOne.value <= note.beginDate &&
            timestampDateTwo.value >= note.beginDate;
        } else if (timestampDateOne.value) {
          dateCheck = timestampDateOne.value <= note.beginDate;
        } else if (timestampDateTwo.value) {
          dateCheck = timestampDateTwo.value >= note.beginDate;
        }
      }
      console.group(dateCheck);
      console.log(note);
      console.log(filterDateOne.value, timestampDateOne.value);
      console.log(filterDateTwo.value, timestampDateTwo.value);
      console.groupEnd();

      return tagAndImportanceCheck && dateCheck;
    });
  });

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
    notesFilterByTagandDate,
  };
}
