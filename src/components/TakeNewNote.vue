<template>
  <div class="modal">
    <div class="modal-content">
      <slot>
        <baseInput
          :placeholder="placeholderText"
          @update:modelValue="note.title = $event"
          type="typeText"
        ></baseInput>

        <baseTextarea
          class="baseTextarea"
          :placeholder="placeholderText"
          @update:modelValue="note.descr = $event"
        ></baseTextarea>

        <baseInput
          @update:modelValue="note.date = $event"
          type="date"
        ></baseInput>

        <baseInput
          :placeholder="placeholderTeg"
          @update:modelValue="note.teg = $event"
          type="typeText"
        ></baseInput>
      </slot>

      <BaseButton @click="addNote" class="btn btnPrimary">
        <span>Сохранить</span>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import baseInput from "./BaseInput.vue";

import BaseButton from "./BaseButton.vue";

import baseTextarea from "./BaseTextarea.vue";

const props = defineProps({
  swowValue: Boolean,
  note: Object,
  placeholderText: String,
  placeholderTeg: String,
  typeText: String,
  typeDate: Date,
});

const show = ref(props.swowValue);

const emit = defineEmits(["addNote"]);

const addNote = () => {
  show.value = false;
  emit("addNote", props.note);
};
</script>

<style>
.baseTextarea {
  margin-bottom: 16px;
}

button {
  cursor: pointer;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border-radius: 10px solid #888;
  width: 80%;
  max-width: 500px;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
