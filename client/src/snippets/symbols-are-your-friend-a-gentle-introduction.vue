<template>
  <article class="snippet-article">
    <h1 class="hero-title">Symbols Are Your Friend: A Gentle Introduction</h1>

    <p>
      The concept of the Symbol can trip up many a developer. In this article, I'll attempt to demystify them and describe what they are.
    </p>

    <p>
      To start: <b>Symbols are a new primitive data type in JavaScript</b>. If you haven't memorized the 6 primitives in JS, I use the mnemonic device acronym of <b>BBUNNS</b> 🍔:
    </p>

    <ol>
      <li>Boolean</li>
      <li>BigInt</li>
      <li>undefined</li>
      <li>Number</li>
      <li>String</li>
      <li>Symbol</li>
    </ol>

    <p>
      The <b>Symbol</b> data type is simply <b>a unique value</b>. Unique values are useful to avoid name conflicts involving variables and object properties.
    </p>

    <p>
      To create a new symbol we simply call the global <code>Symbol</code> function, optionally passing in a descriptor string:
    </p>

    <pre v-highlightjs><code class="javascript">
      const s1 = Symbol();
      console.log(s1); // logs Symbol()

      const s2 = Symbol('abc');
      console.log(s2); // logs Symbol(abc);
    </code></pre>

    <p>
      Note that these return values <b>are not strings</b> but rather <b>symbols</b>:
    </p>

    <pre v-highlightjs><code class="javascript">
      console.log(typeof s2); // Logs "symbol"
    </code></pre>

    <p>
      Another gotcha' with Symbol, is that every time you create one, it is totally unique from any other symbol you created before. This demonstrates that the string you pass into the function is not being coerced into a symbol - it's simply a label that can be used for clarity or debugging:
    </p>

    <pre v-highlightjs><code class="javascript">
      Symbol('abc') === Symbol('abc'); // false
    </code></pre>

    <p>
      While the return values of <code>Symbol('abc')</code> and <code>Symbol('abc')</code> print out exactly the same in the code, this doesn't mean that they're the same - these are unique entities.
    </p>

    <p>
      So why would we want to create these unique values? <b>Their main purpose is to function as an identifier for object properties</b>.
    </p>

    <p>
      But wait. We already use string-based keys to identify object properties. What benefit would symbols provide?
    </p>

    <p>
      Consider the following function <code>getRace()</code> that takes a string of your favorite Dragon Ball Z character and uses a switch statement to return their race:
    </p>

    <pre v-highlightjs><code class="javascript">
      const GOKU = 'Goku';
      const PICCOLO = 'Piccolo';
      const BULMA = 'Bulma';
      const KRILLIN = 'Piccolo'; // ← Oops, someone messed up!

      function getRace(character) {
        switch (character) {
          case GOKU:
            return 'Saiyan';
          case PICCOLO:
            return 'Namekian';
          case BULMA:
            return 'Human';
          default:
            console.log('No race found!');
        }
      }

      getRace(PICCOLO); // Returns 'Namekian'
      getRace(KRILLIN); // Returns 'Namekian' (D'oh!)
    </code></pre>

    <p>
      Here we intended for only one unique "Piccolo" character to be created. But the variable <code>KRILLIN</code> was also created and set to the same value. So when <code>getRace(KRILLIN)</code> is called, our function returns <code>'Namekian'</code> because of this conflict. With symbols, we can create <b>100% unique identifiers</b>:
    </p>

    <pre v-highlightjs><code class="javascript">
      const GOKU = Symbol('Goku');
      const PICCOLO = Symbol('Piccolo');
      const BULMA = Symbol('Bulma');
      const KRILLIN = 'Piccolo';

      function getRace(character) {
        switch (character) {
          case GOKU:
            return 'Saiyan';
          case PICCOLO:
            return 'Namekian';
          case BULMA:
            return 'Human';
          default:
            console.log('No race found!');
        }
      }

      getRace(PICCOLO); // Returns 'Namekian'
      getRace(KRILLIN); // Logs 'No race found!'
    </code></pre>

    <p>
      Now we're checking for those <b>exact unique symbols</b> inside that switch statement instead of non-unique strings to get a more expected result. 
    </p>

    <p>Let's look at another example:</p>

    <pre v-highlightjs><code class="javascript">
      // app.js

      // Create character record
      const character = {
        id: 123, 
        name: 'Goku',
        race: 'Saiyan'
      };
    </code></pre>

    <br>

    <pre v-highlightjs><code class="javascript">
      // service.js

      // Later in our app, some service overwrites the id 😠
      character.id = 999;
    </code></pre>

    <p>
      Since we used a regular string-based key to create the id property, any other place in our app can have code that could access and modify the property's value. That is not always desirable.
    </p>

    <p>Let's use a symbol for the id instead:</p>

    <pre v-highlightjs><code class="javascript">
      // app.js

      // Create character record w/ id symbol
      const id = Symbol('id');
      const character = {
        [id]: 123, // Using [id] makes the key dynamic
        name: 'Goku',
        race: 'Saiyan'
      };

      console.log(character.id) // Logs undefined
      console.log(character[id]); // Logs 123
    </code></pre>

    <p>
      Now the id can only be read or changed if we explicitly use the "id" <b>symbol</b> to access the property. Other parts of the app will not be able to access this property unless we also provide the symbol. This prevents clashes since we're not using a string for the property access. 
    </p>

    <p>
      You can see that the use of symbols can "harden" our logic in our code. There's plenty more to explore about symbols in another article, but hopefully this was a nice gentle introduction of their concept! 🐤
    </p>

  </article>
</template>
