<template>
  <div class="dropdown-input">
    <input
      type="text"
      v-model="model"
      :placeholder="placeholder"
      class="input-class"
    />
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="40"
      fill="currentColor"
      class="chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg> -->
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
  margin-top: 10px;
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
