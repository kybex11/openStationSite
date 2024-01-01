<template>
  <div class="container">
    <h1>Login with discord or username</h1>
    <label for="discord">Sign in with discord   </label>
    <button class="button danger" id="discord" @click="navigateTo('https://discord.com/api/oauth2/authorize?client_id=949927873249148998&response_type=code&redirect_uri=http%3A%2F%2Fopen-station.site%2Fdiscordcheckauth&scope=identify', {external:true})">Discord</button>
    <br><br>
    <label for="anonymous">Sign in with username</label>
    <button class="button secondary" id="anonymous">Anonymous ( In dev... )</button>
  </div>
</template>

<script setup lang="ts">
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
//@click="navigateTo('/authAnonymous')"
//navigateTo('https://discord.com/api/oauth2/authorize?client_id=949927873249148998&response_type=code&redirect_uri=http%3A%2F%2Fopen-station.site%2Fdiscordcheckauth&scope=identify', {external:true})
</script>
