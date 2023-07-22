<template>
  <div class="dropdown">
    <InputForDropdown
      class="input-teg"
      v-model:value="newTag"
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

import { useTags } from '../composables/useTags.js'

import { store } from '../composables/useTagsValue.js'

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import InputForDropdown from './InputForDropdown.vue';

import BaseList from './BaseList.vue';

const { addTegFunctionForCompose, newTag } = useTags();

const props = defineProps<{
  // note: { teg: string };
  // tegs: string[];
  selectedTegs: string[];
  // inputTeg: string;
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
  (e: 'update:error', errorMessage: string): void;
  (e: 'update:inputTeg', inputTeg: string): void;
}>();

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
  console.log(typeof tegOne);
};

const addTegFunction = () => {
  const tegsLowerCase = store.tags.map((tag: string) => tag.toLowerCase());
  const inputLowerCase = newTag.value.toLowerCase();
  if (tegsLowerCase.includes(inputLowerCase)) {
    emit('update:error', 'Такой тег уже есть');
    return false;
  } else {
    addTegFunctionForCompose();
  }
};

const filteredTegs = computed(() => {
  if (newTag.value === '') {
    return store.tags;
  } else {
    const inputLowerCase = newTag.value.toLowerCase();
    return store.tags.filter((tag: string) =>
      tag.toLowerCase().includes(inputLowerCase)
    );
  }
});

// const model = computed({
//   get() {
//     return props.inputTeg ?? '';
//   },
//   set(inputTeg: string) {
//     emit('update:inputTeg', inputTeg);
//   },
// });
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
