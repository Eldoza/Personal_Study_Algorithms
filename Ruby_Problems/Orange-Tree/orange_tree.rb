class OrangeTree
  attr_reader :age,:height,:current_oranges
  def initialize(age = 0, height = 0)
    @age = 0
    @height = 0
    @current_oranges = []
  end

  class NoOrangesError < StandardError
  end

  def pass_growing_season
    @current_oranges = []
    @age += 1 unless age >= 100
    @height += 2.5 unless height >= 25
    has_fruit?
  end

  def has_fruit?
    if mature?
      rand(100..300).times {@current_oranges << Orange.new}
    end
  end

  # Returns true if the tree is old enough to bear fruit (6), false otherwise
  def mature?
    if self.age >= 6
      return true
    else
      return false
    end
  end

  def dead?
    age == 100
  end
  # Returns +true+ if there are any oranges on the tree, +false+ otherwise
  def has_oranges?
    if @current_oranges.length > 0
      return true
    else
      return false
    end
  end

  def pick_an_orange
    raise NoOrangesError, "This tree has no oranges" unless self.has_oranges?
  end
end
