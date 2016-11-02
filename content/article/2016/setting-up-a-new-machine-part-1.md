---
title: "Setting Up a New Development Machine: Part 1"
description: The first step to setting up a new development machine from scratch
date: 2016-11-01T06:29:25Z
slug: setting-up-development-machine-part-1
draft: true
---

Being the digital sadist that I am, I just wiped my Chromebook's Operating System (OpenSUSE Leap 42.1) to replace it with OpenSUSE Tumbleweed, OpenSUSE's rolling release of all latest stable software.

We're going to skip that part and potentially revisit how to do this from scratch in a different post and for now focus on setting up a brand new development machine with the following:

- Create a `bootstrap.sh` that...
  - generates all of the necessary directories for a `go` development workflow
  - sets the `GOPATH`
  - installs the correct version of git for the machine's architecture
  - installs the correct version of go for the machine's architecture
  - pulls down all of the packages that we need _especially_ our `dotfiles`
  - runs the symlink script for the `dotfiles` directory
- Walk through how to use that `bootstrap.sh` so that, with _no_ pre-existing dependencies a development environment can be completely configured through automation.

Ready to get started? Okay, here we go!!!

## Create a `bootstrap.sh` 

First, we're going to create a file called `bootstrap.sh` in our `$HOME` directory by running:
```
touch bootstrap.sh && chmod +x bootstrap.sh
```
This will create the file if it doesn't exist (`touch`) and make it so we can run it as an executable (`chmod +x`) by running `./bootstrap.sh`

The first thing on our sub-list is to "generates all of the necessary directories for a `go` development workflow". You can find really great documentation on what a `go` environment should look like, but the main points are as follows:

- You should have three directories in a common place (we're going to use our `$HOME` directory:
  - `src` for all of your source code (including your `dotfiles`)
  - `bin` for the binaries that are built from that source code
  - `pkg` for the package objects
- You should have a `$GOPATH` set (and since we're generating these directories in `$HOME`, you've probably guessed: `$GOPATH` is `$HOME`!)

In our `bootstrap.sh`, we're going to add the following:

```
#!/bin/bash

mkdir -p $HOME/src/github.com/chaseadamsio/dotfiles
mkdir -p $HOME/bin $HOME/pkg

export GOPATH=$HOME
```

In the first line, we're generating `dotfiles` and its parents (`-p`) if they don't already exist (`chaseadamsio`, `github.com`, `src`) if they don't exist.

In the second line, we're creating `bin` an `pkg` in the `$HOME` directory. the `-p` flag will make it so that if these directories already exist, we don't get an error.

In the fourth line, we're exporting a variable named `GOPATH` as the path of `$HOME`.

Now if we run this script by running `./bootstrap.sh` in the terminal, you should see that there are 3 new directories in your `$HOME` folder and the directories for `src/github.com/chaseadamsio/dotfiles`. 

Let's move our `bootstrap.sh` into the dotfiles directory with `mv bootstrap.sh src/github.com/chaseadamsio/dotfiles`.
 


