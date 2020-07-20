<template>
  <article class="snippet-article">
    <h1 class="hero-title">Rest properties with object destructuring</h1>
    
    <p>If we want clone an object but remove certain properties we can use this fancy trick:</p>

    <pre v-highlightjs><code class="javascript">
      const user = {
        firstName: 'Homer',
        lastName: 'Simpson',
        age: 40,
        city: 'Springfield',
      };

      const { age, ...userWithoutAge } = user;
    </code></pre>

    <p>Let's see what's inside <code>userWithoutAge</code>:</p>
    <pre v-highlightjs><code class="javascript">
      // userWithoutAge
      { 
        firstName: "Homer",
        lastName: "Simpson",
        city: "Springfield"
      }
    </code></pre>

    <p>So we have a clone of the original object, but without the <code>age</code> property. Umm, what? 🤔</p>
    <p>This is how it works!</p>
    <p>First, let's look at a simpler example without the use of the "rest spreading":</p>

    <pre v-highlightjs><code class="javascript">
      const { age, city } = user;

      console.log(age); // 40
      console.log(city); // Springfield
    </code></pre>

    <p>
      Here, we're simply destructuring the object to retrieve the <code>age</code> and <code>city</code> properties as new variables. Cool, so what happens when we look at the original example:
    </p>

    <pre v-highlightjs><code class="javascript">
      const { age, ...userWithoutAge } = user;
    </code></pre>

    <p>
      First, we destructure the <code>age</code> property as we just saw, but also we utilize <b>object rest spreading</b> to collect the leftover properties into a variable we can name anything; in this case we call it <code>userWithoutAge</code>. This object we just created on the fly now contains all the original <code>user</code> properties except the age!
    </p>

    <p>
      Using rest properties for object destructuring assignment is a newer feature added in ECMAScript 2018 and is available in modern browsers.
    </p>

    
    <h3>Links</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank">MDN Article on spread syntax</a>
  </article>
</template>
