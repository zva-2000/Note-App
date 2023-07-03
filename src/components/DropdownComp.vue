<template>
  <div class="dropdown">
    <InputForDropdow v-model="note.impr" @click="OpenDrop" />
    <ul>
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="note.impr === option"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  note: Object,
  options: Array,
  isOpen: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["OpenDrop"]);

const OpenDrop = () => {
  emit("OpenDrop", event);
};
</script>

<style></style>
