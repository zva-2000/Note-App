<template>
  <div class="base-tag-list">
    <span class="base-tag" :class="tagsStyle" @click="chooseTag">
      {{ props.tagsText }}
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  tagsText: string;
  tagsStyle: any;
}>();

const emit = defineEmits<{
  (e: 'chooseTag', tags: string): void;
}>();

const chooseTag = () => {
  emit('chooseTag', props.tagsText);
};
</script>

<style>
.base-tag {
  display: flex;
  padding: 8px 10px 8px 10px;
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
}

.importance-style {
  background-color: bisque;
}

.base-style {
  background-color: #a2c9ff;
}

.danger-style {
  background-color: #ee9191;
}

.warning-style {
  background-color: #ffd261;
}

.success-style {
  background-color: #a7be8e;
}
.success-style:hover {
  background-color: #7da256;
}

.success-style:focus {
  background-color: #7da256;
}

.base-style:hover {
  background-color: #3f8bf5;
}

.base-style:focus {
  background-color: #3f8bf5;
}

.danger-style:hover {
  background-color: #e73e3e;
}

.danger-style:focus {
  background-color: #e73e3e;
}

.warning-style:hover {
  background-color: #ffc021;
}

.warning-style:focus {
  background-color: #a17400;
}
</style>
