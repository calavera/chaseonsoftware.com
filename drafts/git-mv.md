---
title: "Why Git May Be Ignoring You When You Downcase Filenames"
description: "Learn why and how to use git mv instead of mv on MacOS when changes case on filenames."
date: "2018-11-11"
working_titles: [
    "Macs, git and the curious case of insensitivity"
]
---

One of my _favorite things_ is to find an example of code that "Works on my machine" but fails in CI.

In this example, I was working on a project that's using React and importing a component from a file called `components/Form.js`. I needed to import the new component into `Post.js`. For my import, I added the following line to my imports:

```js
import Form from "./components/form";
```

Once I had an import, I used the component, checked it locally with `localhost` and verified everything looked good.

When everything was ready, I opened a PR, went to get some coffee, came back to merge amd saw a little. red. x.

Those little red X's can be surprising, especially when you didn't change much and the code you did change worked locally. I checked my Netlify build logs and found this:

```
7:13:46 AM: error Generating JavaScript bundles failed
7:13:46 AM:
7:13:46 AM:   Error: ./src/templates/post.js
7:13:46 AM:   Module not found: Error: Can't resolve '../components/Layout' in '/opt/build/r  epo/src/templates'
7:13:46 AM:   resolve '../components/Layout' in '/opt/build/repo/src/templates'
7:13:46 AM:     using description file: /opt/build/repo/package.json (relative path: ./src/t  emplates)
``
`
If you're not used to seeing this (I've seen this before a few times when I was working on CI at WalmartLabs, enough so that it inspired me to write about the various types of case in programming), it's easy for your very first shought to be 'That file is definitely there...something must be wrong with the build process or build server."

While working on some react components, I decided to downcase all the filenames.

When I did a `git status` I saw that everything was up to date even though I had clearly renamed the files.

This is a problem with HFS+ (the filesystem that most MacOS machines are formatted to by default).

The easiest way to always do this right in the future is to use `git mv <oldFilename> <newfilename>`.


# Takeaways

- Always assume the CI machine is right and something is wrong with your code (don't say "weird, it works on my machine")
- Opt for all lowercase file names, especially in places where there's no convention.
- Running your app in a container that emulates the environment where the build process happens.
- Run your code locally in a Docker container that matches your build environment.
- Always run CI before merging code into a project (through a Pull Request hook in your favorite git repository).
- For JS, you can't rely on automatically updating import statements.
```
