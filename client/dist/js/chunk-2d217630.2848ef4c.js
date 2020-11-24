(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217630"],{c706:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"snippet-article"},[n("h1",{staticClass:"hero-title"},[e._v("Dynamic Open Graph Meta Tags with VueJS and Node")]),e._m(0),e._m(1),n("img",{attrs:{src:"https://res.cloudinary.com/dzynqn10l/image/upload/v1606182856/JS%20Bits/view-source_obleo7.png"}}),e._m(2),n("img",{attrs:{src:"https://res.cloudinary.com/dzynqn10l/image/upload/v1606182761/JS%20Bits/fc_og_drbooa.png"}}),n("p",[e._v(" So the only way to dynamically generate these OG meta fields is via a server-side solution. Here's mine! ")]),n("p",[e._v(" The only thing you'll need to have upfront is a seperate JS file of an array of objects containing the OG meta information for each page. You can then map your relevant paths to this object to render the appropriate content. ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    const products = [\n      {\n        id: 111111111,\n        title: 'Corporate Fat Cat',\n        ogImage: 'https://cdn.com/corporate.jpg',\n        description: 'The fat cats in Washington don’t even look this good'\n      },\n      {\n        id: 222222222,\n        title: 'Gangsta Cat',\n        ogImage: 'https://cdn.com/gangsta.jpg',\n        description: 'That’s how we roll'\n      },\n      {\n        id: 333333333,\n        title: 'Mechanic Cat',\n        ogImage: 'https://cdn.com/mechanic.jpg',\n        description: 'I have no idea what I’m doing.'\n      }\n    ];\n  ")])]),e._m(3),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._m(4)]),n("p",[e._v("Then set up the middleware on all routes:")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    app.use('/*', (req, res, next) => {\n      if (/^\\/api\\//.test(req.originalUrl)) next();\n      else if (/\\/item\\//.test(req.originalUrl)) updateMetaTags(req, res);\n      else res.sendFile(`${__dirname}/client/dist/index.html`);\n    });\n  ")])]),e._m(5),e._m(6),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    async function updateMetaTags(req, res) {\n\n      // Get and parse products array from app src\n      const productsSrc = `${__dirname}/client/src/products.js`;\n      const productsText = await fs.promises.readFile(productsSrc);\n      const productsArr = JSON.parse(productsText);\n\n      // Retrieve product object that includes the current URL item id\n      const productID = (req.originalUrl.match(/\\d{9}/) || [])[0];\n      const productObj = productsArr.find(prod => prod.id == productID);\n\n      // Update the meta tag properties in the built bundle w/ Cheerio\n      const baseSrc = `${__dirname}/client//dist/index.html`;\n      const baseHTML = await fs.promises.readFile(baseSrc);\n      const $base = $(baseHTML);\n      const $url = $base.find('meta[property=og\\\\:url]');\n      const $title = $base.find('meta[property=og\\\\:title]');\n      const $image = $base.find('meta[property=og\\\\:image]');\n      const $desc = $base.find('meta[property=og\\\\:description]');\n\n      $url.attr('content', `https://${req.get('host')}${req.originalUrl}`);\n      $title.attr('content', productObj.title);\n      $image.attr('content', productObj.ogImage);\n      $desc.attr('content', productObj.description);\n\n      // Send the modified HTML as the response\n      res.send($.html($base));\n    }\n  ")])]),e._m(7),n("p",[e._v(" And there we go! The OG content is served dynamically based on the requested URL: ")]),n("img",{attrs:{src:"https://res.cloudinary.com/dzynqn10l/image/upload/v1606184876/JS%20Bits/corporate_og_uzq3mz.png"}})])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" I recently faced an interesting dilemma where I was unable to solution for using dynamic Open Graph metadata for my custom built T-shirt website, "),n("a",{attrs:{href:"https://www.fatcattitude.com",about:"_blank"}},[e._v("Fat Cattitude")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Essentially, I wanted to have each product page have its own OG image and description. The problem was that VueJS is a client-side framework with most content being dynamically created via JavaScript. When the Open Graph scraper requests a page it "),n("b",[e._v("does not run any JavaScript")]),e._v(" - it only retrieves the content that is immediately returned from your server. You can see this content in Chrome by right clicking and choosing `View page source`: ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" It is this content, and only this content, that is scraped by the "),n("a",{attrs:{href:"https://developers.facebook.com/tools/debug"}},[e._v("OG Debugger")]),e._v(": ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" First, include some default OG meta tags in the "),n("code",[e._v("index.html")]),e._v(" file that gets served with every request: ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",{staticClass:"html"},[e._v("\n    "),e._v('\n    <meta property="og:url" content="https://www.fatcattitude.com/">\n    <meta property="og:type" content="website">\n    <meta property="og:title" content="Fat Cattitude">\n    <meta property="og:image" content="https://cdn.com/fat-cattitude-logo.jpg">\n    <meta property="og:description" content="There’s attitude and there’s CATTITUDE...">\n  ')])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" All that's going on here is that if the request is an API route, then proceed to the next step in our route processing. If the route contains "),n("code",[e._v("/item/")]),e._v(" then we call our "),n("code",[e._v("updateMetaTags")]),e._v(" function (defined below). Otherwise, just serve the normal "),n("code",[e._v("index.html")]),e._v(" from our "),n("code",[e._v("/dist")]),e._v(" directory. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Here's what happens in "),n("code",[e._v("updateMetaTags")]),e._v(":")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Our products array is retrieved with the File System module and then the relevant object is parsed with a simple "),n("code",[e._v("Array.find()")]),e._v(". From here we use the "),n("a",{attrs:{href:"https://www.npmjs.com/package/cheerio",target:"_blank"}},[e._v("Cheerio")]),e._v(" module to update the content attributes of our existing OG meta tags. Finally, we return the modified files as the server's response. ")])}],s=n("2877"),i={},o=Object(s["a"])(i,a,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d217630.2848ef4c.js.map