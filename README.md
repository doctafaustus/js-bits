# Bug Finder Exercises

### TODO
  - Banner message about using Chrome only.
  - Ask user to rate each bug in difficult after solving.

## Exercise 1 (free lesson)
`e.preventDefault()` when button is inside form

## Exercise 2 (free lesson)
Gem card zoom-in event handlers lost once a filter is applied.

## Exercise 3 (free lesson)
`window.onscroll` overwrite (instead of `addEventListener`). Figure out why old scroll callback breaks.

## Exercise 4
There's a grid of images within a fixed-width container. On hover the images will show a border that extends the content width past the container width and causes jankyness. Use a transparent border to solve.

## Exercise 5
HttpOnly cookies.

## Exercise 6 
`setTimeout` variable binding.
Use `let` instead of `var` to keep the variables block scoped.
Instruct to keep `setTimeout`s under the guise of wanting to show some of the animation.

## Exercise 7
Add in slick carousel with an auto-change and `afterChange` set a `.scrollIntoView()` that changes position of document.

## Exercise 8 
CSS non-standard `zoom` property used which isn't supported on FF. "User report of strange layout."

## Exercise 9
There's a grid of images within a fixed-width container. On hover the images will show a border that extends the content width past the container width and causes jankyness. Use a transparent border to solve.

## Exercise 10
`analytics.js` is a slow-running script. It's execution is delaying video playback.
What's causing the video to start so slowly? Use memory profiler to identify.

## Exercise 11
Click on the video and see the `collect` event fire. Now try clicking an emoji tile where another event is supposed to fire and debug this.
Order of elements clicked doesn't matter - on success of first fetch an `eval` is used to do an `Object.defineProperty` to set `google_analytics.push` to an empty function.

## Exercise 12
Red herring of a `setTimeout` declaring a window level variable that's already created by and element `id`.
Why does the warning message appear?

## Exercise 13
Trying to add a `<script>` element by using `insertAdjacentHTML`. Look for global `Stripe` object - notice it's not there. Note that in order to not cause a reference error, the script had to be inserted without a closing tag.


### Future Exercises
  - Remember last scroll position Chrome: `history.scrollRestoration = 'manual';`
  - `window.scroll` janky peformance (instead of `matchMedia`)
  - Show random name and email of person who just made a purchase in a banner.(but TBD)

