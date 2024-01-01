<template>
  <div :id="editorId" style="height: 300px; border: 1px solid #ccc;"></div>
</template>

<script>
import * as monaco from 'monaco-editor';

const value = `console.log("Hello, Nigger World")`

const editor = monaco.editor.create(document.getElementById("editorId"), {
  value,
  language: "typescript",
  automaticLayout: true,
  cursorSmoothCaretAnimation: "on",
  smoothScrolling: true,
  cursorBlinking: "smooth",
});
</script>

<style scoped>
/* Add any additional styling here */
</style>
