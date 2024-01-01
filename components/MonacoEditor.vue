<template>
  <div :id="editorId" style="height: 300px; border: 1px solid #ccc;"></div>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default: 'javascript',
    },
    code: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editorId: `editor-${Math.random().toString(36).substring(7)}`,
      editor: null,
    };
  },
  methods: {
    async initMonaco() {
      if (typeof window !== 'undefined') {
        // Only initialize Monaco Editor on the client side
        const monaco = await import('monaco-editor');
        this.editor = monaco.editor.create(document.getElementById(this.editorId), {
          value: this.code,
          language: this.language,
          theme: 'vs-dark', // You can change the theme as needed
        });
      }
    },
  },
  async mounted() {
    await this.initMonaco();
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.dispose();
    }
  },
};


</script>

<style scoped>
/* Add any additional styling here */
</style>
