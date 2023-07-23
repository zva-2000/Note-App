import { reactive } from 'vue'

export const notesArray = reactive({
  notes: [
    {
      title: 'First note',
      descr: 'Description for first note',
      impr: 'Important',
      date: new Date(Date.now()).toTimeString(),
      teg: ['Work'],
    },
    {
      title: 'Second note',
      descr: 'Description for second note',
      impr: 'Normal',
      date: new Date(Date.now()).toLocaleString(),
      teg: ['Study'],
    },
    {
      title: 'Third note',
      descr: 'Description for third note',
      impr: 'No matter',
      date: new Date(Date.now()).toLocaleString(),
      teg: ['Номе'],
    },
  ]
})