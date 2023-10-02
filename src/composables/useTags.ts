import { ref, Ref, computed} from 'vue';

const chooseImportanceTags = ref(['Очень важно', 'Важно', 'Не важно']);

const tagsForMainWindow = ref(['Учеба', 'Работа', 'Семья']);

const tags = ref(['Учеба', 'Работа', 'Семья']);

const choosenTegs = ref<string[]>([]);

// const newTag = ref('');

let sameTagError = ref('');

let emptyTagError = ref('');

export function useTags() {

  const addTag = (newTag: string) => {
    tags.value.push(newTag);
    tagsForMainWindow.value.push(newTag);
  }

  const addTegFunction = (newTag:string) => {
    let tagExists = false;
    tags.value.forEach((tag) => {
      if (tag.toLowerCase() === newTag.toLowerCase()) {
        tagExists = true;
      }
    });
    console.log(newTag)
    if (newTag === '') {
      emptyTagError.value = 'Введите тег, если хотите его добавить';
      sameTagError.value = '';
      return false
    } 
    if (tagExists) {
      sameTagError.value = 'Такой тег уже есть';
      emptyTagError.value = '';
      newTag = '';
      return false;
    } 
    else {
      addTag(newTag);
      newTag = '';
      emptyTagError.value = '';
      sameTagError.value = '';
    }
  };
  
  // const addTegFunction = () => {
  //   let tagExists = false;
  
  //   tags.value.forEach((tag) => {
  //     if (tag.toLowerCase() === newTag.value.toLowerCase()) {
  //       tagExists = true;
  //     }
  //   });
  
  //   if (tagExists) {
  //     sameTagError.value = 'Такой тег уже есть';
  //     emptyTagError.value = '';
  //     newTag.value = '';
  //     return false;
  //   } else {
  //     addTegFunctionForCompose();
  //     sameTagError.value = '';
  //   }
  // };
  
  // const filteredTegs = computed((newTag: string) => {
  //   if (newTag === '') {
  //     return tags.value;
  //   } else {
  //     const inputLowerCase = newTag.toLowerCase();
  //     return tags.value.filter((tag: string) =>
  //       tag.toLowerCase().includes(inputLowerCase)
  //     );
  //   }
  // });

  function filteredTegs(newTag: string) {
    if (newTag === '') {
      return tags.value;
    } else {
      const inputLowerCase = newTag.toLowerCase();
      return tags.value.filter((tag: string) =>
        tag.toLowerCase().includes(inputLowerCase)
      );
    }
  }

  return {
    // newTag,
    tags,
    choosenTegs,
    tagsForMainWindow,
    chooseImportanceTags,
    addTegFunction,
    filteredTegs,
    // addTegFunctionForCompose,
    sameTagError,
    emptyTagError
  };
}
