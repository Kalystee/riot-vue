<script setup>

import {reactive} from "vue";
import axios from "axios";
import router from "@/router/index.js";

const form = reactive({
  summonerName: '',
  role: 'TOP'
})

const handleSubmit = async () => {
  console.log('Form submitted:', form.summonerName, form.role);

  const newPlayer = {
    summonerName: form.summonerName,
    role: form.role
  };

  try {
    const response = await axios.post('/api/players/', newPlayer)
    router.push(`/players/${response.data.id}`);

  } catch (error) {
    console.error('Error adding player:', error);
  }
}
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Player</h2>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Summoner Name</label>
            <input v-model="form.summonerName" type="text" name="summonerName"
                   class="border rounded w-full py-2 px-3 mb-2" required/>
          </div>
          <div class="mb-4">
            <label for="role" class="block text-gray-700 text-sm font-bold mb-2">Main Role</label>
            <select v-model="form.role" name="role" class="border rounded w-full py-2 px-3" required>
              <option value="TOP">Top</option>
              <option value="JUNGLE">Jungle</option>
              <option value="MID">Mid</option>
              <option value="ADC">Adc</option>
              <option value="SUPPORT">Support</option>
            </select>
          </div>
          <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit">
            Add Player
          </button>
        </form>
      </div>
    </div>
  </section>
</template>