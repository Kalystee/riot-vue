<script setup>
defineProps({
  player: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <RouterLink :to="`/players/${player.id}`" class="block hover:shadow-lg transition-shadow duration-300">
      <div class="p-4">
        <div class="mb-6">
          <p class="text-gray-700 my-2">{{ player.mainRole }}</p>
          <h3 class="text-xl font-bold mb-2">{{ player.summonerName }}</h3>
        </div>
        <div class="mb-5">
          This is a {{ player.rank }} player playing mostly {{ player?.mainChampions ? player?.mainChampions[0] : "" }}, {{ player?.mainChampions ? player?.mainChampions[1] : "" }}
          and {{ player?.mainChampions ? player?.mainChampions[2] : "" }}.
          His winrate is {{ player.winRate }}% and he has played {{ player.totalGames }} games this season.
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>