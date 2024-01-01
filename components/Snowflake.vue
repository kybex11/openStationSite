<template>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const snowflakes = ref<Array<HTMLDivElement>>([]);

const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';

  const size = Math.random() * 20 + 10;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.opacity = `${Math.random()}`;

  // Set a random horizontal position
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.top = `${-Math.random() * 100}vh`; // Start above the viewport

  document.body.appendChild(snowflake);

  snowflakes.value.push(snowflake);
};

const animateSnowflakes = () => {
  snowflakes.value.forEach((snowflake, index) => {
    const speed = Math.random() * 3 + 1;
    snowflake.style.animationDuration = `${speed}s`;

    snowflake.addEventListener('animationiteration', () => {
      // Reset position and opacity for a new animation cycle
      snowflake.style.top = `${-Math.random() * 100}vh`;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.opacity = `${Math.random()}`;
    });

    snowflake.addEventListener('animationend', () => {
      // Remove the snowflake from the DOM and array
      snowflake.remove();
      snowflakes.value.splice(index, 1);
      createSnowflake();
    });
  });
};

onMounted(() => {
  // Create more snowflakes for a denser effect
  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }

  animateSnowflakes();
});
</script>
