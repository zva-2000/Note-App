import { reactive } from 'vue'

export const notesArray = reactive({
  notes: [
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
})