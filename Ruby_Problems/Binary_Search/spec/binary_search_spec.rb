require_relative '../binary_search'

describe 'binary_search_include' do
  let(:numbers) { [1, 2, 3,4,5,6,7,8,9] }

  context 'when the array contains the searched-for element' do
    it 'returns true' do
      index_of_a = binary_search_include(1, numbers)
      expect(index_of_a).to eq true
    end
  end
    context 'when the array does not contain the searched-for element' do
    it 'returns false' do
      index_of_a = binary_search_include(11, numbers)
      expect(index_of_a).to eq false
    end
  end
end

describe 'binary_search' do
  let(:symbols) { [:A,:B,:C,:D,:E,:F,:G] }
    context 'when the array contains the searched-for element' do
    it 'returns the index of where the element is ' do
      index_of_a = binary_search(:D, symbols)
      expect(index_of_a).to eq 3
    end
  end
    context 'when the array does not contain the searched-for element' do
    it 'returns nil if a element is not within the searched element' do
      index_of_a = binary_search(:Z, symbols)
      expect(index_of_a).to eq nil
    end
  end
end
