<template>
  <article class="snippet-article">
    <h1 class="hero-title">Filter Log by Script Source</h1>
    <p>On any given website, your typical console might look like this:</p>

    <img src="https://res.cloudinary.com/dormh2fvt/image/upload/v1593526806/JS%20Bits/nSRl8SsKoK.png">

    <p>Yuck! 🤮 We may not be able to control these messages if they're coming from a third-party vendor for instance. So what could we do to make things look at little neater?</p>
    <p>DevTools provides a nifty way you can temporarily filter logs by script source. Check it!</p>
    <p>Click the console side bar then click on one of the source scripts to see all logs originating *only* from that source.</p>
    <img src="https://res.cloudinary.com/dormh2fvt/image/upload/v1593526939/JS%20Bits/wCZUhQNGRM_1.png">
    <p>Now your log is clean as a whistle!🧼</p>

    <h3>Links</h3>
    <a href="https://developers.google.com/web/tools/chrome-devtools/console/log">Chrome Dev Tools Article on Log Messages</a>
  </article>
</template>

<script>
export default {
  name: 'filter-log-by-script-source',
}
</script>
