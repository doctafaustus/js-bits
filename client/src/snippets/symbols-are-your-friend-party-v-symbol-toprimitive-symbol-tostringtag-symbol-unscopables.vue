<template>
  <article class="snippet-article">
    <h1 class="hero-title">Symbols Are Your Friend Part V: Symbol.toPrimitive, Symbol.toStringTag, & Symbol.unscopables</h1>

    <p>
      I know. You haven't gotten your fill of symbols yet. Rest assured, there's more! This week, we'll take a look at the following symbol static properties:
    </p>

    <ul>
      <li><code>Symbol.toPrimitive</code></li>
      <li><code>Symbol.toStringTag</code></li>
      <li><code>Symbol.unscopables</code></li>
    </ul>

    <hr>

    <b><code>Symbol.toPrimitive</code></b>
    <p>This symbol defines the method to convert an object to a primitive.</p>
  
    <p>Default behavior:</p>

    <pre v-highlightjs><code class="javascript">
      const arr = [1, 2, 3];
      `${arr}`; // "1,2,3"
    </code></pre>

    <p><code>Symbol.toPrimitive</code> utilization:</p>
    <pre v-highlightjs><code class="javascript">
      const arr = [1, 2, 3];
      arr[Symbol.toPrimitive] = function(type) {
        const doubled = arr.map(item => {
          return item * 2;
        });

        return `doubled: ${doubled}`;
      };
      `${arr}`; // "doubled: 2,4,6"
    </code></pre>

    <hr>

    <p><b><code>Symbol.toStringTag</code></b></p>

    <p>
      This symbol defines the behavior of an object when it is converted into its default string description. Essentially it lets you modify the value of <code>Object</code> in <code>"[object Object]"</code> when <code>Object.prototype.toString()</code> is used:
    </p>

    <pre v-highlightjs><code class="javascript">
      const shows = {
        cartoon: 'DuckTales',
        sitcom: 'Seinfeld',
        crime: 'NCIS'
      };
      Object.prototype.toString(shows); // "[object Object]"
    </code></pre>

    <p><code>Symbol.toStringTag</code> utilization:</p>
    <p>
      <i>Note that <code>Symbol.toStringTag</code> is a string valued property (and not a method)</i>.
    </p>
    
    <pre v-highlightjs><code class="javascript">
      const shows = {
        cartoon: 'DuckTales',
        sitcom: 'Seinfeld',
        crime: 'NCIS'
      };
      shows[Symbol.toStringTag] = 'Shows';
      shows.toString(); // "[object Shows]"
    </code></pre>

    <p>
      One thing that's odd about this symbol is that it does not seem to work with anything other than objects:
    </p>

    <pre v-highlightjs><code class="javascript">
      const arr = [1, 2, 3];
      arr[Symbol.toStringTag] = 'Numbers';
      Object.prototype.toString(arr); "[object Object]"
    </code></pre>
    <br>
    <pre v-highlightjs><code class="javascript">
      const str = 'My string';
      str[Symbol.toStringTag] = 'Custom String';
      Object.prototype.toString(str); "[object Object]"
    </code></pre>

    <p>If anyone knows why, please comment!</p>

    <hr>

    <p><b><code>Symbol.unscopables</code></b></p>

    <p>
      This symbol is so incredibly useless but it at least introduced the <code>with</code> statement to me which I had never see before. Essentially, <code>Symbol.unscopables</code> modifies the behavior of <code>with</code>. So what exactly does that do?
    </p>

    <p>
      <code>with</code> allows you to create a scope to a statement. The syntax is as follows:
    </p>
    
    <pre v-highlightjs><code>
      with (expression)
        statement
    </code></pre>

    <p>Here's an example:</p>
    <pre v-highlightjs><code class="javascript">
      with ({ first: 'Charles', last: 'Bronson' }) {
        console.log(`Hi ${first} ${last}!`);
        // Logs "Hi Charles Bronson!
      }
    </code></pre>

    <p>
      So yeah, that's all it does. Also note that <code>with</code> is deprecated as it has browser compatibility issues.
    </p>

    <p>
      So all <code>Symbol.unscopables</code> allows you to do is define what properties of an object are excluded from a <code>with</code> environment binding:
    </p>

    <pre v-highlightjs><code class="javascript">
      const actor = {
        first: 'Charles',
        last: 'Bronson'
      };

      actor[Symbol.unscopables] = {
        last: true
      };

      with (actor) {
        console.log(first); // Logs "Charles"
        console.log(last); // Logs ReferenceError
      }
    </code></pre>

    <p>More symbols in the next article! 😀</p>
  </article>
</template>
