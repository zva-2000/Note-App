<template>
  <div class="dropdown">
    <InputForDropdown
      class="input-teg"
      v-model:value="model"
      @click="toggleVisibility"
      placeholder="Выберите группу"
      type="text"
    />

    <BaseButtonForSVG @click="addTegFunction" class="plusButton">
      <SvgForButtons :name="'svg-plus'"></SvgForButtons>
    </BaseButtonForSVG>

    <BaseList
      :items="filteredTegs"
      :is-visible="isVisible"
      @choose-item="chooseTeg"
    />
  </div>

  <div>
    <ul class="selected-tags">
      <li
        class="tags-li"
        v-for="(selectedTeg, index) in selectedTegs"
        :key="index"
      >
        {{ selectedTeg }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import InputForDropdown from './InputForDropdown.vue';

import BaseList from './BaseList.vue';

const props = defineProps<{
  // note: { teg: string };
  tegs: string[];
  selectedTegs: string[];
  inputTeg: string;
  className: string;
}>();

let isVisible = ref(true);

const toggleVisibility: any = () => {
  isVisible.value = !isVisible.value;
  console.log('Button clicked! Visible');
};

const emit = defineEmits<{
  [x: string]: any;
  (e: 'chooseTeg', tegOne: string): void;
  (e: 'addTegFunction', tegs: string[]): void;
  (e: 'update:error', errorMessage: string): void;
  (e: 'update:inputTeg', inputTeg: string): void;
}>();

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
  console.log(typeof tegOne);
};

const addTegFunction = () => {
  const tegsLowerCase = props.tegs.map((tegOne) => tegOne.toLowerCase());
  const inputLowerCase = props.inputTeg.toLowerCase();
  if (tegsLowerCase.includes(inputLowerCase)) {
    emit('update:error', 'Такой тег уже есть');
    return false;
  } else {
    emit('addTegFunction', props.tegs);
  }
};

const filteredTegs = computed(() => {
  if (props.inputTeg === '') {
    return props.tegs;
  } else {
    const inputLowerCase = props.inputTeg.toLowerCase();
    return props.tegs.filter((teg) =>
      teg.toLowerCase().includes(inputLowerCase)
    );
  }
});

const model = computed({
  get() {
    return props.inputTeg ?? '';
  },
  set(inputTeg: string) {
    emit('update:inputTeg', inputTeg);
  },
});
</script>

<style>
.input-teg {
  width: 350px;
}

.plusButton {
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  margin-top: 9px;
}

.selected-tags {
  max-width: 310px;
  position: absolute;
  margin-top: 80px;
  margin-left: -999px;
  align-items: center;
  display: flex;
  cursor: default;
  gap: 5px;
  /* background-color: var(#165ae3c5); */
  line-height: var(#eaf1ff);
}

.tags-li {
  padding: 2px 6px 2px 8px;
  background-color: #a2c9ff;
  line-height: #eaf1ff;
  border-radius: 6px;
}
</style>
