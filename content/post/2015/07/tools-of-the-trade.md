---
title: Frontend Engineering Tools of The Trade
date: 2015-07-06T03:00:10Z
slug: 2015/07/tools-of-the-trade
postThumb: /img/frontend-engineering-tools-of-the-trade.jpg
descripton: "Every craftsman or tradesman has a collection of tools that help to make them better at executing their work. This is a list of my toolset."
---

As a Frontend Engineer, I feel tied to my work as my trade, as an artisan creating something both finely tuned in its functionality and beautiful in its aesthetics.

Every craftsman or tradesman has a collection of tools that help to make them better at executing their work. If you're beginning your journey as Frontend Engineer, these are the tools I believe you should add to your collection, both generally the types of tools you'll need and the specific tools I use.

Generally, every Frontend Engineer should know what each of these are and why they're important to use:

- Operating System
- Text Editor
- Browser[s]
- Command Line Interface
- Package Manager
- Programming Languages

## Operating System

Your operating system (referred to also as _environment_) is the most foundational tool you'll have. Everything you do stems from the operating system, navigating your file system, editing files, running servers and scripts, all of it happens in the operating system.

There are two types of operating systems you'll use as an engineer:

**Local Opreating System** This is your development environment. All of your development work happens here.

**Remote Operating System** This is any environment meant to be available to the outside world. At the very least it will be your "production environment" where your programs will be available to everyone. You could also have the following:

- **QA Environment** A place to check that your code works, but with mock data.
- **Staging Environment** A place to check that your code works with production data before it's live as production.

### Local Environment

