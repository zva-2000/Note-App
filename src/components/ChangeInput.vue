<template>
    <div>
        <p v-show="isVisible" style="cursor: pointer;">{{ value }}</p>
        <input type="text" placeholder="Введите текст" v-show="!isVisible" v-model="internalValue" @change="inputChange">
    </div>
</template>

<script setup>

// import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
    value: {
            type: String,
            required: true
        },
        isVisible: {
            type: Boolean,
            required: true
        }
})

const internalValue = ref(props.value)

const emit = defineEmits(['inputChange'])

const inputChange = () => {
    emit('update:value', internalValue)
}

</script>
