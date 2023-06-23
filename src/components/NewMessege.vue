<template>
    <div class="NewMessege">
      <p>{{ NewMessege }}</p>   
    </div>
</template>
  
<script setup>

// import { defineProps } from 'vue'

defineProps({
  NewMessege: {
        type: String,
        required: true
}
})

</script>
  
<style lang="scss" scoped>
.NewMessege {
  text-align: center;
  padding: 20px;
}
p {
  color: #ba3838;
}
</style>