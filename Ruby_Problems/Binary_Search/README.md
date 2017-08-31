
# Binary Search

If we were going to guess a number randomly chosen from between one and 100, how would we approach it?  We're given no clues about our guesses other than being right or wrong.  We could use a linear search and guess one, and then guess two, and then guess three, and so on.  Or, maybe we could randomly guess each number.  Either way, with each incorrect guess we only eliminate one possibility.

What if we were told whether an incorrect guess was too high or too low?  How would our guessing strategy change?  Could we control the maximum number of guesses it would take to guess correctly?

If we can be told whether or not each guess is too high or too low, we can strategically guess to eliminate the largest number of possibilities.  Given a range of possibilities from one to 100, we might start guessing at 50.  If our guess is incorrect, we'll at least have eliminated half of the possibilities in one guess.  With our next guess we can eliminate half of the remaining possibilities, and we'll continue in this way until we have but one possibility remaining.  This technique is known colloquially as the binary chop. It is a well-known technique for searching through a collection, and we're going to build it in Ruby. Such "divide-and-conquer" algorithms are classic use cases for recursion.
