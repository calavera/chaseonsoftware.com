---
title: An Intro to Homebrew for MacOS with Advanced Tips
description: An extensive guide on how to use Homebrew to install and manage the tools, packages and dependencies you keep on your Mac.
date: "2018-11-11"
---

If you've been using a Mac for a long time, you've probably installed a lot of apps, utilities and executables over time. If you've ever gotten a new computer, you _know_ how much of a pain re-installing all those tools can be and if you have a personal Mac and a work Mac, how hard it can be to keep your tools in sync.

In this tutorial, you'll learn why you should use a package manager, the basics of how to get started with the Homebrew package manager to find and install the apps, utilities and executables you need for your Mac. After we've gone over the basics, we'll explore how to use a `Brewfile` to manage your applications for the future and how to write your own Homebrew formula if you want to use a particular version of a utility that isn't in the Homebrew repository.

# Who Should Read This

- Developers who use a Mac for development
- Anyone who uses a terminal emulator for doing development/operations
- Anyone who has two computers that they want to keep in sync
- Anyone who is frustrated with doing the same tasks over and over again or frustrated by forgetting what they'd installed previously

# TODO What is Homebrew & Why Do I Need It?

Before learning about Homebrew, it's important to understand what a package manager is and why they're useful.

Package Managers are tools that make it easy to install, upgrade or remove software from an operating system. If you've ever used the Mac/iOS App Store or Google Play store, you can think of those as package managers (they're interfaces that make it easy to do the things you'd use a package manager for).

The real power in a package manager is the ability to make actions that you'd normally do manually programmatic.

Most operating systems (abbreviated as OS) (particularly UNIX/Linux flavored OS) come with their own package manager. A few examples would be `apt` (Debian/Ubuntu) or `zypper` (SUSE). Unfortunately, MacOS (previously OSX) didn't come with a package manager and users had to rely on downloading from the internet or from the App Store to download an application.

This is where Homebrew steps in. Homebrew is a package manager (written in Ruby—this is important for later) that was built specifically for Mac.

# TODO Installing Homebrew

As I mentioned before, Homebrew is written in Ruby, so it depends on your Mac having Ruby installed. Thankfully, Ruby version 2.0 comes installed by default since El Capitan (10.11). Assuming you haven't made any modifications to your Mac, you should be able to find `ruby` in your bin:

```sh
which ruby
```

**Results:**

```sh
/usr/bin/ruby
```

Rather than sharing the script as code here, I'd like to recommend that you [first review the script](https://raw.githubusercontent.com/Homebrew/install/master/install) and then follow the [instructions show on the Homebrew homepage](https://brew.sh/). As a general disclaimer that I often like to use: **Always read any code that an author has suggested you curl and execute.** If you don't know Ruby, that's okay, the script is fairly straightforward for anyone who's written/read code. If you haven't written or read code, this is a great opportunity to learn!

Once you've followed the instructions for installation, in your terminal, you can run:

```sh
which brew
```

**Results:**

```sh
/usr/local/bin/brew
```

Now we're ready to get started by installing a package!

# Install Your First Package

In this section, we'll walk through using Homebrew to install a package by showing:

- how to search for a package
- how to inspect the package's information
- how to install the package
- how to remove the package

As a part of the tutorial, we're going to install `ccat`, a colorized version of the `cat` utility. Feel free to choose your own adventure and install something else if you `ccat` is already on your machine or if you're not interested in having it on your machine.

## Search for a Package

Searching for a package is a pretty straightforward process. In your terminal, run the following command:

```sh :exports results :results value sh
brew search ccat
```

**Results:**

```sh
==> Formulae
ccat
```

In this trivial example, you can see that there is a line that says `==> Formulae` followed by a line that says `ccat`. Based on this, we know that there is a `ccat` Formulae in Homebrew, but we don't know much about it. Let's inspect the information about `ccat` to make sure it's the package we want.

## Find out information for a Package

Getting info for a package is as straightforward as it was to `brew search`! In your terminal, run the following command:

```sh :exports results :results value sh
brew info ccat
```

**Results:**

```sh
ccat: stable 1.1.0 (bottled)
Like cat but displays content with syntax highlighting
https://github.com/jingweno/ccat
Conflicts with:
ccrypt (because both install `ccat` binaries)
/usr/local/Cellar/ccat/1.1.0 (5 files, 3.4MB) \*
Poured from bottle on 2018-10-30 at 09:43:01
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/ccat.rb
==> Dependencies
Build: go
==> Analytics
install: 422 (30 days), 1,370 (90 days), 5,955 (365 days)
install_on_request: 423 (30 days), 1,365 (90 days), 5,935 (365 days)
build_error: 0 (30 days)
```

