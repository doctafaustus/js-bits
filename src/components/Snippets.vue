<template>
  <div id="snippets">
    <h2 class="snippets-title">Code Snippets</h2>
    <ul class="snippets-list">
      <li class="snippet">
        <img class="snippet-image" src="https://i.ibb.co/PWGh29D/Ebj2-ZDKWAAE08-CP.jpg">
        <h3 class="snippet-title">Cleaner setTimeout Callbacks</h3>
        <div class="snippet-desc">How to keep your setTimeout callbacks on one line.</div>
      </li>
      <li class="snippet">
        <img class="snippet-image" src="https://i.ibb.co/bNTz5kb/Eb-Sda-XBXYAUs-Qxr-1.jpg">
        <h3 class="snippet-title">Argument Validation</h3>
        <div class="snippet-desc">Here's a fancy trick for requiring arguments to a function.</div>
      </li>
      <li class="snippet">
        <img class="snippet-image" src="https://i.ibb.co/bJxk8T5/continue-to-here-1.png">
        <h3 class="snippet-title">Debugging Tip: "Continue to here"</h3>
        <div class="snippet-desc">Inside the Chrome debugger, there's a simple way to advance the flow of your debugging scope.</div>
      </li>
      <li class="snippet">
        <img class="snippet-image" src="https://i.ibb.co/CW8d7jt/chrome-p6-KVK2-Mc-AH.png">
        <h3 class="snippet-title">debug()</h3>
        <div class="snippet-desc">Pause execution in the debugger on the first line of a provided fn.</div>
      </li>
      <li class="snippet">
        <img class="snippet-image" src="https://i.ibb.co/p0Ntnj2/carbon-4.png">
        <h3 class="snippet-title">window.onerror()</h3>
        <div class="snippet-desc">Easily capture and report on global errors with window.error.</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
#snippets {
  margin-bottom: 80px;

  .snippets-list {
    display: grid;
    grid-gap: 50px 30px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 60px;

    .snippet {
      display: inline-block;
      text-align: left;

      .snippet-image {
        display: inline-block;
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 20px;
        box-shadow: rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px;
      }

      .snippet-title {
        margin: 0 0 12px 0;
        line-height: 30px;
      }

      .snippet-desc {
        font-size: 18px;
        line-height: 25px;
      }
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
