<template>
  <div class="icons">
    <BaseButtonForSVG
      :class="{ active: grid }"
      @click="onChangeGrid"
      style="cursor: pointer"
    >
      <SvgForButtons :name="'svg-mesh'" />
    </BaseButtonForSVG>

    <BaseButtonForSVG
      :class="{ active: !grid }"
      @click="onChangeGrid"
      style="cursor: pointer"
    >
      <SvgForButtons :name="'svg-list'" />
    </BaseButtonForSVG>
  </div>
</template>

<script setup lang="ts">
import BaseButtonForSVG from './BaseButtonForSVG.vue';
import SvgForButtons from './SvgForButtons.vue';

const props = defineProps({
  grid: Boolean,
});

// const emit = defineEmits(["ChangeGrid"]);

// const ChangeGrid = () => {
//   emit("ChangeGrid", props.grid);
// };

function handleClick() {
  console.log('Button clicked!');
}

const emit = defineEmits<{
  (e: 'onChangeGrid', payload: boolean): void;
}>();

const onChangeGrid = () => {
  emit('onChangeGrid', props.grid);
};
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
