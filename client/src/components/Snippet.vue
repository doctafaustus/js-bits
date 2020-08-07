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
  },
  created() {
    this.snippetName = this.$route.params.id;
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
  font-size: 19px;
  line-height: 30px;

  h1 {
    font-size: 32px;
    text-align: center;
    line-height: 40px;
  }

  h3 {
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    margin: 16px 0;
  }

  img {
    width: 100%;
    cursor: pointer;
  }

  a {
    text-decoration: underline;
  }

  ul {
    padding-left: 40px;
    list-style-type: disc;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;

    h1 {
      font-size: 28px;
      line-height: 34px;
    }

    code {
      font-size: 15px;
      line-height: 24px;
    }

    .hljs {
      font-size: 14px;
      line-height: 20px;
      padding: 0;
    }
  }
}

code {
  color: #f006a8;
  background-color: rgba(27,31,35,.06);
  padding: .15rem .55rem;
  margin: 0;
  border-radius: 3px;
  font-size: 18px;
}

.hljs {
  font-size: 18px;
}
</style>
