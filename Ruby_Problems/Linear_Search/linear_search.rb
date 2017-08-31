def linear_search(object,array)
  counter = 0
  until counter == array.length
    if array[counter] == object
      return counter
    end
    counter += 1
  end
  nil
end

def global_linear_search(object,array)
  indices = []
  counter = 0
  while counter < array.length
    if array[counter] == object
      indices << counter
    end
    counter += 1
  end
  return indices
end
