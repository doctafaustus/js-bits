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

## Exercise 6
`window.load` overwrite (instead of `addEventListener`). Figure out why old scroll callback breaks.

## Exercise 7
A simple `e.preventDefault()` needed for `.emoji-filter`s.

## Exercise 8
Click on the video and see the `collect` event fire. Now try clicking an emoji tile where another event is supposed to fire and debug this.
Order of elements clicked doesn't matter - on success of first fetch an `eval` is used to do an `Object.defineProperty` to set `google_analytics.push` to an empty function.



### Future Exercise
Add in slick carousel with an auto-change and `afterChange` set a `.focus()` that changes position of burger menu with height at 100%.

Remember last scroll position Chrome 
`history.scrollRestoration = 'manual';`

`window.scroll` janky peformance (instead of `matchMedia`)
