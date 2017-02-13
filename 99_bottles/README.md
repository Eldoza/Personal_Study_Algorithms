# 99 Bottles of Beer Song

## Summary
```text
99 bottles of beer on the wall, 99 bottles of beer.
Take one down, pass it around, 98 bottles of beer on the wall!

98 bottles of beer on the wall, 98 bottles of beer.
Take one down, pass it around, 97 bottles of beer on the wall!

97 bottles of beer on the wall, 97 bottles of beer.
Take one down, pass it around, 96 bottles of beer on the wall!

... and so on...

2 bottles of beer on the wall, 2 bottles of beer.
Take one down, pass it around, 1 bottle of beer on the wall!

1 bottle of beer on the wall, 1 bottle of beer.
Take one down, pass it around, no more bottles of beer on the wall!
```
*Figure 1*.  Text of the song 99 Bottles of Beer.

Ah, the good old [99 Bottles of Beer](http://en.wikipedia.org/wiki/99_Bottles_of_Beer) song (see Figure 1).  Are we familiar with the song?

We're going to model someone singing this song by writing a method which produces the lyrics for the entire song.  We'll write a method `bottle_song_lyrics`, and in our virtual beer hall, calling `bottle_song_lyrics(99)` represents asking our rowdy neighbor to start singing 99 Bottles of Beer.

The verses of this song are all very similar—at least, until there's only one bottle of beer on the wall.  As we can imagine, this challenge deals with handling repetition.

The solutions here were written iteratively and recursively.
