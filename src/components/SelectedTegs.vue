<template>
  <ul class="selected-tags">
    <li
      class="tags-li"
      v-for="(item, index) in items"
      :key="index"
      @click="ChooseTag(item)"
    >
      {{ item }}
      <ButtonForDeleteTeg v-if="showButton" @click="deleteTag(index)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import ButtonForDeleteTeg from './buttons/ButtonForDeleteTeg.vue';

// import { useTags } from '../composables/useTags.js'

// const { deleteTag } = useTags();

const props = defineProps<{
  items: string[];
  showButton: boolean;
}>();

const emit = defineEmits<{
  (e: 'chooseTag', item: string): void;
  (e: 'deleteTag', index: number): void;
}>();

const ChooseTag = (item: string) => {
  emit('chooseTag', item);
};

const deleteTag = (index: number) => {
  emit('deleteTag', index);
};
</script>

<style>
.selected-tags {
  max-width: 310px;
  position: absolute;
  align-items: center;
  display: flex;
  cursor: default;
  gap: 5px;
  line-height: var(#eaf1ff);
}

.tags-li {
  display: flex;
  padding: 2px 6px 2px 8px;
  background-color: #a2c9ff;
  line-height: #eaf1ff;
  border-radius: 6px;
}
</style>
