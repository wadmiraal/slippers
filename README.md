# Slippers [![Build](https://github.com/wadmiraal/slippers/actions/workflows/build.yml/badge.svg)](https://github.com/wadmiraal/slippers/actions/workflows/build.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=wadmiraal_slippers&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=wadmiraal_slippers)

Inspired by \_why's [Shoes](http://shoesrb.com/) and [ART && CODE talk](https://vimeo.com/5047563). How can we make programming simple and fun in today's web-dominated world?

See some examples [here](https://wadmiraal.github.io/slippers/index.html).

# Manifesto

1. Programming can be a fun, creative tool for self expression
2. Self expression and creativity cannot be hindered by rules or dogma
3. There's always another way; there's no single right way
4. If a path is blocked, guidance must be provided to find another way
5. Start from the experience, not the tools

# Design

## 1 language

Starting with the web as a platform today is tedious. You need to learn HTML, CSS, and JS to get anything done, and all 3 are very different languages. Wouldn't it be ideal to learn only 1 of them?

JS is the answer! JS can allow any newcomer to build fun, creative little apps, without ever having to touch HTML or CSS. Now, of course, at some point, they'll have to. But they should be free to explore and tinker away, and let their imagination run wild.

## Simple syntax

Any programming language follows a distinct syntax. And although JS' syntax is not "complicated", it cannot rival with [CoffeeScript](https://coffeescript.org/). The risk of a syntax error seems much more likely in JS than CoffeeScript, if you have no previous experience in programming. Furthermore, the ability to use aliases like `yes` and `no` for boolean values is much more beginner friendly.

## Intuitive layout

We can basically distinguish 2 types of objects in any layout:

- containers: contain other elements, useful for grouping
- elements: any visual (or not) element to layout on the page

Allowing these to be stacked and nested allows for an intuitive experience, simply by passing them as arguments to containers.

For positioning, we should make any object follow the HTML document flow, _unless_ any positioning is given. In this case, the most intuitive course of action will be to position the object absolutely, relative to its parent container (which, by default, should be relatively positioned).

## Simplified event management

...

## Handy constants

### Colors

Provide some helpful constants for color codes.

- `aqua`
- `black`
- `blue`
- `cyan`
- `fuchsia`
- `gray`
- `green`
- `lightGray`
- `lightGreen`
- `lime`
- `maroon`
- `navy`
- `olive`
- `purple`
- `red`
- `teal`
- `white`
- `yellow`

### Fonts

Provide some helpful constants for font families.

- `serif`
- `sansSerif`
- `cursive`
- `monospace`

### Alignments

Provide some helpful constants for alignment values.

- `left`
- `right`
- `center`
