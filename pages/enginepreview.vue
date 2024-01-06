<template>
  <div>
    <div id="editorId" style="height: 300px; border: 1px solid #ccc;"></div>
    <button @click="updateValue">Update</button>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
  data() {
    return {
      code: 'console.log("Hello, World")',
      editor: null,
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      var editor = monaco.editor.create(document.getElementById('editorId'), {
        value: this.code,
        language: 'typescript',
        automaticLayout: true,
        cursorSmoothCaretAnimation: 'on',
        smoothScrolling: true,
        cursorBlinking: 'smooth',
        theme: 'vs-dark',
      });
    },
    updateValue() {
  try {
    const outputValue = editor.getValue();
    console.log(outputValue); // You can do something with the output value
  } catch (error) {
    console.error('Error in updateValue:', error);
  }
},
  },
};

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'enginepreview.css',
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
