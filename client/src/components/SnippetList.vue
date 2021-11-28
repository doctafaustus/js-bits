<template>
  <div id="snippets">
    <h1 class="snippets-title">Code Snippets</h1>
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
  name: 'SnippetList',
  data() {
    return {
      snippets: snippets.slice(1)
    };
  },
}
</script>

<style lang="scss">
#snippets {
  margin-bottom: 80px;

  .snippets-title {
    margin: 40px 0;
  }

  .snippets-list {
    display: grid;
    grid-gap: 50px 40px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-bottom: 60px;

    .snippet {
      display: inline-block;
      text-align: left;

      a {
        display: inline-block;
      }

      .snippet-image {
        display: inline-block;
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: top;
        border-radius: 4px;
        margin-bottom: 20px;
        box-shadow: rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px;
      }

      .snippet-title {
        margin: 0 0 12px 0;
        line-height: 30px;
      }

      .snippet-desc {
        font-size: 20px;
        line-height: 25px;
      }
    }

    @media (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

      .snippet {
        .snippet-title {
          margin-bottom: 6px;
        }

        .snippet-desc {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
