def iterative_nth_fibonacci_number(n)
  first = -1
  last = 1
  index = 0

  while index <= n
    sum = last + first
    first = last
    last = sum
    index += 1
  end
    sum
end

def recursive_nth_fibonacci_number(n)
  if n == 0 || n == 1
    return n
  else
    recursive_nth_fibonacci_number(n-1) + recursive_nth_fibonacci_number(n-2)
  end
end
