<template>
  <div class="dropdown">
    <BaseInput
      name="inputTeg"
      v-model:value="note.teg"
      @click="toggleVisibility"
      placeholder="Выберите группу"
      type="text"
    />
    <base-button @click="addTegFunction">
      <span>+</span>
    </base-button>
  </div>
  <ul v-if="!isVisible">
    <li v-for="(tegOne, index) in filteredTegs" :key="index" @click="chooseTeg(tegOne)">
      {{ tegOne }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import BaseButton from './BaseButton.vue';

import BaseInput from './BaseInput.vue';

const props = defineProps<{
  note: { teg: string };
  tegs: string[];
}>();

let isVisible = ref(true);

// let inputFiltr = ref('');

const toggleVisibility: any = () => {
  isVisible.value = !isVisible.value;
  console.log('Button clicked! Visible');
};

const emit = defineEmits<{
  [x: string]: any;
  (e: 'chooseTeg', tegOne: string): void;
  (e: 'addTegFunction', tegs: string[]): void;
}>();

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
};

const addTegFunction = () => {
  console.log('jjjj');
  emit('addTegFunction', props.tegs);
};

const filteredTegs = computed(() => {
  const lowerCaseQuery = props.note.teg.toLowerCase();
  return props.tegs.filter(teg => teg.toLowerCase().includes(lowerCaseQuery));
});

</script>

<style>
.Error {
  align-items: center;
  color: red;
}

.dropdown {
  cursor: pointer;
  display: flex;
}
</style>
