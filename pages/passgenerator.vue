<template>
  <div class="container">
    <h2>Pass Generator</h2>
    <div class="wrapper">
      <div class="input-box">
        <input v-model="password" type="text" disabled>
        <span @click="copyPassword" class="material-symbols-rounded">copy_all</span>
      </div>
      <div class="pass-indicator" :id="updatePassIndicator"></div>
      <div class="pass-length">
  <div class="details">
    <label for="" class="title">Password Length</label>
    <span>{{ passwordLength }}</span>
  </div>
  <input v-model="passwordLength" type="range" min="1" max="30" step="1">
</div>
      <div class="pass-settings">
        <label for="" class="title">Pass Settings</label>
        <ul class="options">
          <li class="option">
            <input v-model="includeLowercase" type="checkbox" id="lowercase">
            <label for="lowercase">Lowercase (a-z)</label>
          </li>
          <li class="option">
            <input v-model="includeUppercase" type="checkbox" id="uppercase">
            <label for="uppercase">Uppercase (A-Z)</label>
          </li>
          <li class="option">
            <input v-model="includeNumbers" type="checkbox" id="numbers">
            <label for="numbers">Numbers (0-9)</label>
          </li>
          <li class="option">
            <input v-model="includeSymbols" type="checkbox" id="symbols">
            <label for="symbols">Symbols (!-$^+)</label>
          </li>
          <li class="option">
            <input v-model="excludeDuplicate" type="checkbox" id="exc-duplicate">
            <label for="exc-duplicate">Exclude Duplicate</label>
          </li>
          <li class="option">
            <input v-model="includeSpaces" type="checkbox" id="spaces">
            <label for="spaces">Include Spaces</label>
          </li>
        </ul>
      </div>
      <button @click="generatePassword" class="generate-btn">Generate Password</button>
      <br>
      <NuxtLink to="/" class="generate-btn">Go to home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const password = ref('');
const passwordLength = ref<number>(15);
const includeLowercase = ref(true);
const includeUppercase = ref(false);
const includeNumbers = ref(false);
const includeSymbols = ref(false);
const excludeDuplicate = ref(false);
const includeSpaces = ref(false);

const characters: { [key: string]: string } = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "$().*#@~"
};


const generatePassword = () => {
  let staticPassword = "",
      randomPassword = "";

  Object.keys(characters).forEach(option => {
    if (eval(`include${option.charAt(0).toUpperCase() + option.slice(1)}`)) {
      if (option !== "excludeDuplicate" && option !== "includeSpaces") {
        staticPassword += characters[option];
      } else if (option === "includeSpaces") {
        staticPassword += " ";
      } else {
        excludeDuplicate.value = true;
      }
    }
  });

  for (let i = 0; i < passwordLength.value; i++) {
    let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (excludeDuplicate.value) {
      !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
    } else {
      randomPassword += randomChar;
    }
  }
  password.value = randomPassword;
};

const updatePassIndicator = () => {
  return passwordLength.value <= 8 ? "weak" : passwordLength.value <= 16 ? "medium" : "strong";
};

const copyPassword = () => {
  navigator.clipboard.writeText(password.value);
  alert('Password Copied!');
};

watch(passwordLength, () => {
  generatePassword();
});

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'passgenerator.css',
      crossorigin: ''
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded',
        crossorigin: ''
    }
  ]
})


</script>
