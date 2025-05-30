<script setup>
import {onMounted, reactive} from "vue";
import PlayerListing from "@/components/PlayerListing.vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: {
    type: Number,
    default: 10
  }
})
const state = reactive({
  players: [],
  isLoading: true
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/players');
    state.players = response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold mb-6 text-green-500 text-center">Browse Players</h2>
      <div v-if="state.isLoading" class="flex justify-center mb-6">
        <PulseLoader color="#4A5568" size="15px" :loading="state.isLoading"/>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlayerListing v-for="player in state.players.slice(0,limit) || state.players.length" :key="player.id"
                       :player="player"/>
      </div>
    </div>
  </section>

</template>