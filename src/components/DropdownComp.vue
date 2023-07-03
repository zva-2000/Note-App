<template>
  <div class="dropdown">
    <InputForDropdow v-model:value="note.impr" @onClick="OpenDrop" />
    <ul>
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="note.impr === option"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import InputForDropdow from './InputForDropdow.vue';

const props = defineProps<{
  note: { title: string };
  isOpen?: boolean;
  options: string[];
}>();
// {
//   note: Object,
//   options: Array,
//   isOpen: {
//     type: Boolean,
//     default: false,
//   },
// }
const emit = defineEmits<{
  (e: 'OpenDrop', event: number): void;
}>();

const OpenDrop = (event: Event) => {
  emit('OpenDrop', 45);
  console.log('B345454545!', event.target);
};
</script>

<style></style>
