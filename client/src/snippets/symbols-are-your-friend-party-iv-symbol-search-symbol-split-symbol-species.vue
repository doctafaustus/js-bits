<template>
  <article class="snippet-article">
    <h1 class="hero-title">Symbols Are Your Friend Part IV: Symbol.search, Symbol.split, & Symbol.species</h1>

    <p>
      Since the wildly popular <b>Symbols Are Your Friend</b> article series has the momentum of a runaway freight train 🚂 (not really), let's check out some more static Symbol properties!
    </p>

    <ul>
      <li><code>Symbol.search</code></li>
      <li><code>Symbol.split</code></li>
      <li><code>Symbol.species</code></li>
    </ul>

    <hr>

    <p>
      <b><code>Symbol.search</code></b>
    </p>

    <p>
      This symbol defines the method that returns the index of a regular expression within a string. It is called internally when <code>String.prototype.search()</code> is used:
    </p>

    <p>Default behavior:</p>

    <pre v-highlightjs><code class="javascript">
      'Wayne Gretzky: The Great One'.search(/Great/); // Returns 19
    </code></pre>

    <p>
      As you can see, <code>String.search()</code> returns the index of the provided regular expression. We can modify this behavior with <code>Symbol.search</code>:
    </p>

    <pre v-highlightjs><code class="javascript">
      const testString = 'Poke Tuna Meal: $10';
      const priceRegEx = /\$/;

      priceRegEx[Symbol.search] = function(str) {
        const indexResult = (str.match(this) || []).index;
        return `Position: ${indexResult || 'not found'}`;
      };

      testString.search(priceRegEx); // Returns "Position: 16"
      'Water: FREE'.search(priceRegEx); // Returns "Position: not found"
    </code></pre>

    <p>
      Note that if you provide a string to <code>String.search()</code> it will be implicitly converted to a Regular Expression thus allowing the use of <code>Symbol.search</code>. The same applies to the next few static Symbol properties.
    </p>

    <hr>

    <p>
      <b><code>Symbol.split</code></b>
    </p>

    <p>Defines the method that splits a string at the indices that match a regular expression.</p>

    <p>Default behavior:</p>
    <pre v-highlightjs><code class="javascript">
      'One Two Three'.split(' '); // Returns ["One", "Two", "Three"]
    </code></pre>
    
    <p>
      <code>Symbol.split</code> modification:
    </p>
    
    <pre v-highlightjs><code class="javascript">
      const splitRegEx = / /;

      splitRegEx[Symbol.split] = function(string) {

        // Create copy of regex to prevent infinite loop
        const regExCopy = new RegExp(this);

        // Create modified result array
        const array = string.split(regExCopy);
        return array.map((item, index) => {
          return `Char ${index + 1}: ${item}`;
        });

      };

      'Yamcha Goku Vegeta'.split(splitRegEx);
      /*
        Returns:
        ["Char 1: Yamcha", "Char 2: Goku", "Char 3: Vegeta"]
      */
    </code></pre>

    <hr>

    <p>
      <b><code>Symbol.species</code></b>
    </p>

    <p>
    This one's a bit tricky to wrap your head around. According to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species" target="_blank">MDN</a>, <i><code>Symbol.species</code> specifies a function-valued property that the constructor function uses to create derived objects</i>.
    </p>

    <p>
      Essentially what this is saying is that <code>Symbol.species</code> lets you change the default constructor of objects returned via methods on a "derived" class (a subclassed object). 
    </p>

    <p>
      For example, let's say we have a basic <code>Fighter</code> class and an <code>AdvancedFighter</code> class that extends <code>Fighter</code>. Objects created via the <code>AdvancedFighter</code> class will automatically inherit the <code>Fighter</code>'s prototype by way of the constructor. Additionally, subclasses of <code>AdvancedFighter</code> will be instances of both <code>AdvancedFighter</code> and <code>Fighter</code>:
    </p>

    <pre v-highlightjs><code class="javascript">
      class Fighter {
        constructor(name, weapon) {
          this.name = name;
          this.weapon = weapon;
        }

        basicAttack() {
          console.log(`${this.name}: Uses ${this.weapon} - 2 dmg`);
        }
      }

      class AdvancedFighter extends Fighter {

        advancedAttack() {
          console.log(`${this.name}: Uses ${this.weapon} - 10 dmg`);
        }

        // Create a subclass object with the species we specified above
        createSensei() {
          return new this.constructor(this.name, this.weapon);
        }
      }

      class Sensei {
        constructor(name, weapon) {
          this.name = name;
          this.weapon = weapon;
        }

        generateWisdom() {
          console.log('Lost time is never found again.');
        }
      }


      const splinter = new AdvancedFighter('Splinter', 'fists');
      const splinterSensei = splinter.createSensei();

      console.log(splinterSensei instanceof Fighter);  // true
      console.log(splinterSensei instanceof AdvancedFighter); // true
      console.log(splinterSensei instanceof Sensei); // false


      console.log(splinterSensei.basicAttack()); // ✅ Logs attack
      console.log(splinterSensei.generateWisdom()); // ❌ TypeError 
    </code></pre>

    <p>
      You can see in this code, we also created a <code>Sensei</code> class. We can use <code>Symbol.species</code> to specify <code>AdvancedFighter</code>'s derived classes to use the <code>Sensei</code> constructor:
    </p>
    
    <pre v-highlightjs><code class="javascript">
      class Fighter {
        constructor(name, weapon) {
          this.name = name;
          this.weapon = weapon;
        }

        basicAttack() {
          console.log(`${this.name}: Uses ${this.weapon} - 2 dmg`);
        }
      }

      class AdvancedFighter extends Fighter {

        // Override default constructor for subclasses
        static get [Symbol.species]() { return Sensei; }

        advancedAttack() {
          console.log(`${this.name}: Uses ${this.weapon} - 10 dmg`);
        }

        // Create a subclass object with the species we specified above
        createSensei() {
          return new (this.constructor[Symbol.species] ||
            this.constructor)(this.name, this.weapon);
        }
      }

      class Sensei {
        constructor(name, weapon) {
          this.name = name;
          this.weapon = weapon;
        }

        generateWisdom() {
          console.log('Lost time is never found again.');
        }
      }


      const splinter = new AdvancedFighter('Splinter', 'fists');
      const splinterSensei = splinter.createSensei();

      console.log(splinterSensei instanceof Fighter);  // false
      console.log(splinterSensei instanceof AdvancedFighter); // false
      console.log(splinterSensei instanceof Sensei); // true

      console.log(splinterSensei.generateWisdom()); // ✅ Logs wisdom
      console.log(splinterSensei.basicAttack()); // ❌ TypeError 
    </code></pre>

    <p>
      The confusing part here is that <b><code>Symbol.species</code> only specifies the constructor of subclass objects</b>. These are created when a class method creates a new instance of a class with...</code>.
    </p>

    <pre v-highlightjs><code class="javascript">
      return new this.constructor();
    </code></pre>

    <p>if there is no defined species or:</p>

    <pre v-highlightjs><code class="javascript">
      return this.constructor[Symbol.species]();
    </code></pre>

    <p>if we've added a custom species getter.</p>

    <p>
      We can combine some Symbol static property concepts together to illustrate this further:
    </p>

    <pre v-highlightjs><code class="javascript">
      class MyRegExp extends RegExp {
        [Symbol.search](str) {
          // Hack search() to return "this" (an instance of MyRegExp)
          return new (this.constructor[Symbol.species] ||
            this.constructor)();
        }
      }

      const fooRegEx = new MyRegExp('foo');
      const derivedObj = 'football'.search(fooRegEx);

      console.log(derivedObj instanceof MyRegExp); // true
      console.log(derivedObj instanceof RegExp); // true
    </code></pre>

    <br>

    <pre v-highlightjs><code class="javascript">
      class MyRegExp extends RegExp {

        // Force MyRegExp subclasses to use the SpecialClass constructor
        static get [Symbol.species]() { return SpecialClass; }

        [Symbol.search](str) {
          // Hack search() to return "this" (an instance of MyRegExp)
          return new (this.constructor[Symbol.species] ||
            this.constructor)();
        }
      }

      class SpecialClass {
        message() {
          console.log('I\'m special!');
        }
      }

      const fooRegEx = new MyRegExp('foo');
      const derivedObj = 'football'.search(fooRegEx);

      console.log(derivedObj instanceof MyRegExp); // false
      console.log(derivedObj instanceof RegExp); // false
      console.log(derivedObj instanceof SpecialClass); // true

      derivedObj.message(); // Logs "I'm special!"
    </code></pre>

    <p>
      A potential use case for <code>Symbol.species</code> would be if you wanted to create a custom API class object that includes all your internal / private methods but you wish for publicly created subclasses to use a different constructor.
    </p>

    <p>See you in the next part! 👋</p>

  </article>
</template>
