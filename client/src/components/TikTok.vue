<template>
  <div id="tiktok">
    <h1>TikTok Videos</h1>
    <h2>Just a few of my latest vids. Follow me on TikTok <a href="https://www.tiktok.com/@js_bits?" class="tiktok-link" target="_blank">here</a>!</h2>
    <ul class="video-list">
      <li
        class="video-container"
        v-for="video in tikTokVideos"
        :key="video"
      >
        <div v-html="video"></div>
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
      videoIDs: ["6966616209777347846", "6966294001343319302", "6965856931999173894", "6965207536295283974"].reverse(),
      tikTokVideos: []
    };
  },
  methods: {
    getTikTokVideos() {
      const videoID = this.videoIDs.pop();
      if (!videoID) return console.log('done');

      fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/@js_bits/video/${videoID}`)
        .then(response => response.json())
        .then(json => {
          const videoHTML = json.html;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = videoHTML;

          const tikTokScript = tempDiv.querySelector('script');
          tikTokScript.remove();

          this.tikTokVideos.push(tempDiv.innerHTML);
          this.getTikTokVideos();
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

.tiktok-embed {
  margin: 0 auto;
}

.tiktok-link {
  text-decoration: underline;
}
</style>