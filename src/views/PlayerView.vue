<script setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import {onMounted, reactive} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import BackButton from "@/components/BackButton.vue";

const route = useRoute()

const playerId = route.params.id;
const state = reactive({
  player: {},
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(`/api/players/${playerId}`);
    state.player = response.data;
  } catch (error) {
    console.error("Error fetching player:", error);
  } finally {
    state.isLoading = false;
  }
})
</script>

<template>
  <BackButton/>
  <section v-if="!state.isLoading" class="bg-gray-100">
    <div class="p-4">
      <div class="mb-6">
        <p class="text-gray-700 my-2">{{ state.player.mainRole }}</p>
        <h3 class="text-xl font-bold mb-2">{{ state.player.summonerName }}</h3>
      </div>
      <div class="mb-5">
        This is a {{ state.player.rank }} player playing mostly {{ state.player?.mainChampions ? state.player?.mainChampions[0] : "" }}, {{state.player?.mainChampions ? state.player?.mainChampions[1] : ""  }}
        and {{state.player?.mainChampions ? state.player?.mainChampions[2] : ""  }}.
        His winrate is {{ state.player.winRate }}% and he has played {{ state.player.totalGames }} games this season.
      </div>
      
      <RouterLink :to="`/players/edit/${state.player.id}`" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Edit Player
        </RouterLink>

      <RouterLink :to="`/players/delete/${state.player.id}`" class="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4">
        Delete Player
      </RouterLink>
    </div>
  </section>
  <section v-else class="flex justify-center items-center h-screen">
    <PulseLoader color="#4A5568" size="15px" :loading="state.isLoading"/>
  </section>
</template>

