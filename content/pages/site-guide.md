---
title: "Site Guide"
description: "Learn about the site topology for chaseadams.io and how the content is structured."
slug: "/site-guide"
date: "2018-07-01"
aliases: [
    "/site-architecture"
]
---

Thir page exists as a best effort to be more transparent about the (very simple) topology of my website. It should act as both a reference for me when I'm unsure what I've done to setup the flows that it documents as well as to provide others with an opportunity to "see how the sausage is made".

If you find anything here that's unclear and would like to learn more about how to set up a similar flow, feel free to [say Hi](/contact) and we can try to set up some time to talk through it for your website.

# Site Toplogy

![](/img/chaseadams.io-topology@2x.png)

There are 3 parts that makeup the workflow of [chaseadams.io](https://www.chaseadams.io):

- The Development Workflow
- CI/CD Deployment
- Ingress Traffic Flow

## The Development Workflow

[chaseadams.io](https://www.chaseadams.io) is built and rendered with the v2.0.0 of [GatsbyJS](https://www.gatsbyjs.org/)—a [JAM Stack](https://jamstack.org/) generator.

## CI/CD Deployment

The source code for [chaseadams.io](https://www.chaseadams.io) is hosted on [GitLab.com](https://gitlab.com) at [gitlab.com/chaseadamsio/chaseadamsio.gitlab.io](https://gitlab.com/chaseadamsio/chaseadamsio.gitlab.io).

It is built and deployed with [Netlify](https://www.netlify.com/about/)—an awesome platform for automating deployment of JAM stack applications.

A few notes about how CI/CD Deployment is configured:

- Production ([https://www.chaseadams.io](https://www.chaseadams.io)) is deployed from the [master branch of chaseadams.io.gitlab](https://gitlab.com/chaseadamsio/chaseadamsio.gitlab.io/tree/master) in [GitLab](https://gitlab.com/chaseadamsio/chaseadamsio.gitlab.io).
- There are two integrations configured within Netlify: [Slack](https://www.netlify.com/blog/2016/07/18/shiny-slack-notifications-from-netlify/) and [GitLab commit](https://www.netlify.com/blog/2016/07/13/gitlab-integration-for-netlify/) hooks. These integrations are helpful for preview environments.

## Ingress Traffic Flow

The [chaseadams.io](https://www.chaseadams.io) domain is registered with [Namecheap.com](https://www.namecheap.com), but uses the custom DNS override so that there is no DNS configuration setup in Namecheap.

A few notes on how the ingress traffic flow is configured:

- DNS is configured within [Netlify](https://www.netlify.com/about/), using their [Managed DNS](https://www.netlify.com/docs/dns/) service.
- All traffic is configured to force HTTP to HTTPS and the SSL/TLS certificate is automatically [generated with Let's Encrypt through Netlify](https://www.netlify.com/docs/ssl/). 
- The [apex domain](https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/) ([https://chaseadams.io](https://chaseadams.io)) is configured to automatically redirect all traffic to the www (([https://www.chaseadams.io](https://www.chaseadams.io)) subdomain.

# Content Structure

Content metadata is intended to allow visitors to find content more easily based on what they're interested in reading.

## Page Type 

**Page Type** is the top-level type for content. Content is either of type **pages** or **articles** and is determined by the content's parent directory.

## Category

**Category** is metadata (frontmatter [string] `category`) that only applies to content with **Page Type** of **articles**. There are 4 types of **Category**:

- A **Tutorial**—long-form content that's intended to teach the reader about a technology or how to use a technology.
- A **Snippet**—short-form content that is meant to teach the reader a specific piece of a technology. These will almost always require the reader to have some pre-existing knowledge about the technology the snippet is written about.
- A **Thought**—short or long-form content written to inform, challenge or educate about something that doesn't involve learning a technology. This type of content will mostly be about team/organizational dynamics, personal resiliency and self-management.
- A **Project**-something I'm working on personally, either at work or in my free-time, that may (and likely will) use/relate to a technology I write about.

## Topic

**Topic** is metadata (frontmatter [string] `topic`) referring to the specific technology within a **Category**. A Tutorial about SSH would have a topic of _"SSH"_. 

## Tags

**Tags** is metadata (frontmatter [array[string]] `tags`)—a list of words meant to give readers better context into the content of an article before reading. An example of **Tags** for an article about JavaScript array methods would be _"JavaScript Fundamentals"_, _"Arrays"_.
