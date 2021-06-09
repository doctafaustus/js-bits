<template>
  <div id="tiktok">
    <h1>TikTok Videos</h1>
    <h2>Just a few of my latest vids. Follow me on TikTok <a href="https://www.tiktok.com/@js_bits?" class="tiktok-link" target="_blank">here</a>!</h2>
    <ul class="video-list">
      <li
        class="video-container"
        v-for="(video, i) in tikTokVideos"
        :key="video.id"
      >
        <a :href="videoURLs[i]" target="_blank">
          <img :src="video.img" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
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
        return `https://www.tiktok.com/@js_bits/video/${item.id}`;
      });
    }
  },
  methods: {
    getTikTokVideos() {
      fetch(`${window.baseURL}/tiktok`)
        .then(response => response.json())
        .then(json => {
          this.tikTokVideos = json;
        });
    },
  },
  created() {
    this.getTikTokVideos();
  }
}
</script>

<style lang="scss">
#tiktok {
  margin-bottom: 80px;

  h2 {
    line-height: 32px;
  }
}

.tiktok-link {
  text-decoration: underline;
}

.video-list {
  max-width: 590px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3px;

  .video-container {
    max-width: 196px;

    a {
      display: inline-block;

      &:hover {
        filter: brightness(1.1);
      }

      img {
        width: 100%;
        max-width: 196px;
        max-height: 260px;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 627px) {
    grid-template-columns: 1fr 1fr;
    max-width: 396px;
  }
}
</style>