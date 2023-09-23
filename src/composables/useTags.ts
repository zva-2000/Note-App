import { ref } from 'vue';

const chooseImportanceTags = ref(['Очень важно', 'Важно', 'Не важно']);

const tagsForMainWindow = ref(['Учеба', 'Работа', 'Семья']);

const tags = ref(['Учеба', 'Работа', 'Семья']);

const choosenTegs = ref<string[]>([]);

let emptyTagError = ref('');

const newTag = ref('');

export function useTags() {
  const addTegFunctionForCompose = () => {
    if (newTag.value === '') {
      emptyTagError.value = 'Введите тег, если хотите его добавить';
    } else {
      tags.value.push(newTag.value);
      tagsForMainWindow.value.push(newTag.value);
      newTag.value = '';
      emptyTagError.value = '';
    }
  };

  return {
    addTegFunctionForCompose,
    newTag,
    tags,
    choosenTegs,
    tagsForMainWindow,
    chooseImportanceTags,
    emptyTagError,
  };
}
