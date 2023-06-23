<template>
    <div class="NewMessege">
      <p>{{ NewImr }}</p>      
    </div>
</template>
  
<script setup>

defineProps({
  NewImr: {
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