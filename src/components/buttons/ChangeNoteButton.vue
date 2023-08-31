<template>
    <div class="icons">
      <BaseButtonForSVG class="change-button">
        <SvgForButtons :name="'svg-change'"></SvgForButtons>
      </BaseButtonForSVG>
    </div>
  </template>
  
  <script setup lang="ts">
  import BaseButtonForSVG from '../BaseButtonForSVG.vue';
  
  import SvgForButtons from '../SvgForButtons.vue';
  
  </script>

<style>

.change-button {
  cursor: pointer;
  background: none;
  border: none;
}

</style>