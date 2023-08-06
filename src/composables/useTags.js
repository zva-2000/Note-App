import { ref } from 'vue';

import { useNotes } from '../composables/useNotes.js';

const { note } = useNotes();

const options = ref(['Очень важно', 'Важно', 'Не важно']);

const tagsForMainWindow = ref(['Все теги','Учеба', 'Работа', 'Семья'])

const tags = ref(['Учеба', 'Работа', 'Семья'])

let choosenTegs = ref([]);

export function useTags() {
  const newTag = ref('');

  const addTegFunctionForCompose = () => {
    tags.value.push(newTag.value);
    tagsForMainWindow.value.push(newTag.value);
    newTag.value = '';
  };

  const chooseTeg = (newTag) => {
  if (!note.value.teg.includes(newTag)) {
    choosenTegs.value.push(newTag);
    note.value.teg.push(newTag);
  }
  };

  return { addTegFunctionForCompose, newTag, tags, chooseTeg, choosenTegs, tagsForMainWindow, options };
}
