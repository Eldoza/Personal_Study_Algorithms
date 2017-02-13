def binary_search_include(object, array)
  mid_line = array.length / 2
  if object == array[mid_line]
    return true
  elsif object == 1
    return true
  elsif array.length <= 1
    return false
  elsif array[mid_line] > object
    binary_search_include(object,array[0..mid_line])
  elsif array[mid_line] < object
    binary_search_include(object,array[mid_line..-1])
  end
end

def binary_search(object, array)
  indices = []

  mid_line = array.length / 2
  if object == array[mid_line]
    indices << mid_line
    return indices[0]
  elsif object == 1
    return 1
  elsif array.length <= 1
    return nil
  elsif array[mid_line] > object
    binary_search(object,array[0..mid_line])
  elsif array[mid_line] < object
    binary_search(object,array[mid_line..-1])
  end
end
