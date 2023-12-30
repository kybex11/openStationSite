<template>
  <canvas ref="appCanvas"></canvas>
</template>

<script>
import { ref, onMounted, onUnmounted} from 'vue';
import {
  initializeEngine,
  placeGrid,
  addCharacter,
  moveCharacter,
  setCameraPosition,
  zoomCamera,
  renderScene,
  addAnimatedCharacter,
  generateMap,
  summonParticles,
  animateParticles
} from '../engine/index';

export default {
  setup() {
    useHead({
      link: [
        {
          rel: 'stylesheet',
          href: '/zombies_town/zombie.css'
        }
      ]
    });
  }
}
</script>
