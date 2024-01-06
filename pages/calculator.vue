<template>
  <div class="" id="calculator">
    <input ref="display" id="display" readonly>
    <div class="" id="keys">
      <button @click="appendToDisplay('+')" class="operator-btn">+</button>
      <button @click="appendToDisplay('7')">7</button>
      <button @click="appendToDisplay('8')">8</button>
      <button @click="appendToDisplay('9')">9</button>
      <button @click="appendToDisplay('-')" class="operator-btn">-</button>
      <button @click="appendToDisplay('4')">4</button>
      <button @click="appendToDisplay('5')">5</button>
      <button @click="appendToDisplay('6')">6</button>
      <button @click="appendToDisplay('*')" class="operator-btn">*</button>
      <button @click="appendToDisplay('1')">1</button>
      <button @click="appendToDisplay('2')">2</button>
      <button @click="appendToDisplay('3')">3</button>
      <button @click="appendToDisplay('/')" class="operator-btn">/</button>
      <button @click="appendToDisplay('0')">0</button>
      <button @click="appendToDisplay('.')">.</button>
      <button @click="calculate()">=</button>
      <button @click="clearDisplay()" class="operator-btn">C</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const display = ref<HTMLInputElement | null>(null);

function appendToDisplay(input: string) {
  if (display.value) {
    display.value.value += input;
  }
}

function clearDisplay() {
  if (display.value) {
  display.value.value = "";
  }
}

function calculate() {
  try {
    if (display.value) {
      display.value.value = eval(display.value.value);
    }
  }
  catch(err) {
    if (display.value) {
      display.value.value = "Error";
    }
  }
}

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'calculator.css',
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
