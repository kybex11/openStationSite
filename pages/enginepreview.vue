<template>
  <div>
    <MonacoEditor :language="language" :editorCode="code" />
  </div>
</template>

<script>
import MonacoEditor from '~/components/MonacoEditor.vue'

export default {
  components: {
    MonacoEditor,
  },
  data() {
    return {
      language: 'typescript',
      code: 'console.log("Hello, Monaco Editor!");',
    }
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
