<template>

<div class="moved-buttons">
  <BaseButton
  :class="{ active: viewMode === GridMode.Grid }"
      @click="changeGrid(GridMode.Grid)"
      style="cursor: pointer"
    >Сеткой</BaseButton>
    <BaseButton
    :class="{ active: viewMode === GridMode.List }"
      @click="changeGrid(GridMode.List)"
      style="cursor: pointer"
    >Списком</BaseButton>
    <!-- <BaseButtonForSVG
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
    </BaseButtonForSVG> -->
</div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import BaseButtonForSVG from './BaseButtonForSVG.vue';
import SvgForButtons from './SvgForButtons.vue';
import { useFilter } from '../composables/useFilter.js';
import { GridMode } from '@/types.ts';

const { changeGrid, viewMode } = useFilter();

</script>

<style>
.active {
  color: #494ce8;
}
.moved-buttons {
  gap: 2px;
}

</style>
