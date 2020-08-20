<template>
  <article class="snippet-article">
    <h1 class="hero-title">How to restore native browser code</h1>

    <p>
      Native code is functionality that has been included by the browser's engine and not defined by you, the programmer. Some browsers like Chrome allow you to see if a function is native by simply entering it in the console (and not calling it with parentheses):
    </p>

    <img style="width: 350px;" src="https://res.cloudinary.com/dormh2fvt/image/upload/v1597964591/JS%20Bits/chrome_uYVLnVqDXB.png">

    <p>
      Occassionally, you may encounter a scenario where some native code has been overwritten. In my experience as a 3rd party dev, I've seen a few instances where the console has been overwritten to an empty function. This is usually done by clients  who are hyper-cautious about sensitive customer information being shown (<i>but seriously, if someone really wants to find this info they will!</i>). Trying to write code without a functioning console is a giant pain so I had a good use case to restore the console's native functionality. (Note this was only done for local development and not deployed live!).
    </p>

    <p>
      For example, the <a href="https://m.kohls.com/" target="_blank">Khols.com</a> mobile site has all their console methods overwritten to an empty function.
    </p>

    <img style="width: 160px;" src="https://res.cloudinary.com/dormh2fvt/image/upload/v1597965390/JS%20Bits/console_1.png">

    <p>So here's how we can restore it:</p>

    <pre v-highlightjs><code class="javascript">
      function createConsoleProxy() {

        // Create dummy iframe to steal its fresh console object
        const iframe = document.createElement('iframe');

        // Add iframe to current window's scope in a hidden state
        iframe.id = 'console-proxy';
        iframe.style.display = 'none';
        document.body.insertAdjacentElement('beforeend', iframe);

        // Reassign value of console to iframe's console 
        const proxyIframe = document.querySelector('#console-proxy');
        window.console = proxyIframe.contentWindow.console;
      }
    </code></pre>

    <p>When we enter <code>console.log;</code> in the console... BAM! It's back to it's "native" state!</p>

    <img style="width: 240px;" src="https://res.cloudinary.com/dormh2fvt/image/upload/v1597965611/JS%20Bits/chrome_G2uvuA5ckm.png">

    <p>Before this method was used, a coworker came up with a clever alternative to view messages by creating a custom <code>log()</code> function that would take user input and prepend it to the body:</p>

    <pre v-highlightjs><code class="javascript">
      function log(msg) {
        const body = document.body;
        body.insertAdjacentHTML('afterbegin', `&lt;div&gt;${msg}&lt;div&gt;`);
      }
    </code></pre>

    <p>This worked enough to see simple messages but we quickly realized we needed the ability to expand objects so it had limited use. But challenges like this are always fun. 🤪</p>
  </article>
</template>
