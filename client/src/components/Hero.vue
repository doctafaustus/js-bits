<template>
  <div id="hero">
    <h1 class="hero-title">JavaScript tips and tricks for the inquisitive developer</h1>
    <div class="featured-snippet">
      <div class="featured-snippet-left">
        <h5 class="latest-title">Latest Post</h5>
        <h2 class="snippet-title">{{ snippet.title }}</h2>
        <div class="featured-snippet-desc">{{ snippet.desc }}</div>
        <router-link :to="{ name: 'Snippet', params: { id: snippet.slug }}" class="read-code-notes">Read Code Notes</router-link>
      </div>
      <div class="featured-snippet-right">
        <router-link :to="{ name: 'Snippet', params: { id: snippet.slug }}">
          <img class="featured-snippet-image" :src="snippet.image">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import snippets from '@/snippets.js';

export default {
  name: 'Hero',
  data() {
    return {
      snippet: snippets[0]
    };
  }
}
</script>

<style lang="scss">
#hero {
  line-height: 40px;
  border-bottom: solid 5px #488ff7;
  padding-bottom: 40px;

  .hero-title {
    margin-bottom: 40px;
  }

  .featured-snippet {
    display: flex;
    justify-content: space-around;

    .featured-snippet-left {
      text-align: left;
      margin-right: 40px;

      .latest-title {
        margin: 0 0 20px;
        background-color: #ff9900;
        display: inline-block;
        padding: 0 10px;
        line-height: 30px;
        color: white;
      }

      .snippet-title {
        margin: 0;
        line-height: 30px;
        margin-bottom: 14px;
      }

      .featured-snippet-desc {
        line-height: 24px;
      }

      .read-code-notes {
        color: #488ff7;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>