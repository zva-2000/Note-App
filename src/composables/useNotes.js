import { ref } from 'vue'

// let curIndex = ref(undefined)

let visibleModal = ref(false);

const openModal = () => {
  visibleModal.value = true;
};

const closeModal = () => {
  visibleModal.value = false;
};

const noneTitleMistake = ref('')

const notes = ref([
    {
      title: 'Сделать все задачи',
      descr: 'На отлично!',
      impr: 'Очень важно',
      beginDate: '20.06.2023, 17:42:59',
      date: '2023-24-07',
      teg: ['Работа'],
    },
    {
      title: 'Выучить Composbles',
      descr: 'Описан в документации Vue',
      impr: 'Важно',
      beginDate: '22.07.2023, 10:30:48',
      date: '2023-07-27',
      teg: ['Учеба'],
    },
    {
      title: 'Вычесать кота',
      descr: 'А то опять разбросает шерсть',
      impr: 'Не важно',
      beginDate: '21.08.2023, 12:40:35',
      date: "2023-24-08",
      teg: ['Семья'],
    },
  ]
)

let note = ref({
  title: '',
  descr: '',
  impr: '',
  beginDate: '',
  date: '',
  teg: [],
});

let notesOnServer = JSON.parse(localStorage.getItem("notes")) || [];

export function useNotes() {

  const removeNote = (index) => {
    notes.value.splice(index, 1);
  };

function AddNote() {

    let { title, descr, impr, teg, date } = note.value;

    if (title === '' && descr === '') {
        noneTitleMistake.value = 'Введите заголовок или описание';
        return false;
    }

    let newNote = {
        title,
        descr,
        impr,
        date,
        teg,
        beginDate: new Date().toLocaleString() 
    };

    notes.value.push(newNote);

    localStorage.setItem("notes", JSON.stringify(notes.value));

    noneTitleMistake.value = null;
    note.value.date = '';
    note.value.title = '';
    note.value.descr = '';
    note.value.impr = '';
    note.value.teg = [];
    closeModal(); 

    return notes.value;
 }



  return { notes, note, removeNote, AddNote, visibleModal, openModal, closeModal, noneTitleMistake};
}
