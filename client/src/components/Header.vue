<template>
  <header>
    <router-link to="/" class="logo-link">
      <span class="logo-text-left">{</span><img class="js-logo" src="@/assets/js-logo.webp" width="34" height="34"><span class="logo-text-right">Bits }</span>
    </router-link>

    <div class="header-links">
      <router-link to="/tiktok" class="header-link tiktok-link">
        <span>TikTok</span>
        <img class="tiktok-icon" src="@/assets/tiktok-icon.webp" width="30" height="30">
      </router-link>
      <router-link to="/code-bits" class="header-link">Code Bits</router-link>
      <router-link to="/interviews" class="header-link">Interviews</router-link>
    </div>
  </header>
</template>

<script>

</script>


<style lang="scss">
header {
  background-color: #000;
  color: #fff;
  padding: 16px 0;
  margin-bottom: 60px;

  .logo-link {
    display: inline-block;
    font-size: 28px;
    color: #fff;
    text-decoration: none;
    
    .logo-text-left {
      padding-right: 6px;
    }

    .js-logo {
      width: 40px;
      padding-right: 6px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .header-links {
    position: absolute;
    top: 23px;
    right: 40px;

    .header-link {
      color: #fff;
      font-size: 20px;

      &:not(:last-child) {
        padding-right: 15px;

        &::after {
          content: '|';
          padding-left: 15px;
        }
      }

      &.tiktok-link {
        position: relative;

        span {
          display: inline-block;
          padding-right: 30px;
        }

        .tiktok-icon {
          position: absolute;
          top: -3px;
          right: 30px;
        }
      }
    }
  }

  @media (max-width: 980px) {
    margin-bottom: 40px;
    padding: 12px 0;

    .logo-link {
      font-size: 26px;

      .js-logo {
        width: 34px;
      }
    }

    .header-links {
      position: static;
      margin-top: 10px;
    }
  }
}
</style>