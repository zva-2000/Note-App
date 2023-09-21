<template>

<BaseTag :tagsText="tagsText" :tagsStyle="tagsStyle">
    <ButtonForDeleteTeg @click="deleteTag"/>
</BaseTag>

</template>

<script setup lang="ts">

import { ref } from 'vue';

import ButtonForDeleteTeg from './buttons/ButtonForDeleteTeg.vue';

import BaseTag from './BaseTag.vue';

const props = defineProps<{
  tagsText?: string;
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

BaseTag:hover {
    background-color: #494ce8; 
}

</style>