<template>
  <div class="list">
    <ul v-if="(listOpen = true)">
      <label v-for="important in importantArray" :key="important.index">
        {{ important }}
      </label>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const importantArray = ref(["Very important", "Important", "Less"]);

const props = defineProps({
  // importantArray: {
  //   type: Array,
  //   required: false,
  // },
  listOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["selectImr"]);

const selectImr = (important) => {
  emit("update:important", important);
};
</script>

<style>
.list {
  position: absolute;
  border-radius: 3px;
  background-color: rgb(189, 188, 245);
}
</style>
