<template>
  <div class="input-wrapper">
    <input :type="type" v-model="inputValue" :placeholder="placeholder" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  type: String,
  placeholder: String,
});

const inputValue = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);

watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style scoped>
input {
  padding: 16px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
}
</style>
