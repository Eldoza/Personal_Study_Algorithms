# Takes as its input an integer +n+ representing the starting number of bottles.
# Returns the lyrics to "n Bottles of Beer".

# def bottle_song_lyrics(n)
#   while n > 0
#     beers = n
#     n.times do
#       puts "#{n} bottles of beer on the wall, #{n} bottles of beer. Take one down, pass it around, #{n-1} bottles of beer on the wall!"
#       n-=1
#     if n == 2
#       puts "2 bottles of beer on the wall, 2 bottles of beer.Take one down, pass it around, 1 bottle of beer on the wall!"
#       puts "1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall!"
#       exit
#     end

#     end
#   end
# end

# p bottle_song_lyrics(15)

# def bottle_song_lyrics(n)
#   while n > 2
#     puts "#{n} bottles of beer on the wall, #{n} bottles of beer.\nTake one down, pass it around, #{n-1} bottles of beer on the wall!\n\n"
#     n -= 1
#   end
#   puts "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down, pass it around, 1 bottle of beer on the wall!\n\n"
#   puts "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down, pass it around, no more bottles of beer on the wall!"
# end

# bottle_song_lyrics(99)

def bottle_song_lyrics_recursive(n)
  if n == 2
  return "2 bottles of beer on the wall, 2 bottles of beer.Take one down, pass it around, 1 bottle of beer on the wall!\n1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall!"
  end

  puts "#{n} bottles of beer on the wall, #{n} bottles of beer.\nTake one down, pass it around, #{n - 1} bottles of beer on the wall!\n\n"

  bottle_song_lyrics_recursive(n - 1)

end

p bottle_song_lyrics_recursive(15)
