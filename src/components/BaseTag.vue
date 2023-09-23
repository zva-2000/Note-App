<template>
  <div class="base-tag-list">
    <li class="base-tag Вфтп" :class="computedClass" @click="chooseTag">
      {{ props.tagsText }}
      <slot></slot>
    </li>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { TagStyledMode } from '@/types.ts';

const props = defineProps<{
  tagsText: string;
  tagsStyle?: string;
}>();

const emit = defineEmits<{
  (e: 'chooseTag', tags: string): void;
}>();

const chooseTag = (event: MouseEvent) => {
  emit('chooseTag', props.tagsText);
};

const computedClass = computed(() => {
  if (props.tagsStyle === TagStyledMode.Importance) {
    return importanceClass.value[props.tagsText] || '';
  }
  return 'tags-style';
});

const importanceClass = computed(() => {
  return {
    'Очень важно': 'very-important',
    Важно: 'important',
    'Не важно': 'not-important',
  };
});
</script>

<style>
.base-tag {
  display: flex;
  padding: 4px 8px 4px 8px;
  line-height: #eaf1ff;
  border-radius: 20px;
  text-align: center;
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
  margin-bottom: 5px;
}

.importance-style {
  background-color: bisque;
}

.tags-style {
  background-color: #a2c9ff;
}

.very-important {
  background-color: #ee9191;
}

.important {
  background-color: #ffd261;
}

.not-important {
  background-color: #a7be8e;
}

.not-important:active {
  background-color: #7da256;
}

.not-important:hover {
  background-color: #7da256;
}

.tags-style:hover {
  background-color: #3f8bf5;
}

.very-important:hover {
  background-color: #e73e3e;
}

.important:hover {
  background-color: #ffc021;
}
</style>
