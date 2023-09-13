<template>
  <ul class="selected-tags">
    <li
      v-for="(item, index) in items"
      :key="index"
      @click="ChooseTag(item)"
      :class="['tags-li', {'seleted-tag': item === SelectedTeg, 'seleted-impr': item === Importance}]"
      :style="{ backgroundColor: importanceColor }"
    >
      {{ item }}
      <ButtonForDeleteTeg v-if="showButton" @click="deleteTag(index)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFilter } from '../composables/useFilter';
import ButtonForDeleteTeg from './buttons/ButtonForDeleteTeg.vue';

const { SelectedTeg, Importance } = useFilter();

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

const importanceColors = ref({
  'Очень важно': '#ee9191',
  'Важно': '#ffd261',
  'Не важно': '#a7be8e',
});

const importanceColor = computed(() => {
  return importanceColors.value[props.items];
});
</script>

<style>
.selected-tags {
  align-items: center;
  display: flex;
  cursor: default;
  gap: 5px;
  line-height: var(#eaf1ff);
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.seleted-tag {
  background-color: #494ce8 !important;
  color: rgb(255, 255, 255);
}

.seleted-impr {
  background-color: #f4894b !important;
  color: rgb(255, 255, 255);
}

.tags-li {
  display: flex;
  padding: 4px 8px 4px 8px;
  background-color: #a2c9ff;
  line-height: #eaf1ff;
  border-radius: 20px;
}

.tags-li:hover {
  background-color: #494ce8;
  color: white;
}

</style>
