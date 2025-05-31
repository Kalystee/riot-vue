<script setup>

import BackIcon from "@/components/icons/BackIcon.vue";
</script>

<template>
<div class="container m-auto p-6">
  <div class="flex items-center">
    <BackIcon/>
    <RouterLink to="/players" class="text-green-500 hover:text-green-800 ms-1">
      Back to Players
    </RouterLink>
  </div>

</div>
</template>