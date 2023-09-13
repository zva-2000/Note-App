<template>
  <h1 class="title main-title">Мои заметки</h1>

  <div class="notes-window-header">
    <SearchInput v-model:value="search" />

    <ModalWindow />

  </div>

  <a class="take-of-filter" @click="takeOffFilter">Сбросить выбор тегов</a>


  <div class="notes-window-main-content">

    <SelectedTegs
      :items="tagsForMainWindow"
      @choose-tag="setTag"
      :showButton="false"
      class="tags-in-main-wndw"
    />

    <SelectedTegs
      :items="options"
      @choose-tag="setImpr"
      :showButton="false"
      class="tags-in-main-wndw"
    />

    </div>

    <p class="take-of-filter">Дата создания:</p>  

  <div class="inputs-window-main-content">   
  
   От: <BaseInput
            placeholder=""
            v-model:value="filterDateOne"
            type="date"
            :isReadonly="false"
            class="date-main-input"
          />

      До: <BaseInput
            placeholder=""
            v-model:value="filterDateTwo"
            type="date"
            :isReadonly="false"
            class="date-main-input"
        /> 

    <MovedButtons class="position-moved-buttons" />
  </div>

  <AllNotes class="all-notes" />
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

import ModalWindow from './ModalWindow.vue';

import MovedButtons from './MovedButtons.vue';

import SearchInput from './SearchInput.vue';

import { useTags } from '../composables/useTags.js';

import SelectedTegs from './SelectedTegs.vue';

import AllNotes from './AllNotes.vue';

import BaseInput from './BaseInput.vue';

import { useNotes } from '../composables/useNotes.js';

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, setTag, SelectedTeg, search, setImpr, takeOffFilter, filterDateOne, filterDateTwo } = useFilter();

const { tagsForMainWindow, options } = useTags();

const { notes, visibleModal } = useNotes();

</script>

<style>

.date-main-input {
  width: 18.3rem;
}
.main-title {
  text-align: center;
  font-weight: 600;
  font-size: xx-large;
  margin-bottom: 30px;
}

.notes-window-header {
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 80px;
  margin: auto;
}

.notes-window-main-content {
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
}

.inputs-window-main-content {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
}

.tags-in-main-wndw {
  cursor: pointer;
  display: flex;
  /* flex-direction: column; */
  gap: 5px;
  font-size: 20px;
  text-align: center;
  margin-left: 10px;
  max-width: 35rem;
  width: 21.6rem;
  float: left;
}

.tags-in-main-wndw:focus {
  background-color: aquamarine;
}

.all-notes {
  margin: auto;
  width: 1000px;
}

.position-moved-buttons {
  float: left;
}

.take-of-filter {
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
}


/* .search {
  margin-top: 15px;
} */
</style>
