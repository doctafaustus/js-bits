# Bug Finder Exercises

### TODO
  - Banner message about using Chrome only.
  - Ask user to rate each bug in difficult after solving.

## Exercise 1 `10/10`
HttpOnly cookies.

## Exercise 2 `6/10`
Filter event handler lost.

## Exercise 3 `8/10`
`setTimeout` variable binding.
Use `let` instead of `var` to keep the variables block scoped.
Instruct to keep `setTimeout`s under the guise of wanting to show some of the animation.

## Exercise 4 `9/10`
`analytics.js` is a slow-running script. It's execution is delaying video playback.
What's causing the video to start so slowly?

## Exercise 5 `9/10`
Red herring of a `setTimeout` declaring a window level variable that's already created by and element `id`.
Why does the warning message appear?

## Exercise 6 `5/10`
`window.onscroll` overwrite (instead of `addEventListener`). Figure out why old scroll callback breaks.

## Exercise 7 `3/10`
A simple `e.preventDefault()` needed for `.emoji-filter`s.

## Exercise 8 `9/10`
Click on the video and see the `collect` event fire. Now try clicking an emoji tile where another event is supposed to fire and debug this.
Order of elements clicked doesn't matter - on success of first fetch an `eval` is used to do an `Object.defineProperty` to set `google_analytics.push` to an empty function.

## Exercise 9 `2/10`
CSS non-standard `zoom` property used which isn't supported on FF. "User report of strange layout."

## Exercise 10 `1/10`
There's a grid of images within a fixed-width container. On hover the images will show a border that extends the content width past the container width and causes jankyness. Use a transparent border to solve.

## Exercise 11 `7/10`
Add in slick carousel with an auto-change and `afterChange` set a `.scrollIntoView()` that changes position of document.

## Exercise 12 `8/10`
Try to reset carousel on button click, notice it doesn't get reset. This is because there are 2 versions of jQuery on the site. Use a log to show the 2 different version numbers before and after document.ready.

## Exercise 13 `4/10`
Trying to add a `<script>` element by using `insertAdjacentHTML`. Look for global `Stripe` object - notice it's not there. Note that in order to not cause a reference error, the script had to be inserted without a closing tag.


### Future Exercises

Remember last scroll position Chrome 
`history.scrollRestoration = 'manual';`
`window.scroll` janky peformance (instead of `matchMedia`)
