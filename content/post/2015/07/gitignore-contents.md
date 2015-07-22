---
title: Things Every Node Developer Should Add to Their .gitignore
date: 2015-07-22T03:00:10Z
slug: 2015/07/my-gitignore-conventions
---

A .gitignore file is an important part of any project that is being version controlled.

This post is intended to give you a general idea of the things that I add to my .gitignore. Want to just see [my standard node + mac .gitignore to copy](https://gist.github.com/chaseadamsio/88d5deae496317fb4546)? Check it out along with all my other [github gists for chaseadamsio](https://gist.github.com/chaseadamsio).

## .DS_Store

If you've ever worked on a project with someone who uses their finder to navigate their filesystem, odds are you've seen this ugly file rear it's head.

`.DS_Store` is a _hidden_ file that gets generated whenever someone opens a directory in the finder. It holds metadata about the folder, such as "where the icons should be positioned in the finder" when in the directory. This is useless to anyone other than you, so it's a good file to add to your `.gitignore`.

As a developer, if you navigate your filesystem with Finder, `.DS_Store` files will be generated and modified frequently, so ignoring these is incredibly important (I'd also suggest learning to use the Terminal...it's significantly more powerful and robust for developers).

## node_modules

If you use any language that keeps a project's dependencies inside of the project itself (such as `node_modules` for NodeJS), it's best to add the dependency directory to your .gitignore. You don't want to version control someone else's code in your code. If you're worried about keeping the same versions, you can always use [`npm shrinkwrap`](https://docs.npmjs.com/cli/shrinkwrap).

## Third-party Code

If you happen to use something like bower for things like font-awesome or jQuery or if you just copy/paste third party code into your project, it's best to not version control this stuff either. I've seen bootstrap in version control in a few projects and if you're building your production application with a sensible build tool (and using some kind of dependency manager), you shouldn't ever need to keep any of these external dependencies in version control.

 I've been successfully (and happily) using node modules for all of my server and client-side dependencies, so ignoring the `node_modules` directory takes care of this for me as well.

## logs

Your logs are really only useful for _you_ and only useful for _a specific environment_ at _a specific time_, which basically means keeping them in version control is going to cause all kinds of weird merging issues and extra cruft in your project that's not useful.

## Build Directory

If I'm building frontend code using something like Webpack or Gulp, I'll always add `dist` which where I build my static assets, (some people use the `public` directory) to my .gitignore. My rule of thumb is "Is this directory a source of truth or a representation of a source of truth somewhere else in my project?"

For example, if I use sass, it doesn't make sense to version control the css files that are the result of precompiling from the sass files.

## Secret Files

You may have a file with API keys in it (for instance, AWS used to recommend keeping these files in your project and not in your home directory), you should **NEVER** version control anything that has keys or passwords because you're giving the entire world the ability to see those keys...you don't want pictures of sad kittens on your production eCommerce website, so keep these out of your project by adding them to your .gitignore.

Those are the specific files and general types of files I add to my .gitignore file. Ultimately, I think some good general rules of thumb for what to add to a .gitignore are:

- Is this a file (or directory) built from another file that I work on?
- Is this a file that's only relevant specifically to me?
- Is this a file that's possibly going to give away credentials?
- Is this file a result of a command I've run?

I'd say those 4 questions cover 99% of the use cases you'd ever need to consider.

_What things do you add to your .gitignore file that I've missed here?_
