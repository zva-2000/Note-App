<template>

<p class="p-for-input">{{ label }}</p>
<slot></slot>

<div class="error">
    <ul v-for="error in errors">{{ error }}</ul>
</div>

</template>

<script setup lang="ts">

const props = defineProps<{
  label?: string;
  errors?: string[];
}>();

</script>

<style>

.p-for-input {
  margin-top: 10px;
  color: rgb(78, 78, 78);
}

.error {
  text-align: center;
  color: red;
}

</style>