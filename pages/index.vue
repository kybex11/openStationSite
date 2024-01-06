<template>
<div>
    <Head>
        <Title>Hello, This is OpenStation</Title>
    </Head>
    <header>
    <h1 class="typing-small">Hello, This is OpenStation <button @click="navigateTo('/auth')" class="button button-primary"> Auth</button></h1>

    <div class="typing-small">
    <div class="center-filter">
      <div v-if="isRotating" class="cube-container">
        <div class="cube"></div>
    </div>
        <br>
        <div class="container_default_menu_style">
        <div class="typing-small">
          <br><br>
           <th><button class="table-text" @click="navigateTo('/')">SurviveOnPE(Closed)</button></th><!--to="/surviveonpeSelect"-->
           <th><button class="table-text" @click="navigateTo('/clicker')">Clicker(Dev Preview)</button></th>
           <th ><button class="table-text" @click="navigateTo('/mcseed')">mcseed</button></th>
           <br>
           <th><button class="table-text" @click="navigateTo('/tetris')">tetris(Beta Preview)</button></th>
           <th><button class=" table-text" @click="navigateTo('/tictactoe')">Tic Tac Toe(Opened)</button></th>
           <th><button class=" table-text" @click="navigateTo('/qrgen')">QR Generator</button></th>
          <br>
          <th><button class=" table-text" @click="navigateTo('/')">Zombies Town(In dev)</button></th>
          <th><button class=" table-text" @click="navigateTo('/urlshorter')">UrlShortener</button></th>
          <th><button class=" table-text" @click="navigateTo('/gradientgenerator')">Gradient Generator</button></th>
          <br>
          <th><button class=" table-text" @click="navigateTo('/enginepreview')">Engine</button></th>
          <th><button class=" table-text" @click="navigateTo('/passgenerator')">Password Generator</button></th>
          <th><button class="table-text" @click="navigateTo('/calculator')">Calculator</button></th>
          <br>
          <th><button class="table-text" @click="navigateTo('/evenoddchecker')">EvenOddChecker</button></th>
          <br>
          <th><button class="table-text" @click="navigateTo('https://discord.gg/QWru6BHmQR')" target="_blank">Join to my Discord Server  <i class='bx bxl-discord-alt'></i></button></th>
          <br><br>
        </div>
          </div>
        <h1 class="typing-small">Other games In development...</h1>
        <br>
        <h1 class="typing-large-blue">🎮Open Station - Ваш центр онлайн-игр</h1>
        <p class="typing-medium-blue">Open Station - это платформа, предназначенная для предоставления вам лучших онлайн-игр. Мы собираем разнообразные игры со всего мира, чтобы вы могли наслаждаться их игрой прямо в вашем браузере. Наша команда постоянно ищет новые и увлекательные игры, чтобы обеспечить вам непрерывное развлечение.</p>
        <br>
        <h1 class="typing-large-blue">Работает на браузере и делится с вами</h1>
        <p class="typing-medium-blue">Наша цель - сделать игры доступными для всех, независимо от устройства или местоположения. Все игры на Open Station работают прямо в вашем браузере, что означает, что вам не нужно скачивать или устанавливать дополнительное программное обеспечение. Просто выберите игру, которую вы хотите играть, и начните играть! Мы стремимся создать общность, где каждый может поделиться своими любимыми играми и открыть для себя новые.</p>      </div>
        <br>
        <h1 class="typing-large-blue">Наши дополнительные сервисы</h1>
        <p class="typing-medium-blue">В дополнение к нашей основной платформе игр, мы также предлагаем ряд дополнительных сервисов. Это может включать в себя обучающие материалы, форумы для обсуждения игр, инструменты для разработчиков и многое другое. Мы стремимся предоставить все необходимые ресурсы для нашего сообщества игроков и разработчиков.</p>
      </div>
      <br>

      <h1>This website made in Vite and Nuxt TS</h1>
  </header>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isRotating = ref(false);

const startRotation = () => {
  isRotating.value = true;
}

startRotation();


useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'indexstyle.css',
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
