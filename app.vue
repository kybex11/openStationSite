<script setup lang="ts">
import '~/components/Snowflake.vue';
</script>
<template>
  <div>
    <Snowflake/>
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.snowflake {
	position: fixed;
	top: 0;
	width: 10px;
	height: 10px;
	background-color: #fff;
	border-radius: 50%;
	animation: fall linear infinite;
	animation-timing-function: ease-in-out;
	animation-duration: 5s;
}

@keyframes fall {
	to {
		transform: translateY(100vh);
	}
}

</style>
