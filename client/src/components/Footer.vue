<template>
  <footer>
    <div class="footer-left">&copy;2021 JS Bits</div>
    <div class="footer-right">
      <a class="footer-link" href="https://www.tiktok.com/@js_bits" target="_blank">
        <img class="footer-icon tiktok-icon" src="@/assets/tiktok-icon.webp" width="22" height="22">
        <span class="footer-handle">@js_bits</span>
      </a>

      <a class="footer-link" href="https://twitter.com/JS_Bits_Bill" target="_blank">
        <img class="footer-icon" src="@/assets/twitter-icon.webp" width="30" height="30">
        <span class="footer-handle">@JS_Bits_Bill</span>
      </a>
    </div>
  </footer>
</template>


<style lang="scss">
#app footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;

  .footer-link {
    color: #fff;

    &:hover {
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 18px;
    }

    .footer-icon {
      width: 30px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;

      &.tiktok-icon {
        width: 22px;
      }
    }
  }
}
</style>