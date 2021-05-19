# Bug Finder Exercises

### TODO
  - Banner message about using Chrome only.
  - Ask user to rate each bug in difficult after solving.

## Exercise 1
HttpOnly cookies.

## Exercise 2
Filter event handler lost.

## Exercise 3
`setTimeout` variable binding.
Use `let` instead of `var` to keep the variables block scoped.
Instruct to keep `setTimeout`s under the guise of wanting to show some of the animation.

## Exercise 4
`analytics.js` is a slow-running script. It's execution is delaying video playback.
What's causing the video to start so slowly?

## Exercise 5
Red herring of a `setTimeout` declaring a window level variable that's already created by and element `id`.
Why does the warning message appear?

### Future Exercise
Remember last scroll position Chrome 
`history.scrollRestoration = 'manual';`

`window.load` overwrite (instead of `addEventListener`)

`window.scroll` janky peformance (instead of `matchMedia`)
