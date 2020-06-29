<template>
  <footer>
    <div class="footer-left">&copy;2020 JS Bits</div>
    <div class="footer-right">
      <a class="twitter-link" href="https://twitter.com/Cilly_Boloe" target="_blank">
        <img class="twitter-icon" src="@/assets/twitter-icon.png">
        <span class="twitter-handle">@Cilly_Boloe</span>
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

  .twitter-link {
    color: #fff;

    &:hover {
      text-decoration: underline;
    }

    .twitter-icon {
      width: 30px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
    }
  }
}
</style>