Locally, I use [Mac OS X Yosemite (or the most recent stable OS X version)](https://www.apple.com/osx/), the obvious main reason being that I use a [MacBook Air](http://www.apple.com/macbook-air/).

Mac OS X at a low level emulates very closely the operating system I use in production, which is very advantageous, because the closer you can be between local and production, the less possible things that can go wrong.

This is becoming less and less of an issue with tooling, such as [Docker](https://www.docker.com/) giving developers the power to isolate their code to a container that will be _exactly_ like production, but I still think it's a good thing to keep your environments as close as possible in their low level systems.

### Remote Environment

When you start developing for the web, you'll need to push code to production environments. You'll also probably use `ssh` to access your production environment to make minor changes to your server. For example, I `ssh` into my production server to modify my `nginx` configurations for a/b tests and routing.

I use [Digital Ocean (referral)](https://www.digitalocean.com/?refcode=3b4e0dec66b7) to host my production server, and I use the Dokku droplet, which is an application that allows you to deploy your code using a push to `git` and a recipe of what to do once your code has been received to the `git remote`.

## Text Editor

Your text editor is where you'll spend all your time actually writing code.

I use [Sublime Text 3](http://www.sublimetext.com/3) in `vintage` mode (emulates `vim` keybindings). Sublime Text has a `package control` that allows you to install "plugins" that allow you to be more productive, and I absolutely recommend [installing `package control`](https://packagecontrol.io/installation).

My Favorite Packages:

- Advanced New Package
- BracketHighlighter
- EditorConfig
- Emmet
- Git Gutter
- Pretty JSON

Installing a package, once you've installed `package control`, type `cmd + shift + p` and type `install package`. Hit enter and type the package name you want to install and `Sublime Text` will install it for you. _Note:_ Sometimes you may need to restart `Sublime Text` for a package to work.

Getting started with `Sublime Text`? There's a great tutorial for [the perfect workflow in sublime text](http://code.tutsplus.com/articles/perfect-workflow-in-sublime-text-free-course--net-27293) on the tutsplus network.

If you're using a command line tool, you should setup the shortcut for opening [Sublime Text 3 from the Terminal](https://www.sublimetext.com/docs/2/osx_command_line.html).

## Browsers

Frontend Engineers spend a huge amount of time reconciling issues between browsers (mostly because of Internet Explorer), so it's good to have a suite of them installed.

If you're on a Mac, you should install [Google Chrome](http://www.google.com/chrome/)and [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/). Safari comes preinstalled. If you're working for a company that requires Internet Explorer support, I'd suggest using a virtual machine and try out [Miccrosoft's virtual machine's for the version you need](http://dev.modern.ie/tools/vms/).

I spend my actual development time in Chrome because I am very familiar with, and find a lot of power, in their DevTools. For documentation on getting started with DevTools, checkout the [chrome developer guides for DevTools](https://developer.chrome.com/devtools) and for a more indepth look into how to use them, [check out codeschool.com's free discover devtools course](http://discover-devtools.codeschool.com/).

## Command Line Interface

A Command Line Interface can be really daunting to use, and it could be confusing as to why you should use one in the first place.

When you start working with local development, you'll find yourself running servers, creating directories and files, using `git` in your workflow, running scripts, lots of things that will make you productive, but can only really be done in a `Terminal`.

I use [iTerm2](https://www.iterm2.com/), but lots of people use `Terminal.app` which is a core application to Mac OS X.

## Package Manager

Installing new languages and new utilities can be a real pain if you have to do it different ways. Package managers allow you use a common language/syntax and convention for installing all of these.

Thankfully for Mac, there's a utility called [Homebrew](http://brew.sh/) that will allow you to install programs with the same syntax and keep those programs and utilities in a common location.

I also use [npm.js](https://www.npmjs.com/) which is a package manager built with [NodeJS](https://nodejs.org/) for all of my projects.

## Programming Languages

Programming languages are the heart and soul of your work. Without a programming language, your not programming. There are a few that are core to being a Frontend Engineer and a few that I use to make my workflow easier.

### Web Languages

**HTML.** HTML (**H**yper **T**ext **M**arkup **L**anguage) is the language of the web. It's the structure and content of how webpages are created.

**CSS.** CSS (**C**ascading **S**tyle **S**heets) is the language of defining how HTML looks and feels. Everything from font-type, colors, layout, borders and (sometimes) animation is defined using CSS.

**Javascript.** Javascript is the language of defining the functionality of a webpage (and SO much more!). Whenever you interact with a form or see content update on the page "magically", Javascript is the language behind the curtain. Javascript has also made its way into the server, so it can be used to write scripts to be run directly on your computer, run servers and even run databases.

If you're interested in learning the languages of the web, Mozilla Developer Network has great documentation for [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript).

You can also start learning for free on sites such as [codecademy](http://codecademy.com/), or pay for subscriptions to places such as [codeschool](http://codeschool.com) or [treehouse](http://teamtreehouse.com/).

**Git.** [Git](https://git-scm.com/) is more of a system than a language, but it's one of the most important tools a developer working in a collaborative environment will use. Not to be confused with [github](http://github.com) (which is just _one of many_ places to store your git projects), `git` is a version control system that allows you to keep a history of all the changes you've made on a project over time and merge multiple user's code into a single "source of truth". When paired with a powerful system, such as Dokku, you can leverage a remote server as a way to both keep your version controlled projects and deploy those projects with a single `git push`.

### Other Languages

**GoLang.** I started tinkering with Go because it's fast. It's strongly typed, compiled and has lots of support for creating web servers and for cross-platform functionality. I've built a few small utilities for personal use, but I also really like [Hugo](http://gohugo.io/)(a static site generator) and the [MongoDB Driver for Go](https://labix.org/mgo).

**Markdown.** Markdown is a wonderful way to write in an easy to learn, easy to read, common plain text syntax that is converted into HTML in places like [github.com](http://www.github.com) and by static site generators (and some blog platforms). Most documentation (this blog post included!) is written in Markdown, which makes it a really useful language to learn and use. [Github has great documentation on learning the basics](https://help.github.com/articles/markdown-basics/).

**Bash.** Bash is the language of the terminal. A lot of utilities are written in bash, but I generally only use it for my [dotfiles](https://github.com/chaseadamsio/dotfiles), which includes aliases and mini-functions for executing certain things in the terminal.

## The Tools Of The Trade

As a Frontend Engineer, it's important to know why to use certain tools and which tools work best for you. There's no clear cut dogma saying "these are the tools everyone should use", but I believe the ones I've shared are the best tools for me to be most productive.

_Are you a Frontend Engineer? What tools do you find valuable (and why)?_
