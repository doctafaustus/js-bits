<template>
  <div id="snippet">
    <article :class="{ 'video-article': this.snippet.category === 'video', 'snippet-article': true }">
      <h1 class="hero-title">{{ (snippet.title || '').replace('(JS Bits)', '') }}</h1>
      <div id="article-body" v-html="snippet.body_html"></div>
    </article>
  </div>
</template>

<script>
import utils from '@/mixins/utils';
import snippets from '@/snippets.js';

export default {
  name: 'Snippet',
  mixins: [utils],
  data() {
    return {
      slug: null,
      snippet: {}
    };
  },
  methods: {
    openImagesInNewTab() {
      document.querySelectorAll('.article-body-image-wrapper').forEach(link => {
        link.setAttribute('target', '_blank');
      });
		},
		
		getSnippet(slug) {
			return snippets.find(snippet => snippet.slug === slug) || {};
		},

    async getArticle() {
      const response = await fetch(`https://dev.to/api/articles/cilly_boloe/${this.slug}`);
      const data = await response.json();
      this.snippet = data;
    },

    adjustments() {
      const circleImage = document.querySelector('img[src*="circle-svg"]');
      if (circleImage) {
        circleImage.style.width = '50px';
      }

      const twitterLink = document.querySelector('#article-body a[href*="twitter.com/Cilly_Boloe"]');
      if (twitterLink) {
        twitterLink.setAttribute('target', '_blank');
      }
    }
  },
  created() {
		this.slug = this.$route.params.id;
		const snippetObj = this.getSnippet(this.slug);
		if (snippetObj.category === "article") {
			this.getArticle(this.snippetName);
		} else {
			this.snippet = {
				category: 'video',
				title: snippetObj.title,
				body_html: `
				<p>${snippetObj.desc}</p>
				<div class="video-container">
					<iframe 
						width="560" height="315" 
						src="${snippetObj.videoUrl.replace('watch?v=', 'embed/')}" 
						frameborder="0" allowfullscreen>
					</iframe>
				</div>`
			};
		}
  },

  updated() {
    this.openImagesInNewTab();
    this.adjustments();
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

	.video-article {
		#article-body > p:first-child {
			text-align: center;
			margin-bottom: 26.6px;
		}

		.video-container {
			overflow: hidden;
			padding-bottom: 56.25%;
			position: relative;
			height: 0;

			iframe {
				left: 0;
				top: 0;
				height: 100%;
				width: 100%;
				position: absolute;
			}
		}
	}

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

    &[alt="isTrusted TikTok"] {
      width: 150px;
    }

    &[alt="placeholder-shown"] {
      margin-top: 14px;
      margin-left: 16px;
      width: 316px;
    }
  }

  a {
    text-decoration: underline;
  }

  ul {
    padding-left: 40px;
    list-style-type: disc;
  }

  ol {
    padding-left: 40px;
    list-style-type: decimal;
    margin-bottom: 16px;
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

    .youtube-vid {
      height: 300px;
    }
  }
}

.js-actions-panel {
  display: none;
}

div.highlight {
  margin: 16px;
  background: #000;
  color: #f8f8f2;
  font-size: 80%;
  border-radius: 6px;
  overflow-x: auto;
  overflow-wrap: initial;
}

div.highlight .highlight {
  padding: 24px;
  font-size: 100%;
}

code {
  background: rgba(0,0,0,0.1);
  border-radius: 5px;
  max-width: 100%;
  padding: 0.1em 0.25em;
}

