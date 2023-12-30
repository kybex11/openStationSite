<template>
  <div>
    <Head>
      <title>Hello, This is OpenStation</title>
    </Head> 
    <div v-if="showUsernameInput">
      <h1>Enter your username</h1>  
      <input type="text" id="username_submit" placeholder="Enter your username">
      <button @click="username_submit_func">Save</button>
    </div> 
    <div v-if="authorization_event() === 'false'">
      <h1>Enter your username</h1>  
      <input type="text" id="username_submit" placeholder="Enter your username">
      <button @click="username_submit_func">Save</button>
    </div>   
    <div v-if="!showUsernameInput">
    <div class="clicker-container" v-if="authorization_event() === 'true'">
      <div class="leaderboard">
        <span>Leaders Nickname | Score</span>
        <br>
        <span>{{ leaderboardTable.join(', ') }}</span> <!-- Join array elements into a string -->
      </div>
      <h1>Clicker Simulator</h1>
      <button @click="handleClick" class="click-button">
        Click me!
      </button>
      <p class="counter">Click count: {{ clickCount }}</p>
      <p v-if="cps">CMPS: {{ cps.toFixed(2) }}</p>
      <button @click="reset" class="click-button">
        Reset to 0
      </button>
      <br>
      <button @click="change_username" class="click-button">Change Username</button>
      <br>
      <NuxtLink to="/" class="click-button">Exit</NuxtLink>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';

const leaderboardTable = ref<string[]>([]);
const showUsernameInput = ref(false);

const clickCount = ref(0);
const cps = ref(0);
let startTime: any;
let endTime: any;
let dataRes: string = '';

onMounted(async () => {
  startTime = Date.now();
  endTime = startTime;
  await dataUpdate();
});

async function dataUpdate() {
  try {
    const response = await axios.get('http://open-station.site/leaderboard');
    if (response.status === 200) {
      leaderboardTable.value = response.data.map((item: { username: string, score: any}) => `${item.username} | ${item.score._value}`);
      return response;
    } else {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching leaderboard data', error);
    return null;
  }
}

function dataJoin(name: string, score: any) {
  const existingPlayerIndex = leaderboardTable.value.findIndex(item => item.includes(name));
  if (existingPlayerIndex !== -1) {
    leaderboardTable.value[existingPlayerIndex] = `${name} | ${score}`;
  } else {
    leaderboardTable.value.push(`${name} | ${score}`);
  }
}

function authorization_event() {
  return useCookie('auth').value ? 'true' : 'false';
}

function username_submit_func() {
  const usernameInput = document.getElementById("username_submit") as HTMLInputElement;
  const username = usernameInput.value;
  useCookie('auth').value = username;
  window.location.reload();
}

const reset = () => {
  useCookie('clicks').value = '';
  clickCount.value = 0;
}

const handleClick = async () => {

  clickCount.value++;
  useCookie('clicks').value = clickCount.value.toString();

  const username: any = useCookie('auth').value;
  dataJoin(username, clickCount.value);
  const sendData = { username: username, score: clickCount };
  try {
    const sendMath = await axios.post('http://open-station.site/leaderboard', sendData);
    console.log('Posted to server ');
  } catch (e) {
    console.error('Error: ', e);
  }

  if (!startTime) {
    startTime = Date.now();
  }
  endTime = Date.now();

  // Update leaderboard from server after click is processed
  dataUpdate().catch(error => console.error('Error updating leaderboard', error));
};

const change_username = () => {
  showUsernameInput.value = !showUsernameInput.value;
}

watch(clickCount, async () => {
  if (startTime && endTime) {
    const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
    cps.value = clickCount.value / elapsedTime * 2;
  }
});

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: '/clicker.css',
      crossorigin: ''
    },
    {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
        crossorigin: ''
    }
  ]
});
</script>

<style scoped>
/* Add your custom styles here */
.clicker-container {
  text-align: center;
  margin-top: 50px;
}

.click-button {
  padding: 10px 20px;
  font-size: 50px;
  cursor: pointer;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: transform 0.1s ease-in-out;
}

/* Scale the button when clicked */
.click-button:active {
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Add styles for CPS display */
.cps {
  font-size: 16px;
  color: #555;
}
</style>
