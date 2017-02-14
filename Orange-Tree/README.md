# Model an Orange Tree

## Summary
Fran the Farmer is interested in building a model of her orange tree farm.  As a proof-of-concept, she's hoping to model one orange tree and its yearly production over its lifetime.  Fran began working on the program herself, but the success of her farm has left her little time for development.  We've been hired to complete the application for her.

In this challenge we'll be designing a custom Ruby class:  `OrangeTree`.  We'll design its interface and all of its behaviors to specifications provided by Fran.  Once the model is complete, we'll create a script that will model a tree's production.


Each of Fran's details should be translated into tests, so that we can verify that our model conforms to each expectation.  In parentheses, Fran has provided the method she intended to match these details.  Our class may very well include more methods than these, but these will form our class's public interface.

- A tree should have an age, which we should be able to check (`#age`).
- A tree should have a height, which we should be able to check (`#height`).
- Each growing season (`#pass_growing_season`) ...
  - Any unharvested oranges from the previous season should drop.
  - A tree should age one year.
  - A tree should grow 2.5 feet taller until it reaches its maximum height, say 25 feet.
  - A tree should bear fruit if it is mature (i.e. at least six years old), say 100 to 300 oranges.
- We should be able to check if a tree is old enough to produce fruit (`#mature?`).
- A tree should die at age 100, and we should be able to check if it's dead (`#dead?`).
- We should be able to check if a tree has any oranges (`#has_oranges?`).
- We should be able to pick an orange off a tree (`#pick_an_orange`), or raise an error if we try to pick an orange when the tree has none.
