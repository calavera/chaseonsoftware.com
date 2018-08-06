---
title: "Most Common Programming Case Types"
description: "A list of common case types, along with some language specific protips"
slug: "/most-common-programming-case-types/"
date: "2018-08-06"
tags: ["programming essentials"]
---

When working with computers—specifically while programming—you'll inevitably find yourself naming things ([one of the two hard things in computer science](https://twitter.com/codinghorror/status/506010907021828096?lang=en)).

A major factor of being successful in naming is knowing the type of case you want to use so that you can have a consistent convention per project/workspace. If you're writing software, you'll come across at least one of these in a languages specification for how it's written. Some languages (Go, particularly) rely heavily on you knowing the difference between two of them and using them correctly!

## What You'll Learn

- The most common case types:
    - [Camel case](#camelcase)
    - [Snake case](#snake_case)
    - [Kebab case](#kebab-case)
    - [Pascal case](#pascalcase)
    - [Upper case (with snake case)](#upper_case_snake_case)

- [How to use each case type for the following situations and languages](#which-case-type-should-i-use):
    - [naming files for a computer (my recommended best practice)](#what-convention-should-i-use-when-naming-files)
    - [writing code with Go](#go-conventions)
    - [writing code with JavaScript](#javascript-conventions)
    - [writing code with React](#react-conventions)
    - [writing code with Ruby](#ruby-conventions)
    - [writing code with Python](#python-conventions)

# camelCase

`camelCase` must **(1)** start with a lowercase letter and **(2)** the first letter of every new subsequent word has its first letter capitalized and is compounded with the previous word.

An example of camel case of the variable `camel case var` is `camelCaseVar`.

# snake_case

`snake_case` is as simple as replacing all spaces with a "\_" and lowercasing all the words. It's possible to snake\_case and mix camelCase and PascalCase but imo, that ultimately defeats the purpose. 

An example of snake case of the variable `snake case var` is `snake_case_var`.

# kebab-case

`kebab-case` is as simple as replacing all spaces with a "-" and lowercasing all the words. It's possible to kebab-case and mix camelCase and PascalCase but that ultimately defeats the purpose. 

An example of kebab case of the variable `kebab case var` is `kebab-case-var`.

# PascalCase

`PascalCase` has every word starts with an uppercase letter (unlike camelCase in that the first word starts with a lowercase letter). 

An example of pascal case of the variable `pascal case var` is `PascalCaseVar`.

**Note: It's common to see this confused for camel case, but it's a separate case type altogether.**

# UPPER\_CASE\_SNAKE\_CASE

`UPPER_CASE_SNAKE_CASE` is replacing all the spaces with a "\_" and converting all the letters to capitals.

an example of upper case snake case of the variable `upper case snake case var` is `UPPER_CASE_SNAKE_CASE_VAR`.

# Which case type should I use?

Now that you know the various case types, let's tackle an example of my recommended best practice for filenames and when to use each case for Go, JavaScript, Python & Ruby.

## What convention should I use when naming files?

**Recommendation: always snake case**

When naming files, it's important to ask "what's the lowest common denominator?" If you're not opinionated, I've found I've had the most success with snake case because it's the least likely to create a problem across filesystems and keeps filenames readable for "my\_awesome\_file".

If you're a Mac user or work with Mac users, it's a good practice to always use lowercase. Mac's have an HFS+ filesystem and since HFS+ is not case sensitive, it can read "MyFile" or "myfile" as "myfile". 

My predominant argument for this stems from a particularly insidious "bug" I saw when I was running a CI/CD (continuous integration/continuous delivery) cluster. A CI job failed with "file not found: mycomponent.js" during a build for a React project. The developer swore the file was in the project's source, and as I dug through it, I noticed they had an import for "mycomponenet.js" but the file was named "MyComponent.js" (for a React project, where PascalCase is the convention for naming component files). Due to the way HFS+ handles file casing, it happily accepted that "MyComponent.js" was "mycomponent.js" at the time the developer (using a Mac) was writing the code, but ath the time the Unix based CI server was building it, it would fail because it expected exact casing to find the file.

## Go Conventions

Go is the language where it's most critical to pay attention to case type conventions. The language decides whether a variable, field or method should be available to a package caller by if the name starts with a capital or lowercase letter.

- **Pascal case** is _required_ for exporting fields and methods in Go
- **Camel case** is _required_ for internal fields and methods in Go

```go
package casetypes

type ExportedStruct {
    unexportedField string
}
```

In the above example, `ExportedStruct` is available to package callers for `casetypes` and `unexportedField` is only available to methods on `ExportedStruct`.

## Javascript Conventions

- **Camel case** for variables and methods.
- **Pascal case** for types and classes in JavaScript.
- **Upper case snake case** for constants.

### React Conventions

I write enough React and it's unique enougn that it's worth calling out conventions here as a subsection:

- **Pascal case** is used for component names and file names in React.

## Ruby Conventions

- **Pascal case** is used for classes and modules in Ruby.
- **Snake case** for symbols, methods and variables.
- **Upper case snake case** for constants.

## Python Conventions

- **Snake case** for [method names and instance variables](https://www.python.org/dev/peps/pep-0008/#method-names-and-instance-variables) (PEP8).
- **Upper case snake case** for constants.

## Other Conventions

- kebab case in **Lisp**.
- kebab case in **HTTP URLs** (`most-common-programming-case-types/`).
- snake case in **JSON** property keys.

# Quick Comparison Table

| Case Type | Example | 
|---|---|
| Original Variable as String | `some awesome var` |
| Camel Case | `someAwesomeVar` | 
| Snake Case | `some_awesome_var` | 
| Kebab Case | `some-awesome-var` |
| Pascal Case | `SomeAwesomeVar` |
| Upper Case Snake Case | `SOME_AWESOME_VAR` |

Now that you've been introduced to the most common case types, you're prepared to hop into most of the popular languages and know what conventions to keep when you're writing your own code!