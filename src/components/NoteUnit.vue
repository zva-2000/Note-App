<template>

<div class="note" :class="{ full: !grid }">

    <div class="note-header" :class="{ full: !grid }">

      <changeInput :value="note.title" :isVisible="isVisible" @update:value="note.title = $event"/> 

      <p style="cursor: pointer" @click="$emit('remove', index)">x</p>

    </div>

    <div class="note-body">

      <changeInput :value="note.descr" :isVisible="isVisible" @update:value="note.descr = $event"/> 

        <p>{{ note.impr }}</p>       
        <span>{{ note.date }}</span>

    </div>

    <button class="btn btnPrimary" @click="Visibility">Change</button>

</div>

</template>

<script setup>

import changeInput from './ChangeInput.vue';

// import { defineProps, ref } from 'vue'

const props = defineProps({
  note: {
    type: Object,
    required: true
  },
  grid: {
    type: Boolean,
    required: true,
  }
})

var isVisible = true

var value = ref('')

function Visibility() {
  isVisible = !isVisible;
}

</script>

<style lang="scss">

.note-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
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

.note-body{
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}

.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0,-6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}


</style>