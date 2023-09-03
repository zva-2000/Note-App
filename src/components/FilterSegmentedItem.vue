<script setup lang="ts">
import { computed } from 'vue';

import SvgForButtons from './SvgForButtons.vue';

const props = defineProps<{
  element: string;
  value: string;
  disabled: boolean;
}>();

const emit = defineEmits(['update:value']);

const model = computed({
  get() {
    return props.value;
  },
  set(value: any) {
    emit('update:value', value);
  },
});
</script>

<template>
  <input
    :id="element"
    type="radio"
    name="informationModelExistence"
    class="radioButton"
    :disabled="disabled"
    :value="element"
    v-model="model"
  />
  <label :for="element" :class="['radioLabel']" tabindex="0">
    <slot name="content"><SvgForButtons :name="'svg-mesh'"/></slot>
  </label>
</template>

<style scoped lang="scss">

// @use 'src/styles/mixins';
.radioGroup {
  display: flex;
  border-radius: var(--border-radius-l);
  background-color: var(--color-secondary-98);
  align-items: center;
  height: 32px;
  margin-bottom: 24px;
}

.radioButton:first-child + .radioLabel {
  border-radius: var(--border-radius-l) 0 0 var(--border-radius-l);
  border-left: 1px solid var(--color-secondary-80);
}

.radioLabel:last-child {
  border-radius: 0 var(--border-radius-l) var(--border-radius-l) 0;
  border-left: 1px solid var(--color-secondary-80);
  border-right: 1px solid var(--color-secondary-80);
}

.radioLabel:nth-child(4) {
  border-left: 1px solid var(--color-secondary-80);
}

.radioLabel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  padding: 10px 16px;
  // @include mixins.text-primary;
  font-size: var(--font-size-s);
  color: var(--color-secondary-10);
  user-select: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--color-secondary-95);
  }

  &:active,
  &:focus {
    background-color: var(--color-secondary-90);
  }

  &,
  &:hover,
  &:focus {
    border-bottom: 1px solid var(--color-secondary-80);
    border-top: 1px solid var(--color-secondary-80);
  }
}

.radioButton:checked + .radioLabel {
  border: 1px solid var(--color-primary-60);
  background-color: var(--color-secondary-90);
}

.radioButton:disabled + .radioLabel {
  background-color: var(--color-neutral-variant-95);
  border-top: 1px solid var(--color-secondary-80);
  border-bottom: 1px solid var(--color-secondary-80);
  color: var(--color-secondary-70);
  cursor: default;
}

.radioButton:disabled:checked + .radioLabel {
  border: 1px solid var(--color-secondary-80);
}

.radioButton:checked + .radioLabel ~ .radioLabel:nth-child(4),
.radioButton:checked + .radioLabel:nth-child(4) ~ .radioLabel:last-child {
  border-left: 1px solid transparent;
}

.radioButton {
  display: none;
}
</style>
