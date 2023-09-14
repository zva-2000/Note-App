import { ref, computed } from 'vue'

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
      beginDate: 1683849600000,
      date: 1694368800000,
      teg: ['Работа'],
    },
    {
      title: 'Выучить Composbles',
      descr: 'Описан в документации Vue',
      impr: 'Важно',
      beginDate: 1689984100000,
      date: 1692489600000,
      teg: ['Учеба'],
    },
    {
      title: 'Вычесать кота',
      descr: 'А то опять разбросает шерсть',
      impr: 'Не важно',
      beginDate: 1692316800000,
      date: 1691085600000,
      teg: ['Семья'],
    },
    {
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
  title: '',
  descr: '',
  impr: '',
  formattedDate: '', 
  beginDate: '',
  date: '',
  teg: [],
});



export function useNotes() {

  const removeNote = (index) => {
    notes.value.splice(index, 1);
    console.log(timestampNoteDate)
  };

  function AddNote() {

    let { title, descr, impr, teg, date } = note.value;

    if (title === '' && descr === '') {
        noneTitleMistake.value = 'Введите заголовок или описание';
        return false;
    }

    let timestampNoteDate = new Date(date).getTime();

    let timestampNoteDateBegin = new Date().getTime();

    let formattedDate = new Date(timestampNoteDate).toLocaleDateString();

    let newNote = {
        title,
        descr,
        impr,
        date: timestampNoteDate,     
        formattedDate,            
        teg,
        beginDate: timestampNoteDateBegin
    };

    notes.value.push(newNote);

    localStorage.setItem("notes", JSON.stringify(notes.value));

    noneTitleMistake.value = null;
    note.value.date = '';
    note.value.title = '';
    note.value.descr = '';
    note.value.impr = '';
    note.value.teg = [];
    closeModal()

    return notes.value;
  
  }



  return { notes, note, removeNote, AddNote, visibleModal, openModal, closeModal, noneTitleMistake};
}
