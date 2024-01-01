<template>
  <div id="editorId"></div>
</template>

<script>
import * as monaco from 'monaco-editor';

const code = `console.log("Hello, World")`;
const editorElement = document.getElementById('editorId');

if (editorElement) {
const editor = monaco.editor.create(editorElement, {
  value: code,
  language: "typescript",
  automaticLayout: true,
  cursorSmoothCaretAnimation: "on",
  smoothScrolling: true,
  cursorBlinking: "smooth",
  theme: "vs-dark",
});
}

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
