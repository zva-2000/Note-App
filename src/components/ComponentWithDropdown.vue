<template>
  <div class="dropdown">
    <BaseInput
      name="imprInput"
      v-model:value="model"
      @click="toggleVisibility"
      placeholder=""
      type="text"
      :isReadonly="true"
    />
    <BaseList
      :items="options"
      v-click-outside="toggleVisibility"
      :is-visible="isVisible"    
      @choose-item="chooseImportance"
    />
  </div>
</template>

<script setup lang="ts">

import BaseList from './BaseList.vue';

import BaseInput from './BaseInput.vue';

import { ref, computed } from 'vue';;

const props = defineProps<{
  value: string;
  options: string[];
}>();

const emit = defineEmits<{
  (e: 'update:option', option: string): void;
  (e: 'update:value', value: string): void;  
}>();

const model = computed({
  get() {
    return props.value ?? '';
  },
  set(value: string) {
    emit('update:value', value);
  },
});

let isVisible = ref(true);

const chooseImportance = (option: string) => {
  emit('update:option', option);
  isVisible.value = true;
};

// const chooseTeg = (newTag: string) => {
//   if (!note.value.teg.includes(newTag)) {
//     choosenTegs.value.push(newTag);
//     note.value.teg.push(newTag);
//     console.log(note.value.teg)
//   }
//   };

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style>
.dropdown {
  position: relative;
}
</style>
