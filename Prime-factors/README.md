# Algorithm Drill: Prime Factors

## Summary
Around 300 BC, the Greek mathematician [Euclid][wikipedia euclid] proved that every integer greater than one is either (1) a prime number, or (2) the product of multiplying prime numbers.  In this challenge, we're going to write a method that will return the prime factors of a given number.

### Math Concepts
In order to complete this challenge, we'll need to be familiar with a few math concepts which are described below.

**Prime Numbers**  
If we're going to identify a number's prime factors, we'll need to determine whether or not a number is [prime][wikipedia prime numbers].  The following points describe prime numbers.

- The number is greater than one (e.g., one is not prime).
- The number is evenly divisible no numbers other than one and itself.

Following these rules, we can say that two is prime: two is greater than one, and it is only evenly divisible by one and itself.  Three is also prime.  Four is not prime because it is evenly divisible by two.  What about five, six, and seven?

**Factors**  
We'll also want to be clear on what factors are.  A number is a factor of another number, if that other number is evenly divisible by the number.  To illustrate, two is a factor of four because four is evenly divisible by two.  One and four are also factors of four.  One, two, three, and six are all factors of six because six is evenly divisible by each of them.

**Prime Factorization**
```
4  = 2 * 2
6  = 2 * 3
8  = 2 * 2 * 2
9  = 3 * 3
10 = 2 * 5
12 = 2 * 2 * 3

...

873        = 3 * 3 * 97
12056      = 2 * 2 * 2 * 11 * 137
123123123  = 3 * 3 * 41 * 333667
```
*Figure 1*.  Prime factorization examples.

When we say that our method will return the prime factors of a number, what do we mean?  We need to find the set of prime numbers that multiply together to equal the original number.  The process of breaking a number down to a set of prime factors is known as [prime factorization][wikipedia integer factorization].  To illustrate, it would be like seeing the number four as the product of two times two.  Or, seeing twelve as the product of two times two times three.  (see Figure 1)
