<template>
<h1>Niggers</h1>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(() => {
const code = router.currentRoute.value.query.code;
let requestPayload = { redirect_uri: 'http://open-station.site/discorcheckauth', client_id: '949927873249148998', grant_type: "authorization_code", client_secret: "B25YrN7nr9iRfrj24i_6oK3eNYWKmsB6", code: code};
fetch("https://discordapp.com/api/ouath2/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "DiscordBot",
  },
  body: JSON.stringify(requestPayload),
})
  .then((response) => response.json())
  .then(data => {
    console.log(data);
    fetch("https://discordapp.com/api/users/@me", {
      method: "GET",
      headers: {
        "Authorization" : `${data.body.token_type} ${data.body.access_token}`,
      },
    })
    .then((userReponse) => userReponse.json())
    .then(data2 => {
      console.log(data2);
    })
  })
  .catch(error => {
    console.error(error);
  })

})
</script>