There's a lot of information here! We can see that `ccat` is at version 1.1.0, a short description of what `ccat` is and a Github link to the `ccat` repository: [https://github.com/jingweno/ccat](https://github.com/jingweno/ccat). We can also see that there's a conflict with a different package and for demonstration purposes, it's not a problem because we're not installing `ccrypt`.

You can also see when it was last updated in the Homebrew core and a link to the Formula for `ccat`. If you view the [Ruby file for this Formula](https://github.com/Homebrew/homebrew-core/blob/459c9aac1f1c154ac5ed066e7fab636739d30f65/Formula/ccat.rb), you can find all kinds of useful information that will help you determine if this is the package you're looking for.

After reviewing the info, this package looks like exactly what we want, so now it's time to actually install it!

# Install your first package from Homebrew

As we've seen, Homebrew commands are straightforward and that carries into installing! From your terminal, run:

```sh :exports results :results value sh
brew install ccat
```

**Results:**

```sh
==> Downloading https://homebrew.bintray.com/bottles/ccat-1.1.0.mojave.bottle.tar.gz
######################################################################## 100.0%
==> Pouring ccat-1.1.0.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/ccat/1.1.0: 5 files, 3.6MB
```

You can see in the results of running `brew install`, that it downloaded the tarball (if you're unfamiliar with `tar`, you can think of a tarball as a file that's just a collection of a bunch of other files that have to be extracted. If you're familiar with `zip`, it's the same general idea) and _Poured_ the tarball. Pouring is just Homebrew speak for doing all the necessary things to make the package you just installed available to you. That's often at least untarring (extracting the files from the tarball) and running some kind of build process (usually `Make`) to provide a built version of the package.

Now that we've seen that Homebrew has poured the Formula, let's check to see if `ccat` is available to us in the terminal by running:

```sh :exports results :results value sh
which ccat
```

**Results:**

```sh
/usr/local/bin/ccat
```

Nice! We can see that `which` shows us the path (which means it exists) and it was installed to `/usr/local/bin` (the default path for Homebrew to install to).

Now, let's check the version of =ccat=

```sh :exports results :results value sh
ccat --version
```

**Results:**

```sh
ccat v1.1.0
```

Based on the output of `brew info` from earlier, we can verify that it installed at the version we expected!

## Uninstall a package

So what happens if you decide you don't really want `ccat` on your Mac? It's as easy to uninstall as it is to install. From your terminal, run:

```sh :exports results :results value sh
brew uninstall ccat
```

**Results:**

```sh
Uninstalling /usr/local/Cellar/ccat/1.1.0... (5 files, 3.4MB)
```

Now if we run `which`:

```sh
which ccat
```

**Results:**

```sh
ccat not found
```

(Note that if you've installed `ccat` in some other way previously, you'll get a path, but it should be different from `usr/local/bin`).

# Install Your First Cask

Now that you know how to install utilities, languages and other executables, let's see how to install Apps that are available as downloads outside of the Mac App Store.

To do this, we're going to use Firefox (if you already have Firefox installed, you can install Opera or Chrome with the same commands) as an example.

In this section, we'll walk through using Homebrew to install an application by demonstrating:

- How to search for an application
- How to inspect an Application's information
- How to install an application
- How to uninstall an application

## Search for Package

Searching for Apps is the same as searching for anything else with `brew`, you can test it out by running the following command in your temrinal:

```sh :exports results :results value sh
brew search firefox
```

**Results:**

```sh
==> Casks
firefox
multifirefox
homebrew/cask-versions/firefox-beta
homebrew/cask-versions/firefox-developer-edition
homebrew/cask-versions/firefox-esr
homebrew/cask-versions/firefox-nightly
```

This returns a couple of results. We're going to checkout the first `firefox` result and make sure it's the one we want to install.

## Inspect a Cask

This is where we'll start to deviate a little bit from using `brew <command>`, because apps are managed with a subcommand called `cask`. To inspect a cask in the same way we inspected `ccat` earlier, run the following in your terminal:

```sh
brew cask info firefox
```

**Results:**

```sh
firefox: 64.0 (auto_updates)
https://www.mozilla.org/firefox/
/usr/local/Caskroom/firefox/63.0.1 (64B)
From: https://github.com/Homebrew/homebrew-cask/blob/master/Casks/firefox.rb
==> Name
Mozilla Firefox
==> Languages
cs, de, en-GB, en, eo, es-AR, es-CL, es-ES, fi, fr, gl, in, it, ja, ko,nl, pl, pt-BR, pt, ru, tr, uk, zh-TW, zh
==> Artifacts
Firefox.app (App)
```

Just like before, you can see that thne command returns the application name (firefox), the version, a link to the project and a link to the cask (rather than the formula) so you can see more about the internals. It also has some extra info like the languages it's available in and the artifact it will install. The artifact will be placed in your Applications folder so that you can access it the way you'd access it if you were to download and install it straight from the internet.

## Install Firefox as a Homebrew Cask

Now that we know this is the right package, we're going to install firefox. As I mentioned earlier, installing apps is still straight forward, but rather than running `brew install <package>` we're going to run `brew cask install <package>`. Let's run this command from your terminal:

```sh :exports results :results value sh
brew cask install firefox
```

**Results:**

```sh
==> Satisfying dependencies
==> Downloading https://download-installer.cdn.mozilla.net/pub/firefox/releases/64.0/mac/en-US/Firefox%2064.0.dmg
==> Verifying SHA-256 checksum for Cask 'firefox'.
==> Installing Cask firefox
==> Moving App 'Firefox.app' to '/Applications/Firefox.app'.
🍺 firefox was successfully installed!
```

You can see that it first makes sure that your Mac has all of the dependencies it needs, then it downloads the Firefox disk image (`.dmg`), verifies that the expected dmg checksum (the string and letter equivalent of that file) matches the checksum of the file we've downloaded, installs firefox and moves it to your Applications folder.

Now you can open firefox using your favorite file searcher (Spotlight, AlfredApp, etc) and verify that it installed the same way it would if you installed it straight from the internet!

## TODO Uninstalling Firefox

You may decide you no longer want firefox on your Mac, so let's uninstall firefox (we're going to install it again in the next section, so make sure you uninstall it here!). In your terminal, let's run the following command:

