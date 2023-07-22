import { ref } from 'vue'

import { store } from './useTagsValue'

export function useTags() {

// const tags = ref(['Учеба', 'Работа', 'Семья']);

const newTag = ref('')

const addTegFunctionForCompose = () => {
    store.tags.push(newTag.value);
    console.log('vdfbgf')
};

return { addTegFunctionForCompose, newTag }
    
}
