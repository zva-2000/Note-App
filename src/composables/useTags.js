import { ref } from 'vue';

// import { store } from './useTagsValue';

const tags = ref(['Учеба', 'Работа', 'Семья']);

export function useTags() {
  const newTag = ref('');

  const addTegFunctionForCompose = () => {
    tags.value.push(newTag.value);
    newTag.value = '';
  };

  return { addTegFunctionForCompose, newTag, tags };
}
