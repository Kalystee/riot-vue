<script setup>

import Card from "@/components/Card.vue";
</script>

<template>
<section class="py-4">
  <div class="container-xl lg:container m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
      <Card bg="bg-gray-100">
        <h2 class="text-2xl font-bold mb-2">Explore Champions</h2>
        <p class="text-gray-700">Discover your favorite champions and their roles.</p>
        <RouterLink to="/champions" class="inline-block text-white bg-gray-800 rounded-lg px-4 py-2 hover:bg-black">View Champions</RouterLink>
      </Card>

      <Card bg="bg-green-100">
        <h2 class="text-2xl font-bold mb-2">Explore Stats</h2>
        <p class="text-gray-700">Get the latest players stats </p>
        <RouterLink to="/players" class="inline-block text-white bg-green-500 rounded-lg px-4 py-2 hover:bg-green-600">View Stats</RouterLink>
      </Card>
    </div>
  </div>
</section>
</template>