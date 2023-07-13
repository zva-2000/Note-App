<template>
  <div class="wrapper__search">
    <div class="search">
      <!-- <input type="text" :placeholder="placeholder" v-model="search"/> -->

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

    <base-input
      class="search-input"
      v-model:value="model"
      placeholder="Найдите заметку"
      type="text"
    ></base-input>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue';

import baseInput from './BaseInput.vue';

const props = defineProps<{
  value: string;
  // search: string;
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

// export interface Props{
//   value: String,
// }

// const props = withDefaults(defineProps<Props>(), {
//   placeholder: 'Search',
// })

// const search = ref(props.search);

// const toSearchFunc = () => {
//   console.log('jjjj');
//   emit('toSearchFunc', props.search);
// };

// watch(props.search, (value) => {
//   emit('search', value);
//   return {
//     search,
//   };
// });
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
  padding-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  display: flex;
}
.search-input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0px;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  min-width: 400px;
  height: auto;
}
</style>
