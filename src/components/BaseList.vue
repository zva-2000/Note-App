<template>
  <ul v-show="show" class="dropdown-list">
    <li v-for="(item, index) in items" :key="index" @click="selectItem(item)">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">

const props = defineProps({
  items: Array,
  show: Boolean,
});

const emit = defineEmits(["update:selectedItem"]);

const selectItem = (item: any) => {
  emit("update:selectedItem", item);
};
</script>
