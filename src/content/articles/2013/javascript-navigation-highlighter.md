---
date: "2013-10-24"
title: "Highlight Navigation Element Using Javascript"
slug: "/2013/10/javascript-navigation-highlighter"
aliases: [
    "posts/highlight-navigation-element-using-javascript"
]
category: "archive"
---

On Stack Overflow I found a question: How can I make my CSS menu's hover states move horizontally for UX purposes?

Unfortunately, this solution can't be purely CSS.

It helps to approach this problem by thinking about the flow of the interaction:

- A user hovers over an element in a navigation bar.
  - If this is the first hover into the navigation bar, move a highlighter to the current navigation element's position and width.
  - If there was another element that has been hovered already, move the highlighter to the element's position and width.
- The user moves out of the navigation bar.
  - Move the highlighter out of sight.

### The Rub

With a pure CSS solution, one element's interaction can effect another unnested element's actions.

So what I proposed was to use CSS for the transition, and javascript to get the current position and width of the anchor that's hovered, then update the highlighter's style values to the new anchor's values:

Here's a JSFiddle of what the asker was trying to achieve: [http://jsfiddle.net/realchaseadams/Dm9Eu/4/](http://jsfiddle.net/realchaseadams/Dm9Eu/4/)

And the gist ([https://gist.github.com/chaseadamsio/7281682](https://gist.github.com/chaseadamsio/7281682)) for the code:

<script src="https://gist.github.com/chaseadamsio/7281682.js"></script>

### Ideal Scenario

You'd inject the highlighter on the page with javascript, then have a fallback if CSS3 transitions aren't supported (most easily done using jQuery). On my personal projects, I'm not really concerned if visitors get cool flashy animations, so I would be happy for the bar to just move to the position without being a smooth transition.

__How would you have solved this problem? Create a JSFiddle or a gist and share it, I'd love to see how other people solve this problem!__

Original Question: _How can I make my CSS menu's hover states move horizontally for UX purposes?_ ([StackOverflow Question](http://stackoverflow.com/questions/19722423/how-can-i-make-my-css-menus-hover-states-move-horizontally-for-ux-purposes/19726903#19726903))
