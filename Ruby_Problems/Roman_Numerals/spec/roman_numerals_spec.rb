require_relative '../roman_numerals'

describe 'converting an Arabic number to a Roman numeral' do
  describe 'old Roman numerals' do
    it 'converts 1 to I' do
      expect(convert_to_roman(1)).to eq "I"
    end

    it 'converts 4 to IIII' do
      expect(convert_to_roman(4)).to eq "IIII"
    end

    it 'coverts 5 to V' do
      expect(convert_to_roman(5)). to eq "V"
    end

    it 'coverts 10 to X' do
      expect(convert_to_roman(10)). to eq "X"
    end

    it 'coverts 50 to L' do
      expect(convert_to_roman(50)). to eq "L"
    end

    it 'coverts 100 to C' do
      expect(convert_to_roman(100)). to eq "C"
    end

    it 'coverts 500 to D' do
      expect(convert_to_roman(500)). to eq "D"
    end

  end

  describe 'modern Roman numerals' do
    it 'coverts 4 to IV' do
      expect(convert_to_roman(4, {modern: true})). to eq "IV"
    end

    it 'converts 9 to IX' do
      expect(convert_to_roman(9, {modern: true})). to eq "IX"
    end

    it 'coverts 14 to XIV' do
      expect(convert_to_roman(14, {modern: true})). to eq "XIV"
    end

    it 'coverts 44 to IV' do
      expect(convert_to_roman(44, {modern: true})). to eq "XLIV"
    end

    it 'coverts 99 to IV' do
      expect(convert_to_roman(99, {modern: true})). to eq "XCIX"
    end

  end
end
