<template>
  <div class="icons">
    <BaseButton @click="ChangeGrid">
      <svg
        :class="{ active: grid }"
        @click="ChangeGrid"
        style="cursor: pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    </BaseButton>
    <BaseButton @click="ChangeGrid">
      <svg
        :class="{ active: !grid }"
        @click="ChangeGrid"
        style="cursor: pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3" y2="6"></line>
        <line x1="3" y1="12" x2="3" y2="12"></line>
        <line x1="3" y1="18" x2="3" y2="18"></line>
      </svg>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

const props = defineProps({
  grid: Boolean,
});

const emit = defineEmits(["ChangeGrid"]);

const ChangeGrid = () => {
  emit("ChangeGrid", props.grid);
};
</script>
