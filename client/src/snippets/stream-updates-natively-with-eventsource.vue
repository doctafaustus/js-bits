<template>
  <article class="snippet-article">
    <h1 class="hero-title">Stream updates natively with with EventSource</h1>
    
    <p>
      The <code>EventSource</code> object is a native Web interface used with server-sent events. If you're not familiar, server-sent events are messages sent by a server to client at any time (and not necessarily as an immediate response to a request like the tradition client-server model).
    </p>

    <p>
      The most typical use case for using <code>EventSource</code> is wherever you need to broadcast periodic events from your server, such as an online stock quote application or perhaps a social medial site where users can see real-time notifications. Using <code>EventSource</code>, you can open a persistent connection to your server and push events to your client without the need to constantly poll for updates.
    </p>

    <p>
      To see how this works, first create a new <code>EventSource</code> in your client code. The first argument is the URL of the server serving the events. From there, you can add event listeners for the <code>open</code> and <code>message</code> events:
    </p>

    <pre v-highlightjs><code class="javascript">
      const evtSource = new EventSource('/connect');

      // Listen for "open" event when connected
      evtSource.addEventListener('open', () => {
        console.log('Persistent connection to server opened');
      });

      // Listen for "message" event when received from server
      evtSource.addEventListener('message', e => {
        console.log('Data received: ', e.data);
      });
    </code></pre>

    <p>
      Here's a NodeJS server example that listens for the initial request and simulates sending periodic events:
    </p>

    <pre v-highlightjs><code class="javascript">
      app.get('/connect', (req, res) => {

        // Set headers
        res.status(200).set({
          'Connection': 'keep-alive',
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache'
        });

        // Broadcast a message with a random # every 2 seconds
        setInterval(() => {
          const number = Math.floor((Math.random() * 100));
          res.write(`data: ${number} \n\n`);
        }, 2000);
    </code></pre>

    <p>
      Some caveats: First, the headers should be exactly as shown since the events are sent in <code>text/event-stream</code> format and the connection needs to be kept alive with no caching.
    </p>

    <p>
      Secondly, when testing this, I had trouble receiving events on the client until I read that the event stream response format is very particular. The response text must begin with <code>data: </code>. The custom message should follow and the line must be terminated with 2 <code>\n</code> characters otherwise the message will not be sent. You can sent bigger bits of data by simply using <code>JSON.stringify()</code> on an object.
    </p>

    <p>
      When you wish to close the connection simply run <code>evtSource.close()</code>.
    </p>

    <p>
      There's a bunch more on <code>EventSource</code> you can read on the MDN article linked below but that's how it works in a nutshell. What's really cool is that it's available natively in all modern browsers and is a much lighterweight alternative to using a websocket library when all you need to do is broadcast events (websocket are needed for full-duplex communications however).
    </p>

    <p>
      Lastly, althougth <code>EventSource</code> has been around forever, I first read about it as a sneaky way hackers can open connections to a malicious server in a XSS attack. Even if Security Ops are monitoring requests by watching <code>fetch</code> events or <code>XMLHttpRequest</code>, <code>EventSource</code> may not always be noticed (perhaps because it's more obscure?). In any case, it's a pretty cool tool to use when the situation calls for it! 📡
    <p>

    <h3>Links</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventSource">MDN Article on EventSource</a>
  </article>
</template>
