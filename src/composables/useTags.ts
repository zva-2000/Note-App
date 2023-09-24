import { ref } from 'vue';

const chooseImportanceTags = ref(['Очень важно', 'Важно', 'Не важно']);

const tagsForMainWindow = ref(['Учеба', 'Работа', 'Семья']);

const tags = ref(['Учеба', 'Работа', 'Семья']);

const choosenTegs = ref<string[]>([]);

const newTag = ref('');

export function useTags() {


  return {
    newTag,
    tags,
    choosenTegs,
    tagsForMainWindow,
    chooseImportanceTags,
  };
}
