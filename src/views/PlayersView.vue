<script setup>
import PlayerListings from "@/components/PlayerListings.vue";
</script>

<template>
  <RouterLink to="/players/add" class="inline-block text-white bg-blue-500 rounded-lg px-4 py-2 m-4 hover:bg-blue-600">
    Add Player
  </RouterLink>
  <PlayerListings/>
</template>
