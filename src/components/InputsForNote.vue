<template>

<div class="note">
    <BaseInput
        placeholder="Введите текст"
        v-model:value="note.title"
        type="text"
        class="base-input"
    />
<!-- 
    <ChangeNoteButton/>
    <BaseDeleteButton class="delete-button" @click="removeNote(index)"/> -->

    <BaseTextarea
        placeholder="Введите текст"
        v-model:value="note.descr"
        class="base-textarea"
    />
    <BaseInput
        class="date-input"
        v-model:value="note.date"
        type="date"
        placeholder="Введите дату"
    />

    <ComponentWithDropdown
        class="impr-input"
        v-model:value="note.impr"
        v-model:options="options"
    />

    <addTegComponent
        :class-name="'teg-input'"
        @chooseTeg="addTagToNote"
        :selectedTegs="note.teg"
        @deleteTag="deleteTagInChangeNote(index)"
    />

    <!-- <SelectedTegs class="note-teg" :items="note.teg"/> -->

</div>
</template>

<script setup lang="ts">

const props = defineProps<{
  note: {title: string,
  descr: string,
  impr: string,
  date: string,
  teg: string[]};
}>();

import { useNotes } from '../composables/useNotes.js';

const { notes, removeNote, visibleModal, openModal, closeModal } = useNotes();

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import ComponentWithDropdown from './ComponentWithDropdown.vue'

import addTegComponent from './addTegComponent.vue';

import SelectedTegs from './SelectedTegs.vue';

import { useTags } from '../composables/useTags.js'

const { chooseTeg, options } = useTags();


const addTagToNote = (newTag: string) => {
    props.note.teg.push(newTag);
}

const deleteTagInChangeNote = (index) => {
    props.note.teg.splice(index, 1);
};

</script>

<style>

</style>