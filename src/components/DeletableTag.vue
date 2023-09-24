<template>
  <BaseTag :tagsText="tagsText" :tagsStyle="tagsStyle" class="deletable-tag">
    <ButtonForDeleteTeg @click="deleteTag" class="deletable-btn" />
  </BaseTag>
</template>

<script setup lang="ts">

import ButtonForDeleteTeg from './buttons/ButtonForDeleteTeg.vue';

import BaseTag from './BaseTag.vue';

const props = defineProps<{
  tagsText: string;
  tagsStyle?: any;
}>();

const emit = defineEmits<{
  (e: 'deleteTag', index: number): void;
}>();

const deleteTag = (index: number) => {
  emit('deleteTag', index);
};
</script>

<style>
.deletable-btn {
  background-color: #494ce8;
}
</style>
