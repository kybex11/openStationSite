<template>
  <div class="container">
    <p>Enter your text or URL</p>
    <input type="text" placeholder="Text or URL" v-model="qrText" />
    <div class="imgBox" ref="imgBox">
      <img :src="qrImageUrl" alt="">
    </div>
    <button @click="generateQR">Generate QR Code</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let qrImageUrl = ref<string>("");
let qrText = ref<string>("");
function generateQR() {
  if (qrText.value.length > 0) {
    const imgBox = document.getElementById('imgBox') as HTMLDivElement;
    qrImageUrl.value = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img");
  }
}

useHead({
    link: [
    {
        rel: 'stylesheet',
        href: 'qrgen.css',
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
