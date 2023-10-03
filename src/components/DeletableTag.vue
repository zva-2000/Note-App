<template>
  <BaseTag
    :tagsText="tagsText"
    :tagsStyle="tagsStyle"
    class="deletable-tag"
    :hover="true"
  >
    <!-- <ButtonForDeleteTeg @click="deleteTag" class="deletable-btn" /> -->

    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="deleteTag"
      class="deletable-btn"
    >
      <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.5" />
      <path
        d="M15 9L9 15"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 9L15 15"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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
  /* background-color: #494ce8; */
}
.deletable-btn:hover {
  background-color: brown;
}
</style>
