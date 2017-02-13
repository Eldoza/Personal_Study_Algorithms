def anagram?(word_1,word_2)
  # rword1 = word_1.split("").sort
  # rword2 = word_2.split("").sort
  # if rword1.join.downcase == rword2.join.downcase
  if anagram_cannon(word_1) == anagram_cannon(word_2)
    return true
  else
    return false
  end
end

def anagram_cannon(word)
  word.split("").sort.join.downcase
end
