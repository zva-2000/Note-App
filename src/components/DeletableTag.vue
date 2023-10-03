<template>
  <BaseTag
    :tagsText="tagsText"
    :tagsStyle="tagsStyle"
    class="deletable-tag"
    :hover="true"
  >
    <ButtonForDeleteTeg @click="deleteTag"/>
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
  color: white;
}

.deletable-btn:hover {
  color: white;
}
</style>
