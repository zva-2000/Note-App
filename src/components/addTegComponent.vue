<template>
<div class="dropdown">
    <InputForDropdow  name="inputTeg" v-model:value="note.teg" @inputClick="Visibility" placeholder="Выберите группу"/>
    <base-button
    @onClick="addTegFunction"
    >
        <span>+</span>
    </base-button>
    <ul v-if="!isVisible" style="cursor: pointer;">
        <li
            v-for="(tegOne, index) in tegs"
            :key="index"
            @click="chooseTeg(tegOne)"
        >
        {{ tegOne }}
        </li>
    </ul>
</div>


  
</template>

<script setup lang="ts">

import { ref } from 'vue';

import InputForDropdow from './InputForDropdow.vue';

import baseButton from './BaseButton.vue';

const props = defineProps<{
  note: { teg: string };
  tegs: string[];
}>();

let isVisible = ref(true)

const Visibility: any = () =>  {
  isVisible.value = !isVisible.value;
  console.log('Button clicked!')
}

const chooseTeg = (tegOne: string) => {
  props.note.teg = tegOne;
  isVisible.value = true;
};

const addTegFunction = () => {
    props.tegs.push(props.note.teg)
}

</script>

<style>

</style>