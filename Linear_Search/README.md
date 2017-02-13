# Algorithm Drill: Linear Search

## Summary
```ruby
array = [:A, :B, :A]
# => [:A, :B, :A]
array.index(:A)
# => 0
array.index(:B)
# => 1
array.index(:C)
# => nil
```
*Figure 1*.  Finding the index of an element in an array.

We're going to write a method that mimics the behavior of Ruby's [`Array#index`][rubydocs Array#index] method.  This method returns the index of a particular element in an array ... or `nil` if the element is not found in the array.  If the element is found more than once in the array, the index of the first occurrence is returned.  (see Figure 1)

Ruby abstracts many of the lower-level functions of programming by providing us with methods like `Array#index`.  We don't need to know *how* the index of an element is found, we need to know *what* that index means and how to employ it in our programs.

In general, the fact that Ruby provides these abstractions is a good thing.  However, we do want to have familiarity with how to implement some common behaviors.  We've completed other challenges where we've implemented the behaviors we see in Ruby (e.g., the [enumerable methods][implement-enumerable-challenge]).  In this challenge, we'll implement a search behavior ourselves, and we'll use a specific search algorithm:  linear search.


### Linear Search
We've seen in previous challenges that there are different ways to implement the same behavior, and there are many different ways to search through collections of data. Understanding the various algorithms and patterns for searching and sorting data sets is an essential part of computer science.

One of the most basic search algorithms is the [linear search][wikipedia linear search].  This is a *brute force* algorithm where we simply check each element one-at-a-time until we find the element we're looking for or run through all of the elements without finding a match.
