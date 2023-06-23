<template>

<div class="notes">

    <noteUnit class="note-unit" v-for="(note, index) in notes" :note="note" :key="index" @remove="remove" :grid="grid"/>

  </div>

</template>

<script setup>

import noteUnit from './NoteUnit.vue'

// import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
})

const emit = defineEmits(['remove'])

const remove = (index) => {
   emit('remove', index)
}


</script>

<style lang="scss">

.note-unit {
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}


</style>

