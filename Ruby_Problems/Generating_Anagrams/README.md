# Anagrams 2: Finding Anagrams

## Summary
This challenge builds upon a [previous challenge][anagrams-1-detecting-anagrams-challenge] dealing with identifying [anagrams][wikipedia anagrams]—it's assumed that we've completed this previous challenge.

```ruby
list = ['melon', 'lemon', 'apple']
# => ['melon', 'lemon', 'apple']
find_anagrams('melon', list)
# => ['melon', 'lemon']
```
*Figure 1*. Finding anagrams of melon in a list of words.

In this challenge we're going to write a `find_anagrams` method that takes two arguments: a target word and a list of words.  The method returns all the anagrams for the target word that can be found in the list. (see Figure 1)
