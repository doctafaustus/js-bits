<template>
  <header>
    <router-link to="/" class="logo-link">
      <span class="logo-text-left">{</span><img class="js-logo" src="@/assets/js-logo.png"><span class="logo-text-right">Bits }</span>
    </router-link>
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

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
}
</style>