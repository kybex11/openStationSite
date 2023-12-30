<template>
    <div class="container">
      <div class="colors">
        <input :value="colorOne" @input="updateColor('colorOne', $event)" type="color">
        <input :value="colorTwo" @input="updateColor('colorTwo', $event)" type="color">
      </div>
      <div class="buttons">
        <button @click="setDirection('to top')">
          <i class="fas fa-arrow-up"></i>
        </button>
        <button :class="{ 'active': currentDirection === 'to bottom' }" @click="setDirection('to bottom')">
          <i class="fas fa-arrow-down"></i>
        </button>
      <button @click="setDirection('to right')">
        <i class="fas fa-arrow-right"></i>
      </button>
      <button @click="setDirection('to left')">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button class="rotate-icon" @click="setDirection('to top right')">
        <i class="fas fa-arrow-up"></i>
      </button>
      <button class="rotate-icon" @click="setDirection('to bottom left')">
        <i class="fas fa-arrow-down"></i>
      </button>
      <button class="rotate-icon" @click="setDirection('to bottom right')">
        <i class="fas fa-arrow-right"></i>
      </button>
      <button class="rotate-icon" @click="setDirection('to top left')">
        <i class="fas fa-arrow-left"></i>
      </button>
    </div>
    <button id="submit" @click="generateCode">Generate</button>
    <div class="output">
      <textarea id="code" rows="2">{{ outputCode }}</textarea>
      <button id="copy" @click="copyText">Copy</button>
    </div>
  </div>
</template>

<script setup lang="ts">
let colorOne = ref("#7986cb");
let colorTwo = ref("#1a237e");
let currentDirection = ref('to bottom');
let outputCode = ref("");

function setDirection(value: string) {
  currentDirection.value = value;
}

function generateCode() {
  outputCode.value = `background-image: linear-gradient(${currentDirection.value}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
  const textarea = document.getElementById("code") as HTMLTextAreaElement;
  textarea.select();
  document.execCommand('copy');
  alert("Gradient Copied!");
}

function updateColor(property: string, event: Event) {
  // Update the corresponding color property
  (property === 'colorOne' ? colorOne : colorTwo).value = (event.target as HTMLInputElement).value;
}

generateCode();
useHead({
    link: [
    {
        rel: 'stylesheet',
        href: 'gradientgenerator.css',
        crossorigin: ''
    },
    {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
        crossorigin: ''
    }
    ]
});
</script>
