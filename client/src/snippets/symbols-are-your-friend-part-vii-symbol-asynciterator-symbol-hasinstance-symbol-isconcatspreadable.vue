<template>
  <article class="snippet-article">
    <h1 class="hero-title">Symbols Are Your Friend Series Part VII: Symbol.asyncIterator, Symbol.hasInstance & Symbol.isConcatSpreadable</h1>

    <p>
      This is it - the last of the well-known symbols! Today we'll look at:
    </p>

    <ul>
      <li><code>Symbol.asyncIterator</code></li>
      <li><code>Symbol.hasInstance</code></li>
      <li><code>Symbol.isConcatSpreadable</code></li>
    </ul>

    <hr>

    <p><b><code>Symbol.asyncIterator</code></b></p>
    <p>
      Similar to <code>Symbol.iterator</code>, <code>Symbol.asyncIterator</code> functions the same way, except they return promises. This enables us to make an object that has asynchronous functionality iterable:
    </p>

    <pre v-highlightjs><code class="javascript">
      // Create iterable object
      const todos = {
        [Symbol.asyncIterator]: function() {
          let i = 1;
          const limit = 4;

          return {
            async next() {
              if (i === limit) return { done: true };

              i++;
              return { value: await fetchTodo(i), done: false }
            }
          }
        },
      };

      // Fetch a todo object
      async function fetchTodo(num) {
        const url = `https://jsonplaceholder.typicode.com/todos/${num}`;
        const response = await fetch(url);
        return await response.json();
      }

      // Asynchronously iterate through todos
      (async () => {
        for await (const todo of todos) {
          console.log(todo.title);
        }
      })();
    </code></pre>

    <p>
      With this example, we're effective making our <code>todos</code> object async iterable. <code>Symbol.asyncIterator</code> is also commonly implemented with generator functions but we'll explore those in another article.
    </p>

    <hr>

    <p><b><code>Symbol.hasInstance</code></b></p>
    <p>
      This symbol is used to determine whether or not a constructor has an instance of another object when <code>instanceof</code> is used.
    </p>

    <p>
      This allows us to customize the behavior of <code>instanceof</code> when it operates on our constructor object:
    </p>

    <pre v-highlightjs><code class="javascript">
      class PowerRanger {
        constructor(name) {
          this.name = name;
        }
        
        static [Symbol.hasInstance](instance) {
          const rangersRegEx = /jason|zack|kim|billy|trini/i;
          return rangersRegEx.test(instance.name);
        }
      }

      const jason = new PowerRanger('Jason');
      const bob = new PowerRanger('Bob');

      jason instanceof PowerRanger; // true
      bob instanceof PowerRanger; // false
    </code></pre>
    
    <hr>

    <p><b><code>Symbol.isConcatSpreadable</code></b></p>
    <p>
      This symbol is a toggle that indicates if an object should be flatted when <code>Array.prototype.concat()</code> is used:
    </p>
    
    <pre v-highlightjs><code class="javascript">
      const pokemon = ['Eevee', 'Snorlax', 'Ditto'];
      const transformers = ['Jazz', 'Grimlock', 'Arcee'];

      pokemon.concat(transformers);
      // Returns ["Eevee", "Snorlax", "Ditto", "Jazz", "Grimlock", "Arcee"]
    </code></pre>

    <br>
    <pre v-highlightjs><code class="javascript">
      const pokemon = ['Eevee', 'Snorlax', 'Ditto'];
      const transformers = ['Jazz', 'Grimlock', 'Arcee'];

      transformers[Symbol.isConcatSpreadable] = false;

      pokemon.concat(transformers);
      // Returns ["Eevee", "Snorlax", "Ditto", Array(3)]
    </code></pre>

    <p>
      A great use for this Symbol is to force normally unflattenable array-like objects to flatten:
    </p>

    <pre v-highlightjs><code class="javascript">
      const pokemon = ['Eevee', 'Snorlax', 'Ditto'];
      const transformers = {
        [Symbol.isConcatSpreadable]: true, 
        length: 3, // Length needed to specify # of props to add
        0: 'Jazz', 
        1: 'Grimlock',
        2: 'Arcee'
      };

      pokemon.concat(transformers);
      // Returns ["Eevee", "Snorlax", "Ditto", "Jazz", "Grimlock", "Arcee"]
    </code></pre>

    <p>
      This concludes the <b>Symbols Are Your Friend</b> series! We've just gone from Symbol zero to hero! 🦸
    </p>

  </article>
</template>