.highlight {
	.c {
		color: var(--syntax-comment-color);
	}
	.err {
		text-shadow: 0 0 7px var(--syntax-error-color);
	}
	.k {
		color: var(--syntax-declaration-color);
	}
	.l {
		color: var(--syntax-literal-color);
	}
	.n {
		color: var(--syntax-text-color);
	}
	.o {
		color: var(--syntax-error-color);
	}
	.p {
		color: var(--syntax-text-color);
	}
	.ch {
		color: var(--syntax-comment-color);
	}
	.cm {
		color: var(--syntax-comment-color);
	}
	.cp {
		color: var(--syntax-comment-color);
	}
	.cpf {
		color: var(--syntax-comment-color);
	}
	.c1 {
		color: var(--syntax-comment-color);
	}
	.cs {
		color: var(--syntax-comment-color);
	}
	.gd {
		color: var(--syntax-error-color);
	}
	.ge {
		font-style: italic;
	}
	.gi {
		color: var(--syntax-name-color);
	}
	.gs {
		font-weight: var(--fw-bold);
	}
	.gu {
		color: var(--syntax-comment-color);
	}
	.kc {
		color: var(--syntax-declaration-color);
	}
	.kd {
		color: var(--syntax-declaration-color);
	}
	.kn {
		color: var(--syntax-error-color);
	}
	.kp {
		color: var(--syntax-declaration-color);
	}
	.kr {
		color: var(--syntax-declaration-color);
	}
	.kt {
		color: var(--syntax-declaration-color);
	}
	.ld {
		color: var(--syntax-string-color);
	}
	.m {
		color: var(--syntax-literal-color);
	}
	.s {
		color: var(--syntax-string-color);
	}
	.na {
		color: var(--syntax-name-color);
	}
	.nb {
		color: var(--syntax-text-color);
	}
	.nc {
		color: var(--syntax-name-color);
	}
	.no {
		color: var(--syntax-declaration-color);
	}
	.nd {
		color: var(--syntax-name-color);
	}
	.ni {
		color: var(--syntax-text-color);
	}
	.ne {
		color: var(--syntax-name-color);
	}
	.nf {
		color: var(--syntax-name-color);
	}
	.nl {
		color: var(--syntax-text-color);
	}
	.nn {
		color: var(--syntax-text-color);
	}
	.nx {
		color: var(--syntax-name-color);
	}
	.py {
		color: var(--syntax-text-color);
	}
	.nt {
		color: var(--syntax-error-color);
	}
	.nv {
		color: var(--syntax-text-color);
	}
	.ow {
		color: var(--syntax-error-color);
	}
	.w {
		color: var(--syntax-text-color);
	}
	.mb {
		color: var(--syntax-literal-color);
	}
	.mf {
		color: var(--syntax-literal-color);
	}
	.mh {
		color: var(--syntax-literal-color);
	}
	.mi {
		color: var(--syntax-literal-color);
	}
	.mo {
		color: var(--syntax-literal-color);
	}
	.sa {
		color: var(--syntax-string-color);
	}
	.sb {
		color: var(--syntax-string-color);
	}
	.sc {
		color: var(--syntax-string-color);
	}
	.dl {
		color: var(--syntax-string-color);
	}
	.sd {
		color: var(--syntax-string-color);
	}
	.s2 {
		color: var(--syntax-string-color);
	}
	.se {
		color: var(--syntax-literal-color);
	}
	.sh {
		color: var(--syntax-string-color);
	}
	.si {
		color: var(--syntax-string-color);
	}
	.sx {
		color: var(--syntax-string-color);
	}
	.sr {
		color: var(--syntax-string-color);
	}
	.s1 {
		color: var(--syntax-string-color);
	}
	.ss {
		color: var(--syntax-string-color);
	}
	.bp {
		color: var(--syntax-text-color);
	}
	.fm {
		color: var(--syntax-name-color);
	}
	.vc {
		color: var(--syntax-text-color);
	}
	.vg {
		color: var(--syntax-text-color);
	}
	.vi {
		color: var(--syntax-text-color);
	}
	.vm {
		color: var(--syntax-text-color);
	}
	.il {
		color: var(--syntax-literal-color);
	}
}

:root {
  --syntax-background-color: #08090a;
  --syntax-text-color: #f8f8f2;
  --syntax-comment-color: #808080;
  --syntax-declaration-color: #f39c12;
  --syntax-literal-color: #dda0dd;
  --syntax-error-color: #f9690e;
  --syntax-name-color: #7ed07e;
  --syntax-string-color: #f2ca27
}
</style>