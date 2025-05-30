<script setup>
import {onMounted, ref} from "vue";

const name = ref("Kalystee");
const status = ref(false)
const champions = ref([
  { name: "Aatrox", role: "Fighter" },
  { name: "Ahri", role: "Mage" },
  { name: "Akali", role: "Assassin" },
  { name: "Alistar", role: "Tank" },
  { name: "Amumu", role: "Tank" },
  { name: "Anivia", role: "Mage" },
  { name: "Annie", role: "Mage" },
  { name: "Ashe", role: "Marksman" },
  { name: "Aurelion Sol", role: "Mage" },
  { name: "Azir", role: "Mage" }
]);
const count = ref(0)
const link = "https://www.google.com/search?q=kalystee+riotvue";

const updateStatus = () => {
  status.value = !status.value;
};

const newChampion = ref({
  name: "",
  role: ""
});

const addChampion = () => {
  if (newChampion.value.name && newChampion.value.role) {
    champions.value.push({
      name: newChampion.value.name,
      role: newChampion.value.role
    });
    newChampion.value.name = "";
    newChampion.value.role = "";
  }
};

const deleteTask = (index) => {
  champions.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    champions.value = data.map(user => { return { name: user.username, role: "Marksman"} });
    console.log("Component mounted.");

  }catch (e){
    console.error("Error during component mount:", e);
  }
})
</script>

<template>
  <!--  <h1>RiotVue by {{ name }}</h1>-->
  <!--  <p v-if="status">He is diamond</p>-->
  <!--  <p v-else>He is bronze</p>-->

  <!--  <form @submit.prevent="addChampion">-->
  <!--    <label for="newChampionName">Champion Name:</label>-->
  <!--    <input type="text" v-model="newChampion.name" placeholder="Champion Name" required>-->
  <!--    <label for="newChampionRole">Champion Role:</label>-->
  <!--    <input type="text" v-model="newChampion.role" placeholder="Champion Role" required>-->
  <!--    <button type="submit">Add Champion</button>-->
  <!--  </form>-->

  <!--  <h3>Champions :</h3>-->
  <!--  <ul>-->
  <!--    <li v-for="(champion, index) in champions" :key="champion.name">-->
  <!--      <span>{{ champion.name }}</span>-->
  <!--      <button @click="deleteTask(index)">x</button>-->
  <!--    </li>-->
  <!--  </ul>-->

  <!--  <a :href="link" target="_blank">Click for Google</a>-->
  <!--  <button @click="updateStatus">Change status</button>-->
  <!--  <button @click="count++">Count: {{count}}</button>-->
</template>

<style scoped>

</style>