import { ref } from 'vue'

let isVisible = ref(true);

const notes = ref([
    {
      title: 'Сделать все задачи',
      descr: 'На отлично!',
      impr: 'Очень важно',
      date: 'new Date(Date.now()).toTimeString()',
      teg: ['Работа'],
    },
    {
      title: 'Выучить Composbles',
      descr: 'Описан в документации Vue',
      impr: 'Нормально',
      date: '24.07.2023',
      teg: ['Учеба'],
    },
    {
      title: 'Вычесать кота',
      descr: 'А то опять разбросает шерсть',
      impr: 'Не важно',
      date: "24.07.2023",
      teg: ['Семья'],
    },
  ]
)

let note = ref({
  title: '',
  descr: '',
  impr: '',
  date: '',
  teg: [],
});

export function useNotes() {

  const removeNote = (index) => {
    notes.value.splice(index, 1);
  };

  function AddNote() {
    let { title, descr, impr, teg, date } = note.value;
    // if (title === '') {
    //   NewMessege = 'Wrong note';
    //   return false;
    // }
    // if (impr === '') {
    //   NewImr = 'Choose the importance of note';
    //   return false;
    // }
    notes.value.push({
      title,
      descr,
      impr,
      date,
      teg,
    });
    // NewMessege = null;
    // NewImr = null;
    note.value.date = '';
    note.value.title = '';
    note.value.descr = '';
    note.value.impr = '';
    note.value.teg = [];

    isVisible.value = !isVisible.value;
  }

  return { notes, note, removeNote, AddNote, isVisible };
}
