---
title: Getting Started With The Terminal (Command Line Interface)
date: 2015-07-06T03:00:10Z
slug: 2015/07/why-use-a-command-line-interface
draft: true
---

If you're new to Computer Programming, or you've been building basic webpages for a long time, you may be in a position where you've been asked to use an application called `Terminal.app` (for Mac).

The Terminal can seem daunting and foreign at first, especially if you come from a background where you mostly use Finder or Windows to navigate the file system of your computer. When first starting out with programming, you'll probably beat your head against the table and curse the designers of this arcane system saying, "WHY can't you leave me to navigating and modifying files with sanity?!"

You really only need one good reason why you should use the Terminal: **Power.**

Even though, as your just starting, you will only be using it for navigating your file system, creating files and directories, opening editors and at most, probably using it for your `git` workflow, when you start to learn how to build servers, write scripts and need to run commands that are unique to your situation, you'll find a `command line interface` to be your best friend.

## Deliverables

After completing this tutorial, you will have made one new directory:

- A `workspace` directory, which is where you will always create your new web projects

## Learning Objectives

You'll should learn the following:

- How to open the Terminal
- What the `~` means
- How to find the path you're currently in
- How to list files in that directory

## Getting Started

If you are _brand_ new a `command line interface`, the first thing you need to do is to open `Terminal.app`. You can do this by opening `Finder` and navigating to `Applications` then to `Utilities` and you'll see `Terminal`. An alternative would be to use Apple's Spotlight and type `Terminal`.

Once that's open, your new window should have the following schema:

    <computerName>:<currentDirectory> <username>$

For example, mine has:

    phosphor:~ chaseadams$

When you see a `~`, that is shorthand for your user's home directory. To view the entire path, type `pwd` in the command line (where it's blinking). Typing it for me, will look like:

    phosphor:~ chaseadams$ pwd

Press enter, and you'll see output similar to mine, but with your username in place of mine:

    phosphor:~ chaseadams$ pwd
    /Users/chaseadams
    phosphor:~ chaseadams$

You'll notice that the terminal has done two things:

- output the entire path for your current working directory  (or present, which is what pwd stands for)
- opened a new interface for you to run another command

Something important to note here is that sometimes when you run a command, there may be no output, but a new command line interface is indicative that **your command ran successfully**. If it outputs an error and then a new CLI, you should read the error carefully and follow instructions to correct what caused the error.

Now that we know how to find where we are (running `pwd` in your terminal will help you know where you are at any given time), we should look to see the contents of the current directory. This is done by using `ls`:

    phosphor:~ chaseadams$ ls

Pressing enter will give _me_ an output of:

    phosphor:~ chaseadams$ ls
    Applications    Documents   Dropbox     Library     Music       workspace
    Desktop     Downloads   Google Drive    Movies      Pictures    VirtualBox VMs  bin     tmp
    phosphor:~ chaseadams$

If you open a Finder window at your home directory (Don't see your home directory in your Finder's sidebar? Set it up so that you [always show your home directory for easy access](2014/01/show-your-macs-hard-drive-in-finder-sidebar-and-on-your-desktop)), you'll see that everything listed in that window matches the contents of your output from running `ls`.

Want to learn more about [Unix Programming and the Command Line, check out the Art of Unix Programming](http://www.faqs.org/docs/artu/).
