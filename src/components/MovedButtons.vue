<template>
  <div class="icons">
    <BaseButtonForSVG
      :class="{ active: viewMode === GridMode.Grid }"
      @click="changeGrid(GridMode.Grid)"
      style="cursor: pointer"
    >
      <SvgForButtons :name="'svg-mesh'" />
    </BaseButtonForSVG>

    <BaseButtonForSVG
      :class="{ active: viewMode === GridMode.List }"
      @click="changeGrid(GridMode.List)"
      style="cursor: pointer"
    >
      <SvgForButtons :name="'svg-list'" />
    </BaseButtonForSVG>
  </div>
</template>

<script setup lang="ts">
import BaseButtonForSVG from './BaseButtonForSVG.vue';
import SvgForButtons from './SvgForButtons.vue';
import { useFilter } from '../composables/useFilter.js';
import { GridMode } from '@/types.ts';

const { changeGrid, viewMode } = useFilter();

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
