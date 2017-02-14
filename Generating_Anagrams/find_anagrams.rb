
def find_anagrams(word,list)
  new_list = []
  list.map do |i|
    if anagram_cannon(i) == anagram_cannon(word)
      new_list << i
    end
  end
  new_list
end

def anagram_cannon(word)
  word.split("").sort.join.downcase
end
