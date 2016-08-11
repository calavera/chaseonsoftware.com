---
title: "What Is Truth: An Into to Truthiness in Golang"
description: Coming to Golang from a language like Javascript comes with a lot of baggage. In this article, I'll demystify truth in Golang.
date: 2016-08-13T06:29:25Z
slug: what-is-truth-in-go
draft: true
---

When I transitioned from writing Javascript into writing Golang, I quickly realized that there was a big difference in what it means for something to be truthy.

If you're unfamiliar with the term truthy, it simply means that a value of a type that's not a boolean value (for instance, a string or a number or null) can be evaluated to having a boolean context. A fairly common example of that in javascript is to evaluate a string's truthiness before doing something with it:

```
var foo = "";

if (foo) { // "" evaluates to false, since it is empty
  console.log("the fu is strong with you");
}

foo = "foo";

if (foo) { // "foo" is true since it contains a string of length > 0
  console.log("how in the world can a string be true?!");
}
```

Anothoer example is to check the value of an int:

```
var isGreaterThanZero = 0;

if (isGreaterThanZero) { // 0 evaluates to false, because 0 is "empty"
  console.log("it's greater than zero.");
}

isGreaterThanZero = 1;
if (isGreaterThanZero) { // any int that's _not_ zero evalutes to true
  console.log("it's greater than zero.");
}
```

When you've written javascript for a long time, this type of boolean evaluation not only feels normal, it also feels weird when a string _doesn't_ evaluate to a boolean.

## What is Truth in Golang 

In Golang, there's only one type that has truthiness: booleans.

It makes sense right? That whole "if it quacks like a duck" analogy makes it a lot easier to know what your value is, but it also means that if you come from a language where you relied on type coercion, you need to have a major paradigm shift in how you check the truthiness of a non-boolean value.

### Strings

As far as I've seen, there are two idiomatic ways in golang to test if a string is true:

- test if a string has a length greather than 0
- test if a string is not equal to an empty string ("")

```
package main

import "fmt"

func main() {
    s := "hello"
    if len(s) > 0 {
      fmt.Println("this string is not nil")
    }

    if s != "" {
        fmt.Println("this string is not empty")
    }
}
```

Alternatively, for numbers, it's as simple as checking if the value is greater than 0:

```
package main

import "fmt"

func main() {
    n := 1
    if n > 0 {
      fmt.Println("this number is greater than 0")
    }
}

```

This was a big mental shift for me, since javascript took care of coercion for me, but once I was able to make it, I realized that relying on coercion made my code more likely to have bugs.

The big takeaway here is that **Golang does not have automatic type coercion for vlues that aren't of type `bool`** and have to be checked against an empty value for the type you're using. 


