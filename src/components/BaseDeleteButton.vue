<template>
  <div class="icons">
    <BaseButtonForSVG class="x-button">
      <SvgForButtons :name="'svg-trash-can'"></SvgForButtons>
      <SvgForButtons :name="'svg-delete'"></SvgForButtons>      
    </BaseButtonForSVG>
  </div>
</template>

<script setup lang="ts">
import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

</script>

<style lang="scss">

.x-button {
  cursor: pointer;
  background: none;
  border: none;
}

</style>