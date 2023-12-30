<template>
  <canvas ref="appCanvas"></canvas>
</template>

<script>
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
  mounted() {
    const imageMap = {
      0: '/lastStep/grass.png',
      1: '/lastStep/dirt.png'
    }


    const appCanvas = this.$refs.appCanvas;
    if (appCanvas instanceof HTMLCanvasElement) {
      appCanvas.width = window.innerWidth;
      appCanvas.height = window.innerHeight;

      window.addEventListener('resize', () => {
        appCanvas.width = window.innerWidth;
        appCanvas.height = window.innerHeight;
      });

      const tileSize = 64;
      const col = Math.floor(window.innerWidth / tileSize);
      const row = Math.floor(window.innerHeight / tileSize);

      const map = generateMap(col, row, 0, 1);
      initializeEngine(tileSize, col, row, appCanvas);
      placeGrid(tileSize, col, row, 1, appCanvas, imageMap, map);
      renderScene(appCanvas, col, row, map, imageMap);
      console.log(col, row);
    }
  },
};
</script>
