<template>
  <li class="baseTag" :class="props.tagsStyle">{{ props.tagsText }}</li>
</template>

<script setup lang="ts">
const props = defineProps<{
  tagsText: string;
  tagsStyle: any;
}>();
</script>

<style>
.baseTag {
  display: flex;
  padding: 4px 8px 4px 8px;
  line-height: #eaf1ff;
  border-radius: 20px;
}
</style>
