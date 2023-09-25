import { ref, computed } from 'vue';

import { useFilter } from './useFilter';

const {
  selectedTeg,
  importance,
  filterDateOne,
  filterDateTwo,
  search,
  timestampDateOne,
  timestampDateTwo,
} = useFilter();

const notes = ref([
  {
    id: 1,
    title: 'Сделать все задачи',
    descr: 'На отлично!',
    impr: 'Очень важно',
    beginDate: 1683849600000,
    date: 1692489600000,
    teg: ['Работа'],
  },
  {
    id: 2,
    title: 'Выучить Composbles',
    descr: 'Описан в документации Vue',
    impr: 'Важно',
    beginDate: 1689984100000,
    date: 1692489600000,
    teg: ['Учеба'],
  },
  {
    id: 3,
    title: 'Вычесать кота',
    descr: 'А то опять разбросает шерсть',
    impr: 'Не важно',
    beginDate: 1692316800000,
    date: 1691085600000,
    teg: ['Семья'],
  },
  {
    id: 4,
    title: 'Основы Node.js',
    descr: 'Посмотреть видео на ютубе',
    impr: 'Важно',
    beginDate: 1691485600000,
    date: 1699316800000,
    teg: ['Работа', 'Учеба'],
  },
]);

const emptyTitleError = ref('');

export function useNotes() {
  const removeNote = (id: number) => {
    notes.value = notes.value.filter((note) => note.id !== id);
  };

  function addNote(newNote: {
    id: number;
    title: string;
    descr: string;
    impr: string;
    beginDate: number;
    date: number;
    teg: string[];
  }) {
    let timestampNoteDate = new Date(newNote.date).getTime();
    let timestampNoteDateBegin = new Date().getTime();

    if (newNote.title === '' && newNote.descr === '') {
      emptyTitleError.value = 'Введите заголовок';
      return false;
    }

    newNote.date = timestampNoteDate;
    newNote.beginDate = timestampNoteDateBegin;

    notes.value.push(newNote);

    localStorage.setItem('notes', JSON.stringify(notes.value));
    emptyTitleError.value = '';

    return notes.value;
  }

  const filteredNotesList = computed(() => {
    let valueOfSearch = search.value.trim().toLowerCase();

    return notes.value.filter((note: any) => {
      let tagAndImportanceCheck = true;
      let dateCheck = true;
      let searchCheck = true;

      if (search.value) {
        searchCheck = valueOfSearch
          ? note.title.toLowerCase().includes(valueOfSearch) ||
            note.descr.toLowerCase().includes(valueOfSearch) ||
            note.teg.some((teg: string) =>
              teg.toLowerCase().includes(valueOfSearch)
            )
          : true;
      }

      if (selectedTeg.value || importance.value) {
        const tagMatch = selectedTeg.value
          ? note.teg.includes(selectedTeg.value)
          : true;
        const importanceMatch = importance.value
          ? note.impr.includes(importance.value)
          : true;
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
      return tagAndImportanceCheck && dateCheck && searchCheck;
    });
  });

  function updateNoteTeg(noteId: number, updatedNoteTeg: string) {
    notes.value.map((note) => {
      if (note.id !== noteId) return note.teg;
      else if (!note.teg.includes(updatedNoteTeg)) {
        note.teg.push(updatedNoteTeg);
      }
    });
  }

  function updateNote(updatedNote: any) {
    notes.value = notes.value.map((note) => {
      if (note.id !== updatedNote.id) return note;
      else return updatedNote;
    });
  }

  function deleteTag(noteId: number, index: number) {
    notes.value.map((note) => {
      if (note.id !== noteId) return note.teg;
      else note.teg.splice(index, 1);
    });
  }

  return {
    notes,
    removeNote,
    addNote,
    emptyTitleError,
    filteredNotesList,
    updateNoteTeg,
    updateNote,
    deleteTag,
  };
}
