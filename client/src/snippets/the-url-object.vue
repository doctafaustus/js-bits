<template>
  <article class="snippet-article">
    <h1 class="hero-title">The URL Object</h1>
    <p>Here's a great trick to get URL properties from a string that I recently discovered thanks to Twitter user <a href="https://twitter.com/DailyDevTips1" target="_blank">Chris Bongers (Daily Dev Tips)</a></p>

    <p>This method involves using the <code>URL()</code> constructor, available in all modern browsers.</p>
    <pre v-highlightjs><code class="javascript">
      const url = new URL('http://www.example.com/snippet?utm_campaign=12345#documentation');
    </code></pre>

    <p>With the URL object, you can easily access URL properties as such:</p>
    <pre v-highlightjs><code class="javascript">
      {
        hash: "#documentation"
        host: "www.example.com"
        hostname: "www.example.com"
        href: "http://www.example.com/snippet?utm_campaign=12345"
        origin: "http://www.example.com"
        password: ""
        pathname: "/snippet"
        port: ""
        protocol: "http:"
        search: "?utm_campaign=12345"
        searchParams: URLSearchParams {}
        username: ""
      }

      console.log(url.pathname); // Logs "/snippet"
      console.log(url.hostname); // Logs "www.example.com" 
    </code></pre>

    <p>Note that one of the properties is the <code>searchParams</code> object, which provides an interface to manipulate the URL's query string (we'll look at it in-depth in another article).
    <pre v-highlightjs><code class="javascript">
      console.log(url.searchParams.get('utm_campaign')); // Logs "12345"
    </code></pre>

    <p>Before this awesome constructor came along, it was common to achieve the same result by creating an anchor tag in order to use the DOM's built-in methods to retrieve the URL info:
    
    <pre v-highlightjs><code class="javascript">
      const a = document.createElement('a');
      a.href = 'http://www.example.com/snippet?utm_campaign=12345#documentation';
      
      a.pathname // "/snippet"
      a.hostname // "www.example.com" 
      a.search // "?utm_campaign=12345"
    </code></pre>

    <p>While this worked, it felt cumbersome to have to create a document element solely to retrive URL data and could potentially confuse readers of your code of what your intent was. Plus, this would only work with the Web API and not in other environments like Node where <code>URL()</code> would clearly be the superior method. 👑</p> 

    <h3>Links</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/URL">MDN Article on URL() Interface</a>
  </article>
</template>
