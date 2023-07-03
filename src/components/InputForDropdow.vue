<template>
  <div class="dropdown-input" @click="onClick">
    <input type="text" v-model="model" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  value: string;
}>();

const model = computed({
  get() {
    return props.value ?? '';
  },
  set(value) {
    emit('update:value', value);
  },
});

const emit = defineEmits(['onClick', 'update:value']);

const onClick = (event) => {
  console.log('Button clicked!', event.target);
  emit('onClick', event);
};
</script>

<style scoped>
.dropdown-input {
  cursor: pointer;
}
</style>
