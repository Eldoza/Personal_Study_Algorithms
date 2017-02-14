def prime_factors(number)
  prime_factors=[]
  find_factors(number).each do |number|
    if is_prime?(number)
      prime_factors << number
    end
  end
  prime_factors
end

def find_factors(number)
  factors=[]
  i = number
  while i > 1 do
    if (number % i) == 0
      factors << i
    end
    i-=1
  end
  factors
end


def is_prime?(number)
  find_factors(number).length == 1
end
