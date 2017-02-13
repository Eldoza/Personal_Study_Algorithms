def convert_to_roman(arabic_number, options = {})
  modern = { 1000 => "M",
             900 => "CM",
             500 => "D",
             400 => "CD",
             100 => "C",
             90 => "XC",
             50 => "L",
             40 => "XL",
             10 => "X",
             9 => "IX",
             5 => "V",
             4 => "IV",
             1 => "I"
            }

  old = { 1000 => "M",
          500 => "D",
          100 => "C",
          50 => "L",
          10 => "X",
          5 => "V",
          1 => "I"
          }

   if options[:modern] == true
     roman_system = modern
   else
     roman_system = old
   end

   roman_number = ""
   roman_system.each do |number, letters|
     if arabic_number > 0
      while arabic_number - number >= 0
        roman_number << letters
        arabic_number -= number
      end
     end
    end
    roman_number
end
