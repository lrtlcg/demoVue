<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <el-button type="primary">中国</el-button>
  <h1 class="green">{{ msg }}</h1>
</template>

<style scoped>
.green {
  @apply text-red-300
}
</style>
