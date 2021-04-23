<template>
  <div id="snippets">
    <h1 class="snippets-title">{{ title }}</h1>
    <ul class="snippets-list">
      <li v-for="snippet in snippets" :key="snippet.title" class="snippet">
        <router-link :to="{ name: 'Snippet', params: { id: snippet.slug }}" class="snippet-link">
          <img class="snippet-image" :src="snippet.image">
          <h3 class="snippet-title">{{ snippet.title }}</h3>
        </router-link>
        <div class="snippet-desc">{{ snippet.desc }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import snippets from '@/snippets.js';

export default {
  name: 'CategoryPage',
  data() {
    return {
      title: '',
      snippets: []
    };
  },
  methods: {
    populateContent() {
      const { path } = this.$route;
      const titleMap = {
        '/code-bits': 'Code Bits',
        '/interviews': 'Interviews'
      };

      this.title = titleMap[path];
      if (path === '/code-bits') {
        this.snippets = snippets.filter(snippet => snippet.category === 'article');
      } else if (path === '/interviews') {
        this.snippets = snippets.filter(snippet => {
          return snippet.category === 'video' || snippet.category === 'interview';
        });
      } 
    }
  },
  created() {
    this.populateContent();
  },
  watch: {
    '$route': {
      handler() {
        this.populateContent();
      }
    },
  }
}
</script>