```sh :exports results :results value sh
brew cask uninstall firefox
```

**Results:**

```sh
==> Uninstalling Cask firefox
==> Backing App 'Firefox.app' up to '/usr/local/Caskroom/firefox/64.0/Firefox.app'.
==> Removing App '/Applications/Firefox.app'.
==> Purging files for version 64.0 of Cask firefox
```

You can see that it uninstalls firefox, backs up the app, removes it from Applications and purges any supplementary files that exist for it.

\*\*Great work! We've explored the basics of using `brew` from the command line and with that knowledge, we're going to explore how we can programmatically keep track of our dependencies with a `Brewfile`.

# Declaring Packages Programmatically

So far, if you're thinking to yourself "This is cool, but installing a bunch of dependencies this way is going to take a lot of time, and what happens when I get a new computer?" then you're asking the right questions. If you're not thinking that just yet, learning how to programmatically install packages and make it easy for you to do so on future machines is going to be a treat!

## Let Me Introduce You To Brewfile

One of my favorite parts of using `brew` is making use of a `Brewfile`. So far we've been installing our examples through the command line. That's okay for exploring or if you only rely on 2 apps or executables, but as your dependencies grow (if you're a programmer, then they definitely will), you'll want to be able to keep a manifest of everything you've installed, and better yet, keep your dependencies installed and up to date through that manifest. That's where a `Brewfile` comes in handy.

A `Brewfile` is a manifest of all of the things you want to install on your Mac. `Brewfile` levels up our `brew` skills by giving us the ability to truly manage packages in a declarative, programmatic way.

## Your First Brewfile

Creating a `Brewfile` is as easy as creating a new file in your home directory (`~` if you're in the terminal) and adding a package to install. Let's revisit adding `ccat`! From your favorite editor, open your `Brewfile` and add the following:

```ruby
brew "ccat"
```

### Adding a Cask to Your Brewfile

Now that we have `ccat` added, let's add firefox. To add firefox, add the following to your file:

```ruby
cask "firefox"
```

and from the same directory your `Brewfile` is in, run this in your terminal:

```sh
brew bundle
```

## Running Homebrew with your Brewfile

```sh :exports results :results value sh
brew bundle
```

## TODO Equivalent for a Homebrew Formulae

## TODO Equivalent for a Homebrew Cask

## TODO Advanced Definition w/ Arguments

# TODO Defining Your Own Formulae

# Downsides of Homebrew
