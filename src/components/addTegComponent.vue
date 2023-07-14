<template>
  <div class="dropdown">
    <BaseInput
      class="input-teg"
      v-model:value="note.teg"
      @click="toggleVisibility"
      placeholder="Выберите группу"
      type="text"
    />
    <BaseButtonForSVG @click="addTegFunction" class="plusButton">
      <SvgForButtons :name="'svg-plus'"></SvgForButtons>
    </BaseButtonForSVG>

    <ul v-if="!isVisible" class="dropdown-content">
      <li
        v-for="(tegOne, index) in filteredTegs"
        :key="index"
        @click="chooseTeg(tegOne)"
      >
        {{ tegOne }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

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
  return props.tegs.filter((teg) => teg.toLowerCase().includes(lowerCaseQuery));
});
</script>

<style>
.dropdown {
  cursor: pointer;
  display: flex;
}

.input-teg {
  width: 350px;
}

.plusButton {
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  margin-top: 19px;
}

.dropdown-content {
  margin-bottom: 1;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
</style>
