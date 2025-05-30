<script setup>
import logo from "@/assets/logo.svg";
import {RouterLink, useRoute} from "vue-router";

const isActive = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="flex items-center bg-gray-800 text-white p-2">
    <img class="h-10 w-auto" :src="logo" alt="RiotVue Logo"/>
    <ul class="flex flex-1 items-center justify-around p-4">
      <li class="flex"><RouterLink to="/" :class="[ isActive('/') ? 'bg-green-900': 'hover:bg-gray-900', 'hover:text-white',
      'text-white', 'px-3', 'py-2', 'rounded-md']">Home</RouterLink></li>
      <li class="flex"><RouterLink to="/champions" :class="[ isActive('/champions') ? 'bg-green-900': 'hover:bg-gray-900', 'hover:text-white',
      'text-white', 'px-3', 'py-2', 'rounded-md']">Champions</RouterLink></li>
      <li class="flex"><RouterLink to="/players" :class="[ isActive('/players') ? 'bg-green-900': 'hover:bg-gray-900', 'hover:text-white',
      'text-white', 'px-3', 'py-2', 'rounded-md']">Players</RouterLink></li>
      <li class="flex"><RouterLink to="/about" :class="[ isActive('/about') ? 'bg-green-900': 'hover:bg-gray-900', 'hover:text-white',
      'text-white', 'px-3', 'py-2', 'rounded-md']">About</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>


</style>