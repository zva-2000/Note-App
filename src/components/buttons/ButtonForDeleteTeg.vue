<template>
    <BaseButtonForSVG class="teg-button">
      <SvgForButtons :name="'svg-delete-teg'"></SvgForButtons>
    </BaseButtonForSVG>
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
