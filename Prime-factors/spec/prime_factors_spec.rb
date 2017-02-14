
require_relative '../prime_factors'

describe 'prime_factors' do

  it 'returns false if the number is not prime' do
    expect(is_prime?(9)).to eq false
  end

  it 'returns an array of factors' do
    expect(find_factors(50)).to eq([50, 25, 10, 5, 2])
  end

  it 'returns the prime factors of a number' do
    expect(prime_factors(50)).to eq([5,2])
  end

end
