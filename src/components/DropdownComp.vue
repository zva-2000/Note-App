<template>

  <div class="dropdown">
    <InputForDropdow v-model="note.impr" @onClick="OpenDrop"/>
    <ul v-if="isOpen">
      <li v-for="(option, index) in options" :key="index" @click="note.impr === option">
        {{ option }}
      </li>
    </ul>
  </div>

</template>

<script setup>

const props = defineProps({
  note: String,
  options: Array,
  isOpen: {
    type: Boolean,
    default: true,
  }
})

const emit = defineEmits(['OpenDrop'])

const OpenDrop = () => {
  emit('OpenDrop', value)
}

</script>

<style>

</style>
  
