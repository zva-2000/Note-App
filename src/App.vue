<script setup>

import { ref, computed } from 'vue';

import BaseInput from './components/BaseInput.vue';

import BaseTextarea from './components/BaseTextarea.vue';

import BaseButton from './components/BaseButton.vue';

// import MovedButtons from './components/MovedButtons.vue';

// import BaseDeleteButton from './components/BaseDeleteButton.vue';

import SearchInput from './components/SearchInput.vue';

import ComponentWithDropdown from './components/ComponentWithDropdown.vue';

import AddTegComponent from './components/AddTegComponent.vue';

import AllNotes from './components/AllNotes.vue';

// import ModalWindow from './components/ModalWindow.vue'

import { useTags } from './composables/useTags.js';

import { useNotes } from './composables/useNotes.js';

import { useFilter } from './composables/useFilter.ts';

import NotesWindow from './components/NotesWindow.vue';

// const options = ref(['Очень важно', 'Важно', 'Не важно']);

const { addTegFunctionForCompose, newTag, choosenTegs } = useTags();

const { notes, note, isVisible } = useNotes();

// const { search } = useFilter();

const listOpen = ref(false);

let showModal = ref(false);

let isOpen = ref(true);

let NewMessege = ref('');

let NewImr = ref('');

let grid = ref(true);

function handleClick() {
  console.log('Button clicked!');
}

function showModalFunc() {
  showModal.value = !showModal.value;
}

function OpenDrop() {
  isOpen.value = !isOpen.value;
  console.log('Button clicked!');
}

</script>

<template>
  <!-- <p>title: {{ note.title }}</p> -->

  <!-- <p>search: {{ search }}</p> -->

  <!-- <p>date: {{ note.date }}</p>
  <p>descr: {{ note.descr }}</p>
  <p>impr: {{ note.impr }}</p>
  <p>teg: {{ note.teg }}, {{ newTag }}</p> -->

  <NotesWindow class="main"/>

  <svg v-if="name == 'save-button'" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M29,31H3a1,1,0,0,1-1-1V2A1,1,0,0,1,3,1H23a1,1,0,0,1,.71.29l6,6A1,1,0,0,1,30,8V30A1,1,0,0,1,29,31ZM4,29H28V8.41L22.59,3H4Z"/><path class="cls-1" d="M20,9H10A1,1,0,0,1,9,8V2a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1V8A1,1,0,0,1,20,9ZM11,7h8V3H11Z"/><path class="cls-1" d="M23,25H9a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H23a1,1,0,0,1,1,1V24A1,1,0,0,1,23,25ZM10,23H22V15H10Z"/></svg>

  <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100px" height="100px" viewBox="-249 151 100 100" style="enable-background:new -249 151 100 100;" xml:space="preserve">
<g>
	<path d="M-157.8,171.6c-0.2-0.5-0.4-1.1-1-1.7l-15.8-14.5c-0.7-0.7-1.5-1-2.4-1h-7.5h-41.1h-11c-1.9,0-3.5,1.6-3.5,3.5V245
		c0,1.4,1.1,2.5,2.5,2.5h10.1h54.8h11.6c1.9,0,3.5-1.6,3.5-3.5v-72L-157.8,171.6z M-189.6,159.4v10.4h-31.1v-10.4H-189.6z
		 M-222.6,242.5v-30.6h44.8v30.6H-222.6z M-162.7,242.5h-10.1v-33.1c0-1.4-1.1-2.5-2.5-2.5h-49.8c-1.4,0-2.5,1.1-2.5,2.5v33.1h-7.6
		v-83.1h9.5v12.9c0,1.4,1.1,2.5,2.5,2.5h36.1c1.4,0,2.5-1.1,2.5-2.5v-12.9h6.9l15,13.8V242.5z"/>
	<path d="M-212.1,221.1h23.8c1.4,0,2.5-1.1,2.5-2.5l0,0c0-1.4-1.1-2.5-2.5-2.5h-23.8c-1.4,0-2.5,1.1-2.5,2.5l0,0
		C-214.6,220-213.5,221.1-212.1,221.1z"/>
	<path d="M-212.1,230.1h23.8c1.4,0,2.5-1.1,2.5-2.5l0,0c0-1.4-1.1-2.5-2.5-2.5h-23.8c-1.4,0-2.5,1.1-2.5,2.5l0,0
		C-214.6,229-213.5,230.1-212.1,230.1z"/>
	<path d="M-212.1,239.1h23.8c1.4,0,2.5-1.1,2.5-2.5l0,0c0-1.4-1.1-2.5-2.5-2.5h-23.8c-1.4,0-2.5,1.1-2.5,2.5l0,0
		C-214.6,238-213.5,239.1-212.1,239.1z"/>
</g>
</svg>


</template>

<style scoped>
.tegs {
  width: 1000px;
  margin: auto;
  background-color: var(#165ae3c5);
  line-height: var(#eaf1ff);
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: default;
  gap: 4px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


/* @media (min-width: 1400px) {
  .aside {
    flex: 0 0 25%;
    max-width: 25%;
   }
  .main {
    flex: 0 0 75%;
    max-width: 75%;
  }
} */


</style>
