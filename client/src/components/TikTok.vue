<template>
  <div id="tiktok">
    <h1>TikTok Videos</h1>
    <h2>Just a few of my latest vids. Follow me on TikTok <a href="https://www.tiktok.com/@js_bits?" class="tiktok-link" target="_blank">here</a>!</h2>
    <ul class="video-list">
      <li
        class="video-container"
        v-for="(video, i) in tikTokVideos"
        :key="video.public_id"
      >
        <a :href="videoURLs[i]" target="_blank">
          <img :src="video.secure_url" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import utils from '@/mixins/utils';

export default {
  name: 'TikTok',
  data() {
    return {
      tikTokVideos: []
    };
  },
  computed: {
    videoURLs() {
      return this.tikTokVideos.map(item => {
        return `https://www.tiktok.com/@js_bits/video/${item.context.custom.id}`;
      });
    }
  },
  methods: {
    getTikTokVideos() {
      fetch(`${window.baseURL}/tiktok`)
        .then(response => response.json())
        .then(json => {
          this.tikTokVideos = json.resources.sort((a, b) => {
            if (+a.context.custom.created < +b.context.custom.created) return 1;
            else if (+a.context.custom.created > +b.context.custom.created) return -1;
            else return 0;
          });
        });
    },
  },
  beforeCreate() {
    utils.loadScript('https://www.tiktok.com/embed.js');
  },
  created() {
    this.getTikTokVideos();
  }
}
</script>

<style lang="scss">
#tiktok {
  margin-bottom: 80px;
}

.tiktok-link {
  text-decoration: underline;
}

.video-list {
  max-width: 590px;
  margin: 0 auto;

  .video-container {
    max-width: 196px;
    float: left;

    a {
      &:hover {
        filter: brightness(1.2);
      }

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 627px) {
    max-width: 392px;
  }

  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>