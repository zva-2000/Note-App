<template>
<!-- <ul> -->
    <li class="base-tag" :class="props.tagsStyle">{{ props.tagsText }}</li>
          <slot></slot>
<!-- </ul> -->
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

import { TagStyledMode } from '@/types'

const props = defineProps<{
  tagsText?: string;
  tagsStyle?: any;
}>();

const importanceColors = ref({
  'Очень важно': '#ee9191',
  'Важно': '#ffd261',
  'Не важно': '#a7be8e',
});

const importanceColor = computed(() => {
  return importanceColors.value[props.tagsText];
});

</script>

<style>
.base-tag {
  display: flex;
  padding: 4px 8px 4px 8px;
  line-height: #eaf1ff;
  border-radius: 20px;
} 

.base-tag-list {
  align-items: center;
  display: flex;
  cursor: default;
  gap: 5px;
  line-height: var(#eaf1ff);
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
}


.importance-style {
  background-color: bisque;
}

.tags-style {
  background-color: #a2c9ff;
}
</style>
