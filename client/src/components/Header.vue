<template>
  <header>
    <router-link to="/" class="logo-link">
      <div class="logo-container">
        <img class="js-logo" src="@/assets/jsbits-logo.webp" width="44" height="44">
        <div class="logo-text">
          <div class="logo-text-large">JS Bits</div>
          <div class="logo-text-small">with Bill</div>
        </div>
      </div>

    </router-link>

    <div class="header-links">
      <router-link to="/code-bits" class="header-link">Code Bits</router-link>
      <router-link to="/interviews" class="header-link">Interviews</router-link>
      <a href="https://js-bits-bug-bash.thinkific.com/courses/bug-bash" class="header-link">Bug Bash Course</a>
      <router-link to="/tiktok" class="header-link">TikTok</router-link>
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
    
    .logo-container {
      display: grid;
      grid-template-columns: 50px 1fr;
      grid-column-gap: 4px;

      .logo-text {
        text-align: left;

        .logo-text-large {
          font-weight: 700;
        }

        .logo-text-small {
          font-size: 16px;
          margin-top: 2px;
        }
      }
    }
  }

  .header-links {
    margin-top: 30px;

    .header-link {
      color: #e6e6e6;
      font-size: 18px;

      &:not(:last-child) {
        padding-right: 10px;

        &::after {
          content: '|';
          padding-left: 10px;
        }
      }
    }
  }

  @media (max-width: 490px) {
    margin-bottom: 40px;
    padding: 12px 0;

    .header-links {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .header-link {
        padding: 5px 0;

        &:not(:last-child)::after {
          content: none;
        }
      }
    }
  }
}
</style>