<template>
  <div class="icons">
    <BaseButtonForSVG
      :class="{ active: mode.GRID }"
      @click="changeGrid"
      style="cursor: pointer"
    >
      <SvgForButtons :name="'svg-mesh'" />
    </BaseButtonForSVG>

    <BaseButtonForSVG
      :class="{ active: mode.LIST }"
      @click="changeGrid"
      style="cursor: pointer"
    >
      <SvgForButtons :name="'svg-list'" />
    </BaseButtonForSVG>
  </div>
</template>

<script setup lang="ts">
import BaseButtonForSVG from './BaseButtonForSVG.vue';
import SvgForButtons from './SvgForButtons.vue';
import { useFilter } from '../composables/useFilter.js'

const { changeGrid, mode } = useFilter()

const props = defineProps({
  // grid: Boolean,
});

// const emit = defineEmits<{
//   (e: 'onChangeGrid', payload: boolean): void;
// }>();

// const onChangeGrid = () => {
//   emit('onChangeGrid', props.grid);
// };
</script>

<style>
.active {
  color: rgb(115, 96, 241);
}

.BaseButtonForSVG {
  background: transparent;
  border: none;
}
</style>
