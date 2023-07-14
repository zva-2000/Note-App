<template>
  <div class="icons">
    <BaseButtonForSVG @click="onDeleteNote($event)" class="plusButton">
      <SvgForButtons :name="'svg-delete'"></SvgForButtons>
    </BaseButtonForSVG>

    <!-- <base-button >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </base-button> -->
  </div>
</template>

<script setup lang="ts">
import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

// const props = defineProps<{
//   index: number;
// }>();

//   const model = computed({
//   get() {
//     return props.value ?? '';
//   },
//   set(value) {
//     emit('update:value', value);
//   },
// });

const emit = defineEmits<{
  (e: 'deleteNote', payload: MouseEvent): void;
}>();

const onDeleteNote = (event: MouseEvent) => {
  emit('deleteNote', event);
  console.log('Button!');
};
</script>
