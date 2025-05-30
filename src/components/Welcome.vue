<script setup>

defineProps({
  title: {
    type: String,
    default: "Welcome to RiotVue"
  },
  subtitle: {
    type: String,
    default: "A Vue.js application for League of Legends enthusiasts."
  }
})
</script>

<template>
  <section class="pt-2 pb-10 bg-amber-200">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </section>
</template>

<style scoped>

h1 {
  color: #1d4ed8; /* Tailwind's blue-700 */
  font-size: 4em;
  font-weight: 700;
  text-align: center;
}

p {
  color: #4b5563; /* Tailwind's gray-600 */
  font-size: 1.25em;
  text-align: center;

}
</style>
