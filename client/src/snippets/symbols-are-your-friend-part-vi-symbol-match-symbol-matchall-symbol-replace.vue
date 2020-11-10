<template>
  <article class="snippet-article">
    <h1 class="hero-title">Symbols Are Your Friend Series Part VI: Symbol.match, Symbol.matchAll & Symbol.replace</h1>

    <p>
      Well, we've made it this far 😅. We might as well explore the remaining Symbol properties. There's only 6 more left, but we'll break them up into 2 more articles. Today we'll look at:
    </p>

    <ul>
      <li><code>Symbol.match</code></li>
      <li><code>Symbol.matchAll</code></li>
      <li><code>Symbol.replace</code></li>
    </ul>

    <hr>

    <p><b><code>Symbol.match</code></b></p>
    <p>
      This symbol defines the matching behavior of a regular expression against a string. Here are 2 interesting ways this can be used:
    </p>
 
    <p>
      The first way allows us to override the internal check within certain String methods (like <code>.startsWith()</code>, <code>.includes()</code>, etc.) that check if the first argument is erroneously an regular expression. This internal check uses the <code>match</code> property so if we simple set it to false we can make our regex act as if it's not a regex and use those String methods:
    </p>

    <pre v-highlightjs><code class="javascript">
      const myRegex = /abc/;
      '/abc/'.startsWith(myRegex); // Throws error

      // Override myRegex to not be treated as a regular expression
      myRegex[Symbol.match] = false;
      '/abc/'.startsWith(myRegex); // true
    </code></pre>

    <p>
      The other way we can use <code>Symbol.match</code> is similar to some of the other well-known symbols we've seen already like <code>Symbol.split</code>:
    </p>

    <pre v-highlightjs><code class="javascript">
      const myRegex = /abc/;
      myRegex[Symbol.match] = function(string) {
        const index = string.search(this);
        if (index > -1) return `Match found @ index ${index}`;
        return 'No match found';
      };

      'I know my 123\'s'.match(myRegex); // Returns "No match found"
    </code></pre>

    <hr>

    <p><b><code>Symbol.matchAll</code></b></p>
    <p>
      This symbol is a method that returns an iterator of results when you match a regular expression against a string. Before we check this out, note that there's already a <code>String.prototype.matchAll()</code> method that does the inverse: it matches a string against a regular expression:
    </p>

    <pre v-highlightjs><code class="javascript">
      const myRegex = /wood/g;
      const str = 'How much wood would a woodchuck chuck?';

      for (result of str.matchAll(myRegex)) {
        console.log(result);  // Logs matches
      }
    </code></pre>

    <p>
      So with <code>Symbol.matchAll</code> we can essentially swap the calling object and argument types:
    </p>
    
    <pre v-highlightjs><code class="javascript">
      const myRegex = /wood/g;
      const str = 'How much wood would a woodchuck chuck?';

      for (result of myRegex[Symbol.matchAll](str)) {
        console.log(result); // Logs matches
      }
    </code></pre>

    <p><code>RegExp.matchAll()</code> would otherwise throw a TypeError.</p>
    
    <hr>

    <p><b><code>Symbol.replace</code></b></p>
    <p>This symbol defines the behavior for the <code>.replace()</code> method on a string.</p>
    
    <p>Default behavior:</p>
    
    <pre v-highlightjs><code class="javascript">
      const spoonRegex = /spoon/;

      const result = 'There is no spoon'.replace(spoonRegex, 'fork');
      console.log(result); // Logs "There is no fork"
    </code></pre>

    <code>Symbol.replace</code> modification:
    <pre v-highlightjs><code class="javascript">
      const spoonRegex = /spoon/;
      spoonRegex[Symbol.replace] = function(string, replacement) {
        const match = string.match(this) || [];
        const index = match.index;

        if (!match.length) return string;
        return `${string.slice(0, index)}${replacement}, lol`;
      };

      const result = 'There is no spoon'.replace(spoonRegex, 'fork');
      console.log(result); // Logs "There is no fork, lol"
    </code></pre>

  </article>
</template>
