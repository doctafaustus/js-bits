<template>
  <div id="snippet">
    <component onload="openImageInNewTab()" :is="snippetComponent"></component>
  </div>
</template>

<script>
import snippets from '@/snippets.js';
import utils from '@/mixins/utils';

export default {
  name: 'Snippet',
  mixins: [utils],
  data() {
    return {
      snippetName: null
    };
  },
  computed: {
    snippetComponent() {
      return () => import(`@/snippets/${this.snippetName}.vue`);
    }
  },
  methods: {
    openImageInNewTab() {
      document.querySelectorAll('.snippet-article img').forEach(img => {
        img.addEventListener('click', () => {
          Object.assign(document.createElement('a'), { target: '_blank', href: img.src }).click();
        });
      });
    },
    updateMetaImage() {
      const snippet = snippets.find(snippet => utils.slugify(snippet.title) === this.snippetName);
      console.log(snippet);
    }
  },
  created() {
    this.snippetName = this.$route.params.id;
    this.updateMetaImage();

      fetch('http://localhost:8081/api/test', {
        method: 'GET',
        headers: { 'Content-Type': 'text/html' },
      })
      .then(html => console.log('?', html) || html.text())
      .then(data => {
        console.log('api/place-order response: \n', data);
      });
  },
  mounted() {
    // Wait for child snippet component to load
    this.$nextTick(() => {
      utils.waitFor(
        () => this.$children.length,
        this.openImageInNewTab
      );
    });
  }
}
</script>

<style lang="scss">
#snippet {
  text-align: left;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 100px;
  font-size: 20px;
  line-height: 30px;

  h1 {
    font-size: 32px;
    text-align: center;
  }

  h3 {
    margin-top: 32px;
  }

  p {
    margin: 16px 0;
  }

  img {
    width: 100%;
    cursor: pointer;
  }
}
</style>
