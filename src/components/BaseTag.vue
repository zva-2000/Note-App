<template>
  <div class="base-tag-list">
    <span
      class="base-tag"
      :class="[tagsStyle, { active: props.active === true }, {hover: props.hover === true}]"
      @click="chooseTag"
      tabindex="0"
    >
      {{ props.tagsText }}
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tagsText: string;
  tagsStyle: any;
  active?: boolean;
  hover?: boolean;
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
.hover.success-style:hover,
.active.success-style {
  background-color: #7da256;
  color: white;
}

.active.base-style,
.hover.base-style:hover {
  background-color: #3f8bf5;
  color: white;
}

.hover.danger-style:hover,
.active.danger-style {
  background-color: #e73e3e;
  color: white;
}

.hover.warning-style:hover,
.active.warning-style {
  background-color: #ffc021;
  color: white;
}
</style>
