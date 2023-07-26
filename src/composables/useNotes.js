import { ref } from 'vue'

const notes = ref([
    {
      title: 'Сделать все задачи',
      descr: 'На отлично!',
      impr: 'Очень важно',
      date: new Date(Date.now()).toTimeString(),
      teg: ['Работа'],
    },
    {
      title: 'Выучить Composbles',
      descr: 'Описан в документации Vue',
      impr: 'Нормально',
      date: new Date(Date.now()).toLocaleString(),
      teg: ['Учеба'],
    },
    {
      title: 'Вычесать кота',
      descr: 'А то опять разбросает шерсть',
      impr: 'Не важно',
      date: new Date(Date.now()).toLocaleString(),
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
  return { notes, note };
}
