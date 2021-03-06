Slippers
========

Inspired by _why's [Shoes](http://shoesrb.com/). How can we make programming simple and fun in today's web-dominated world?


Manifesto
=========

1. Programming can be a fun, creative tool for self expression
2. Self expression and creativity cannot be hindered by rules or dogma
3. There's always another way; there's no single right way
4. If a path is blocked, guidance must be provided to find another way
5. Start from the experience, not the tools


Design
======

1 language
----------

Starting with the web as a platform today is tedious. You need to learn HTML, CSS, and JS to get anything done, and all 3 are very different languages. Wouldn't it be ideal to learn only 1 of them?

JS is the answer! JS can allow any newcomer to build fun, creative little apps, without ever having to touch HTML or CSS. Now, of course, at some point, they'll have to. But they should be free to explore and tinker away, and let their imagination run wild.

Simple syntax
-------------

Any programming language follows a distinct syntax. And although JS' syntax is not "complicated", it cannot rival with [CoffeeScript](https://coffeescript.org/).

Compare the following:

```coffeescript
App(
  width: 200
  height: 300

  Button(
    text: "Start"
    backgroundColor: green
    bold: yes
    do: () ->
      timer.start()
  )

  Button(
    text: "Stop"
    backgroundColor: red
    bold: yes
    do: () ->
      timer.stop()
  )

  timer = Timer(
    inc: 1000
    do: (_, elapsed) ->
      text.text = elapsed
  )

  Paragraph(
    align: center
    
    text = LineOfText(
     text: "0:00"
     size: 20
     font: "Times"
    )
  )
)
```

with the equivalent in JS:

```js
var timer, text;

App(
  {
    width: 200,
    height: 300
  }, 
  Button({
    text: "Start",
    backgroundColor: green,
    bold: true,
    do: () => {
      timer.start()
    }
  }),
  Button({
    text: "Stop",
    backgroundColor: red,
    bold: true,
    do: () => {
      timer.stop()
    }
  }),
  timer = Timer({
    inc: 1000,
    do: (_, elapsed) => {
      text.text = elapsed
    }
  }),
  Paragraph(
    {
      align: center
    },
    text = LineOfText({
     text: "0:00",
     size: 20,
     font: "Times"
    })
  )
)
```

The risk of a syntax error seems much more likely in JS than CoffeeScript, if you have no previous experience in programming. Furthermore, the ability to use aliases like `yes` and `no` for boolean values is much more beginner friendly.

Intuitive layout
----------------

We can basically distinguish 2 types of objects in any layout:

- containers: contain other elements, useful for grouping
- elements: any visual (or not) element to layout on the page

Allowing these to be stacked and nested allows for an intuitive experience, simply by passing them as arguments to containers.

For positioning, we should make any object follow the HTML document flow, *unless* any positioning is given. In this case, the most intuitive course of action will be to position the object absolutely, relative to its parent container (which, by default, should be relatively positioned).

Simplified event management
---------------------------

...

Simplified styling (getters/setters)
------------------------------------

...

Handy constants
---------------

### Colors

Provide some helpful constants for color codes.

- `green`
- `red`
...

### Fonts

Provide some helpful constants for font families.

...

