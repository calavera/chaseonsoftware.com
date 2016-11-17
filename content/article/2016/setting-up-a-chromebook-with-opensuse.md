---
title: Setting up a Chromebook on OpenSUSE Leap w/ GNOME and i3
description: 
date: 2016-11-17T06:29:25Z
slug: setting-up-a-chromebook-with-opensuse
---

I bought a Chromebook almost a year ago and I use it as my primary personal computer for writing software, blogging and anything else that I do that involves the internet. I didn't want to use ChromeOS, so I was intentional about buying a chromebook that I knew I could hack to run a standard flavor of Linux. After some research, I landed on the Acer C720. I upgraded the SSD to a 100GB hard drive, followed some instructions to flash the BiOS so that it's running GRUB 2 and now I have installed multiple Operating Systems over the course of the year and started from scratch every time.

**I've landed on OpenSUSE as my Operating System of choice.** Once I've installed OpenSUSE, there were a number of steps I needed to take to get my machine where I wanted it. Many of the steps have been added to a bootstrap script in my dotfiles and other steps that have to be done imperatively will be documented here.

## Enabling Right/Secondary Click Context (GNOME)

**Problem:** I was unable to use right click in Gnome on my Chromebook, this is how I fixed it.

I recently installed OpenSUSE Tumbleweed (after uninstalling OpenSUSE Leap 42) and decided to go back to OpenSUSE Leap 42. When I initially install the Operating System, I use GNOME and get i3 window manager up and running and use that as my primary environment. 

In order to do some things (like copy a link in the browser), I needed a right/secondary click context but my entire trackpad was found as the "primary" click.

### Solution to How I Enabled Secondary Click On My Trackpad

I opened "Tweak Tool", selected "Keyboard and Mouse" and set the Touchpad Click Method to "Area". This enabled secondary click and now I'm on my way! 
