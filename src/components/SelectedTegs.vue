<template>
    <ul class="selected-tags">
      <li 
      class="tags-li"
      v-for="(item, index) in items" :key="index" @click="ChooseTag(item)">
        {{ item }}
      </li>
    </ul>
</template>

<script setup lang="ts">

const props = defineProps<{
  items: string[];
}>();

const emit = defineEmits<{
  (e: 'chooseTag', item: string): void;
}>();

const ChooseTag = (item: string) => {
  emit('chooseTag', item);
};

</script>

<style>
.selected-tags {
  max-width: 310px;
  position: absolute;
  align-items: center;
  display: flex;
  cursor: default;
  gap: 5px;
  line-height: var(#eaf1ff);
}

.tags-li {
  padding: 2px 6px 2px 8px;
  background-color: #a2c9ff;
  line-height: #eaf1ff;
  border-radius: 6px;
}
</style>