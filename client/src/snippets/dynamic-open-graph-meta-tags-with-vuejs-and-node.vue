<template>
  <article class="snippet-article">
    <h1 class="hero-title">Dynamic Open Graph Meta Tags with VueJS and Node</h1>

    <p>
      I recently faced an interesting dilemma where I was unable to solution for using dynamic Open Graph metadata for my custom built T-shirt website, <a href="https://www.fatcattitude.com" about="_blank">Fat Cattitude</a>.
    </p>

    <p>
      Essentially, I wanted to have each product page have its own OG image and description. The problem was that VueJS is a client-side framework with most content being dynamically created via JavaScript. When the Open Graph scraper requests a page it <b>does not run any JavaScript</b> - it only retrieves the content that is immediately returned from your server. You can see this content in Chrome by right clicking and choosing `View page source`:
    </p>

    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1606182856/JS%20Bits/view-source_obleo7.png">

    <p>
      It is this content, and only this content, that is scraped by the <a href="https://developers.facebook.com/tools/debug">OG Debugger</a>:
    </p>

    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1606182761/JS%20Bits/fc_og_drbooa.png">

    <p>
      So the only way to dynamically generate these OG meta fields is via a server-side solution. Here's mine!
    </p>

    <p>
      The only thing you'll need to have upfront is a seperate JS file of an array of objects containing the OG meta information for each page. You can then map your relevant paths to this object to render the appropriate content.
    </p>

    <pre v-highlightjs><code class="javascript">
      const products = [
        {
          id: 111111111,
          title: 'Corporate Fat Cat',
          ogImage: 'https://cdn.com/corporate.jpg',
          description: 'The fat cats in Washington don’t even look this good'
        },
        {
          id: 222222222,
          title: 'Gangsta Cat',
          ogImage: 'https://cdn.com/gangsta.jpg',
          description: 'That’s how we roll'
        },
        {
          id: 333333333,
          title: 'Mechanic Cat',
          ogImage: 'https://cdn.com/mechanic.jpg',
          description: 'I have no idea what I’m doing.'
        }
      ];
    </code></pre>

    <p>
      First, include some default OG meta tags in the <code>index.html</code> file that gets served with every request:
    </p>

    <pre v-highlightjs><code class="html">
      <!-- OG Meta Tags -->
      &lt;meta property="og:url" content="https://www.fatcattitude.com/"&gt;
      &lt;meta property="og:type" content="website"&gt;
      &lt;meta property="og:title" content="Fat Cattitude"&gt;
      &lt;meta property="og:image" content="https://cdn.com/fat-cattitude-logo.jpg"&gt;
      &lt;meta property="og:description" content="There’s attitude and there’s CATTITUDE..."&gt;
    </code></pre>

    <p>Then set up the middleware on all routes:</p>

    <pre v-highlightjs><code class="javascript">
      app.use('/*', (req, res, next) => {
        if (/^\/api\//.test(req.originalUrl)) next();
        else if (/\/item\//.test(req.originalUrl)) updateMetaTags(req, res);
        else res.sendFile(`${__dirname}/client/dist/index.html`);
      });
    </code></pre>

    <p>
      All that's going on here is that if the request is an API route, then proceed to the next step in our route processing. If the route contains <code>/item/</code> then we call our <code>updateMetaTags</code> function (defined below). Otherwise, just serve the normal <code>index.html</code> from our <code>/dist</code> directory.
    </p>

    <p>Here's what happens in <code>updateMetaTags</code>:</p>

    <pre v-highlightjs><code class="javascript">
      async function updateMetaTags(req, res) {

        // Get and parse products array from app src
        const productsSrc = `${__dirname}/client/src/products.js`;
        const productsText = await fs.promises.readFile(productsSrc);
        const productsArr = JSON.parse(productsText);

        // Retrieve product object that includes the current URL item id
        const productID = (req.originalUrl.match(/\d{9}/) || [])[0];
        const productObj = productsArr.find(prod => prod.id == productID);

        // Update the meta tag properties in the built bundle w/ Cheerio
        const baseSrc = `${__dirname}/client//dist/index.html`;
        const baseHTML = await fs.promises.readFile(baseSrc);
        const $base = $(baseHTML);
        const $url = $base.find('meta[property=og\\:url]');
        const $title = $base.find('meta[property=og\\:title]');
        const $image = $base.find('meta[property=og\\:image]');
        $desc = $base.find('meta[property=og\\:description]');

        $url.attr('content', `https://${req.get('host')}${req.originalUrl}`);
        $title.attr('content', productObj.title);
        $image.attr('content', productObj.ogImage);
        $desc.attr('content', productObj.description);

        // Send the modified HTML as the response
        res.send($.html($base));
      }
    </code></pre>

    <p>
      Our products array is retrieved with the File System module and then the relevant object is parsed with a simple <code>Array.find()</code>. From here we use the <a href="https://www.npmjs.com/package/cheerio" target="_blank">Cheerio</a> module to update the content attributes of our existing OG meta tags. Finally, we return the modified files as the server's response.
    </p>

    <p>
      And there we go! The OG content is served dynamically based on the requested URL:
    </p>

    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1606184876/JS%20Bits/corporate_og_uzq3mz.png">
  </article>
</template>
