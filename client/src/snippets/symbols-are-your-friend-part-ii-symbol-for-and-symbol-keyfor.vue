<template>
  <article class="snippet-article">
    <h1 class="hero-title">Symbols Are Your Friend Part II: Symbol.for() & Symbol.keyFor()</h1>

    <p>
      In <a href="/snippet/symbols-are-your-friend-part-i-a-gentle-introduction">Part I</a> we looked at the Symbol constructor and general use cases. In this second episode, we'll explore the 2 static Symbol methods, <code>Symbol.for()</code> and <code>Symbol.keyFor()</code>. Don't worry, we'll finally get to the (in)famous <code>Symbol.iterator</code> in due time.
    </p>

    <p>
      These 2 methods are known as "static" methods because they can only be called from the class itself and cannot be accessed via an instance of a class:
    </p>

    <pre v-highlightjs><code class="javascript">
      class myClass {
        static greeting() {
          console.log('Hello world!');
        }
      }

      myClass.greeting() // Logs "Hello world!"

      const foo = new myClass();
      foo.greeting(); // Logs a TypeError
    </code></pre>

    <p>
      With that out of the way, let's look at <code>Symbol.for()</code>. The syntax for this method is:
    </p>

    <pre v-highlightjs><code class="javascript">
      Symbol.for(key); // The key is a string that identifies the symbol
    </code></pre>

    <p>
      While <code>Symbol()</code> always creates a brand new, totally unique value, <code>Symbol.for()</code> will do one of 2 things:
    </p>

    <ol>
      <li>If there is no symbol created with the given key, a new symbol is created.</li>
      <li>Otherwise the method will return the existing symbol with the provided key.</li>
    </ol>

    <pre v-highlightjs><code class="javascript">
      Symbol.for('abc'); // Create a new symbol w/ "abc" as the key
      Symbol.for('abc'); // Retrieve existing "abc" symbol
    </code></pre>

    <p>
      Although this looks similar to <code>Symbol()</code>, <code>Symbol.for()</code>'s argument functions as both the key to search for (or create) and the description: 
    </p>

    <pre v-highlightjs><code class="javascript">
      const weaponSymbol1 = Symbol.for('knife');
      const weaponSymbol2 = Symbol('club');

      console.log(weaponSymbol1.description); // "knife"
      console.log(weaponSymbol2.description); // "club"
    </code></pre>

    <p>
      This is an important distinction as <code>Symbol()</code>'s argument is only a description:
    </p>

    <pre v-highlightjs><code class="javascript">
      const s1 = Symbol('abc'); // Create unique symbol
      const s2 = Symbol.for('abc'); // No symbol with "abc" key so create one

      s1 === s2; // false
      s2 === Symbol.for('abc'); // true
    </code></pre>

    <p>
      Moving on to <code>Symbol.keyFor()</code>, this one is more straightforward as it simply returns the key of a provided symbol as a string:
    </p>

    <pre v-highlightjs><code class="javascript">
      const weaponSymbol = Symbol.for('sword');
      Symbol.keyFor(weaponSymbol); // "sword"
    </code></pre>

    <p>
      Note that <code>Symbol.keyFor()</code> only looks for symbols created with a key created via <code>Symbol.for()</code> and the descriptions you create with <code>Symbol()</code> do not provide a searchable key:
    </p>

    <pre v-highlightjs><code class="javascript">
      const weaponSymbol = Symbol('sword');
      Symbol.keyFor(weaponSymbol); // undefined
    </code></pre>

    <p>
      So that's <code>Symbol.for()</code> and <code>Symbol.keyFor()</code>. We'll take a look at some of Symbol's static properties in the next article. Betcha can't wait! 😉
    </p>

  </article>
</template>
