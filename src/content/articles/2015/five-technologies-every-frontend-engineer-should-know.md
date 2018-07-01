---
title: "Five Technologies Every Frontend Engineer Should Know"
date: "2015-08-07"
slug: "2015/08/five-technologies-every-frontend-engineer-should-know"
description: "Frontend Engineers should have five technologies under their belt"
---

When I started learning how to code in 2008, the landscape for a frontend developer was very different than it is today. In 2008, it was good to know HTML & CSS (that hasn't changed) and with a little bit of jQuery knowledge and the ability to use the WordPress API and an FTP uploader, you could get by building basic brochures sites for clients, but you couldn't _bend the web to your will_.

In the last 3-4 years, Frontend Engineering has changed from being more about simply the aesthetics and content and become a role that requires thinking about optimization, data structures and state. If your eyes just glazed over, that's okay, just read on.

I'm going to explain at a very high level the five technologies that are crucial to my day-to-day as a Frontend Engineer with the hopes that it:

- Gives you starting points for what technologies to learn if you want to pursue becoming a Frontend Engineer.
- helps **Junior Frontend Engineers** have a roadmap for what they should already know and what they need to learn.

The Five technologies (mostly languages, if you want to learn about [frontend engineering tools, check out this post](/2015/07/tools-of-the-trade)) every Frontend Engineer should know are:

- [HTML](#toc_0)
- [CSS](#toc_1)
- [Javascript](#toc_2)
- [Git (version control)](#toc_5)
- [Markdown](#toc_6)

The _really good news_ is that nothing has replaced `html`, `css` or `javascript` as browser languages since the [first browser wars](https://en.wikipedia.org/wiki/Browser_wars#First_browser_war) so being able to use them will be useful as long as web browsers continue to exist.

## HTML

`html` (HyperText Markup Language) is the language that defines the content of the web. A web browser will read an `html` file and render the content into the browser. If a webpage were a living being, `html` would essentially be the bones. It gives the webpage structure.

An example of `html` would look something like this:

<script src="https://gist.github.com/chaseadamsio/81ef671fb9ef45cddbb2.js?file=example.html"></script>

And the rendered HTML would look like this:

Hello world! This is <a href="#">a link</a>.</p>

No matter what you're building for the web, if it's in the browser you'll be using HTML, either directly or through a component library or templating language.

## CSS

`css` (Cascading Style Sheets) is language that gives a website its look and feel. Where `html` was the bones, `css` is the skin. Without `css` a website would simply be text and images: a rendered bland blob of content.

An example of `css` would be:

<script src="https://gist.github.com/chaseadamsio/81ef671fb9ef45cddbb2.js?file=example.css"></script>

So for `html` like this:

<script src="https://gist.github.com/chaseadamsio/81ef671fb9ef45cddbb2.js?file=example.html"></script>

The result would be that every paragraph tag would have a background of "electric blue" (using a hexidecimal color value), the font color would be white and the paragraph will have padding of 1em (which is basically the size of the font inside the paragraph):

<p style="padding: 1em; background-color: #4DBCE9; color: #fff; font-family: tahoma, arial, sans-serif;">Hello world!</p>

CSS is really important for giving visual cues, adding general aesthetics and giving a website the unique qualities it needs to stand out.

## Javascript (vanilla)

**Javascript is my favorite language: It's the language of the functionality of the web.**

Whenever you submit a Facebook post, reshare a tweet on twitter, send an email in gmail, click a swatch color on Zappos.com that changes the images and buy box selection to match that color, **that's Javascript**.

Javascript has become a huge part of being a Frontend Engineer because it drives so much of what we actually do on the web that's interactive.

In the past, most websites would have full page reloads when you clicked a link, today a lot of websites are transitioning to Single Page Apps, which means every interaction on a website in the browser is fully powered by Javascript.

Within Javascript there are two subsets that I think are really important: `json` and `node`. These are _really_ useful and my guess is that if you do become a Frontend Engineer you're going to have a hard time getting away with _not_ using them.

### JSON

`json` is a subset of javascript, easily readable by humans, for defining objects with key value pairs. It's generally used for communication between a server and a web application.

Most APIs provided by companies (such as Twitter, Trello and GitHub) are in `json` format and many companies are using `json` APIs to serve their data to the Frontend, which means Frontend Engineers will be spending a lot of time using `json`. @WalmartLabs, for example, is building the entire eCommerce platform on a RESTful `json` API.

The really cool thing about `json` is that even though the language was created from how Javascript objects work, any other language can consume it, which makes it both easy to read and easy to use for _any developer_.

### NodeJS

Once you've learned the basics of Javascript in the browser, transitioning those skills (the core syntax and concepts) to the server has a huge amount of value. You can do that with NodeJS, a run-time environment for server-side and networking applications.

NodeJS is being used heavily in a lot of organizations (Netflix, Walmart, General Electric and [an ever growing list of others](https://github.com/joyent/node/wiki/projects,-applications,-and-companies-using-node)) for both serving content and internal tooling, which makes it a really valuable "language" to know. There are some conceptual differences in NodeJS from Javascript in the browser but learning `javascript` for both the browser and the server will make you a huge asset wherever you're working.

## Git (Version Control)

`git` isn't a language, it is a version control system, a technology that every developer should be using. `git` allows developers to keep a history of how their files changed, easily merge other developer's change, revert a project to a specific state in the history and define stable versions of a project.

Note: a lot of new developers use the term `git` interchangeably with github.com. Github.com is _one place_ where a developer can keep their projects that are version controlled with `git`, but it isn't explicitly related to `git`.

## Markdown

Markdown is the easiest technology to learn in this list, but it's one of the most prolific technologies on the internet. Markdown is a really simple syntax that allows anyone to write text that can be easily converted into `html`.

Markdown is the language of documentation, so if you're working on a project that will be used by someone else, most likely you'll be (should be) writing documentation and doing it in Markdown.

Every post I write is also written in Markdown, as an example My post on [Frontend Tools of the Trade](https://github.com/chaseadamsio/chaseadams.io.hugo/blob/master/content/post/2015/07/tools-of-the-trade.md) is converted into `html`, but [this is the raw markdown](https://raw.githubusercontent.com/chaseadamsio/chaseadams.io.hugo/master/content/post/2015/07/tools-of-the-trade.md) used to generate it.

An example of markdown would be:

<script src="https://gist.github.com/chaseadamsio/81ef671fb9ef45cddbb2.js?file=example.md.raw"></script>

Which would render to the following `html`:

<script src="https://gist.github.com/chaseadamsio/81ef671fb9ef45cddbb2.js?file=example.md.html"></script>

The basics are outlined on the [Daring Fireball Markdown Basics](http://daringfireball.net/projects/markdown/basics) page.

## Wrap Up

These five languages are core to what I do on a daily basis and knowing these languages will make you both a powerful Frontend Engineer and a huge asset to any organization building for the web.

_Are you interested in learning the skills required to be a frontend engineer? Let me nkow in the comments below!_


