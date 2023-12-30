<template>
    <div>
        <Head>
            <Title>Hello, This is OpenStation</Title>
        </Head>
        <header v-if="!showingHistory">
            <h1>{{numbers}}</h1>
            <br>
            <button @click="gen">Generate</button>
            <br>
            <button @click="showHistory">History</button>
            <br><br>
            <NuxtLink to="/" class="button">Go to home</NuxtLink>
        </header>
        <div v-if="showingHistory">
            <h1>History</h1>
            <ul>
                <li v-for="seed in seedHistory" :key="seed">
                    {{ seed }}
                    <button @click="removeSeed(seed)">D</button>
                </li>
            </ul>
            <button @click="clearHistory">Remove All</button>
            <br>
            <button @click="showHistory">Back</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let numbers = ref('');
let seedHistory = ref([] as string[]);
let showingHistory = ref(false);

const gen = () => {
  numbers.value = '';
  let cord: string = Math.random() > 0.5 ? '-' : '';
  let newSeed = '';
  for (let i = 0; i < 18; i++) {
    newSeed += cord + Math.floor(Math.random() * 9);
    cord = '';
  }
  numbers.value = newSeed;
  seedHistory.value.unshift(newSeed);
  if (seedHistory.value.length > 10) {
    seedHistory.value.pop();
  }
};

const showHistory = () => {
  showingHistory.value = !showingHistory.value;
};

const removeSeed = (seed: any) => {
  seedHistory.value = seedHistory.value.filter(s => s !== seed);
};

const clearHistory = () => {
  seedHistory.value = [];
};

useHead({
    link: [
    {
        rel: 'stylesheet',
        href: 'mcseed.css',
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