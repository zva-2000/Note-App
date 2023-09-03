<template>
  <div class="wrapper__search">
    <div class="search">
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>

    <input
      class="search-input"
      v-model="model"
      placeholder="Найдите заметку"
      type="text">
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue';

// import baseInput from './BaseInput.vue';

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

const emit = defineEmits(['update:value', 'toSearchFunc']);

</script>

<style scoped>
svg {
  color: #e4e4e4;
}
.wrapper__search {
  position: relative;
}
.search {
  top: 0px;
  bottom: 0px;
  left: 0px;
  position: absolute;
}
.search-icon {
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  display: flex;
  margin-left: 5px;
}
.search-input {
  padding: 16px 16px 16px 56px !important;
    margin-top: 16px;
    border-radius: 30px;
    color: #000000;
    font-size: 15px;
    min-width: 53em;
    height: auto;
    outline: none;
}
</style>
