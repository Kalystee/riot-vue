<script setup>
  defineProps({
    bg: {
      type: String,
      default: 'bg-white'
    }
  })
</script>

<template>
  <div :class="`${bg} p-6 shadow-lg rounded-lg`">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>