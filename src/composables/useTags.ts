import { Ref, ref } from 'vue';

import { useNotes } from '../composables/useNotes';

const { note } = useNotes() as { note: Ref<{ teg: string[], impr: string }> };

const chooseImportanceTags = ref(['Очень важно', 'Важно', 'Не важно']);

const tagsForMainWindow = ref(['Учеба', 'Работа', 'Семья'])

const tags = ref(['Учеба', 'Работа', 'Семья'])

const choosenTegs = ref<string[]>([]);

let emptyTagError = ref('');

const newTag = ref('');

export function useTags() {

  const addTegFunctionForCompose = () => {
    if (newTag.value === '') {
      emptyTagError.value = 'Введите тег, если хотите его добавить'
    } else {
    tags.value.push(newTag.value);
    tagsForMainWindow.value.push(newTag.value);
    newTag.value = '';
    emptyTagError.value = '';
   }
  };

  const chooseTeg = (newTag: string) => {
  if (!note.value.teg.includes(newTag)) {
    choosenTegs.value.push(newTag);
    note.value.teg.push(newTag);
    console.log(note.value.teg)
  }
  };

  const chooseImpr = (impr: string) => {
    note.value.impr = impr
  }

  const deleteTag = (index: number) => {
    note.value.teg.splice(index, 1);
  };

  return { addTegFunctionForCompose, newTag, tags, chooseTeg, chooseImpr, choosenTegs, tagsForMainWindow, chooseImportanceTags, deleteTag, emptyTagError };
}
