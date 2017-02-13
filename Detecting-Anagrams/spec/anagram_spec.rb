require_relative '../anagrams'

describe 'anagrams?' do
  let(:words) { ['melon','lemon','MELON','abcde2','c2abed', 'kilso','osilk']}

    it 'Returns true when anagram is found' do
      expect(anagram?(words[0],words[1])).to eq true
    end

    it 'Returns true when anagram is found' do
      expect(anagram?(words[0],words[2])).to eq true
    end

    it 'Returns false when anagram is found' do
      expect(anagram?(words[0],words[3])).to eq false
    end

    it 'Returns true when anagram is found' do
      expect(anagram?(words[3],words[4])).to eq true
    end

      it 'Returns false when anagram is found' do
      expect(anagram?(words[0],words[6])).to eq false
    end
  end
