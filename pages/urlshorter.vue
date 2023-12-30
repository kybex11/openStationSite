<template>
  <div class="container">
    <i class="bx bx-link-alt"></i>
    <h1>Url Shortener</h1>
    <label for="originalUrl">Enter URL To Shorten :</label>
    <input v-model="originalUrl" type="text" id="originalUrl" placeholder="https://example.com">
    <div class="buttons">
      <button @click="shortenUrl">Shorten It</button>
      <button @click="reloadPage">Reload</button>
    </div>
    <label for="shortenedUrl">Shortened URL :</label>
    <textarea v-model="shortenedUrl" id="shortenedUrl" rows="3" readonly></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const originalUrl = ref('');
const shortenedUrl = ref('');

const shortenUrl = () => {
  const apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl.value);
  const shortenedUrlTextarea = document.getElementById('shortenedUrl') as HTMLTextAreaElement;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      shortenedUrl.value = data;
    })
    .catch(error => {
      console.error('Error during fetch:', error);
      shortenedUrl.value = "Error: Unable to shorten URL!";
    });
};


useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'urlshortnet.css',
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
