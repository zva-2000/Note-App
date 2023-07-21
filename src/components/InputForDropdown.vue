<template>
  <div class="dropdown-input">
    <input
      type="text"
      v-model="model"
      :placeholder="placeholder"
      class="input-class"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: string;
  placeholder: string;
}>();

const model = computed({
  get() {
    return props.value ?? '';
  },
  set(value) {
    emit('update:value', value);
  },
});

const emit = defineEmits<{
  (e: 'update:value', event: string): void;
}>();
</script>

<style scoped>
.dropdown-input {
  display: flex;
  position: relative;
  display: inline-block;
  width: 310px;
}

/* .dropdown-input {
  position: relative;
  display: inline-block;
} */

.input-class {
  margin-right: 10px;
}

.chevron-down {
  width: 35px;
  height: 35px;
  margin-bottom: 19px;
}
</style>
