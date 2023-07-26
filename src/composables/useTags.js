import { ref } from 'vue';

// import { store } from './useTagsValue';

// const tags = ref([{id:1, tag:'Учеба'}, {id:2, tag:'Работа'}, {id:2, tag:'Семья'}]);

const tags = ref(['Учеба', 'Работа', 'Семья'])

export function useTags() {
  const newTag = ref('');

  const addTegFunctionForCompose = () => {
    tags.value.push(newTag.value);
    newTag.value = '';
  };

  return { addTegFunctionForCompose, newTag, tags };
}
