import { ref } from 'vue';

import { useNotes } from '../composables/useNotes.js';

const { note, notes } = useNotes();

const options = ref(['Очень важно', 'Важно', 'Не важно']);

const tagsForMainWindow = ref(['Учеба', 'Работа', 'Семья'])

const tags = ref(['Учеба', 'Работа', 'Семья'])

let choosenTegs = ref([]);

let error = ref('');

export function useTags() {
  const newTag = ref('');

  const addTegFunctionForCompose = () => {
    if (newTag.value === '') {
      error.value = 'Введите тег, если хотите его добавить'
    } else {
    tags.value.push(newTag.value);
    tagsForMainWindow.value.push(newTag.value);
    newTag.value = '';
    error.value = '';
   }
  };

  const chooseTeg = (newTag) => {
  if (!note.value.teg.includes(newTag)) {
    choosenTegs.value.push(newTag);
    note.value.teg.push(newTag);
  }
  };

  const deleteTag = (index) => {
    note.value.teg.splice(index, 1);
  };

  return { addTegFunctionForCompose, newTag, tags, chooseTeg, choosenTegs, tagsForMainWindow, options, deleteTag, error };
}
