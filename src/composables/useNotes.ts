import { ref, computed } from 'vue'

import { useFilter} from './useFilter';

const { selectedTeg, importance, filterDateOne, filterDateTwo, search, timestampDateOne, timestampDateTwo } = useFilter()

const notes = ref([
    {
      id: 1,
      title: 'Сделать все задачи',
      descr: 'На отлично!',
      impr: 'Очень важно',
      beginDate: 1683849600000,
      date: 1694368800000,
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
  ]
)

let note = ref({
  id: 0,
  title: '',
  descr: '',
  impr: '',
  beginDate: '',
  date: 0,
  teg: [] as string[],
});

const emptyTitleError = ref('')

export function useNotes() {

  const removeNote = (index: number) => {
    notes.value.splice(index, 1);
  };

  function addNote() {

    let { title, descr, impr, teg, date, id } = note.value;

    if (title === '' && descr === '') {
        emptyTitleError.value = 'Введите заголовок или описание';
        return false;
    }

    let timestampNoteDate = new Date(date).getTime();

    let timestampNoteDateBegin = new Date().getTime();

    let newNote = {
        id,
        title,
        descr,
        impr,
        date: timestampNoteDate,                
        teg,
        beginDate: timestampNoteDateBegin
    };

    notes.value.push(newNote);

    localStorage.setItem("notes", JSON.stringify(notes.value));

    emptyTitleError.value = '';
    note.value.date = 0;
    note.value.title = '';
    note.value.descr = '';
    note.value.impr = '';
    note.value.teg = [];

    return notes.value;
  }

  const filteredNotesList = computed(() => {
    console.log(0);

    let valueOfSearch = search.value.trim().toLowerCase();

    return notes.value.filter((note: any)  => {

        let tagAndImportanceCheck = true;
        let dateCheck = true;
        let searchCheck = true;

        if (search.value) {
          searchCheck = valueOfSearch ?
          note.title.toLowerCase().includes(valueOfSearch) ||
          note.descr.toLowerCase().includes(valueOfSearch) ||
          note.teg.some((teg: string) =>
            teg.toLowerCase().includes(valueOfSearch)
          ) : true;
        }

      if (selectedTeg.value || importance.value) {
        const tagMatch = selectedTeg.value
          ? note.teg.includes(selectedTeg.value)
          : true;
        console.log(tagMatch);
        const importanceMatch = importance.value
          ? note.impr.includes(importance.value)
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
      return tagAndImportanceCheck && dateCheck && searchCheck;
    });
  });

  return { notes, note, removeNote, addNote, emptyTitleError, filteredNotesList};
}
