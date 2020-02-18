# 3.2.2 - SASS

<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/320px-Sass_Logo_Color.svg.png' />

_or Syntactically Awesome StyleSheet._

---

We are moving on to `sass` and away from plain old `css`. 😱

But why? What does this mean? OMG! I can't!

_Why now?_

---

## SASS Fact #1

SASS is CSS on steroids.

- You can continue to write plain old CSS inside of your `.scss` / `.sass` files.

---

## SASS Fact #2

There are two file types in which you can write SASS.

- `.sass` the original syntax.
    - more concise
    - easier to read
    - doesn't care about missing semi-colons

- `.scss` stands for _Sassy CSS_
    - more expressive
    - encourages proper syntax / nesting
    - encourages modular code
    - easier to document (comment)
    - works with existing CSS codebases
    - replace CSS?

---

## SASS Fact #3

Supercharged Syntax!

- Variables
- Mixins
- Nesting
- Functions

---

## SASS Fact #4

It needs to be compiled. Browsers don't speak SASS.

If you look at the `package.json`, you will notice that there is a dependency called `node-sass`.

---