<template>
  <article class="snippet-article">
    <h1 class="hero-title">Argument Validation</h1>
    <p>Here's a clean way to validate function parameters:</p>

    <pre v-highlightjs><code class="javascript">
      // Define an exception fn
      function throwRequiredErr() {
        throw new Error('Argument required!');
      }

      // Custom function with exception fn as default param
      function greet(person = throwRequiredErr()) {
        console.log(`Hello ${person}!`);
      }

      // Calling greet w/out arg will throw the exception
      greet(); // throwRequiredErr is called and execution pauses

      greet('Oliver'); // Logs 'Oliver'

      // Note some edge cases:
      greet(undefined); // Throws error
      greet(false); // No error
      greet(null);// No error
    </code></pre>

    <p>
      Essentially, we can create an exception function that we set as a default parameter to our custom function. If a <code>person</code> argument is supplied to our function then it will proceed as normal. However, if <code>person</code> is undefined, the exception fun will execute, throw the error, and pause execution.
    </p>
    <p>Now no one can screw up their greeting! 👋</p>
  </article>
</template>
