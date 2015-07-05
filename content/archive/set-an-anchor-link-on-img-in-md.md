---
date: 2013-12-27T02:15:28Z
title: "Set An Anchor Link On An Image In Markdown"
slug: 2013/12/set-an-anchor-link-on-an-image-in-markdown
blogroll: false
---

Markdown. I use it daily in writing blog posts, README's or answering questions on [stackoverflow.com](http://www.stackoverflow.com). One undocumented capability of markdown is how to create an image inside an anchor.

This week, I was drafting a post where I wanted to use book covers and have them link to their Amazon product page. I haven't done it before, but I figured, "Hey, this should be simple, I'll check the docs!" 30 minutes after <em>scouring</em> the docs, I realized it wasn't there. So I decided to experiment.

I knew how to create anchors using both inline and reference styles:

<script src="https://gist.github.com/realchaseadams/8147693.js?file=linking-syntax.html"></script> As well as how to create Images using both inline and reference styles:

<script src="https://gist.github.com/realchaseadams/8147693.js?file=image-syntax.html"></script> So I decided to wrap a referenced image within an referenced anchor, making the image the link content:

<script src="https://gist.github.com/realchaseadams/8147693.js?file=anchor-image-code.html"></script> and voila, here's the output:

[<img src="http://bower.io/img/bower-logo.png" alt="Bower.io: A Frontend Package Manager. logo" width="200" />](http://www.bower.io)

If you hover over the Bower bird, you'll see that it is, indeed, a link.

If this post helped you learn to set an anchor link on an image using Markdown, please share it on [twitter](https://twitter.com/share?url=http://www.realchaseadams.com/2013/12/29/til-anchor-link-for-images-in-markdown/" class="trigger-share twitter)!
