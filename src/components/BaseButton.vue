<template>
  <button @click="onClick">
    {{ value }}
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  value: String
});

const emit = defineEmits<{
  (e: 'onClick', payload: MouseEvent): void
}>();

const onClick = (event: MouseEvent) => {
  emit('onClick', event);
};

</script>




