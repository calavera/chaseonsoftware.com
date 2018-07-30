---
title: "How to Inspect a Collection of Objects in Javascript with console.table"
original_date: "2014-11-19"
date: "2018-07-30"
tags: ["JavaScript"]
slug: "/inspect-array-of-objects-with-console-table"
aliases: [
  "/debugging-a-collection-of-objects-with-consoletable",
  "/2014/11/debugging-a-collection-of-objects-with-consoletable",
  "/posts/debugging-a-collection-of-objects-with-consoletable"
]
description: "Learn how to inspect an array or object of objects with console.table in the browser."
---

When building software in JavaScript, I often need to inspect an array of objects or object of objects. 

One of my favorite methods for achieving this is to use `console.table()`. Rather than having to toggle open nested objects that are of the same "type" (in this example we'll use some weird fishes), `console.table()` presents the data in a clean, tabular format. It's available in [NodeJS as of version 10.0.0](https://nodejs.org/api/console.html#console_console_table_tabulardata_properties) and in [almost every major browser](https://developer.mozilla.org/en-US/docs/Web/API/Console/table#Browser_compatibility).

In this tutorial, we'll learn how to use `console.table()` by creating an array of objects and calling `console.table` to inspect the data using NodeJS and Google Chrome.

# `console.table()` signature

`console.table(tabularData[, properties])` is a method that takes two parameters:

- `tabularData`: a collection of data with any type
- `properties`: an array of strings of the fields you want to use to display the table

# Setup code

First, let's create a file for this example code called `weirdfishes.js` and create an array of weird fishes called `weirdFishes`:

```javascript
let weirdFishes = [{
  "common_name": "common fangtooth",
  "scientific_name": "Anoplogaster cornuta",
  "family": "Anoplogastridae",
  "wikipedia_link": "https://en.wikipedia.org/wiki/Fangtooth"
}, {
  "common_name": "vampire squid",
  "scientific_name": "Vampyroteuthis infernalis",
  "family": "Vampyroteuthidae",
  "wikipedia_link": "https://en.wikipedia.org/wiki/Vampire_squid"
}, {
  "common_name": "blobfish",
  "scientific_name": "Psychrolutes marcidus",
  "family": "Anoplogastridae",
  "wikipedia_link": "https://en.wikipedia.org/wiki/Blobfish"
}, {
  "common_name": "dumbo octopus",
  "scientific_name": "Grimpoteuthis abyssicola",
  "family": "Opisthoteuthidae",
  "wikipedia_link": "https://en.wikipedia.org/wiki/Grimpoteuthis_abyssicola"
}];

```

# Simple call to console.table()
 
We're going add a call to `console.table()` with `weirdFishes` passed in as the first argument:

```javascript
console.table(weirdFishes);
```

If we call `console.table` with only the first argument, it will display all of the data inside of each object.

# Inspect array of objects in NodeJS

Open your favorite terminal emulator application (I used VS Code's Integrated Terminal for the screenshots) and run `node weirdfishes.js` within the parent directory of `weirdfishes.js`. **Note that this requires nodejs >= v10.0.0)**

When we run the command, the console will display a table like this:

<img src="/img/nodejs-console-table.png" class="center" title="Output of running console.table on an array of objects in NodeJS" />

# Inspect array of objects in the Browser (Chrome Example)

The easiest way to see this in action in Chrome is to add the object via the JavaScript console. To open the Javascript console, type `cmd + option + j` and a new pane should pop up at the bottom of the browser window.

Copy the JavaScript snippet from above and paste it into the JavaScript console, press enter and you'll see a table that looks similar to the screenshot below:

<img src="/img/chrome-console-table.png" class="center" title="Output of running console.table on an array of objects in Chrome" />

# Constructing the table based on keys

Let's revisit the second parameter mentioned earlier: `properties`—an array of strings representing the values you want to display. Continuing in the browser example in the JavaScript console, call `console.table` with a second argument of `["common_names"]`:

```
console.table(weirdFishes, ["common_name"]);
```

Calling `console.table` with the second argumend constructs the new table with only the index and the values of the keys in the array:

<img src="/img/console-table-only-one-key.png" class="center" title="Output of running console.table on an array of objects in Chrome with only the common name key" />


# Using console.table on an object of objects

`console.table` also works for an object of objects (because an array is a type of object) and the index will be the key for the child objects. You can see an example of this by running `console.table(roleModelsObj)`.

```javascript
let weirdFishes2 = {
    "common fangtooth": {
        "scientific_name": "Anoplogaster cornuta",
        "family": "Anoplogastridae",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Fangtooth"
    },
    "vampire squid": {
        "scientific_name": "Vampyroteuthis infernalis",
        "family": "Vampyroteuthidae",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Vampire_squid"
    },
    "blobfish": {
        "scientific_name": "Psychrolutes marcidus",
        "family": "Anoplogastridae",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Blobfish"
    },
    "dumbo octopus": {
        "scientific_name": "Grimpoteuthis abyssicola",
        "family": "Opisthoteuthidae",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Grimpoteuthis_abyssicola"
    }
};
console.table(weirdFishes);
```

<img src="/img/console_table_inspect_object_of_objects.png" class="center" title="Output of running console.table on an object of objects in Chrome" />

Now you've got a great alternative to `console.log` for displaying objects in JavaScript in tabular form instead of nested data—an alternative that will save you time in inspection and debugging!