<template>
  <div class="icons">
    <BaseButtonForSVG class="teg-button">
      <SvgForButtons :name="'svg-delete-teg'"></SvgForButtons>
    </BaseButtonForSVG>
  </div>
</template>

<script setup lang="ts">
import BaseButtonForSVG from '../BaseButtonForSVG.vue';

import SvgForButtons from '../SvgForButtons.vue';

</script>

<style lang="scss">

.teg-button {
  color: white;
  cursor: pointer;
  background: none;
  border: none;
}

</style>
