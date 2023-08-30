<template>
  <ul v-if="!isVisible" class="dropdown-content">
    <li v-for="(item, index) in items" :key="index" @click="chooseItem(item)">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  isVisible: boolean;
  // isAnyDropdownOpen: boolean;
  items: string[];
}>();

const emit = defineEmits<{
  (e: 'chooseItem', option: string): void;
}>();

const chooseItem = (option: string) => {
  emit('chooseItem', option);
};
</script>

<style>
.dropdown-content {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  top: 100%;
  z-index: 1;
  border-radius: 20px;
}

.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content li:hover {
  background-color: #bbbbbb;
  border-radius: 20px;
}
</style>
