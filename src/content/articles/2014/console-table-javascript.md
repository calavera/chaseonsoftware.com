---
title: "Debugging a collection of objects with console.table"
date: "2014-11-19"
tags: ["Javascript"]
slug: "2014/11/debugging-a-collection-of-objects-with-consoletable"
aliases: [
  "debugging-a-collection-of-objects-with-consoletable",
  "posts/debugging-a-collection-of-objects-with-consoletable"
]
description: "Learn to use console.table to debug collections of objects in Chrome."
---

Debugging is one of the most important skills a developer can have, and the most valuable tool I use on a day to day basis is the Google Chrome Javascript Console.

In this protip, I'll show you a trick for displaying all of the data in a collection of objects for quicker debugging.

If you want to follow along, do so in Google Chrome! (or Firefox)

I've created a javascript array called `roleModels` in the page that is a collection of objects.

Open your Javascript console (`cmd + option + j`), type `roleModels` and press enter. You should see something output like this:

<img src="http://www.realchaseadams.com/imgs/2014/11/simplerolemodels.png" class="framed" />

In most cases when there is an array of objects, every object will have a similar structure. In this case, every object has the follow keys:

- firstName (string)
- lastName (string)
- stateOfOrigin (string)
- roles (array)

Rather than have to open each object individually by clicking on the arrow next to it, to see what data is in each object, there's a convenience method on the `console` object called `table`.

Rather than just typing `roleModels`, type `console.table(roleModels)`.

Now you should get a table with the keys as the column headers, the first row as the index of that object in the array, and the rest of the data associated with that object.

<img src="http://www.realchaseadams.com/imgs/2014/11/consoletablerolemodels.png" class="framed" />

This is an awesome feature that gives you the ability to see data at a glance.

`console.table` takes two parameters: the array of objects to display, and an array of the keys you want to display. In this scenario, `roles` doesn't display much outside of the length of the array itself, so we might want to show all the data without the roles column.

To do so, you would use:

```
console.table(roleModels, ['firstName', 'lastName', 'stateOfOrigin'])
```

Now you should get the same table, without the roles column.

<img src="http://www.realchaseadams.com/imgs/2014/11/consoletablerolemodelskeys.png" class="framed" />


`console.table` also works for an object of objects (because an array is a type of object) and the index will be the key for the child objects. You can see an example of this by running `console.table(roleModelsObj)`.

<img src="http://www.realchaseadams.com/imgs/2014/11/consoletablerolemodelsobject.png" class="framed" />

Hopefully you find this to be a useful gem tucked away in the Chrome developer tools!

**This feature is only available in Chrome and Firefox.**

<script type="text/javascript">
  var rA = {
    firstName: "Reid",
    lastName: "Adams",
    stateOfOrigin: "Georgia",
    roles: ["Dad", "Husband", "Thinker", "Gardener", "Teacher"]
  };
  var jR = {
    firstName: "John",
    lastName: "Resig",
    stateOfOrigin: "The Internet",
    roles: ["jQuery Contributor", "Speaker", "Author", "Teacher"]
  };
  var tR = {
    firstName: "Teddy",
    lastName: "Roosevelt",
    stateOfOrigin: "New York",
    roles: ["President", "Stick Wielder"]
  };
  var bF = {
    firstName: "Benjamin",
    lastName: "Franklin",
    stateOfOrigin: "Massachusetts",
    roles: ["Inventor", "Fouding Father"]
  };
  var eM = {
    firstName: "Elon",
    lastName: "Musk",
    stateOfOrigin: "South Africa",
    roles: ["Inventor", "Investor", "CEO"]
  };

  var roleModels = [rA, jR, tR, bF, eM];

  var roleModelsObj = {
    "Dad": rA,
    "John Resig": jR,
    "Teddy Roosevelt": tR,
    "Benjamin Franklin": bF,
    "Elon Musk": eM
  };
</script>
