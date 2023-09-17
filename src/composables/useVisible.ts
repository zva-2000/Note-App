import { ref } from 'vue';

const edit = ref(true);

export function useVisible() {

const editor = () => (edit.value = !edit.value);

return { edit, editor }

}

