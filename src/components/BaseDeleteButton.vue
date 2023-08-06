<template>
  <div class="icons">
    <BaseButtonForSVG class="x-button">
      <SvgForButtons :name="'svg-delete'"></SvgForButtons>
    </BaseButtonForSVG>
  </div>
</template>

<script setup lang="ts">
import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import { useNotes } from '../composables/useNotes.js';

// const { removeNote } = useNotes();

</script>

<style lang="scss">

.x-button {
  cursor: pointer;
  background: none;
  border: none;
  &.hover {
      color: #402caf;
    }
}

</style>