<template>
  <article class="snippet-article">
    <h1 class="hero-title">Symbols Are Your Friend Part III: Symbol.iterator (JS Bits)</h1>

    <p>
      So far, our first 2 looks at Symbol have been straightforward. We already know <code>Symbol</code> is a constructor that returns a symbol object which we already looked at, however this function also has a number of static properties including <code>Symbol.iterator</code> which is <i>a method that returns the default iterator for an object</i>. This one property of <code>Symbol</code> is so important and involved that it needs it's own focus...
    </p>

    <p>
      When you first research what an iterator is, you'll often come across vague definitions like this:
    </p>

    <p>
      <b>Iterator</b>: Let's you iterate over a collection.
    </p>

    <p>
      But what exactly does this mean? To start, let's define what an <b>iteration</b> is: it's simply <i>a repetition of a process</i>. In JavaScript, a loop is an instruction to repeat until a certain condition is reached. Each repetition in a loop is called an <b>iteration</b>.
    </p>

    <p>
      Next, let's define what <b>iterable</b> means. To say that an object is iterable means that it <b>has the capability to have its values looped over with certain statements and expressions</b> like <code>for...of</code> or <code>yield*</code>:
    </p>

    <pre v-highlightjs><code class="javascript">
      const lotteryNumbers = [16, 32, 7];
      for (const num of lotteryNumbers) {
        console.log(num); // Logs num on each iteration
      } 
    </code></pre>

    <p>
      These types of loops are different than your standard <code>for</code> or <code>forEach()</code> loops. We'll explain that more soon...
    </p>

    <p>
      Iterable objects are those whose prototype includes the <code>Symbol.iterator</code> key. Since arrays are iterable, you can see this when you inspect its prototype:
    </p>

    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1602643656/JS%20Bits/symbol-proto_dofjn4.webp">

    <p>
      Other iterable objects include <code>String</code>, <code>Map</code>, <code>Set</code>. Note that <code>Object</code> is NOT iterable by default.
    </p>

    <p>
      Now for the hardest definition of <b>iterator</b>. An iterator is <i>any object that implements the <b>iterator protocol</b></i>. Oh boy, what's that? 🙄
    </p>

    <p>
      Let's pause for this quick recap:
    </p>

    <ul>
      <li><b>Iteration</b>: A repetition in a sequence/loop.</li>
      <li><b>Iterable</b>: An object having the ability to be iterated upon.</li>
      <li><b>Iterator</b>: Any object that implements the iterator protocol.</li>
    </ul>

    <p>
      The <b>iterator protocol</b> is <i>a standard way to produce a sequence of values and potentially a return value when all values have been produced</i>. This is achieved via an object having a special <code>next()</code> method.
    </p>

    <p>
      If this is a lot of understand right now that's completely expected. Stick with me! To explain this further, we know that there are some built-in iterables like <code>Array</code>. We learned that <code>Array</code> is an iterable object because its prototype includes the <code>Symbol.iterator</code> key. We can see that this key is actually a method:
    </p>

    <img style="max-width: 318px" src="https://res.cloudinary.com/dzynqn10l/image/upload/v1602647571/JS%20Bits/chrome_aymvczzypU_txzapl.webp">

    <p>
      Okay... so what does this method return when we call it?
    </p>

    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1602648235/JS%20Bits/chrome_Vm54JXql4J_dbd0bs.webp">

    <p>
      Interesting! It returns an <b>iterator object</b> that includes that special <code>next()</code> method we mentioned above. 
    </p>

    <p>
      Since <code>Array</code> is a built-in iterable, it implements the iterator protocol which is the way its values are iterated over. Let's check this out in code:
    </p>

    <pre v-highlightjs><code class="javascript">
      const zoo = ['lion', 'fox', 'lizard', 'bat']; 
      const iterator = zoo[Symbol.iterator](); // Get zoo's iterator

      iterator.next(); // Returns {value: "lion", done: false}
      iterator.next(); // Returns {value: "fox", done: false}
      iterator.next(); // Returns {value: "lizard", done: false}
      iterator.next(); // Returns {value: "bat", done: false}
      iterator.next(); // {value: undefined, done: true}
    </code></pre>

    <p>
      The object returned by the iterator's <code>next()</code> method will have 2 properties by default: 
    </p>

    <ol>
      <li><b>done:</b> a boolean indicating if the iterator produced any value in the iteration.</li>
      <li><b>value:</b> the value returned by the iterator</li>
    </ol>

    <p>
      This whole procedure using <code>next()</code> and checking the return object's <code>value</code> and <code>done</code> properties is what's happing under the hood when you use a statement that expects iterables such as <code>for...of</code>:
    </p>

    <pre v-highlightjs><code class="javascript">
      for (const animal of zoo) {
        // Each iteration is internally calling next()
        console.log(animal); 
      }
    </code></pre>

    <p>
      Now if we go back to the formal description of <code>Symbol.iterator</code>'s behavior, it makes a little more sense:
    </p>    

    <i>Whenever an object needs to be iterated (such as at the beginning of a for..of loop), its <code>@@iterator</code> method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.</i> --<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator" target="_blank">MDN</a>

    <p>
      While this happens behind the scenes, we can manipulate <code>Symbol.iterator</code> to create some custom functionality. Note that when we do this we must follow that iterator protocol by adding the <code>next()</code> method that returns a object containing <code>value</code> and <code>done</code> properties:
    </p>

    <pre v-highlightjs><code class="javascript">
      const zoo = ['lion', 'pizza', 'fox', 'lizard', 'donut', 'bat']; 
      zoo[Symbol.iterator] = function() {

        // This must return the iteration obj w/ the iterator protocol
        return {
          self: zoo,
          step: 0,

          next() {
            const current = this.self[this.step];
            const isDone = this.step === this.self.length;
            this.step++;

            if (/pizza|donut/.test(current)) {
              return { value: `${current}-monster`, done: isDone };
            } else {
              return {value: current, done: isDone };
            }
          }
        }
      };
    </code></pre>

    <p>
      With the code above, we wanted to add the string <code>-monster</code> to any value in the array containing "pizza" or "donut." We used the array's <code>Symbol.iterator</code> property to create a custom iterator object (following the iterator protocol) to do implement this. Now when we iterator over this object we'll see that result:
    </p>

    <pre v-highlightjs><code class="javascript">
      for (const animal of zoo) {
        console.log(animal);
      }

      /* Logs:
        lion
        pizza-monster
        fox
        lizard
        donut-monster
        bat
      */
    </code></pre>

    <p>
      Now we understand that <code>Symbol.iterator</code> is <b>a symbol (unique value / method) that defines the iteration behavior (or "iteration protocol") of an object</b>. That's what <code>Symbol.iterator</code> is! 🎉
    </p>

    <p>
      We mentioned before that regular objects are not iterable (they have no <code>Symbol.iterator</code> property):
    </p>

    <pre v-highlightjs><code class="javascript">
      const albums = {
        'Kill \'Em All': 1983,
        'Ride the Lightning': 1984,
        'Master of Puppets': 1986,
        '...And Justice for All': 1988,
        'Metallica': 1991
      };

      for (const album of albums) {
        console.log(album);
      }  // ❌ TypeError: albums is not iterable
    </code></pre>

    <p>
      But we can make it iterable!
    </p>

    <pre v-highlightjs><code class="javascript">
      const albums = {
        'Kill \'Em All': 1983,
        'Ride the Lightning': 1984,
        'Master of Puppets': 1986,
        '...And Justice for All': 1988,
        'Metallica': 1991,
        [Symbol.iterator]: function() {
          return {
            step: 0,
            values: Object.values(albums),

            next() {
              const isDone = this.step === this.values.length;
              const value = this.values[this.step];
              this.step++;

              return { value, done: isDone };
            }
          };
        }
      };

      for (const album of albums) {
        console.log(album);
      }

      /* Logs:
        1983
        1984
        1986
        1988
        1991
      */
    </code></pre>

    <p>
      Pretty cool, right? You have the flexibility to make your iterator as simple or as complex and you want. 
    </p>

    <p>
      Lastly, to tie up one loose-end, <code>for...of</code> works differently than the other looping constructs in JavaScript. For example, <code>for...in</code> will only loop over the enumerable properties of an object while <code>for...of</code> will loop over any data that is iterable (implemented with the iterable protocol): 
    </p>

    <pre v-highlightjs><code class="javascript">
    for (const album in albums) {
      console.log(album);
    }

    /* Logs:
      Kill 'Em All
      Ride the Lightning
      Master of Puppets
      ...And Justice for All
      Metallica
    */
    </code></pre>

    <p>
      Furthermore, after we modified our <code>zoo</code> array to return food monsters, a regular `forEach()` array method will continue to log the regular array values since we're not using the built-in iterator:
    </p>

    <pre v-highlightjs><code class="javascript">
      zoo.forEach(animal => console.log(animal));

      /* Logs:
        lion
        pizza
        fox
        lizard
        donut
        bat
      */
    </code></pre>

    <p>
      As you can see, there's a big difference between these looping methods but <code>Symbol.iterator</code> allows for much greater control. 🎮
    </p>

  </article>
</template>
